const { SlashCommandBuilder } = require('discord.js');
const { buildFaqEmbed } = require('../utils/embeds');
const { createLangButtons } = require('../utils/buttons');

module.exports = {
  data: new SlashCommandBuilder().setName('faq').setDescription('Câu hỏi thường gặp'),
  async execute(interaction) {
    await interaction.reply({ embeds: [buildFaqEmbed()], components: [createLangButtons('faq')] });
  },
};
