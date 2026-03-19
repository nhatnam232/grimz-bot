const logger = require('../utils/logger');
const ticket = require('../commands/ticket');
const { buildPriceEmbed, buildPlansEmbed, buildConnectEmbed, buildOrderEmbed, buildFaqEmbed, buildStatusEmbed, buildRulesEmbed, buildBannedGamesEmbed } = require('../utils/embeds');
const { createLangButtons } = require('../utils/buttons');
const { t } = require('../utils/i18n');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const { COLORS: C } = require('../config');
const { healthCheck } = require('../utils/supabase');

// Map command names to their embed builders
const embedBuilders = {
  price: buildPriceEmbed,
  plans: buildPlansEmbed,
  connect: buildConnectEmbed,
  order: buildOrderEmbed,
  faq: buildFaqEmbed,
  rules: buildRulesEmbed,
  bannedgames: buildBannedGamesEmbed,
};

// Rebuild moderation embeds from existing embed data
function rebuildModEmbed(commandName, lang, originalEmbed) {
  const l = t(commandName, lang);
  const fields = originalEmbed.fields.map(f => {
    if (commandName === 'ban' || commandName === 'kick') {
      if (f.name === 'Lý do' || f.name === 'Reason') return { name: l.reason, value: f.value, inline: f.inline };
    }
    if (commandName === 'mute') {
      if (f.name === 'Lý do' || f.name === 'Reason') return { name: l.reason, value: f.value, inline: f.inline };
      if (f.name === 'Thời gian' || f.name === 'Duration') return { name: l.duration, value: f.value, inline: f.inline };
    }
    return { name: f.name, value: f.value, inline: f.inline };
  });
  return new EmbedBuilder()
    .setColor(originalEmbed.color)
    .setTitle(l.title)
    .addFields(fields);
}

function rebuildTicketEmbed(lang, originalEmbed) {
  const l = t('ticket', lang);
  return new EmbedBuilder()
    .setTitle(l.title)
    .setColor(originalEmbed.color)
    .setDescription(l.description)
    .addFields(l.usedFor);
}

module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    // Handle buttons
    if (interaction.isButton()) {
      try {
        // Ticket buttons
        if (interaction.customId === 'create_ticket') return await ticket.handleCreate(interaction);
        if (interaction.customId === 'close_ticket') return await ticket.handleCloseConfirm(interaction);
        if (interaction.customId === 'confirm_close_ticket') return await ticket.handleCloseExecute(interaction);
        if (interaction.customId === 'cancel_close_ticket') return await ticket.handleCloseCancel(interaction);
        if (interaction.customId === 'claim_ticket') return await ticket.handleClaim(interaction);

        // Thongbao read button
        if (interaction.customId === 'thongbao_read') {
          const l = t('thongbao', 'vi');
          return await interaction.reply({ content: l.readConfirm, ephemeral: true });
        }

        // Language switch buttons
        const langMatch = interaction.customId.match(/^lang_(vi|en)_(.+)$/);
        if (langMatch) {
          const [, lang, commandName] = langMatch;

          // Simple embed commands
          if (embedBuilders[commandName]) {
            const embed = embedBuilders[commandName](lang);
            const components = [createLangButtons(commandName, lang)];
            return await interaction.update({ embeds: [embed], components });
          }

          // Status command — re-fetch live data
          if (commandName === 'status') {
            await interaction.deferUpdate();
            const [webResult, dbResult] = await Promise.all([
              fetch('https://grimz.vercel.app', { signal: AbortSignal.timeout(5000) })
                .then(r => ({ ok: r.ok, ms: Date.now() }))
                .catch(() => ({ ok: false, ms: -1 })),
              healthCheck(),
            ]);
            const uptime = interaction.client.uptime;
            const s = Math.floor(uptime / 1000);
            const uptimeStr = `${Math.floor(s / 86400)}d ${Math.floor((s % 86400) / 3600)}h ${Math.floor((s % 3600) / 60)}m`;
            const embed = buildStatusEmbed(lang, { webResult, dbResult, uptimeStr });
            return await interaction.editReply({ embeds: [embed], components: [createLangButtons('status', lang)] });
          }

          // Ticket embed
          if (commandName === 'ticket') {
            const originalEmbed = interaction.message.embeds[0];
            const embed = rebuildTicketEmbed(lang, originalEmbed);
            const l = t('ticket', lang);
            const ticketRow = new ActionRowBuilder().addComponents(
              new ButtonBuilder().setCustomId('create_ticket').setLabel(l.createBtn).setStyle(ButtonStyle.Primary)
            );
            return await interaction.update({ embeds: [embed], components: [ticketRow, createLangButtons('ticket', lang)] });
          }

          // Moderation embeds (ban, kick, mute, unmute)
          if (['ban', 'kick', 'mute', 'unmute'].includes(commandName)) {
            const originalEmbed = interaction.message.embeds[0];
            const embed = rebuildModEmbed(commandName, lang, originalEmbed);
            return await interaction.update({ embeds: [embed], components: [createLangButtons(commandName, lang)] });
          }
        }
      } catch (err) {
        logger.error(`Button ${interaction.customId} error:`, err.message);
        if (!interaction.replied && !interaction.deferred) await interaction.reply({ content: `Error: ${err.message}`, ephemeral: true }).catch(() => {});
      }
      return;
    }

    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      logger.info(`Command /${interaction.commandName} by ${interaction.user.tag}`);
      await command.execute(interaction);
    } catch (err) {
      logger.error(`Command /${interaction.commandName} error:`, err.message);
      const msg = { content: `Lỗi: ${err.message}`, ephemeral: true };
      if (interaction.replied || interaction.deferred) await interaction.followUp(msg).catch(() => {});
      else await interaction.reply(msg).catch(() => {});
    }
  },
};
