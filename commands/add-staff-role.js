const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { loadSettings, saveSettings } = require('../utils/ticket-settings');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('add-staff-role')
    .setDescription('Set role được ping khi có ticket mới (Admin)')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addRoleOption(o => o.setName('role').setDescription('Role staff/admin').setRequired(true)),

  async execute(interaction) {
    const role = interaction.options.getRole('role');
    const settings = loadSettings();
    if (!settings.staffRoles) settings.staffRoles = [];
    if (!settings.staffRoles.includes(role.id)) {
      settings.staffRoles.push(role.id);
    }
    saveSettings(settings);
    await interaction.reply({ content: `✅ Đã thêm role **${role.name}** vào danh sách staff ticket. Hiện tại: ${settings.staffRoles.map(r => `<@&${r}>`).join(', ')}`, ephemeral: true });
  },
};
