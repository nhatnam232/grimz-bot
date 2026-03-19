const { SlashCommandBuilder } = require('discord.js');
const { buildConnectEmbed } = require('../utils/embeds');
const { createLangButtons } = require('../utils/buttons');

module.exports = {
  data: new SlashCommandBuilder().setName('connect').setDescription('Hướng dẫn kết nối Parsec'),
  async execute(interaction) {
    await interaction.reply({ embeds: [buildConnectEmbed()], components: [createLangButtons('connect')] });
  },
};
