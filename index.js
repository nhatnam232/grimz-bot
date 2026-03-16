const { Client, GatewayIntentBits, REST, Routes, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle, ChannelType } = require('discord.js');

const TOKEN   = process.env.BOT_TOKEN || 'MTQ4Mjk5NzQ1NjI5NDc3MjczNw.G7G_6Z.MKnAwHRbpyV3_KLfEGrImfBBm1PgaUY5NisxRM';
const CLIENT_ID = '1482997456294772737';
const GUILD_ID  = '1465410265704300567';
const SUPABASE_URL = 'https://vlwevojqfomophsdwsqd.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsd2V2b2pxZm9tb3Boc2R3c3FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1NzE2NDgsImV4cCI6MjA4OTE0NzY0OH0.6NECwQqKKeZH2fIgqp8SkmA6kPAqtsc5dlhEdGVFgBE';

const CHANNELS = {
  pricing:  '1482671656358117458',
  plans:    '1482671707302002728',
  order:    '1482671758166327418',
  panel:    '1482671832304718055',
  connect:  '1482671947400613970',
  status:   '1482672090946736217',
  banned:   '1482672145065705504',
  faq:      '1482672190070591508',
};

const TICKET_CATEGORY = null; // set category ID if needed
const STAFF_ROLE = null;      // set staff role ID if needed

// ===== COLORS =====
const C = { purple: 0x7c5cbf, green: 0x4ade80, red: 0xf87171, yellow: 0xfbbf24, blue: 0x5865F2 };

// ===== CLIENT =====
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildModeration,
  ]
});

// ===== SLASH COMMANDS =====
const commands = [
  new SlashCommandBuilder().setName('price').setDescription('Xem bảng giá Grimz Cloud PC'),
  new SlashCommandBuilder().setName('plans').setDescription('Xem chi tiết các gói dịch vụ'),
  new SlashCommandBuilder().setName('status').setDescription('Kiểm tra trạng thái hệ thống'),
  new SlashCommandBuilder().setName('connect').setDescription('Hướng dẫn kết nối Parsec'),
  new SlashCommandBuilder().setName('order').setDescription('Hướng dẫn đặt dịch vụ'),
  new SlashCommandBuilder().setName('ticket').setDescription('Tạo ticket hỗ trợ'),
  new SlashCommandBuilder()
    .setName('mute').setDescription('Mute thành viên')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(o => o.setName('user').setDescription('Thành viên').setRequired(true))
    .addStringOption(o => o.setName('reason').setDescription('Lý do').setRequired(false))
    .addIntegerOption(o => o.setName('minutes').setDescription('Thời gian mute (phút, mặc định 60)').setRequired(false)),
  new SlashCommandBuilder()
    .setName('unmute').setDescription('Unmute thành viên')
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption(o => o.setName('user').setDescription('Thành viên').setRequired(true)),
  new SlashCommandBuilder()
    .setName('kick').setDescription('Kick thành viên')
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
    .addUserOption(o => o.setName('user').setDescription('Thành viên').setRequired(true))
    .addStringOption(o => o.setName('reason').setDescription('Lý do').setRequired(false)),
  new SlashCommandBuilder()
    .setName('ban').setDescription('Ban thành viên')
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
    .addUserOption(o => o.setName('user').setDescription('Thành viên').setRequired(true))
    .addStringOption(o => o.setName('reason').setDescription('Lý do').setRequired(false)),
  new SlashCommandBuilder()
    .setName('embed').setDescription('Gửi embed vào channel (Admin)')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption(o => o.setName('channel').setDescription('Channel: pricing/plans/connect/status/faq/order').setRequired(true)),
  new SlashCommandBuilder()
    .setName('userinfo').setDescription('Xem thông tin user Supabase')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption(o => o.setName('email').setDescription('Email tài khoản').setRequired(true)),
].map(c => c.toJSON());

