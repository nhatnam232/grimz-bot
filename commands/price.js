const { SlashCommandBuilder } = require('discord.js');
const { buildPriceEmbed } = require('../utils/embeds');
const { createLangButtons } = require('../utils/buttons');

module.exports = {
  data: new SlashCommandBuilder().setName('price').setDescription('Xem bảng giá Grimz Cloud PC'),
  async execute(interaction) {
    await interaction.reply({ embeds: [buildPriceEmbed()], components: [createLangButtons('price')] });
  },
};
