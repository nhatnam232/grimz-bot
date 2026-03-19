const { SlashCommandBuilder } = require('discord.js');
const { buildBannedGamesEmbed } = require('../utils/embeds');
const { createLangButtons } = require('../utils/buttons');

module.exports = {
  data: new SlashCommandBuilder().setName('bannedgames').setDescription('Xem danh sách game không hỗ trợ trên Cloud PC'),
  async execute(interaction) {
    await interaction.reply({ embeds: [buildBannedGamesEmbed()], components: [createLangButtons('bannedgames')] });
  },
};