// ===== REGISTER COMMANDS =====
async function registerCommands() {
  const rest = new REST({ version: '10' }).setToken(TOKEN);
  try {
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });
    console.log('✓ Slash commands registered');
  } catch(e) { console.error('Commands error:', e); }
}

// ===== EMBED BUILDERS =====
function buildPriceEmbed() {
  return new EmbedBuilder()
    .setTitle('💰 Bảng Giá · Grimz Cloud PC')
    .setColor(C.purple)
    .setDescription('Tính tiền theo **giờ thực tế** · Không cần đặt cọc · Thanh toán qua chuyển khoản hoặc MoMo')
    .addFields(
      { name: '⚡ G-NOVA · RTX 3060 12GB', value: '> 🇻🇳 **3.000đ/giờ**\n> 🇬🇧 **$0.35/hr**', inline: true },
      { name: '🚀 G-ORBIT · RTX 4060 8GB', value: '> 🇻🇳 **5.000đ/giờ**\n> 🇬🇧 **$0.50/hr**', inline: true },
      { name: '🌟 G-PULSAR · RTX 4070', value: '> 🇻🇳 **6.000đ/giờ**\n> 🇬🇧 **$0.70/hr**', inline: true },
    )
    .addFields({ name: '📌 Ghi chú', value: '• Gói ngày/tuần: **Liên hệ staff**\n• Ping Singapore < 30ms\n• Hỗ trợ 24/7 qua Discord ticket' })
    .setFooter({ text: 'Grimz Cloud PC · grimz.vercel.app/cloud' })
    .setTimestamp();
}

function buildPlansEmbed() {
  return new EmbedBuilder()
    .setTitle('🖥️ Các Gói Dịch Vụ · Grimz Cloud PC')
    .setColor(C.purple)
    .addFields(
      {
        name: '╔═ GÓI 1 · G-NOVA ═╗',
        value: '```\nCPU     : Intel Core i5-10400F\nGPU     : RTX 3060 12GB\nRAM     : 32GB DDR4\nStorage : 2 x 1TB HDD\nOS      : Windows 10/11\nGiá     : 3.000đ/giờ\n```',
        inline: false
      },
      {
        name: '╔═ GÓI 2 · G-ORBIT ═╗',
        value: '```\nCPU     : Intel Core i5-10400F\nGPU     : RTX 4060 8GB\nRAM     : 32GB DDR4\nStorage : 2 x 1TB HDD\nOS      : Windows 10/11\nGiá     : 5.000đ/giờ\n```',
        inline: false
      },
      {
        name: '╔═ GÓI 3 · G-PULSAR ═╗',
        value: '```\nCPU     : Intel Core i7\nGPU     : RTX 4070\nRAM     : 32GB DDR4\nStorage : 2TB SSD NVMe + 2TB HDD\nOS      : Windows 10/11\nGiá     : 6.000đ/giờ\n```',
        inline: false
      },
    )
    .setFooter({ text: 'Grimz Cloud PC · Tất cả gói đều có Ping Singapore < 30ms' })
    .setTimestamp();
}

function buildStatusEmbed() {
  return new EmbedBuilder()
    .setTitle('📡 Trạng Thái Hệ Thống · Grimz Cloud PC')
    .setColor(C.green)
    .addFields(
      { name: '🟢 Web Server', value: 'Online · grimz.vercel.app', inline: true },
      { name: '🟢 Database', value: 'Online · Singapore', inline: true },
      { name: '🟢 Auth System', value: 'Online · Supabase', inline: true },
      { name: '🟢 Game Servers', value: 'Online · Singapore Node', inline: true },
      { name: '📶 Ping', value: '< 30ms từ Việt Nam', inline: true },
      { name: '⏱️ Uptime', value: '99.9%', inline: true },
    )
    .setFooter({ text: 'Cập nhật tự động · Grimz System' })
    .setTimestamp();
}

