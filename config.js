require('dotenv').config();

module.exports = {
  TOKEN: process.env.BOT_TOKEN,
  CLIENT_ID: process.env.CLIENT_ID,
  GUILD_ID: process.env.GUILD_ID,
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_KEY: process.env.SUPABASE_KEY,

  CHANNELS: {
    pricing: '1482671656358117458',
    plans: '1482671707302002728',
    order: '1482671758166327418',
    panel: '1482671832304718055',
    connect: '1482671947400613970',
    status: '1482672090946736217',
    banned: '1482672145065705504',
    faq: '1482672190070591508',
  },

  COLORS: { purple: 0x7c5cbf, green: 0x4ade80, red: 0xf87171, yellow: 0xfbbf24, blue: 0x5865F2 },
};
