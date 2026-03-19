const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

function createLangButtons(commandName, activeLang = 'vi') {
  return new ActionRowBuilder().addComponents(
    new ButtonBuilder()
      .setCustomId(`lang_vi_${commandName}`)
      .setLabel('Tiếng Việt')
      .setEmoji('🇻🇳')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(activeLang === 'vi'),
    new ButtonBuilder()
      .setCustomId(`lang_en_${commandName}`)
      .setLabel('English')
      .setEmoji('🇬🇧')
      .setStyle(ButtonStyle.Secondary)
      .setDisabled(activeLang === 'en'),
  );
}

module.exports = { createLangButtons };
