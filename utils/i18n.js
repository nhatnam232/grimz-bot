const translations = {
  price: {
    vi: {
      title: '💰 Bảng Giá · Grimz Cloud PC',
      description: 'Tính tiền theo **giờ thực tế** · Không cần đặt cọc · Thanh toán qua chuyển khoản hoặc MoMo',
      nova: { name: '⚡ G-NOVA · RTX 3060 12GB', value: '> 🇻🇳 **3.000đ/giờ**\n> 🇬🇧 **$0.35/hr**' },
      orbit: { name: '🚀 G-ORBIT · RTX 4060 8GB', value: '> 🇻🇳 **5.000đ/giờ**\n> 🇬🇧 **$0.50/hr**' },
      pulsar: { name: '🌟 G-PULSAR · RTX 4070', value: '> 🇻🇳 **6.000đ/giờ**\n> 🇬🇧 **$0.70/hr**' },
      note: { name: '📌 Ghi chú', value: '• Gói ngày/tuần: **Liên hệ staff**\n• Ping Singapore < 30ms\n• Hỗ trợ 24/7 qua Discord ticket' },
      footer: 'Grimz Cloud PC · grimz.vercel.app/cloud',
    },
    en: {
      title: '💰 Pricing · Grimz Cloud PC',
      description: 'Pay by **actual hours** · No deposit required · Pay via bank transfer or MoMo',
      nova: { name: '⚡ G-NOVA · RTX 3060 12GB', value: '> 🇻🇳 **3,000đ/hr**\n> 🇬🇧 **$0.35/hr**' },
      orbit: { name: '🚀 G-ORBIT · RTX 4060 8GB', value: '> 🇻🇳 **5,000đ/hr**\n> 🇬🇧 **$0.50/hr**' },
      pulsar: { name: '🌟 G-PULSAR · RTX 4070', value: '> 🇻🇳 **6,000đ/hr**\n> 🇬🇧 **$0.70/hr**' },
      note: { name: '📌 Note', value: '• Daily/weekly packages: **Contact staff**\n• Singapore ping < 30ms\n• 24/7 support via Discord ticket' },
      footer: 'Grimz Cloud PC · grimz.vercel.app/cloud',
    },
  },

  plans: {
    vi: {
      title: '🖥️ Các Gói Dịch Vụ · Grimz Cloud PC',
      nova: { name: '╔═ GÓI 1 · G-NOVA ═╗', value: '```\nCPU     : Intel Core i5-10400F\nGPU     : RTX 3060 12GB\nRAM     : 32GB DDR4\nStorage : 2 x 1TB HDD\nOS      : Windows 10/11\nGiá     : 3.000đ/giờ\n```' },
      orbit: { name: '╔═ GÓI 2 · G-ORBIT ═╗', value: '```\nCPU     : Intel Core i5-10400F\nGPU     : RTX 4060 8GB\nRAM     : 32GB DDR4\nStorage : 2 x 1TB HDD\nOS      : Windows 10/11\nGiá     : 5.000đ/giờ\n```' },
      pulsar: { name: '╔═ GÓI 3 · G-PULSAR ═╗', value: '```\nCPU     : Intel Core i7\nGPU     : RTX 4070\nRAM     : 32GB DDR4\nStorage : 2TB SSD NVMe + 2TB HDD\nOS      : Windows 10/11\nGiá     : 6.000đ/giờ\n```' },
      footer: 'Grimz Cloud PC · Tất cả gói đều có Ping Singapore < 30ms',
    },
    en: {
      title: '🖥️ Service Plans · Grimz Cloud PC',
      nova: { name: '╔═ PLAN 1 · G-NOVA ═╗', value: '```\nCPU     : Intel Core i5-10400F\nGPU     : RTX 3060 12GB\nRAM     : 32GB DDR4\nStorage : 2 x 1TB HDD\nOS      : Windows 10/11\nPrice   : 3,000đ/hr ($0.35)\n```' },
      orbit: { name: '╔═ PLAN 2 · G-ORBIT ═╗', value: '```\nCPU     : Intel Core i5-10400F\nGPU     : RTX 4060 8GB\nRAM     : 32GB DDR4\nStorage : 2 x 1TB HDD\nOS      : Windows 10/11\nPrice   : 5,000đ/hr ($0.50)\n```' },
      pulsar: { name: '╔═ PLAN 3 · G-PULSAR ═╗', value: '```\nCPU     : Intel Core i7\nGPU     : RTX 4070\nRAM     : 32GB DDR4\nStorage : 2TB SSD NVMe + 2TB HDD\nOS      : Windows 10/11\nPrice   : 6,000đ/hr ($0.70)\n```' },
      footer: 'Grimz Cloud PC · All plans have Singapore Ping < 30ms',
    },
  },

  connect: {
    vi: {
      title: '🔌 Hướng Dẫn Kết Nối · Parsec',
      description: 'Kết nối máy ảo Grimz Cloud PC qua **Parsec** — Không cần tạo tài khoản!',
      step1: { name: '📥 Bước 1 · Tải Parsec', value: '> Tải tại **parsec.app** (miễn phí)\n> Hỗ trợ: Windows · Mac · Android · iOS · TV Box' },
      step2: { name: '🔗 Bước 2 · Kết nối', value: '> Mở Parsec → **Computers** → **Connect**\n> Nhập **IP máy** nhận từ Dashboard hoặc Staff' },
      step3: { name: '🔑 Bước 3 · Nhập mật khẩu', value: '> Nhập **Password** nhận từ Dashboard\n> Xong! Bạn đã vào máy 🎮' },
      settings: { name: '⚙️ Cài đặt tối ưu', value: '```\nCodec   : H.264\nBandwidth: 50 Mbps\nResolution: 1080p\nFPS     : 60\n```' },
      footer: 'Grimz Cloud PC · Gặp lỗi? Tạo ticket hỗ trợ!',
    },
    en: {
      title: '🔌 Connection Guide · Parsec',
      description: 'Connect to Grimz Cloud PC via **Parsec** — No account needed!',
      step1: { name: '📥 Step 1 · Download Parsec', value: '> Download at **parsec.app** (free)\n> Supports: Windows · Mac · Android · iOS · TV Box' },
      step2: { name: '🔗 Step 2 · Connect', value: '> Open Parsec → **Computers** → **Connect**\n> Enter the **IP** from Dashboard or Staff' },
      step3: { name: '🔑 Step 3 · Enter password', value: '> Enter the **Password** from Dashboard\n> Done! You\'re in 🎮' },
      settings: { name: '⚙️ Optimal Settings', value: '```\nCodec   : H.264\nBandwidth: 50 Mbps\nResolution: 1080p\nFPS     : 60\n```' },
      footer: 'Grimz Cloud PC · Having issues? Create a support ticket!',
    },
  },

  order: {
    vi: {
      title: '🛒 Hướng Dẫn Đặt Dịch Vụ · Grimz Cloud PC',
      step1: { name: '📋 Bước 1', value: '> Tạo ticket trong kênh **#-order**\n> Chọn gói muốn thuê (G-NOVA / G-ORBIT / G-PULSAR)' },
      step2: { name: '💳 Bước 2', value: '> Thanh toán qua **chuyển khoản ngân hàng** hoặc **MoMo**\n> Staff gửi thông tin thanh toán trong ticket' },
      step3: { name: '🖥️ Bước 3', value: '> Sau khi xác nhận thanh toán (~5-15 phút)\n> Staff gán máy → Dashboard tự cập nhật IP + Password' },
      step4: { name: '🎮 Bước 4', value: '> Vào Dashboard: **grimz.vercel.app/dashboard**\n> Xem IP + Password → Kết nối qua Parsec' },
      footer: 'Grimz Cloud PC · Hỗ trợ 24/7',
    },
    en: {
      title: '🛒 How to Order · Grimz Cloud PC',
      step1: { name: '📋 Step 1', value: '> Create a ticket in **#-order** channel\n> Choose a plan (G-NOVA / G-ORBIT / G-PULSAR)' },
      step2: { name: '💳 Step 2', value: '> Pay via **bank transfer** or **MoMo**\n> Staff will send payment details in ticket' },
      step3: { name: '🖥️ Step 3', value: '> After payment confirmed (~5-15 min)\n> Staff assigns machine → Dashboard updates with IP + Password' },
      step4: { name: '🎮 Step 4', value: '> Go to Dashboard: **grimz.vercel.app/dashboard**\n> View IP + Password → Connect via Parsec' },
      footer: 'Grimz Cloud PC · 24/7 Support',
    },
  },

  faq: {
    vi: {
      title: '❓ Câu Hỏi Thường Gặp · Grimz Cloud PC',
      q1: { name: '⏱️ Bao lâu nhận được máy?', value: 'Thường **5-15 phút** sau khi thanh toán. Nếu quá 30 phút, ping staff trong ticket.' },
      q2: { name: '💻 Máy tôi cần cấu hình gì?', value: 'Không cần máy mạnh — chỉ cần **internet ổn định (10+ Mbps)** và cài Parsec.' },
      q3: { name: '📶 Ping có ổn không?', value: 'Server Singapore, ping trung bình **< 30ms** từ Việt Nam. Đủ chơi FPS, MOBA.' },
      q4: { name: '💰 Thanh toán bằng gì?', value: '**Chuyển khoản ngân hàng** hoặc **MoMo**. Staff gửi thông tin trong Discord ticket.' },
      q5: { name: '🎮 Cài được game gì?', value: 'Được cài **bất kỳ game/phần mềm** nào. Có quyền admin đầy đủ như PC thật.' },
      q6: { name: '💾 Dữ liệu có được giữ?', value: 'Giữ trong suốt thời gian thuê. **Xóa sau khi hết hạn** — hãy backup trước!' },
      footer: 'Grimz Cloud PC · Còn thắc mắc? Tạo ticket!',
    },
    en: {
      title: '❓ FAQ · Grimz Cloud PC',
      q1: { name: '⏱️ How long to get the machine?', value: 'Usually **5-15 minutes** after payment. If over 30 min, ping staff in ticket.' },
      q2: { name: '💻 What specs do I need?', value: 'No powerful PC needed — just **stable internet (10+ Mbps)** and Parsec installed.' },
      q3: { name: '📶 Is the ping good?', value: 'Singapore server, average ping **< 30ms** from Vietnam. Good for FPS, MOBA.' },
      q4: { name: '💰 Payment methods?', value: '**Bank transfer** or **MoMo**. Staff sends payment info in Discord ticket.' },
      q5: { name: '🎮 What games can I install?', value: 'Install **any game/software**. Full admin access like a real PC.' },
      q6: { name: '💾 Is data saved?', value: 'Kept during rental period. **Deleted after expiry** — backup first!' },
      footer: 'Grimz Cloud PC · More questions? Create a ticket!',
    },
  },

  status: {
    vi: {
      title: '📡 Trạng Thái Hệ Thống · Grimz Cloud PC',
      web: 'Web Server',
      database: 'Database',
      uptime: '🤖 Bot Uptime',
      online: 'Online',
      offline: 'Offline',
      footer: 'Grimz Cloud PC · Kiểm tra trực tiếp',
    },
    en: {
      title: '📡 System Status · Grimz Cloud PC',
      web: 'Web Server',
      database: 'Database',
      uptime: '🤖 Bot Uptime',
      online: 'Online',
      offline: 'Offline',
      footer: 'Grimz Cloud PC · Live status check',
    },
  },

  ticket: {
    vi: {
      title: '🎫 Hỗ Trợ · Grimz Cloud PC',
      description: 'Bấm nút bên dưới để tạo ticket hỗ trợ riêng tư.\nStaff sẽ phản hồi trong vài phút.',
      usedFor: { name: '📋 Ticket dùng cho', value: '• Mua/đặt dịch vụ\n• Báo lỗi kỹ thuật\n• Gia hạn máy\n• Yêu cầu hỗ trợ khác' },
      createBtn: '🎫 Tạo Ticket',
      supportTitle: '🎫 Ticket Hỗ Trợ',
      supportDesc: (username) => `Xin chào **${username}**!\nStaff sẽ hỗ trợ bạn sớm nhất có thể.\n\nHãy mô tả vấn đề của bạn bên dưới.`,
      closeBtn: '🔒 Đóng Ticket',
      alreadyHas: (channelId) => `Bạn đã có ticket: <#${channelId}>`,
      created: (channelId) => `✅ Đã tạo ticket: <#${channelId}>`,
      closing: '🔒 Ticket sẽ đóng sau 5 giây...',
    },
    en: {
      title: '🎫 Support · Grimz Cloud PC',
      description: 'Click the button below to create a private support ticket.\nStaff will respond within minutes.',
      usedFor: { name: '📋 Tickets are for', value: '• Purchase/order services\n• Report technical issues\n• Extend rental\n• Other support requests' },
      createBtn: '🎫 Create Ticket',
      supportTitle: '🎫 Support Ticket',
      supportDesc: (username) => `Hello **${username}**!\nStaff will assist you as soon as possible.\n\nPlease describe your issue below.`,
      closeBtn: '🔒 Close Ticket',
      alreadyHas: (channelId) => `You already have a ticket: <#${channelId}>`,
      created: (channelId) => `✅ Ticket created: <#${channelId}>`,
      closing: '🔒 Ticket will close in 5 seconds...',
    },
  },

  ban: {
    vi: { title: '🔨 Đã Ban', reason: 'Lý do', noReason: 'Không có lý do' },
    en: { title: '🔨 Banned', reason: 'Reason', noReason: 'No reason provided' },
  },

  kick: {
    vi: { title: '👢 Đã Kick', reason: 'Lý do', noReason: 'Không có lý do' },
    en: { title: '👢 Kicked', reason: 'Reason', noReason: 'No reason provided' },
  },

  mute: {
    vi: { title: '🔇 Đã Mute', duration: 'Thời gian', reason: 'Lý do', noReason: 'Không có lý do', minutes: 'phút' },
    en: { title: '🔇 Muted', duration: 'Duration', reason: 'Reason', noReason: 'No reason provided', minutes: 'min' },
  },

  unmute: {
    vi: { title: '🔊 Đã Unmute' },
    en: { title: '🔊 Unmuted' },
  },
};

function t(command, lang = 'vi') {
  return translations[command]?.[lang] || translations[command]?.vi || {};
}

module.exports = { translations, t };
