const { SlashCommandBuilder } = require('discord.js');
const { buildOrderEmbed } = require('../utils/embeds');
const { createLangButtons } = require('../utils/buttons');

module.exports = {
  data: new SlashCommandBuilder().setName('order').setDescription('Hướng dẫn đặt dịch vụ'),
  async execute(interaction) {
    await interaction.reply({ embeds: [buildOrderEmbed()], components: [createLangButtons('order')] });
  },
};
