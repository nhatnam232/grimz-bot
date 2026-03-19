const translations = {
  price: {
    vi: {
      title: '💰 Bảng Giá · Grimz Cloud PC',
      description: 'Tính tiền theo **giờ thực tế** · Không cần đặt cọc · Thanh toán qua chuyển khoản hoặc MoMo',
      nova: { name: '⚡ G-NOVA · RTX 3060 12GB', value: '> 🇻🇳 **3.000đ/giờ**\n> 🇬🇧 **$0.50/hr**\n> 🎮 Phù hợp: Valorant, CSGO, GTA V, Genshin Impact, LOL' },
      orbit: { name: '🚀 G-ORBIT · RTX 4060 8GB', value: '> 🇻🇳 **5.000đ/giờ**\n> 🇬🇧 **$0.60/hr**\n> 🎮 Phù hợp: Cyberpunk 2077, Hogwarts Legacy, Forza Horizon 5' },
      pulsar: { name: '🌟 G-PULSAR · RTX 4070', value: '> 🇻🇳 **6.000đ/giờ**\n> 🇬🇧 **$0.70/hr**\n> 🎮 Phù hợp: 4K Gaming, Streaming, Video Editing, AI/ML Workloads' },
      note: { name: '📌 Ghi chú', value: '• Gói ngày/tuần: **Liên hệ staff**\n• Ping Singapore < 30ms\n• Hỗ trợ 24/7 qua Discord ticket\n• 💵 Giá USD dành cho khách quốc tế, thanh toán qua **PayPal / Wise**' },
      footer: 'Grimz Cloud PC · grimz.vercel.app/cloud',
    },
    en: {
      title: '💰 Pricing · Grimz Cloud PC',
      description: 'Pay by **actual hours** · No deposit required · Pay via bank transfer or MoMo',
      nova: { name: '⚡ G-NOVA · RTX 3060 12GB', value: '> 🇻🇳 **3,000đ/hr**\n> 🇬🇧 **$0.50/hr**\n> 🎮 Best for: Valorant, CSGO, GTA V, Genshin Impact, LOL' },
      orbit: { name: '🚀 G-ORBIT · RTX 4060 8GB', value: '> 🇻🇳 **5,000đ/hr**\n> 🇬🇧 **$0.60/hr**\n> 🎮 Best for: Cyberpunk 2077, Hogwarts Legacy, Forza Horizon 5' },
      pulsar: { name: '🌟 G-PULSAR · RTX 4070', value: '> 🇻🇳 **6,000đ/hr**\n> 🇬🇧 **$0.70/hr**\n> 🎮 Best for: 4K Gaming, Streaming, Video Editing, AI/ML Workloads' },
      note: { name: '📌 Note', value: '• Daily/weekly packages: **Contact staff**\n• Singapore ping < 30ms\n• 24/7 support via Discord ticket\n• 💵 USD pricing for international customers, pay via **PayPal / Wise**' },
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
      nova: { name: '╔═ PLAN 1 · G-NOVA ═╗', value: '```\nCPU     : Intel Core i5-10400F\nGPU     : RTX 3060 12GB\nRAM     : 32GB DDR4\nStorage : 2 x 1TB HDD\nOS      : Windows 10/11\nPrice   : 3,000đ/hr ($0.50)\n```' },
      orbit: { name: '╔═ PLAN 2 · G-ORBIT ═╗', value: '```\nCPU     : Intel Core i5-10400F\nGPU     : RTX 4060 8GB\nRAM     : 32GB DDR4\nStorage : 2 x 1TB HDD\nOS      : Windows 10/11\nPrice   : 5,000đ/hr ($0.60)\n```' },
      pulsar: { name: '╔═ PLAN 3 · G-PULSAR ═╗', value: '```\nCPU     : Intel Core i7\nGPU     : RTX 4070\nRAM     : 32GB DDR4\nStorage : 2TB SSD NVMe + 2TB HDD\nOS      : Windows 10/11\nPrice   : 6,000đ/hr ($0.70)\n```' },
      footer: 'Grimz Cloud PC · All plans have Singapore Ping < 30ms',
    },
  },

  connect: {
    vi: {
      title: '🔌 Hướng Dẫn Kết Nối · Parsec',
      description: 'Kết nối máy ảo Grimz Cloud PC qua **Parsec** — Không cần tạo tài khoản!',
      step1: { name: '📥 Bước 1 · Tải Parsec', value: '> Tải tại **[parsec.app/downloads](https://parsec.app/downloads)** (miễn phí)\n> Hỗ trợ: Windows · Mac · Android · iOS · TV Box\n> Cài đặt xong mở app, **không cần đăng ký** tài khoản Parsec' },
      step2: { name: '🔗 Bước 2 · Kết nối', value: '> Mở Parsec → **Computers** → **Connect**\n> Nhập **IP máy** từ Dashboard (**grimz.vercel.app/dashboard**) hoặc Staff gửi trong ticket\n> IP có dạng: `xxx.xxx.xxx.xxx`' },
      step3: { name: '🔑 Bước 3 · Nhập mật khẩu', value: '> Nhập **Password** nhận từ Dashboard\n> Xong! Bạn đã vào máy 🎮\n> **Tips nếu lag:** Giảm Bandwidth xuống 20-30 Mbps, đổi codec sang H.264 (thay vì H.265)' },
      step4: { name: '🆘 Bước 4 · Gặp lỗi?', value: '> Nếu không kết nối được, hãy tạo **ticket hỗ trợ**\n> Gửi kèm **screenshot lỗi** hoặc mô tả chi tiết\n> Staff sẽ kiểm tra và hỗ trợ trong vài phút' },
      settings: { name: '⚙️ Cài đặt tối ưu', value: '```\nCodec   : H.264\nBandwidth: 50 Mbps\nResolution: 1080p\nFPS     : 60\n```' },
      footer: 'Grimz Cloud PC · Gặp lỗi? Tạo ticket hỗ trợ!',
    },
    en: {
      title: '🔌 Connection Guide · Parsec',
      description: 'Connect to Grimz Cloud PC via **Parsec** — No account needed!',
      step1: { name: '📥 Step 1 · Download Parsec', value: '> Download at **[parsec.app/downloads](https://parsec.app/downloads)** (free)\n> Supports: Windows · Mac · Android · iOS · TV Box\n> Install and open the app, **no Parsec account required**' },
      step2: { name: '🔗 Step 2 · Connect', value: '> Open Parsec → **Computers** → **Connect**\n> Enter the **IP** from Dashboard (**grimz.vercel.app/dashboard**) or Staff in ticket\n> IP format: `xxx.xxx.xxx.xxx`' },
      step3: { name: '🔑 Step 3 · Enter password', value: '> Enter the **Password** from Dashboard\n> Done! You\'re in 🎮\n> **Tips if laggy:** Lower Bandwidth to 20-30 Mbps, switch codec to H.264 (instead of H.265)' },
      step4: { name: '🆘 Step 4 · Having issues?', value: '> If you can\'t connect, create a **support ticket**\n> Include a **screenshot of the error** or detailed description\n> Staff will check and assist within minutes' },
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
      q1: { name: '⏱️ Bao lâu nhận được máy?', value: 'Thường **5-15 phút** sau khi thanh toán. Giờ cao điểm (tối 19h-23h) có thể lâu hơn ~20 phút. Nếu quá 30 phút, hãy ping staff trong ticket — chúng mình sẽ ưu tiên xử lý ngay.' },
      q2: { name: '💻 Máy tôi cần cấu hình gì?', value: 'Không cần máy mạnh — chỉ cần **internet ổn định (10+ Mbps)** và cài Parsec. Ví dụ: laptop văn phòng, điện thoại, tablet, TV Box đều dùng được. Parsec sẽ stream hình ảnh từ server về máy bạn.' },
      q3: { name: '📶 Ping có ổn không?', value: 'Server đặt tại **Singapore**, ping trung bình **< 30ms** từ Việt Nam (HCM ~15ms, HN ~25ms). Đủ mượt để chơi FPS (Valorant, CSGO), MOBA (LOL), và cả game AAA nặng.' },
      q4: { name: '💰 Thanh toán bằng gì?', value: '🇻🇳 Trong nước: **Chuyển khoản ngân hàng** hoặc **MoMo**\n🌍 Quốc tế: **PayPal** hoặc **Wise**\nStaff gửi thông tin thanh toán chi tiết trong Discord ticket.' },
      q5: { name: '🎮 Cài được game gì?', value: 'Được cài **bất kỳ game/phần mềm** nào — Steam, Epic, Blizzard, Ubisoft, v.v. Có quyền **admin đầy đủ** như PC thật. Ví dụ: GTA V, Cyberpunk 2077, Hogwarts Legacy, Photoshop, Premiere Pro đều OK.' },
      q6: { name: '💾 Dữ liệu có được giữ?', value: 'Dữ liệu được giữ **trong suốt thời gian thuê**. Sau khi hết hạn, máy sẽ được **reset hoàn toàn** để chuẩn bị cho khách tiếp theo. Hãy **backup file quan trọng** (Google Drive, OneDrive) trước khi hết hạn!' },
      q7: { name: '👑 Ai là owner/admin?', value: 'Không có owner duy nhất — Grimz Cloud PC được đồng sở hữu bởi **Grimz Team**. Mọi quyết định đều do team thảo luận chung.' },
      q8: { name: '🔒 Dữ liệu của tôi có an toàn không?', value: 'Trong thời gian thuê, **chỉ bạn** mới có quyền truy cập máy (qua Parsec password riêng). Staff không can thiệp vào máy trừ khi bạn yêu cầu hỗ trợ. Sau khi hết hạn, máy được **reset toàn bộ** — không ai khác truy cập được dữ liệu cũ của bạn.' },
      footer: 'Grimz Cloud PC · Còn thắc mắc? Tạo ticket!',
    },
    en: {
      title: '❓ FAQ · Grimz Cloud PC',
      q1: { name: '⏱️ How long to get the machine?', value: 'Usually **5-15 minutes** after payment. Peak hours (7-11 PM) may take ~20 min. If over 30 min, ping staff in ticket — we\'ll prioritize your request.' },
      q2: { name: '💻 What specs do I need?', value: 'No powerful PC needed — just **stable internet (10+ Mbps)** and Parsec installed. Example: office laptop, phone, tablet, TV Box all work. Parsec streams the video from our server to your device.' },
      q3: { name: '📶 Is the ping good?', value: 'Servers in **Singapore**, average ping **< 30ms** from Vietnam (HCM ~15ms, Hanoi ~25ms). Smooth enough for FPS (Valorant, CSGO), MOBA (LOL), and heavy AAA games.' },
      q4: { name: '💰 Payment methods?', value: '🇻🇳 Vietnam: **Bank transfer** or **MoMo**\n🌍 International: **PayPal** or **Wise**\nStaff sends detailed payment info in Discord ticket.' },
      q5: { name: '🎮 What games can I install?', value: 'Install **any game/software** — Steam, Epic, Blizzard, Ubisoft, etc. Full **admin access** like a real PC. Examples: GTA V, Cyberpunk 2077, Hogwarts Legacy, Photoshop, Premiere Pro all work.' },
      q6: { name: '💾 Is data saved?', value: 'Data is kept **during your rental period**. After expiry, the machine is **fully reset** for the next customer. Please **backup important files** (Google Drive, OneDrive) before your rental ends!' },
      q7: { name: '👑 Who is the owner/admin?', value: 'There\'s no single owner — Grimz Cloud PC is co-owned by the **Grimz Team**. All decisions are made as a team.' },
      q8: { name: '🔒 Is my data safe?', value: 'During your rental, **only you** have access to the machine (via your private Parsec password). Staff won\'t access your machine unless you request support. After expiry, the machine is **fully reset** — no one else can access your old data.' },
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
      createBtn: '🎫 Mở Ticket',
      supportTitle: '🎫 Ticket Hỗ Trợ',
      supportDesc: (username) => `Xin chào **${username}**!\nStaff sẽ hỗ trợ bạn sớm nhất có thể.\n\nHãy mô tả vấn đề của bạn bên dưới.`,
      closeBtn: '🔒 Đóng Ticket',
      claimBtn: '📋 Claim',
      alreadyHas: (channelId) => `Bạn đã có ticket: <#${channelId}>`,
      created: (channelId) => `✅ Đã tạo ticket: <#${channelId}>`,
      closing: '🔒 Ticket sẽ đóng sau 5 giây...',
      confirmClose: 'Bạn có chắc muốn đóng ticket này?',
      confirmYes: '✅ Xác nhận đóng',
      confirmNo: '❌ Hủy',
      cancelled: '❌ Đã hủy đóng ticket.',
      claimed: (tag) => `📋 Ticket đã được nhận bởi **${tag}**`,
      transcriptSaved: 'Đã lưu transcript.',
    },
    en: {
      title: '🎫 Support · Grimz Cloud PC',
      description: 'Click the button below to create a private support ticket.\nStaff will respond within minutes.',
      usedFor: { name: '📋 Tickets are for', value: '• Purchase/order services\n• Report technical issues\n• Extend rental\n• Other support requests' },
      createBtn: '🎫 Open Ticket',
      supportTitle: '🎫 Support Ticket',
      supportDesc: (username) => `Hello **${username}**!\nStaff will assist you as soon as possible.\n\nPlease describe your issue below.`,
      closeBtn: '🔒 Close Ticket',
      claimBtn: '📋 Claim',
      alreadyHas: (channelId) => `You already have a ticket: <#${channelId}>`,
      created: (channelId) => `✅ Ticket created: <#${channelId}>`,
      closing: '🔒 Ticket will close in 5 seconds...',
      confirmClose: 'Are you sure you want to close this ticket?',
      confirmYes: '✅ Confirm close',
      confirmNo: '❌ Cancel',
      cancelled: '❌ Ticket close cancelled.',
      claimed: (tag) => `📋 Ticket claimed by **${tag}**`,
      transcriptSaved: 'Transcript saved.',
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

  thongbao: {
    vi: {
      types: {
        announcement: { label: '📢 Thông Báo', color: 0x7c5cbf },
        maintenance: { label: '🔧 Bảo Trì', color: 0xf59e0b },
        update: { label: '🆕 Cập Nhật', color: 0x4ade80 },
        event: { label: '🎉 Sự Kiện', color: 0xf87171 },
      },
      readBtn: '✅ Đã đọc',
      readConfirm: 'Cảm ơn bạn đã xác nhận!',
      sent: (channelId) => `✅ Đã gửi thông báo vào <#${channelId}>`,
      footerBy: (admin) => `Grimz Cloud PC · Thông báo bởi ${admin}`,
    },
    en: {
      types: {
        announcement: { label: '📢 Announcement', color: 0x7c5cbf },
        maintenance: { label: '🔧 Maintenance', color: 0xf59e0b },
        update: { label: '🆕 Update', color: 0x4ade80 },
        event: { label: '🎉 Event', color: 0xf87171 },
      },
      readBtn: '✅ Read',
      readConfirm: 'Thank you for confirming!',
      sent: (channelId) => `✅ Notification sent to <#${channelId}>`,
      footerBy: (admin) => `Grimz Cloud PC · Notification by ${admin}`,
    },
  },

  rules: {
    vi: {
      title: '📜 Nội Quy · Grimz Cloud PC',
      description: 'Vui lòng đọc kỹ và tuân thủ các quy định sau. Vi phạm có thể dẫn đến **cấm dịch vụ vĩnh viễn**.',
      discord: {
        name: '💬 Nội Quy Discord',
        value: [
          '`1.` 🚫 Không spam, flood, mention vô lý',
          '`2.` 🤬 Không toxic, chửi bới, phân biệt đối xử',
          '`3.` 📢 Không quảng cáo server/dịch vụ khác',
          '`4.` 🔞 Không share nội dung 18+, bạo lực',
          '`5.` 👤 Không giả mạo staff/admin',
          '`6.` 🎫 Không DM staff — dùng **ticket** để được hỗ trợ',
          '`7.` 🔒 Không chia sẻ thông tin cá nhân người khác',
          '`8.` ✅ Dùng đúng kênh đúng mục đích',
        ].join('\n'),
      },
      vm: {
        name: '🖥️ Nội Quy Cloud PC',
        value: [
          '`1.` ⛔ **TUYỆT ĐỐI** không Shutdown/Restart máy — liên hệ staff nếu cần',
          '`2.` ⏰ Gia hạn **trước 10 phút** khi sắp hết giờ — hết giờ máy bị thu hồi ngay',
          '`3.` 🎮 Không dùng để hack/cheat game',
          '`4.` ⛏️ Không mine crypto/farm tiền ảo',
          '`5.` 🌐 Không host server lậu hoặc tấn công DDoS',
          '`6.` 🔐 Không chia sẻ IP/mật khẩu máy cho người khác',
          '`7.` 🦠 Không cài malware, virus, tool crack',
          '`8.` 💾 Backup data trước khi hết hạn — Grimz không chịu trách nhiệm mất data',
        ].join('\n'),
      },
      warning: {
        name: '⚠️ Lưu Ý Quan Trọng',
        value: 'Vi phạm nội quy sẽ bị **xử lý ngay lập tức** mà không cần cảnh báo trước.\nGrimz Team có quyền **thu hồi máy & ban tài khoản** vĩnh viễn.',
      },
      footer: 'Grimz Cloud PC · Bằng cách sử dụng dịch vụ, bạn đồng ý với các quy định trên',
    },
    en: {
      title: '📜 Rules · Grimz Cloud PC',
      description: 'Please read carefully and follow all rules below. Violations may result in **permanent service ban**.',
      discord: {
        name: '💬 Discord Rules',
        value: [
          '`1.` 🚫 No spam, flooding, or unnecessary mentions',
          '`2.` 🤬 No toxic behavior, insults, or discrimination',
          '`3.` 📢 No advertising other servers or services',
          '`4.` 🔞 No 18+ or violent content',
          '`5.` 👤 Do not impersonate staff or admins',
          '`6.` 🎫 Do not DM staff — use a **ticket** for support',
          '`7.` 🔒 Do not share others\' personal information',
          '`8.` ✅ Use channels for their intended purpose only',
        ].join('\n'),
      },
      vm: {
        name: '🖥️ Cloud PC Rules',
        value: [
          '`1.` ⛔ **NEVER** Shutdown/Restart the machine — contact staff if needed',
          '`2.` ⏰ Extend **at least 10 minutes** before expiry — machine is reclaimed immediately after',
          '`3.` 🎮 No hacking or cheating in games',
          '`4.` ⛏️ No crypto mining or coin farming',
          '`5.` 🌐 No hosting illegal servers or DDoS attacks',
          '`6.` 🔐 Do not share machine IP or password with others',
          '`7.` 🦠 No installing malware, viruses, or crack tools',
          '`8.` 💾 Backup your data before expiry — Grimz is not responsible for data loss',
        ].join('\n'),
      },
      warning: {
        name: '⚠️ Important Notice',
        value: 'Rule violations will be **handled immediately** without prior warning.\nGrimz Team reserves the right to **revoke machines & permanently ban accounts**.',
      },
      footer: 'Grimz Cloud PC · By using our service, you agree to the above rules',
    },
  },

  bannedgames: {
    vi: {
      title: '🚫 Game Không Hỗ Trợ · Grimz Cloud PC',
      description: 'Các game sau **không chạy được** hoặc **không ổn định** trên máy ảo do anti-cheat kiểm tra môi trường VM.',
      blocked: {
        name: '🔴 Không Chạy Được',
        value: '**Riot Vanguard:** Valorant, League of Legends, TFT, 2XKO\n**EA Anti-Cheat:** Battlefield 1/V/2042/6, FC 24/25/26, F1 2024, Madden NFL 25\n**EasyAntiCheat:** Fortnite, Rust, Dead by Daylight, Fall Guys, Arc Raiders, Arena Breakout, The Finals, XDefiant\n**BattlEye:** PUBG, Grey Zone Warfare\n**Kernel-level:** COD: Black Ops 7, Star Citizen, Strinova',
      },
      unstable: {
        name: '🟡 Không Ổn Định',
        value: 'Genshin Impact, Marvel Rivals, VRChat, 7 Days to Die',
      },
      works: {
        name: '✅ Chạy Tốt',
        value: 'CS2, Dota 2, Apex Legends, Rainbow Six Siege, GTA V, Cyberpunk 2077, Elden Ring, và hầu hết game single-player',
      },
      footer: 'Grimz Cloud PC · Cập nhật theo Shadow PC & cộng đồng',
    },
    en: {
      title: '🚫 Unsupported Games · Grimz Cloud PC',
      description: 'The following games **cannot run** or are **unstable** on virtual machines due to anti-cheat detecting VM environments.',
      blocked: {
        name: '🔴 Does Not Work',
        value: '**Riot Vanguard:** Valorant, League of Legends, TFT, 2XKO\n**EA Anti-Cheat:** Battlefield 1/V/2042/6, FC 24/25/26, F1 2024, Madden NFL 25\n**EasyAntiCheat:** Fortnite, Rust, Dead by Daylight, Fall Guys, Arc Raiders, Arena Breakout, The Finals, XDefiant\n**BattlEye:** PUBG, Grey Zone Warfare\n**Kernel-level:** COD: Black Ops 7, Star Citizen, Strinova',
      },
      unstable: {
        name: '🟡 Unstable',
        value: 'Genshin Impact, Marvel Rivals, VRChat, 7 Days to Die',
      },
      works: {
        name: '✅ Works Great',
        value: 'CS2, Dota 2, Apex Legends, Rainbow Six Siege, GTA V, Cyberpunk 2077, Elden Ring, and most single-player games',
      },
      footer: 'Grimz Cloud PC · Updated via Shadow PC & community',
    },
  },
};

function t(command, lang = 'vi') {
  return translations[command]?.[lang] || translations[command]?.vi || {};
}

module.exports = { translations, t };
