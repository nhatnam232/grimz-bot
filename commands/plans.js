const { SlashCommandBuilder } = require('discord.js');
const { buildPlansEmbed } = require('../utils/embeds');
const { createLangButtons } = require('../utils/buttons');

module.exports = {
  data: new SlashCommandBuilder().setName('plans').setDescription('Xem chi tiết các gói dịch vụ'),
  async execute(interaction) {
    await interaction.reply({ embeds: [buildPlansEmbed()], components: [createLangButtons('plans')] });
  },
};
