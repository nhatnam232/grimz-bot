const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits, ChannelType } = require('discord.js');
const { COLORS: C } = require('../config');
const { t } = require('../utils/i18n');
const { createLangButtons } = require('../utils/buttons');
const { loadSettings, saveSettings } = require('../utils/ticket-settings');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setup-ticket')
    .setDescription('Setup ticket panel trong một kênh (Admin)')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addChannelOption(o => o.setName('channel').setDescription('Kênh gửi ticket panel').addChannelTypes(ChannelType.GuildText).setRequired(true))
    .addStringOption(o => o.setName('category').setDescription('Tên category cho ticket channels (mặc định: Tickets)')),

  async execute(interaction) {
    const channel = interaction.options.getChannel('channel');
    const categoryName = interaction.options.getString('category') || 'Tickets';
    const guild = interaction.guild;

    // Find or create category
    let category = guild.channels.cache.find(c => c.type === ChannelType.GuildCategory && c.name.toLowerCase() === categoryName.toLowerCase());
    if (!category) {
      category = await guild.channels.create({ name: categoryName, type: ChannelType.GuildCategory });
    }

    // Save settings
    const settings = loadSettings();
    settings.ticketChannelId = channel.id;
    settings.ticketCategoryId = category.id;
    saveSettings(settings);

    // Send ticket panel embed
    const l = t('ticket', 'vi');
    const ticketRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('create_ticket').setLabel(l.createBtn).setStyle(ButtonStyle.Primary)
    );
    await channel.send({
      embeds: [new EmbedBuilder()
        .setTitle(l.title)
        .setColor(C.purple)
        .setDescription(l.description)
        .addFields(l.usedFor)
      ],
      components: [ticketRow, createLangButtons('ticket')],
    });

    await interaction.reply({ content: `✅ Đã setup ticket panel trong <#${channel.id}> · Category: **${category.name}**`, ephemeral: true });
  },
};