function buildConnectEmbed() {
  return new EmbedBuilder()
    .setTitle('🔌 Hướng Dẫn Kết Nối · Parsec')
    .setColor(C.blue)
    .setDescription('Kết nối máy ảo Grimz Cloud PC qua **Parsec** — Không cần tạo tài khoản!')
    .addFields(
      {
        name: '📥 Bước 1 · Tải Parsec',
        value: '> Tải tại **parsec.app** (miễn phí)\n> Hỗ trợ: Windows · Mac · Android · iOS · TV Box',
        inline: false
      },
      {
        name: '🔗 Bước 2 · Kết nối',
        value: '> Mở Parsec → **Computers** → **Connect**\n> Nhập **IP máy** nhận từ Dashboard hoặc Staff',
        inline: false
      },
      {
        name: '🔑 Bước 3 · Nhập mật khẩu',
        value: '> Nhập **Password** nhận từ Dashboard\n> Xong! Bạn đã vào máy 🎮',
        inline: false
      },
      {
        name: '⚙️ Cài đặt tối ưu',
        value: '```\nCodec   : H.264\nBandwidth: 50 Mbps\nResolution: 1080p\nFPS     : 60\n```',
        inline: false
      },
    )
    .setFooter({ text: 'Grimz Cloud PC · Gặp lỗi? Tạo ticket hỗ trợ!' })
    .setTimestamp();
}

function buildOrderEmbed() {
  return new EmbedBuilder()
    .setTitle('🛒 Hướng Dẫn Đặt Dịch Vụ · Grimz Cloud PC')
    .setColor(C.purple)
    .addFields(
      { name: '📋 Bước 1', value: '> Tạo ticket trong kênh **#-order**\n> Chọn gói muốn thuê (G-NOVA / G-ORBIT / G-PULSAR)', inline: false },
      { name: '💳 Bước 2', value: '> Thanh toán qua **chuyển khoản ngân hàng** hoặc **MoMo**\n> Staff gửi thông tin thanh toán trong ticket', inline: false },
      { name: '🖥️ Bước 3', value: '> Sau khi xác nhận thanh toán (~5-15 phút)\n> Staff gán máy → Dashboard tự cập nhật IP + Password', inline: false },
      { name: '🎮 Bước 4', value: '> Vào Dashboard: **grimz.vercel.app/dashboard**\n> Xem IP + Password → Kết nối qua Parsec', inline: false },
    )
    .setFooter({ text: 'Grimz Cloud PC · Hỗ trợ 24/7' })
    .setTimestamp();
}

function buildFaqEmbed() {
  return new EmbedBuilder()
    .setTitle('❓ Câu Hỏi Thường Gặp · Grimz Cloud PC')
    .setColor(C.purple)
    .addFields(
      { name: '⏱️ Bao lâu nhận được máy?', value: 'Thường **5-15 phút** sau khi thanh toán. Nếu quá 30 phút, ping staff trong ticket.', inline: false },
      { name: '💻 Máy tôi cần cấu hình gì?', value: 'Không cần máy mạnh — chỉ cần **internet ổn định (10+ Mbps)** và cài Parsec.', inline: false },
      { name: '📶 Ping có ổn không?', value: 'Server Singapore, ping trung bình **< 30ms** từ Việt Nam. Đủ chơi FPS, MOBA.', inline: false },
      { name: '💰 Thanh toán bằng gì?', value: '**Chuyển khoản ngân hàng** hoặc **MoMo**. Staff gửi thông tin trong Discord ticket.', inline: false },
      { name: '🎮 Cài được game gì?', value: 'Được cài **bất kỳ game/phần mềm** nào. Có quyền admin đầy đủ như PC thật.', inline: false },
      { name: '💾 Dữ liệu có được giữ?', value: 'Giữ trong suốt thời gian thuê. **Xóa sau khi hết hạn** — hãy backup trước!', inline: false },
    )
    .setFooter({ text: 'Grimz Cloud PC · Còn thắc mắc? Tạo ticket!' })
    .setTimestamp();
}

