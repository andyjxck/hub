// Game data and maths ported from the Void Business app source
// (github.com/andyjxck/voidbusiness: src/data/jobs.js, market.js, businesses.js,
// store.js and src/screens/HomeScreen.js). Values are copied as they are in the
// app; only a subset of the 120+ tradable stocks is used here.

export const BASE_EARN_PER_TAP = 1;
export const BOOST_MULTIPLIER = 7;
export const BOOST_DURATION = 60; // seconds
export const JOB_COOLDOWN_MS = 24 * 60 * 60 * 1000;
export const JOB_REJECT_COOLDOWN_MS = 5 * 60 * 1000;
export const JOB_REFRESH_MS = 15 * 60 * 1000;
export const INVESTMENT_TAX_RATE = 0.15;

export const CARD_SKINS = {
  default: { name: "VOIDPAY", colors: ["#1e1b4b", "#312e81", "#1e3a5f", "#0c4a6e"] },
  vip: { name: "VIP Gold", colors: ["#713f12", "#a16207", "#ca8a04", "#854d0e"] },
  income15x: { name: "Emerald", colors: ["#022c22", "#064e3b", "#047857", "#022c22"] },
  income2x: { name: "Ultraviolet", colors: ["#2e1065", "#4c1d95", "#7c3aed", "#2e1065"] },
  founders: { name: "Ember", colors: ["#431407", "#7c2d12", "#c2410c", "#431407"] },
  cash1: { name: "Slate", colors: ["#0f172a", "#1e293b", "#334155", "#0f172a"] },
  cash2: { name: "Glacier", colors: ["#083344", "#164e63", "#0e7490", "#083344"] },
  cash3: { name: "Royal", colors: ["#3b0764", "#581c87", "#7e22ce", "#3b0764"] },
  cash4: { name: "Crimson", colors: ["#450a0a", "#7f1d1d", "#b91c1c", "#450a0a"] },
};

export const JOBS = [
  { id: "barista", title: "Barista", description: "Entry-level. Easy to get, low pay.", emoji: "☕", successRate: 0.85, perTapBonus: 5, totalTaps: 100 },
  { id: "retail", title: "Retail Clerk", description: "Steady hours, decent tips.", emoji: "🛒", successRate: 0.7, perTapBonus: 6, totalTaps: 100 },
  { id: "delivery", title: "Delivery Driver", description: "More pay, more driving.", emoji: "📦", successRate: 0.55, perTapBonus: 12, totalTaps: 120 },
  { id: "office", title: "Office Worker", description: "Corporate gig. Good money.", emoji: "💼", successRate: 0.4, perTapBonus: 25, totalTaps: 180 },
  { id: "developer", title: "Software Developer", description: "Tech salary. Hard to land.", emoji: "💻", successRate: 0.28, perTapBonus: 45, totalTaps: 250 },
  { id: "executive", title: "Executive", description: "Six-figure role. Very competitive.", emoji: "📊", successRate: 0.15, perTapBonus: 50, totalTaps: 350 },
  { id: "ceo", title: "CEO", description: "Top of the ladder. Nearly impossible to get.", emoji: "👑", successRate: 0.05, perTapBonus: 40, totalTaps: 500 },
  { id: "waiter", title: "Waiter", description: "Fast-paced. Tips add up.", emoji: "🍽️", successRate: 0.8, perTapBonus: 8, totalTaps: 100 },
  { id: "mechanic", title: "Mechanic", description: "Hands-on work. Solid pay.", emoji: "🔧", successRate: 0.6, perTapBonus: 15, totalTaps: 100 },
  { id: "sales", title: "Sales Rep", description: "Commission-based. Hustle pays.", emoji: "🤝", successRate: 0.45, perTapBonus: 30, totalTaps: 150 },
  { id: "nurse", title: "Nurse", description: "Demanding but rewarding.", emoji: "🏥", successRate: 0.35, perTapBonus: 40, totalTaps: 200 },
  { id: "pilot", title: "Pilot", description: "High-flying career. Strict requirements.", emoji: "✈️", successRate: 0.2, perTapBonus: 50, totalTaps: 300 },
  { id: "lawyer", title: "Lawyer", description: "Billable hours. Big money.", emoji: "⚖️", successRate: 0.12, perTapBonus: 50, totalTaps: 400 },
  { id: "surgeon", title: "Surgeon", description: "Top of medicine. Years of training.", emoji: "🔬", successRate: 0.08, perTapBonus: 45, totalTaps: 400 },
  { id: "astronaut", title: "Astronaut", description: "Out of this world. Nearly impossible.", emoji: "🚀", successRate: 0.03, perTapBonus: 30, totalTaps: 600 },
];

