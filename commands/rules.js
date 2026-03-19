const { SlashCommandBuilder } = require('discord.js');
const { buildRulesEmbed } = require('../utils/embeds');
const { createLangButtons } = require('../utils/buttons');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('rules')
    .setDescription('Xem nội quy Grimz Cloud PC'),
  async execute(interaction) {
    await interaction.reply({ embeds: [buildRulesEmbed()], components: [createLangButtons('rules')] });
  },
};
