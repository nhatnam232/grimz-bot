const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
const { COLORS: C } = require('../config');
const { t } = require('../utils/i18n');
const { createLangButtons } = require('../utils/buttons');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('unmute').setDescription('Unmute thành viên')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(o => o.setName('user').setDescription('Thành viên').setRequired(true)),

  async execute(interaction) {
    const target = interaction.options.getMember('user');
    const l = t('unmute', 'vi');
    await target.timeout(null);
    await interaction.reply({
      embeds: [new EmbedBuilder().setColor(C.green).setTitle(l.title).addFields(
        { name: 'User', value: target.user.tag, inline: true },
        { name: 'Mod', value: interaction.user.tag, inline: true },
      )],
      components: [createLangButtons('unmute')],
    });
  },
};
