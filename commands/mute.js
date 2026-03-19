const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const { COLORS: C } = require('../config');
const { t } = require('../utils/i18n');
const { createLangButtons } = require('../utils/buttons');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mute').setDescription('Mute thành viên')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(o => o.setName('user').setDescription('Thành viên').setRequired(true))
    .addStringOption(o => o.setName('reason').setDescription('Lý do'))
    .addIntegerOption(o => o.setName('minutes').setDescription('Thời gian mute (phút, mặc định 60)')),

  async execute(interaction) {
    const target = interaction.options.getMember('user');
    const l = t('mute', 'vi');
    const reason = interaction.options.getString('reason') || l.noReason;
    const minutes = interaction.options.getInteger('minutes') || 60;
    await target.timeout(minutes * 60 * 1000, reason);
    await interaction.reply({
      embeds: [new EmbedBuilder().setColor(C.yellow).setTitle(l.title).addFields(
        { name: 'User', value: target.user.tag, inline: true },
        { name: l.duration, value: `${minutes} ${l.minutes}`, inline: true },
        { name: l.reason, value: reason },
        { name: 'Mod', value: interaction.user.tag, inline: true },
      )],
      components: [createLangButtons('mute')],
    });
  },
};
