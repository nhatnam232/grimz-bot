const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, PermissionFlagsBits, ChannelType } = require('discord.js');
const { t } = require('../utils/i18n');
const logger = require('../utils/logger');

const TYPE_CHOICES = [
  { name: '📢 Thông Báo', value: 'announcement' },
  { name: '🔧 Bảo Trì', value: 'maintenance' },
  { name: '🆕 Cập Nhật', value: 'update' },
  { name: '🎉 Sự Kiện', value: 'event' },
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName('thongbao')
    .setDescription('Gửi thông báo vào kênh (Admin)')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addChannelOption(o => o.setName('kênh').setDescription('Kênh gửi thông báo').addChannelTypes(ChannelType.GuildText).setRequired(true))
    .addStringOption(o => o.setName('nội_dung').setDescription('Nội dung thông báo').setRequired(true))
    .addStringOption(o => o.setName('loại').setDescription('Loại thông báo').setRequired(true)
      .addChoices(...TYPE_CHOICES))
    .addStringOption(o => o.setName('tiêu_đề').setDescription('Tiêu đề (không bắt buộc)')),

  async execute(interaction) {
    const channel = interaction.options.getChannel('kênh');
    const content = interaction.options.getString('nội_dung');
    const type = interaction.options.getString('loại');
    const customTitle = interaction.options.getString('tiêu_đề');

    const l = t('thongbao', 'vi');
    const typeInfo = l.types[type];
    const title = customTitle || typeInfo.label;

    const embed = new EmbedBuilder()
      .setTitle(title)
      .setColor(typeInfo.color)
      .setDescription(content)
      .setFooter({ text: l.footerBy(interaction.user.tag) })
      .setTimestamp();

    const readRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder().setCustomId('thongbao_read').setLabel(l.readBtn).setStyle(ButtonStyle.Success)
    );

    await channel.send({ embeds: [embed], components: [readRow] });
    await interaction.reply({ content: l.sent(channel.id), ephemeral: true });

    logger.info(`Thongbao: type=${type} by=${interaction.user.tag} channel=#${channel.name}`);
  },
};
