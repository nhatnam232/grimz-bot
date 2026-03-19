const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const supabase = require('../utils/supabase');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('userinfo').setDescription('Xem thông tin user Supabase')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption(o => o.setName('email').setDescription('Email tài khoản').setRequired(true)),

  async execute(interaction) {
    const email = interaction.options.getString('email');
    await interaction.deferReply({ ephemeral: true });
    try {
      await supabase.query('machines', { select: '*' });
      await interaction.editReply({ content: `Tìm kiếm user: ${email} — Liên hệ Supabase dashboard để xem chi tiết.` });
    } catch (e) {
      await interaction.editReply({ content: 'Lỗi kết nối Supabase.' });
    }
  },
};
