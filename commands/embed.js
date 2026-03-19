const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { CHANNELS } = require('../config');
const { buildPriceEmbed, buildPlansEmbed, buildConnectEmbed, buildOrderEmbed, buildFaqEmbed } = require('../utils/embeds');
const { createLangButtons } = require('../utils/buttons');

const embedMap = {
  pricing: { id: CHANNELS.pricing, build: buildPriceEmbed, cmd: 'price' },
  plans:   { id: CHANNELS.plans,   build: buildPlansEmbed, cmd: 'plans' },
  connect: { id: CHANNELS.connect, build: buildConnectEmbed, cmd: 'connect' },
  status:  null,
  faq:     { id: CHANNELS.faq,     build: buildFaqEmbed, cmd: 'faq' },
  order:   { id: CHANNELS.order,   build: buildOrderEmbed, cmd: 'order' },
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName('embed').setDescription('Gửi embed vào channel (Admin)')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption(o => o.setName('channel').setDescription('Channel: pricing/plans/connect/faq/order').setRequired(true)),

  async execute(interaction) {
    const ch = interaction.options.getString('channel');
    const target = embedMap[ch];
    if (!target) {
      await interaction.reply({ content: 'Channel không hợp lệ! Dùng: pricing/plans/connect/faq/order', ephemeral: true });
      return;
    }
    const channel = await interaction.client.channels.fetch(target.id);
    await channel.send({ embeds: [target.build()], components: [createLangButtons(target.cmd)] });
    await interaction.reply({ content: `✅ Đã gửi embed vào <#${target.id}>`, ephemeral: true });
  },
};