// ===== INTERACTION HANDLER =====
client.on('interactionCreate', async interaction => {
  if(interaction.isButton()) {
    // Ticket button
    if(interaction.customId === 'create_ticket') {
      await handleCreateTicket(interaction);
    }
    if(interaction.customId === 'close_ticket') {
      await handleCloseTicket(interaction);
    }
    return;
  }

  if(!interaction.isChatInputCommand()) return;
  const { commandName } = interaction;

  try {
    if(commandName === 'price') {
      await interaction.reply({ embeds: [buildPriceEmbed()] });
    }

    else if(commandName === 'plans') {
      await interaction.reply({ embeds: [buildPlansEmbed()] });
    }

    else if(commandName === 'status') {
      await interaction.reply({ embeds: [buildStatusEmbed()] });
    }

    else if(commandName === 'connect') {
      await interaction.reply({ embeds: [buildConnectEmbed()] });
    }

    else if(commandName === 'order') {
      await interaction.reply({ embeds: [buildOrderEmbed()] });
    }

    else if(commandName === 'ticket') {
      const row = new ActionRowBuilder().addComponents(
        new ButtonBuilder().setCustomId('create_ticket').setLabel('🎫 Tạo Ticket').setStyle(ButtonStyle.Primary)
      );
      await interaction.reply({
        embeds: [new EmbedBuilder()
          .setTitle('🎫 Hỗ Trợ · Grimz Cloud PC')
          .setColor(C.purple)
          .setDescription('Bấm nút bên dưới để tạo ticket hỗ trợ riêng tư.\nStaff sẽ phản hồi trong vài phút.')
          .addFields({ name: '📋 Ticket dùng cho', value: '• Mua/đặt dịch vụ\n• Báo lỗi kỹ thuật\n• Gia hạn máy\n• Yêu cầu hỗ trợ khác' })
        ],
        components: [row]
      });
    }

    else if(commandName === 'mute') {
      const target = interaction.options.getMember('user');
      const reason = interaction.options.getString('reason') || 'Không có lý do';
      const minutes = interaction.options.getInteger('minutes') || 60;
      const duration = minutes * 60 * 1000;
      await target.timeout(duration, reason);
      await interaction.reply({
        embeds: [new EmbedBuilder()
          .setColor(C.yellow)
          .setTitle('🔇 Đã Mute')
          .addFields(
            { name: 'User', value: `${target.user.tag}`, inline: true },
            { name: 'Thời gian', value: `${minutes} phút`, inline: true },
            { name: 'Lý do', value: reason, inline: false },
            { name: 'Mod', value: `${interaction.user.tag}`, inline: true },
          )
        ],
        ephemeral: false
      });
    }

    else if(commandName === 'unmute') {
      const target = interaction.options.getMember('user');
      await target.timeout(null);
      await interaction.reply({
        embeds: [new EmbedBuilder()
          .setColor(C.green)
          .setTitle('🔊 Đã Unmute')
          .addFields(
            { name: 'User', value: `${target.user.tag}`, inline: true },
            { name: 'Mod', value: `${interaction.user.tag}`, inline: true },
          )
        ]
      });
    }

    else if(commandName === 'kick') {
      const target = interaction.options.getMember('user');
      const reason = interaction.options.getString('reason') || 'Không có lý do';
      await target.kick(reason);
      await interaction.reply({
        embeds: [new EmbedBuilder()
          .setColor(C.red)
          .setTitle('👢 Đã Kick')
          .addFields(
            { name: 'User', value: `${target.user.tag}`, inline: true },
            { name: 'Lý do', value: reason, inline: true },
            { name: 'Mod', value: `${interaction.user.tag}`, inline: true },
          )
        ]
      });
    }

    else if(commandName === 'ban') {
      const target = interaction.options.getMember('user');
      const reason = interaction.options.getString('reason') || 'Không có lý do';
      await target.ban({ reason });
      await interaction.reply({
        embeds: [new EmbedBuilder()
          .setColor(C.red)
          .setTitle('🔨 Đã Ban')
          .addFields(
            { name: 'User', value: `${target.user.tag}`, inline: true },
            { name: 'Lý do', value: reason, inline: true },
            { name: 'Mod', value: `${interaction.user.tag}`, inline: true },
          )
        ]
      });
    }

    else if(commandName === 'embed') {
      const ch = interaction.options.getString('channel');
      const embedMap = {
        pricing: { id: CHANNELS.pricing, embed: buildPriceEmbed() },
        plans:   { id: CHANNELS.plans,   embed: buildPlansEmbed() },
        connect: { id: CHANNELS.connect, embed: buildConnectEmbed() },
        status:  { id: CHANNELS.status,  embed: buildStatusEmbed() },
        faq:     { id: CHANNELS.faq,     embed: buildFaqEmbed() },
        order:   { id: CHANNELS.order,   embed: buildOrderEmbed() },
      };
      const target = embedMap[ch];
      if(!target) { await interaction.reply({ content: 'Channel không hợp lệ! Dùng: pricing/plans/connect/status/faq/order', ephemeral: true }); return; }
      const channel = await client.channels.fetch(target.id);
      await channel.send({ embeds: [target.embed] });
      await interaction.reply({ content: `✅ Đã gửi embed vào <#${target.id}>`, ephemeral: true });
    }

    else if(commandName === 'userinfo') {
      const email = interaction.options.getString('email');
      await interaction.deferReply({ ephemeral: true });
      try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/machines?select=*`, {
          headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
        });
        await interaction.editReply({ content: `Tìm kiếm user: ${email} — Liên hệ Supabase dashboard để xem chi tiết.` });
      } catch(e) {
        await interaction.editReply({ content: 'Lỗi kết nối Supabase.' });
      }
    }

  } catch(err) {
    console.error(commandName, err);
    const msg = { content: `Lỗi: ${err.message}`, ephemeral: true };
    if(interaction.replied || interaction.deferred) await interaction.followUp(msg);
    else await interaction.reply(msg);
  }
});

// ===== TICKET HANDLERS =====
async function handleCreateTicket(interaction) {
  const guild = interaction.guild;
  const user = interaction.user;
  const existing = guild.channels.cache.find(c => c.name === `ticket-${user.id}`);
  if(existing) {
    await interaction.reply({ content: `Bạn đã có ticket: <#${existing.id}>`, ephemeral: true });
    return;
  }
  const channel = await guild.channels.create({
    name: `ticket-${user.id}`,
    type: ChannelType.GuildText,
    permissionOverwrites: [
      { id: guild.roles.everyone, deny: ['ViewChannel'] },
      { id: user.id, allow: ['ViewChannel', 'SendMessages', 'ReadMessageHistory'] },
    ],
  });
  const closeRow = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId('close_ticket').setLabel('🔒 Đóng Ticket').setStyle(ButtonStyle.Danger)
  );
  await channel.send({
    content: `<@${user.id}>`,
    embeds: [new EmbedBuilder()
      .setTitle('🎫 Ticket Hỗ Trợ')
      .setColor(0x7c5cbf)
      .setDescription(`Xin chào **${user.username}**!\nStaff sẽ hỗ trợ bạn sớm nhất có thể.\n\nHãy mô tả vấn đề của bạn bên dưới.`)
      .addFields({ name: 'Ticket ID', value: `#${channel.id.slice(-6)}`, inline: true })
      .setTimestamp()
    ],
    components: [closeRow]
  });
  await interaction.reply({ content: `✅ Đã tạo ticket: <#${channel.id}>`, ephemeral: true });
}

async function handleCloseTicket(interaction) {
  const channel = interaction.channel;
  await interaction.reply({ content: '🔒 Ticket sẽ đóng sau 5 giây...' });
  setTimeout(() => channel.delete().catch(console.error), 5000);
}

// ===== READY =====
client.once('ready', async () => {
  console.log(`✓ Grimz System bot online: ${client.user.tag}`);
  client.user.setActivity('Grimz Cloud PC', { type: 3 }); // Watching
  await registerCommands();
});

client.login(TOKEN);
