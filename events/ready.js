const { REST, Routes } = require('discord.js');
const { TOKEN, CLIENT_ID, GUILD_ID } = require('../config');
const logger = require('../utils/logger');

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    logger.info(`Bot online: ${client.user.tag}`);
    client.user.setActivity('Grimz Cloud PC', { type: 3 });

    // Register slash commands
    const rest = new REST({ version: '10' }).setToken(TOKEN);
    const commandData = client.commands.map(cmd => cmd.data.toJSON());
    try {
      await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commandData });
      logger.info(`Registered ${commandData.length} slash commands`);
    } catch (e) {
      logger.error('Failed to register commands:', e.message);
    }
  },
};
