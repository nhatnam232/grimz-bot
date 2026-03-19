const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType } = require('discord.js');
const { COLORS: C } = require('../config');
const { t } = require('../utils/i18n');
const { createLangButtons } = require('../utils/buttons');
const supabase = require('../utils/supabase');
const logger = require('../utils/logger');

/*
  Supabase table SQL (run once in Supabase dashboard):

  CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    username TEXT,
    channel_id TEXT,
    status TEXT DEFAULT 'open',
    created_at TIMESTAMPTZ DEFAULT now(),
    closed_at TIMESTAMPTZ
  );
*/

module.exports = {
  data: new SlashCommandBuilder().setName('ticket').setDescription('Tạo ticket hỗ trợ'),

  async execute(interaction) {
    const l = t('ticket', 'vi');
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('create_ticket').setLabel(l.createBtn).setStyle(ButtonStyle.Primary)
    );
    await interaction.reply({
      embeds: [new EmbedBuilder()
        .setTitle(l.title)
        .setColor(C.purple)
        .setDescription(l.description)
        .addFields(l.usedFor)
      ],
      components: [row, createLangButtons('ticket')],
    });
  },

  async handleCreate(interaction) {
    const guild = interaction.guild;
    const user = interaction.user;
    const l = t('ticket', 'vi');
    const existing = guild.channels.cache.find(c => c.name === `ticket-${user.id}`);
    if (existing) {
      await interaction.reply({ content: l.alreadyHas(existing.id), ephemeral: true });
      return;
    }

    const channel = await guild.channels.create({
      name: `ticket-${user.id}`,
      type: ChannelType.GuildText,
      permissionOverwrites: [
        { id: guild.roles.everyone, deny: ['ViewChannel'] },
        { id: user.id, allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory'] },
      ],
    });

    try {
      await supabase.insert('tickets', {
        user_id: user.id,
        username: user.username,
        channel_id: channel.id,
        status: 'open',
      });
      logger.info(`Ticket created: user=${user.username} channel=${channel.id}`);
    } catch (e) {
      logger.error('Failed to save ticket to Supabase:', e.message);
    }

    const closeRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('close_ticket').setLabel(l.closeBtn).setStyle(ButtonStyle.Danger)
    );
    await channel.send({
      content: `<@${user.id}>`,
      embeds: [new EmbedBuilder()
        .setTitle(l.supportTitle)
        .setColor(C.purple)
        .setDescription(l.supportDesc(user.username))
        .addFields({ name: 'Ticket ID', value: `#${channel.id.slice(-6)}`, inline: true })
        .setTimestamp()
      ],
      components: [closeRow],
    });
    await interaction.reply({ content: l.created(channel.id), ephemeral: true });
  },

  async handleClose(interaction) {
    const channel = interaction.channel;
    const l = t('ticket', 'vi');

    try {
      await supabase.update('tickets', `channel_id=eq.${channel.id}`, {
        status: 'closed',
        closed_at: new Date().toISOString(),
      });
      logger.info(`Ticket closed: channel=${channel.id}`);
    } catch (e) {
      logger.error('Failed to update ticket in Supabase:', e.message);
    }

    await interaction.reply({ content: l.closing });
    setTimeout(() => channel.delete().catch(console.error), 5000);
  },
};
