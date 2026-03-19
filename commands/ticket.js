const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType } = require('discord.js');
const { COLORS: C } = require('../config');
const { t } = require('../utils/i18n');
const { createLangButtons } = require('../utils/buttons');
const supabase = require('../utils/supabase');
const logger = require('../utils/logger');
const { loadSettings } = require('../utils/ticket-settings');

/*
  Supabase tables SQL:

  CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    username TEXT,
    channel_id TEXT,
    status TEXT DEFAULT 'open',
    claimed_by TEXT,
    transcript TEXT,
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
    const settings = loadSettings();

    // Check existing ticket by username pattern
    const existing = guild.channels.cache.find(c => c.name === `ticket-${user.username.toLowerCase()}`);
    if (existing) {
      await interaction.reply({ content: l.alreadyHas(existing.id), ephemeral: true });
      return;
    }

    // Determine parent category
    const parentId = settings.ticketCategoryId || null;

    // Build permission overwrites
    const permissionOverwrites = [
      { id: guild.roles.everyone, deny: ['ViewChannel'] },
      { id: user.id, allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory'] },
    ];
    // Add staff roles
    if (settings.staffRoles?.length) {
      for (const roleId of settings.staffRoles) {
        permissionOverwrites.push({ id: roleId, allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory'] });
      }
    }

    const channelOptions = {
      name: `ticket-${user.username.toLowerCase()}`,
      type: ChannelType.GuildText,
      permissionOverwrites,
    };
    if (parentId) channelOptions.parent = parentId;

    const channel = await guild.channels.create(channelOptions);

    // Save to Supabase
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

    // Build staff pings
    const staffPings = settings.staffRoles?.length
      ? settings.staffRoles.map(r => `<@&${r}>`).join(' ')
      : '';

    const actionRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('close_ticket').setLabel(l.closeBtn).setStyle(ButtonStyle.Danger),
      new ButtonBuilder().setCustomId('claim_ticket').setLabel(l.claimBtn).setStyle(ButtonStyle.Secondary),
    );

    await channel.send({
      content: `<@${user.id}> ${staffPings}`,
      embeds: [new EmbedBuilder()
        .setTitle(l.supportTitle)
        .setColor(C.purple)
        .setDescription(l.supportDesc(user.username))
        .addFields(
          { name: 'Ticket ID', value: `#${channel.id.slice(-6)}`, inline: true },
          { name: 'User', value: `<@${user.id}>`, inline: true },
          { name: 'Created', value: `<t:${Math.floor(Date.now() / 1000)}:F>`, inline: true },
        )
        .setTimestamp()
      ],
      components: [actionRow],
    });
    await interaction.reply({ content: l.created(channel.id), ephemeral: true });
  },

  async handleClaim(interaction) {
    const channel = interaction.channel;
    const staff = interaction.user;

    try {
      await supabase.update('tickets', `channel_id=eq.${channel.id}`, { claimed_by: staff.username });
    } catch (e) {
      logger.error('Failed to update claim in Supabase:', e.message);
    }

    const l = t('ticket', 'vi');
    await interaction.reply({ content: l.claimed(staff.tag) });
  },

  async handleCloseConfirm(interaction) {
    const l = t('ticket', 'vi');
    const confirmRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('confirm_close_ticket').setLabel(l.confirmYes).setStyle(ButtonStyle.Danger),
      new ButtonBuilder().setCustomId('cancel_close_ticket').setLabel(l.confirmNo).setStyle(ButtonStyle.Secondary),
    );
    await interaction.reply({ content: l.confirmClose, components: [confirmRow], ephemeral: true });
  },

  async handleCloseExecute(interaction) {
    const channel = interaction.channel;
    const l = t('ticket', 'vi');

    // Collect transcript
    let transcript = '';
    try {
      const messages = await channel.messages.fetch({ limit: 100 });
      const sorted = [...messages.values()].reverse();
      transcript = sorted.map(m => `[${m.createdAt.toISOString()}] ${m.author.tag}: ${m.content || '(embed/attachment)'}`.slice(0, 500)).join('\n');
    } catch (e) {
      logger.error('Failed to fetch transcript:', e.message);
    }

    // Update Supabase
    try {
      await supabase.update('tickets', `channel_id=eq.${channel.id}`, {
        status: 'closed',
        closed_at: new Date().toISOString(),
        transcript: transcript.slice(0, 50000),
      });
      logger.info(`Ticket closed: channel=${channel.id} | ${l.transcriptSaved}`);
    } catch (e) {
      logger.error('Failed to update ticket in Supabase:', e.message);
    }

    await interaction.update({ content: l.closing, components: [] });
    setTimeout(() => channel.delete().catch(console.error), 5000);
  },

  async handleCloseCancel(interaction) {
    const l = t('ticket', 'vi');
    await interaction.update({ content: l.cancelled, components: [] });
  },
};
