const { SlashCommandBuilder } = require('discord.js');
const { buildStatusEmbed } = require('../utils/embeds');
const { createLangButtons } = require('../utils/buttons');
const { healthCheck } = require('../utils/supabase');
const logger = require('../utils/logger');

module.exports = {
  data: new SlashCommandBuilder().setName('status').setDescription('Kiểm tra trạng thái hệ thống'),
  async execute(interaction) {
    await interaction.deferReply();

    const [webResult, dbResult] = await Promise.all([checkWeb(), healthCheck()]);
    const uptimeStr = formatUptime(interaction.client.uptime);

    const embed = buildStatusEmbed('vi', { webResult, dbResult, uptimeStr });
    await interaction.editReply({ embeds: [embed], components: [createLangButtons('status')] });
  },
};

async function checkWeb() {
  try {
    const start = Date.now();
    const res = await fetch('https://grimz.vercel.app', { signal: AbortSignal.timeout(5000) });
    return { ok: res.ok, ms: Date.now() - start };
  } catch (e) {
    logger.error('Web health check failed:', e.message);
    return { ok: false, ms: -1 };
  }
}

function formatUptime(ms) {
  const s = Math.floor(ms / 1000);
  const d = Math.floor(s / 86400);
  const h = Math.floor((s % 86400) / 3600);
  const m = Math.floor((s % 3600) / 60);
  return `${d}d ${h}h ${m}m`;
}
