const { EmbedBuilder } = require('discord.js');
const { COLORS: C } = require('../config');
const { t } = require('./i18n');

function buildPriceEmbed(lang = 'vi') {
  const l = t('price', lang);
  return new EmbedBuilder()
    .setTitle(l.title)
    .setColor(C.purple)
    .setDescription(l.description)
    .addFields(
      { name: l.nova.name, value: l.nova.value, inline: true },
      { name: l.orbit.name, value: l.orbit.value, inline: true },
      { name: l.pulsar.name, value: l.pulsar.value, inline: true },
    )
    .addFields({ name: l.note.name, value: l.note.value })
    .setFooter({ text: l.footer })
    .setTimestamp();
}

function buildPlansEmbed(lang = 'vi') {
  const l = t('plans', lang);
  return new EmbedBuilder()
    .setTitle(l.title)
    .setColor(C.purple)
    .addFields(
      { name: l.nova.name, value: l.nova.value },
      { name: l.orbit.name, value: l.orbit.value },
      { name: l.pulsar.name, value: l.pulsar.value },
    )
    .setFooter({ text: l.footer })
    .setTimestamp();
}

function buildConnectEmbed(lang = 'vi') {
  const l = t('connect', lang);
  return new EmbedBuilder()
    .setTitle(l.title)
    .setColor(C.blue)
    .setDescription(l.description)
    .addFields(
      { name: l.step1.name, value: l.step1.value },
      { name: l.step2.name, value: l.step2.value },
      { name: l.step3.name, value: l.step3.value },
      { name: l.step4.name, value: l.step4.value },
      { name: l.settings.name, value: l.settings.value },
    )
    .setFooter({ text: l.footer })
    .setTimestamp();
}

function buildOrderEmbed(lang = 'vi') {
  const l = t('order', lang);
  return new EmbedBuilder()
    .setTitle(l.title)
    .setColor(C.purple)
    .addFields(
      { name: l.step1.name, value: l.step1.value },
      { name: l.step2.name, value: l.step2.value },
      { name: l.step3.name, value: l.step3.value },
      { name: l.step4.name, value: l.step4.value },
    )
    .setFooter({ text: l.footer })
    .setTimestamp();
}

function buildFaqEmbed(lang = 'vi') {
  const l = t('faq', lang);
  return new EmbedBuilder()
    .setTitle(l.title)
    .setColor(C.purple)
    .addFields(
      { name: l.q1.name, value: l.q1.value },
      { name: l.q2.name, value: l.q2.value },
      { name: l.q3.name, value: l.q3.value },
      { name: l.q4.name, value: l.q4.value },
      { name: l.q5.name, value: l.q5.value },
      { name: l.q6.name, value: l.q6.value },
      { name: l.q7.name, value: l.q7.value },
      { name: l.q8.name, value: l.q8.value },
    )
    .setFooter({ text: l.footer })
    .setTimestamp();
}

function buildStatusEmbed(lang = 'vi', { webResult, dbResult, uptimeStr }) {
  const l = t('status', lang);
  return new EmbedBuilder()
    .setTitle(l.title)
    .setColor(webResult.ok && dbResult.ok ? C.green : C.red)
    .addFields(
      { name: `${webResult.ok ? '🟢' : '🔴'} ${l.web}`, value: `${webResult.ok ? l.online : l.offline} · ${webResult.ms}ms`, inline: true },
      { name: `${dbResult.ok ? '🟢' : '🔴'} ${l.database}`, value: `${dbResult.ok ? l.online : l.offline} · ${dbResult.ms >= 0 ? dbResult.ms + 'ms' : 'N/A'}`, inline: true },
      { name: l.uptime, value: uptimeStr, inline: true },
    )
    .setFooter({ text: l.footer })
    .setTimestamp();
}

function buildBannedGamesEmbed(lang = 'vi') {
  const l = t('bannedgames', lang);
  return new EmbedBuilder()
    .setTitle(l.title)
    .setColor(0xf87171)
    .setDescription(l.description)
    .addFields(
      { name: l.blocked.name, value: l.blocked.value },
      { name: l.unstable.name, value: l.unstable.value },
      { name: l.works.name, value: l.works.value },
    )
    .setFooter({ text: l.footer })
    .setTimestamp();
}

module.exports = { buildPriceEmbed, buildPlansEmbed, buildConnectEmbed, buildOrderEmbed, buildFaqEmbed, buildStatusEmbed, buildBannedGamesEmbed };
