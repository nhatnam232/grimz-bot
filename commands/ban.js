const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const { COLORS: C } = require('../config');
const { t } = require('../utils/i18n');
const { createLangButtons } = require('../utils/buttons');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ban').setDescription('Ban thành viên')
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption(o => o.setName('user').setDescription('Thành viên').setRequired(true))
    .addStringOption(o => o.setName('reason').setDescription('Lý do')),

  async execute(interaction) {
    const target = interaction.options.getMember('user');
    const l = t('ban', 'vi');
    const reason = interaction.options.getString('reason') || l.noReason;
    await target.ban({ reason });
    await interaction.reply({
      embeds: [new EmbedBuilder().setColor(C.red).setTitle(l.title).addFields(
        { name: 'User', value: target.user.tag, inline: true },
        { name: l.reason, value: reason, inline: true },
        { name: 'Mod', value: interaction.user.tag, inline: true },
      )],
      components: [createLangButtons('ban')],
    });
  },
};