// The job board shows 8 eligible jobs, shuffled with the app's seeded Fisher-Yates.
export function getAvailableJobs(seed, isOnCooldown, currentJobId) {
  const eligible = JOBS.filter((j) => !isOnCooldown(j.id) && j.id !== currentJobId);
  if (eligible.length <= 8) return eligible;
  let rng = seed % 2147483647;
  if (rng <= 0) rng += 2147483646;
  const nextRand = () => {
    rng = (rng * 16807) % 2147483647;
    return rng / 2147483647;
  };
  const shuffled = [...eligible];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(nextRand() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, 8);
}

export const STOCKS = [
  { id: "st_appl", name: "Lumora Devices", ticker: "LMDV", emoji: "🔆", basePrice: 195, volatility: 0.15, sector: "Tech" },
  { id: "st_msft", name: "Basalt Systems", ticker: "BSTX", emoji: "🗄️", basePrice: 420, volatility: 0.1, sector: "Tech" },
  { id: "st_nvda", name: "Voltaic Silicon", ticker: "VLTS", emoji: "🧠", basePrice: 920, volatility: 0.3, sector: "Semiconductors" },
  { id: "st_amd", name: "Corepeak Chips", ticker: "CRPK", emoji: "💻", basePrice: 158, volatility: 0.28, sector: "Semiconductors" },
  { id: "st_meta", name: "Holoverse Group", ticker: "HOLV", emoji: "🥽", basePrice: 480, volatility: 0.18, sector: "Social" },
  { id: "st_nflx", name: "Reelstream", ticker: "RLST", emoji: "🎬", basePrice: 610, volatility: 0.2, sector: "Streaming" },
  { id: "st_spot", name: "Tunebox Audio", ticker: "TNBX", emoji: "🎧", basePrice: 320, volatility: 0.22, sector: "Streaming" },
  { id: "st_reddit", name: "Threadhive", ticker: "THDV", emoji: "🧵", basePrice: 55, volatility: 0.4, sector: "Social" },
  { id: "st_amzn", name: "Parcelwood", ticker: "PRWD", emoji: "📦", basePrice: 185, volatility: 0.14, sector: "Retail" },
  { id: "st_cost", name: "Bulkyard Club", ticker: "BKYD", emoji: "🏬", basePrice: 780, volatility: 0.08, sector: "Retail" },
  { id: "st_tesl", name: "Sparkvolt Motors", ticker: "SPKV", emoji: "🔋", basePrice: 248, volatility: 0.25, sector: "Auto" },
  { id: "st_rivn", name: "Trailbend EV", ticker: "TRBV", emoji: "🛻", basePrice: 13, volatility: 0.4, sector: "Auto" },
  { id: "st_jpm", name: "Crestmont Bank", ticker: "CRSB", emoji: "🏦", basePrice: 198, volatility: 0.08, sector: "Finance" },
  { id: "st_visa", name: "Swipestone", ticker: "SWPS", emoji: "💳", basePrice: 275, volatility: 0.07, sector: "Finance" },
  { id: "st_xom", name: "Deepwell Petroleum", ticker: "DWPT", emoji: "⛽", basePrice: 115, volatility: 0.09, sector: "Energy" },
  { id: "st_bp", name: "Sunfield Power", ticker: "SNFP", emoji: "🌞", basePrice: 35, volatility: 0.12, sector: "Energy" },
];

export const SECTORS = ["All", "Tech", "Semiconductors", "Social", "Streaming", "Retail", "Auto", "Finance", "Energy"];

const SECTOR_HOURLY_YIELDS = {
  Tech: 0.0006,
  Semiconductors: 0.0004,
  Social: 0.0002,
  Streaming: 0.0002,
  Retail: 0.0012,
  Auto: 0.0005,
  Finance: 0.0015,
  Energy: 0.002,
};

export const RANGES = [
  { id: "1D", frac: 0.15 },
  { id: "1W", frac: 0.35 },
  { id: "1M", frac: 0.6 },
  { id: "1Y", frac: 0.85 },
  { id: "ALL", frac: 1 },
];

const TICKER_COLORS = ["#2563eb", "#7c3aed", "#db2777", "#0891b2", "#65a30d", "#ea580c", "#0d9488", "#4f46e5", "#c026d3", "#0ea5e9"];

export function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export function getTickerColor(id) {
  return TICKER_COLORS[hashString(id) % TICKER_COLORS.length];
}

export function sliceHistory(history, frac) {
  if (!history || history.length < 3) return history;
  const n = Math.max(2, Math.round(history.length * frac));
  return history.slice(-n);
}

// Deterministic per-asset drift, -0.8% to +0.8% per hour
function getAssetDrift(asset) {
  let hash = 0;
  for (let i = 0; i < asset.id.length; i++) {
    hash = (hash << 5) - hash + asset.id.charCodeAt(i);
    hash |= 0;
  }
  const normalized = (Math.abs(hash) % 1000) / 1000;
  return -0.008 + normalized * 0.016;
}

function normalRandom() {
  let u = 0;
  let v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

// Geometric Brownian motion step, as in the app's simulatePriceChange
function simulatePriceChange(currentPrice, volatility, drift, minutesElapsed) {
  const dtHours = minutesElapsed / 60;
  const sigma = volatility * Math.sqrt(dtHours);
  const mu = drift * dtHours;
  const change = Math.exp(mu - 0.5 * sigma * sigma + sigma * normalRandom());
  const base = Number.isFinite(currentPrice) && currentPrice > 0 ? currentPrice : 0.01;
  const next = base * change;
  if (!Number.isFinite(next)) return base;
  return Math.min(base * 1e3, Math.max(next, 0.01));
}

// Seeds every asset with 30 minutes of history so the charts have data at once
// while prices stay close to their base price.
export function createInitialMarketState() {
  const state = {};
  for (const asset of STOCKS) {
    const drift = getAssetDrift(asset);
    const history = [asset.basePrice];
    let price = asset.basePrice;
    for (let i = 0; i < 29; i++) {
      price = simulatePriceChange(price, asset.volatility, drift, 1);
      history.push(price);
    }
    state[asset.id] = { id: asset.id, price, prevPrice: history[history.length - 2], history };
  }
  return state;
}

export function stepMarket(marketState, minutesElapsed) {
  const next = {};
  for (const asset of STOCKS) {
    const current = marketState[asset.id];
    const price = simulatePriceChange(current.price, asset.volatility, getAssetDrift(asset), minutesElapsed);
    next[asset.id] = { id: asset.id, price, prevPrice: current.price, history: [...current.history, price].slice(-30) };
  }
  return next;
}

// Net dividend per share per hour (sector yield of price, after 15% investment tax)
export function getHourlyDividend(asset, state) {
  const price = state ? state.price : asset.basePrice;
  return (SECTOR_HOURLY_YIELDS[asset.sector] || 0) * price * (1 - INVESTMENT_TAX_RATE);
}

export function getChangePercent(current, previous) {
  if (!previous) return 0;
  return ((current - previous) / previous) * 100;
}

export function formatMoney(n) {
  const sym = "$";
  if (n == null || !Number.isFinite(n)) return sym + "0";
  if (n < 0) return "-" + formatMoney(-n);
  if (n >= 1e12) return sym + (n / 1e12).toFixed(2) + "T";
  if (n >= 1e9) return sym + (n / 1e9).toFixed(2) + "B";
  if (n >= 1e6) return sym + (n / 1e6).toFixed(2) + "M";
  if (n >= 1e3) return sym + (n / 1e3).toFixed(2) + "K";
  return sym + n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

export function formatPrice(n) {
  const sym = "$";
  if (n == null || !Number.isFinite(n)) return sym + "0.00";
  if (n >= 1e9) return sym + (n / 1e9).toFixed(2) + "B";
  if (n >= 1e6) return sym + (n / 1e6).toFixed(2) + "M";
  if (n >= 1e3) return sym + (n / 1e3).toFixed(2) + "K";
  if (n >= 1) return sym + n.toFixed(2);
  return sym + n.toFixed(4);
}

export function formatQty(n) {
  if (n == null || !Number.isFinite(n)) return "0";
  if (n >= 1e6) return (n / 1e6).toFixed(2) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
  return n.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

export function formatPercent(n) {
  if (!Number.isFinite(n)) return "0.00%";
  return (n >= 0 ? "+" : "") + n.toFixed(2) + "%";
}

// Market news, using the app's stock and market headline templates
const NEWS_SOURCES = ["Void Wire", "The Ledger", "Ticker Tribune", "Bullhorn Daily", "Tycoon Times", "Coinside Report"];
let newsId = 0;

export function generateNewsItem(marketState) {
  const getChange = (id) => {
    const s = marketState[id];
    return s ? getChangePercent(s.price, s.prevPrice) : 0;
  };
  const source = NEWS_SOURCES[Math.floor(Math.random() * NEWS_SOURCES.length)];
  newsId += 1;
  if (Math.random() < 0.8) {
    const asset = STOCKS[Math.floor(Math.random() * STOCKS.length)];
    const change = getChange(asset.id);
    const verbs = change >= 0 ? ["surges", "rallies", "gains", "climbs"] : ["plummets", "slips", "drops", "falls"];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    return { id: newsId, ticker: asset.ticker, headline: `${asset.name} ${verb} ${formatPercent(Math.abs(change))}`, source, change, category: asset.sector };
  }
  const changes = STOCKS.map((a) => getChange(a.id));
  const avg = changes.reduce((a, b) => a + b, 0) / changes.length;
  let headline = "Markets mixed as investors weigh outlook";
  if (avg > 5) headline = "Markets rally across the board";
  else if (avg < -5) headline = "Market selloff intensifies";
  return { id: newsId, ticker: "MKT", headline, source, change: avg, category: "Markets" };
}

// Businesses: BUSINESS_CATEGORIES, tax rates and upgrade cost from businesses.js,
// icons and colours from BusinessScreen.js
export const BUSINESSES = [
  { type: "cafe", section: "Cafe", name: "Local Cafe", category: "Local", desc: "Max Lv 30", cost: 5000, taxRate: 0.2, icon: "cafe", color: "#fbbf24" },
  { type: "bus", section: "Bus Service", name: "Void City Bus Service", category: "Transport", desc: "Manage a fleet of buses", cost: 25000, taxRate: 0.05, icon: "bus", color: "#34d399" },
  { type: "courier", section: "Courier Service", name: "Void City Courier", category: "Logistics", desc: "Deliver food, parcels & taxis", cost: 120000, taxRate: 0.15, icon: "bicycle", color: "#38bdf8" },
  { type: "clothing", section: "Clothing Factory", name: "Clothing Factory", category: "Fashion", desc: "Buy & sell clothing & jewellery", cost: 600000, taxRate: 0.22, icon: "shirt", color: "#ec4899" },
  { type: "construction", section: "Construction", name: "Construction Firm", category: "Construction", desc: "Buy materials, build structures, earn big payouts", cost: 3000000, taxRate: 0.12, icon: "hammer", color: "#f97316" },
  { type: "dealership", section: "Vehicle Dealership", name: "Vehicle Dealership", category: "Automotive", desc: "Buy & sell vehicles across the city", cost: 15000000, taxRate: 0.18, icon: "car-sport", color: "#22d3ee" },
  { type: "gamedev", section: "Game Dev", name: "Indie Studio", category: "Game Dev", desc: "Create games, earn ratings & royalties", cost: 80000000, taxRate: 0.25, icon: "game-controller", color: "#a78bfa" },
  { type: "moviestudio", section: "Movie Studio", name: "Movie Studio", category: "Entertainment", desc: "Hire actors, crew & scriptwriters. Produce movies!", cost: 400000000, taxRate: 0.25, icon: "film", color: "#f472b6" },
  { type: "bank", section: "Bank", name: "Void City Bank", category: "Finance", desc: "Set deposit & credit rates, attract depositors", cost: 2500000000, taxRate: 0.28, icon: "business", color: "#22c55e" },
];

export const BUSINESS_MAX_LEVEL = 30;

export function getUpgradeCost(business) {
  return Math.floor(business.cost * 0.1 * Math.pow(1.15, business.level));
}
