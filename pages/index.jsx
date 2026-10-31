// /pages/index.jsx - Portfolio Homepage with Rich App Sections
import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import ZenVoidToday from "../app-components/zenvoid/ZenVoidToday";
import BloomToday from "../app-components/bloom/BloomToday";
import BloomVisual from "../app-components/BloomVisual";
import TapTapThreeVisual from "../app-components/TapTapThreeVisual";
import GameVoidVisual from "../app-components/GameVoidVisual";
import SocialVoidVisual from "../app-components/SocialVoidVisual";
import DreamieVisual from "../app-components/DreamieVisual";
import VoidMusicianVisual from "../app-components/VoidMusicianVisual";
import VoidMusicianSessionWidget from "../app-components/VoidMusicianSessionWidget";
import MaintainAVisual from "../app-components/MaintainAVisual";
import GameVoid2Visual from "../app-components/GameVoid2Visual";
import TownWallVisual from "../app-components/TownWallVisual";
import VoidSurvivalVisual from "../app-components/VoidSurvivalVisual";
import FSCardsVisual from "../app-components/FSCardsVisual";
import FootballLifeVisual from "../app-components/FootballLifeVisual";
import FitVoidVisual from "../app-components/FitVoidVisual";
import ZenVoidMoonBackground from "../app-components/zenvoid/MoonBackground";
import BloomOrbBackground from "../app-components/bloom/BloomOrbBackground";

// App data with rich descriptions
const APPS = [
  {
    id: "fit-void",
    name: "Fit Void",
    tagline: "Lift. Eat. Track.",
    description: "Fit Void is an offline-first strength, meal and body tracker. Everything you log lives on your device in SQLite and works offline — cloud sync and social features are optional.",
    fullDesc: "Fit Void is an offline-first strength, meal and body tracker. Everything you log lives on your device in SQLite and works offline — cloud sync and social features are optional. Log sets, reps and weights with a live workout state machine, ghost sets and a rest HUD. Track personal records and build routines. Plan meals, scan barcodes with Open Food Facts and import recipes from a link. Track body metrics with volume radar, fatigue intelligence and 1RM predictions (Void Pro). Apple Health data is read locally and never uploaded. No analytics, no ads, no tracking. Free tier covers logging, meals and body metrics; Void Pro adds advanced analytics, cloud sync and custom exercises.",
    emoji: "�️",
    color: "#a3e635",
    bg: "linear-gradient(135deg, #0a1a0c 0%, #1a2a14 50%, #060f09 100%)",
    link: "/fit-void",
    status: "coming-soon",
    platforms: ["ios", "android"],
    external: false,
    features: ["Workout Logging", "Meal Tracking", "Body Metrics", "Apple Health", "Local-First Privacy", "Optional Cloud Sync"],
    storeLinks: {},
  },
  {
    id: "football-life",
    name: "Void Baller",
    tagline: "Rise. Play. Become a Legend.",
    description: "Void Baller is a football career simulator where you manage your rise from academy prospect to world-class superstar. Train, play matches, sign contracts, and build your legacy.",
    fullDesc: "Void Baller is a football career simulator where you manage your rise from academy prospect to world-class superstar. Start as a youth prospect, develop your skills through training, and rise through the ranks. Play matches, improve your stats, and sign with clubs. Negotiate contracts, build your reputation, and manage your public image on social media. Sign endorsement deals to earn extra income. Move between clubs in the transfer market and earn caps for your national team. Win league titles, cups, and individual awards. Based on the Void Musician codebase, adapted for football simulation.",
    emoji: "⚽",
    color: "#fbbf24",
    bg: "linear-gradient(135deg, #1a1000 0%, #713f12 50%, #0c0900 100%)",
    link: "/football-life",
    status: "live",
    platforms: ["ios", "android"],
    external: false,
    features: ["Career Progression", "Match Performance", "Club Management", "Training System", "Social Media", "Endorsements", "Transfer Market", "International Career", "Trophies"],
    storeLinks: {
      ios: "https://apps.apple.com/gb/app/void-baller-football-sim/id6781029771",
    },
  },
  {
    id: "zen-void",
    name: "Zen Void",
    tagline: "Never gating mental health",
    description: "I built Zen Void because I was tired of mental health apps that gate their best features behind paywalls. Your mental wellness shouldn't be a subscription service.",
    fullDesc: "I built Zen Void because I was tired of mental health apps that gate their best features behind paywalls. Your mental wellness shouldn't be a subscription service. The app is centered around Zeno, your AI companion. You can chat with Zeno about anything - anxiety, stress, just having a rough day. The journal is end-to-end encrypted - your entries never leave your device unencrypted. There's breathing exercises, body scans, grounding techniques - the stuff that actually helps when you're spiraling. The daily check-in tracks your sleep, mood, gratitude, and social battery. Over time you build up patterns and insights. Zen Void is free to download with optional ad removal. No subscriptions, no premium tiers locking core features.",
    emoji: "🪷",
    features: [],
    platforms: ["iOS", "Android"],
    status: "live",
    bg: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    color: "#a78bfa",
    link: "/zen-void",
    external: false,
    storeLinks: {
      ios: "https://apps.apple.com/gb/app/zen-void-mood-journal-ai/id6754387933",
    },
  },
  {
    id: "bloom",
    name: "Bloom",
    tagline: "Never paywalling mental health tools",
    description: "Bloom started as a personal project. I wanted a sobriety companion that actually respected privacy - no cloud storage, no analytics, no data mining. Your recovery journey is yours alone.",
    fullDesc: "Bloom started as a personal project. I wanted a sobriety companion that actually respected privacy - no cloud storage, no analytics, no data mining. Your recovery journey is yours alone. The core is the sobriety timer with a virtual pet (dog or cat) that grows with you. When you're doing well, it's excited. When you're struggling, it looks worried. The craving tools are practical - breathing exercises, a 10-minute ride it out timer, your why statement, and a distraction list. The journal is completely local - nothing leaves your device. Milestones are automatic at 24 hours, 7 days, 30 days, 90 days, 6 months, 1 year. Like Zen Void, Bloom is free. No subscriptions, no premium features locked behind paywalls.",
    emoji: "🐕",
    color: "#34d399",
    bg: "linear-gradient(135deg, #071a0c 0%, #065f46 50%, #060f09 100%)",
    status: "live",
    platforms: ["ios", "android"],
    features: ["Virtual Pet (Dog/Cat)", "Live Sobriety Timer", "Craving Tools", "Private Journal", "Milestone Celebrations"],
    link: "/bloom",
    external: false,
    storeLinks: {
      ios: "https://apps.apple.com/gb/app/bloom-sobriety-tracker/id6760922929",
    },
  },
  {
    id: "game-void",
    name: "Game Void",
    tagline: "Play. Compete. Win.",
    description: "Game Void is my collection of mini-games. I wanted one place for all the classics - the games you play when you're bored, waiting for something, or just need a quick break.",
    fullDesc: "Game Void is my collection of mini-games. I wanted one place for all the classics - the games you play when you're bored, waiting for something, or just need a quick break. There are 40+ games now - Sudoku, Chess, Snake, 2048, Solitaire, Bingo, and Void originals like Void Trivia, Void Ball, Void Invaders, Whack-A-Tap. The multiplayer is real-time with chat and global leaderboards. Daily challenges give you something new every day. Everything works offline. Game Void is free to play with ads - no in-app purchases, no watch-this-video-to-continue gates.",
    emoji: "🎮",
    color: "#f87171",
    bg: "linear-gradient(180deg, #05070D 0%, #0A1122 40%, #101B33 70%, #0C1020 100%)",
    link: "/game-void",
    status: "live",
    platforms: ["ios", "android", "web"],
    external: false,
    features: ["40+ Mini-Games", "Sudoku & Chess", "Snake & 2048", "Offline Play", "High Score Leaderboards"],
    storeLinks: {
      ios: "https://apps.apple.com/gb/app/game-void/id6751643961",
      android: "https://play.google.com/store/apps/details?id=com.andysocial.gamevoid0&pli=1",
    },
  },
  {
    id: "social-void",
    name: "Social Void",
    tagline: "Merge. Escape. Survive the social chaos.",
    description: "Social Void is a merge game about avoiding social interaction. It started as a joke - what if the goal of a game was to be as antisocial as possible? Then I kept adding recipes and it became something actually fun.",
    fullDesc: "Social Void is a merge game about avoiding social interaction. It started as a joke - what if the goal of a game was to be as antisocial as possible? You start with four basic items: Solitude, Coffee, Darkness, and Phone. Merge them to discover 500+ recipes - everything from Introvert Paradise to Hermit Kingdom to Villain Arc. The recipes are funny because they're relatable. Chaos Events spawn intrusive social items like Small Talk and Family Obligation that disrupt your board. Prestige lets you reset for permanent bonuses. Seasons bring themed content. Social Void is free to play with ads and optional purchases for speed-ups and cosmetics.",
    emoji: "🧩",
    color: "#60a5fa",
    bg: "linear-gradient(135deg, #0c1e30 0%, #075985 50%, #030d18 100%)",
    link: "/social-void",
    status: "live",
    platforms: ["web", "mobile"],
    external: false,
    features: ["500+ Merge Recipes", "Chaos Events", "Prestige System", "Seasons & Albums", "Daily Challenges"],
    storeLinks: {
      ios: "https://apps.apple.com/gb/app/social-void/id6751636874",
    },
  },
  {
    id: "tap-tap-three",
    name: "Tap Tap Three",
    tagline: "Tap. Invest. Dominate.",
    description: "Tap Tap Three is the third evolution of my idle tapping games. I wanted something that went beyond just tapping - a game with actual depth, systems that interact with each other, and progression that feels meaningful.",
    fullDesc: "Tap Tap Three is the third evolution of my idle tapping games. I wanted something that went beyond just tapping - a game with actual depth, systems that interact with each other, and progression that feels meaningful. The core is still tapping to earn coins, but those coins go into a real stock market with 8 different stocks that fluctuate in real-time. You can buy low, sell high, day trade, or hold long-term. Then there's the business empire - hire employees who generate passive income, launch projects that take time to complete but pay out big. The vault protects your earnings from market crashes and earns interest. Prestige is the endgame - reset your progress for a permanent multiplier that makes your next run faster. The numbers get absurd. That's the point.",
    emoji: "👆",
    color: "#fbbf24",
    bg: "linear-gradient(135deg, #1a1000 0%, #713f12 50%, #0c0900 100%)",
    link: "/tap-tap-three",
    status: "live",
    platforms: ["ios", "android", "web"],
    external: false,
    features: ["Stock Market Trading", "Business Empire", "Vault System", "Prestige & Upgrades", "Daily Events"],
    storeLinks: {
      ios: "https://apps.apple.com/gb/app/tap-tap-three-market-rise/id6755093222",
    },
  },
  {
    id: "dreamie",
    name: "dreamie.store",
    tagline: "Browse. Trade. Collect.",
    description: "Dreamie is an Animal Crossing villager trading platform. I built it for my girlfriend - she's a huge Animal Crossing fan who loves trading villagers. The existing trading methods were chaotic: Discord servers, Twitter threads, Reddit posts.",
    fullDesc: "Dreamie is an Animal Crossing villager trading platform. I built it for my girlfriend - she's a huge Animal Crossing fan who loves trading villagers. The existing trading methods were chaotic: Discord servers, Twitter threads, Reddit posts. The catalog has 400+ villagers with search by name, species, personality, or popularity. Add villagers to your basket and request multiple at once. The queue system is first-come-first-serve with plot-ready verification for priority. Scheduling is built in - book timeslots and get Dodo codes at the scheduled time. Trade verification builds reputation. Real-time notifications keep you updated on queue position, trade acceptance, and Dodo code sharing.",
    emoji: "�️",
    color: "#a78bfa",
    bg: "linear-gradient(135deg, #1a0f2e 0%, #312e81 50%, #0e0814 100%)",
    link: "/dreamie",
    status: "live",
    platforms: ["web"],
    external: false,
    features: ["400+ Villager Catalog", "Queue Trading System", "Dodo Code Distribution", "Plot-Ready Verification", "Trade Scheduling"],
    storeLinks: {
      web: "https://dreamie.store",
    },
  },
];

// AppIconImage component for apps with real icons
function AppIconImage({ src, color }) {
  return (
    <div className="app-icon-container">
      <img src={src} alt="App Icon" className="app-icon-img" />
      <div className="icon-glow" style={{ background: color }} />
      <style jsx>{`
        .app-icon-container {
          position: relative;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .app-icon-img {
          width: 180px;
          height: 180px;
          border-radius: 40px;
          object-fit: cover;
          position: relative;
          z-index: 2;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }
        .icon-glow {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.4;
          z-index: 1;
          animation: glow-pulse 3s ease-in-out infinite;
        }
        @keyframes glow-pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}

// Map app IDs to their actual icon paths
const APP_ICONS = {
  "fit-void": "/app-assets/fit-void-icon.png",
  "zen-void": "/app-assets/zen-void-icon.png",
  "bloom": "/app-assets/bloom-icon.png",
  "tap-tap-three": "/app-assets/tap-tap-three-icon.png",
  "game-void": "/app-assets/game-void-icon.png",
  "social-void": "/app-assets/social-void-icon.png",
  "dreamie": "/app-assets/dreamie-icon.png",
  "void-musician": "/app-assets/void-musician-icon.png",
};

// Device mockup wrappers
function PhoneMockup({ children, shadow = 'rgba(0,0,0,0.7)' }) {
  return (
    <div style={{ position:'relative', width:'240px', height:'500px', background:'#111118', borderRadius:'38px', border:'2px solid rgba(255,255,255,0.13)', overflow:'hidden', boxShadow:`0 40px 100px ${shadow}, 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.09)`, flexShrink:0 }}>
      <div style={{ position:'absolute', top:'11px', left:'50%', transform:'translateX(-50%)', width:'76px', height:'20px', background:'#0a0a10', borderRadius:'12px', zIndex:20 }} />
      <div style={{ position:'absolute', inset:0, borderRadius:'37px', overflow:'hidden' }}>{children}</div>
      <div style={{ position:'absolute', bottom:'7px', left:'50%', transform:'translateX(-50%)', width:'80px', height:'4px', background:'rgba(255,255,255,0.22)', borderRadius:'3px', zIndex:20 }} />
    </div>
  );
}
function BrowserMockup({ children, url }) {
  return (
    <div style={{ width:'100%', maxWidth:'440px', background:'#151515', borderRadius:'12px', border:'1px solid rgba(255,255,255,0.1)', overflow:'hidden', boxShadow:'0 30px 80px rgba(0,0,0,0.7)' }}>
      <div style={{ background:'#222', padding:'9px 14px', display:'flex', alignItems:'center', gap:'8px', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display:'flex', gap:'5px', flexShrink:0 }}>
          {['#ef4444','#f59e0b','#22c55e'].map(c => <div key={c} style={{ width:'11px', height:'11px', borderRadius:'50%', background:c }} />)}
        </div>
        <div style={{ flex:1, background:'#2d2d2d', borderRadius:'6px', padding:'5px 10px', fontSize:'11px', color:'rgba(255,255,255,0.3)', overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis' }}>{url}</div>
      </div>
      {children}
    </div>
  );
}

// App visuals — adapted from real app source code
// Note: Visual components are imported directly, no wrapper functions needed

// Zen Void visual — no phone border, just the live app preview filling the column
function ZenVoidPhonePreview() {
  return (
    <div style={{ 
      width: "100%",
      maxWidth: "460px",
      minHeight: "560px",
      borderRadius: "20px",
      overflow: "hidden",
      position: "relative",
    }}>
      <ZenVoidToday />
    </div>
  );
}

// Bloom visual — no phone border, live app preview filling the column
function BloomPhonePreview() {
  return (
    <div style={{
      width: "100%",
      maxWidth: "460px",
      minHeight: "560px",
      borderRadius: "20px",
      overflow: "hidden",
      position: "relative",
    }}>
      <BloomToday />
    </div>
  );
}

// Map visuals to apps - using adapted components from real app source code
const VISUALS = {
  "fit-void": FitVoidVisual,
  "zen-void": ZenVoidPhonePreview,
  "bloom": BloomPhonePreview,
  "tap-tap-three": TapTapThreeVisual,
  "game-void": GameVoidVisual,
  "social-void": SocialVoidVisual,
  "dreamie": DreamieVisual,
  "void-musician": VoidMusicianSessionWidget,
  "football-life": FootballLifeVisual,
};

// Single App Section Component
function AppSection({ app, index }) {
  const VisualComponent = VISUALS[app.id];
  const isEven = index % 2 === 0;

  // Map app IDs to their page routes
  const appRoutes = {
    "fit-void": "/fit-void",
    "zen-void": "/zenvoid",
    "bloom": "/bloom",
    "tap-tap-three": "/taptapthree",
    "game-void": "/gamevoid",
    "social-void": "/socialvoid",
    "football-life": "/football-life",
  };

  const appRoute = appRoutes[app.id];

  // Zen Void, Bloom and Tap Tap Three are special — full background + left column as link
  const isFitVoid = app.id === "fit-void";
  const isZenVoid = app.id === "zen-void";
  const isBloom = app.id === "bloom";
  const isTapTapThree = app.id === "tap-tap-three";
  const isGameVoid = app.id === "game-void";
  const isSocialVoid = app.id === "social-void";
  const isDreamie = app.id === "dreamie";
  const isVoidMusician = app.id === "void-musician";
  const isFootballLife = app.id === "football-life";

  if (isFitVoid) {
    return (
      <section style={{ position: 'relative', background: 'linear-gradient(160deg, #0a1a0c 0%, #1a2a14 50%, #060f09 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 20px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
            <Link href="/fit-void" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '24px', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src="/app-assets/fit-void-icon.png" alt="Fit Void" width={56} height={56} style={{ borderRadius: '12px', flexShrink: 0 }} />
                <span style={{ padding: '8px 20px', borderRadius: '24px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', background: 'rgba(163,230,53,0.15)', color: '#a3e635', border: '1px solid rgba(163,230,53,0.3)' }}>Coming Soon</span>
              </div>
              <h2 style={{ fontSize: '64px', fontWeight: '900', color: '#f8fafc', lineHeight: 1.1, margin: 0 }}>{app.name}</h2>
              <p style={{ fontSize: '20px', fontWeight: '500', color: app.color, margin: 0 }}>{app.tagline}</p>
              <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>{app.fullDesc}</p>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: app.color }}>→</div>
            </Link>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '520px' }}>
              {VisualComponent && <VisualComponent />}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (isTapTapThree) {
    return (
      <section style={{ position: 'relative', background: 'linear-gradient(160deg, #0a0514 0%, #1e0b3d 50%, #0f0520 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 20px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
            <Link href="/taptapthree" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '24px', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src="/app-assets/tap-tap-three-icon.png" alt="Tap Tap Three" width={56} height={56} style={{ borderRadius: '12px', flexShrink: 0 }} />
                <span style={{ padding: '8px 20px', borderRadius: '24px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', background: 'rgba(34,197,94,0.25)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' }}>Available Now</span>
              </div>
              <h2 style={{ fontSize: '64px', fontWeight: '900', color: '#f8fafc', lineHeight: 1.1, margin: 0 }}>{app.name}</h2>
              <p style={{ fontSize: '20px', fontWeight: '500', color: app.color, margin: 0 }}>{app.tagline}</p>
              <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>{app.fullDesc}</p>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: app.color }}>→</div>
            </Link>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '520px' }}>
              {VisualComponent && <VisualComponent />}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (isGameVoid) {
    return (
      <section style={{ position: 'relative', background: 'linear-gradient(180deg, #05070D 0%, #0A1122 40%, #101B33 70%, #0C1020 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 20px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {VisualComponent && <VisualComponent />}
            </div>
            <Link href="/gamevoid" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '24px', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src="/app-assets/game-void-icon.png" alt="Game Void" width={56} height={56} style={{ borderRadius: '12px', flexShrink: 0 }} />
                <span style={{ padding: '8px 20px', borderRadius: '24px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', background: 'rgba(34,197,94,0.25)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' }}>Available Now</span>
              </div>
              <h2 style={{ fontSize: '64px', fontWeight: '900', color: '#f8fafc', lineHeight: 1.1, margin: 0 }}>{app.name}</h2>
              <p style={{ fontSize: '20px', fontWeight: '500', color: app.color, margin: 0 }}>{app.tagline}</p>
              <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>{app.fullDesc}</p>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: app.color }}>→</div>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (isBloom) {
    return (
      <section className="bloom-section" style={{ position: 'relative', background: 'transparent' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <BloomOrbBackground />
        </div>
        <div className="bloom-content" style={{ position: 'relative', zIndex: 10 }}>
          <div className={`bloom-layout ${isEven ? 'text-left' : 'text-right'}`}>
            <Link href="/bloom" style={{ textDecoration: "none", display: "contents" }}>
            <div className="bloom-text">
                <div className="app-header">
                  <img src="/app-assets/bloom-icon.png" alt="Bloom" width={56} height={56} style={{ borderRadius: "12px", flexShrink: 0 }} />
                  <span className="status-badge live">Available for iOS</span>
                </div>
                <h2 className="app-name">{app.name}</h2>
                <p className="app-tagline" style={{ color: app.color }}>{app.tagline}</p>
                <p className="app-description">{app.fullDesc}</p>
                <div className="arrow-indicator" style={{ color: app.color }}>→</div>
            </div>
            </Link>
            <div className="bloom-visual">
              {VisualComponent && <VisualComponent />}
            </div>
          </div>
        </div>
        <style jsx>{`
          .bloom-section {
            min-height: 100vh; display: flex; align-items: center;
            padding: 120px 20px; position: relative; overflow: hidden; cursor: default;
          }
          .bloom-content { max-width: 1400px; margin: 0 auto; width: 100%; }
          .bloom-layout {
            display: grid; grid-template-columns: 1fr 1fr;
            gap: 100px; align-items: center;
          }
          .bloom-layout.text-right { direction: rtl; }
          .bloom-layout.text-right > * { direction: ltr; }
          .bloom-text { display: flex; flex-direction: column; gap: 24px; cursor: pointer; }
          .app-header { display: flex; align-items: center; gap: 16px; }
          .app-emoji { font-size: 56px; filter: drop-shadow(0 8px 16px rgba(0,0,0,0.4)); }
          .status-badge { padding: 8px 20px; border-radius: 24px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
          .status-badge.live { background: rgba(34,197,94,0.25); color: #4ade80; border: 1px solid rgba(34,197,94,0.3); }
          .app-name { font-size: 64px; font-weight: 900; color: #f8fafc; line-height: 1.1; margin: 0; }
          .app-tagline { font-size: 20px; font-weight: 500; color: #cbd5e1; margin: 0; }
          .app-description { font-size: 17px; color: #94a3b8; line-height: 1.6; margin: 0; }
          .arrow-indicator { font-size: 24px; font-weight: bold; }
          .bloom-text:hover .app-name { color: #6ee7b7; transition: color 0.2s ease; }
          .bloom-text:hover .arrow-indicator { transform: translateX(6px); transition: transform 0.2s ease; }
          .bloom-visual { display: flex; justify-content: center; align-items: center; min-height: 0; }
          @media (max-width: 1024px) {
            .bloom-layout { grid-template-columns: 1fr; gap: 60px; }
            .bloom-layout.text-right { direction: ltr; }
            .bloom-layout.text-right > * { direction: ltr; }
            .bloom-visual { order: -1; }
          }
        `}</style>
      </section>
    );
  }

  if (isZenVoid) {
    return (
      <section className="app-section" style={{ position: 'relative', background: 'transparent' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <ZenVoidMoonBackground moodTrend={3} theme="aurora" />
        </div>
        <div className="section-content" style={{ position: 'relative', zIndex: 10 }}>
          <div className={`section-layout ${isEven ? 'text-left' : 'text-right'}`}>
            <Link href="/zenvoid" style={{ textDecoration: "none", display: "contents" }}>
            <div className="text-content zen-void-left">
                <div className="app-header">
                  <img src="/app-assets/zen-void-icon.png" alt="Zen Void" width={56} height={56} style={{ borderRadius: "12px", flexShrink: 0 }} />
                  <span className={`status-badge ${app.status}`}>
                    Available for iOS
                  </span>
                </div>
                <h2 className="app-name">{app.name}</h2>
                <p className="app-tagline" style={{ color: app.color }}>{app.tagline}</p>
                <p className="app-description">{app.fullDesc}</p>
                <div className="arrow-indicator" style={{ color: app.color }}>→</div>
            </div>
            </Link>
            <div className="visual-content">
              {VisualComponent && <VisualComponent />}
            </div>
          </div>
        </div>
        <style jsx>{`
          .app-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 120px 20px;
            position: relative;
            overflow: hidden;
            cursor: default;
            background: transparent;
          }
          .section-content {
            max-width: 1400px;
            margin: 0 auto;
            width: 100%;
          }
          .section-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 100px;
            align-items: center;
          }
          .section-layout.text-right {
            direction: rtl;
          }
          .section-layout.text-right > * {
            direction: ltr;
          }
          .text-content {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          .app-header {
            display: flex;
            align-items: center;
            gap: 16px;
          }
          .app-emoji {
            font-size: 56px;
            filter: drop-shadow(0 8px 16px rgba(0,0,0,0.4));
          }
          .status-badge {
            padding: 8px 20px;
            border-radius: 24px;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .status-badge.live {
            background: rgba(34, 197, 94, 0.25);
            color: #4ade80;
            border: 1px solid rgba(34, 197, 94, 0.3);
          }
          .status-badge.beta {
            background: rgba(251, 191, 36, 0.25);
            color: #fbbf24;
            border: 1px solid rgba(251, 191, 36, 0.3);
          }
          .status-badge.coming-soon {
            background: rgba(148, 163, 184, 0.25);
            color: #94a3b8;
            border: 1px solid rgba(148, 163, 184, 0.3);
          }
          .app-name {
            font-size: 64px;
            font-weight: 900;
            color: #f8fafc;
            line-height: 1.1;
            margin: 0;
          }
          .app-tagline {
            font-size: 20px;
            font-weight: 500;
            color: #cbd5e1;
            margin: 0;
          }
          .app-description {
            font-size: 17px;
            color: #94a3b8;
            line-height: 1.6;
            margin: 0;
          }
          .arrow-indicator {
            font-size: 24px;
            font-weight: bold;
          }
          .zen-void-left {
            cursor: pointer;
          }
          .zen-void-left:hover .app-name {
            color: #c4b5fd;
            transition: color 0.2s ease;
          }
          .zen-void-left:hover .arrow-indicator {
            transform: translateX(6px);
            transition: transform 0.2s ease;
          }
          .visual-content {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 0;
          }
          @media (max-width: 1024px) {
            .section-layout {
              grid-template-columns: 1fr;
              gap: 60px;
            }
            .section-layout.text-right {
              direction: ltr;
            }
            .section-layout.text-right > * {
              direction: ltr;
            }
            .app-description {
              font-size: 17px;
            }
            .section-layout.text-right {
              direction: ltr;
            }
            .visual-content {
              order: -1;
            }
          }
        `}</style>
      </section>
    );
  }

  if (isSocialVoid) {
    return (
      <section style={{ position: 'relative', background: 'linear-gradient(180deg, #0c4a6e 0%, #082f49 50%, #0c4a6e 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 20px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
            <Link href="/socialvoid" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '24px', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src="/app-assets/social-void-icon.png" alt="Social Void" width={56} height={56} style={{ borderRadius: '12px', flexShrink: 0 }} />
                <span style={{ padding: '8px 20px', borderRadius: '24px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', background: 'rgba(34,197,94,0.25)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' }}>Available Now</span>
              </div>
              <h2 style={{ fontSize: '64px', fontWeight: '900', color: '#f8fafc', lineHeight: 1.1, margin: 0 }}>{app.name}</h2>
              <p style={{ fontSize: '20px', fontWeight: '500', color: app.color, margin: 0 }}>{app.tagline}</p>
              <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>{app.fullDesc}</p>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: app.color }}>→</div>
            </Link>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '520px' }}>
              {VisualComponent && <VisualComponent />}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (isDreamie) {
    return (
      <section style={{ position: 'relative', background: 'linear-gradient(180deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 20px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '520px' }}>
              {VisualComponent && <VisualComponent />}
            </div>
            <a href={app.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '24px', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <img src="/app-assets/dreamie-icon.png" alt="dreamie.store" width={56} height={56} style={{ borderRadius: '12px', flexShrink: 0 }} />
                <span style={{ padding: '8px 20px', borderRadius: '24px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', background: 'rgba(34,197,94,0.25)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' }}>Available Now</span>
              </div>
              <h2 style={{ fontSize: '64px', fontWeight: '900', color: '#f8fafc', lineHeight: 1.1, margin: 0 }}>{app.name}</h2>
              <p style={{ fontSize: '20px', fontWeight: '500', color: app.color, margin: 0 }}>{app.tagline}</p>
              <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>{app.fullDesc}</p>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: app.color }}>→</div>
            </a>
          </div>
        </div>
      </section>
    );
  }

  if (isVoidMusician) {
    return (
      <section style={{ position: 'relative', background: '#000d12', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 20px', overflow: 'hidden' }}>
        {/* Spotlight cone from top-centre */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '900px', height: '100%', background: 'linear-gradient(180deg, rgba(34,211,238,0.13) 0%, rgba(14,116,144,0.04) 50%, transparent 100%)', pointerEvents: 'none', zIndex: 0 }} />
        {/* Top border */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent 5%, #22d3ee 50%, transparent 95%)', zIndex: 1 }} />
        {/* Bottom border */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent 5%, rgba(34,211,238,0.55) 50%, transparent 95%)', zIndex: 1 }} />

        <div style={{ maxWidth: '780px', width: '100%', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}>

          {/* ── CENTRED HEADER ── */}
          <div style={{ textAlign: 'center', marginBottom: '52px', width: '100%' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '9px 22px', borderRadius: '24px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.15em', background: 'rgba(34,211,238,0.07)', color: '#22d3ee', border: '1px solid rgba(34,211,238,0.3)', marginBottom: '36px' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22d3ee', display: 'inline-block' }} />
              Active Project — My Current Focus
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px', marginBottom: '16px' }}>
              <img src="/app-assets/void-musician-icon.png" alt="Void Musician" width={64} height={64} style={{ borderRadius: '16px', flexShrink: 0 }} />
              <h2 style={{ fontSize: '72px', fontWeight: '900', color: '#ecfeff', lineHeight: 1, margin: 0, letterSpacing: '-3px' }}>{app.name}</h2>
            </div>
            <p style={{ fontSize: '22px', fontWeight: '400', color: '#22d3ee', margin: '0 0 16px' }}>{app.tagline}</p>
            <p style={{ fontSize: '16px', color: 'rgba(200,240,255,0.48)', lineHeight: 1.75, margin: '0 auto 24px', maxWidth: '600px' }}>{app.fullDesc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '28px' }}>
              {app.features.map((f, i) => (
                <span key={i} style={{ padding: '6px 14px', background: 'rgba(34,211,238,0.07)', border: '1px solid rgba(34,211,238,0.2)', borderRadius: '20px', fontSize: '12px', color: '#67e8f9', fontWeight: '600' }}>{f}</span>
              ))}
            </div>
            <Link href="/void-musician" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', background: '#22d3ee', color: '#000d12', textDecoration: 'none', borderRadius: '10px', fontWeight: '800', fontSize: '14px' }}>
              View Void Musician →
            </Link>
          </div>

          {/* ── NEW SESSION WIDGET (no background, transparent) ── */}
          <div style={{ width: '100%', borderTop: '1px solid rgba(34,211,238,0.1)', paddingTop: '48px' }}>
            {VisualComponent && <VisualComponent />}
          </div>

        </div>
      </section>
    );
  }

  if (isFootballLife) {
    return (
      <section style={{ position: 'relative', background: 'linear-gradient(160deg, #1a1000 0%, #713f12 50%, #0c0900 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '120px 20px', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
            <Link href="/football-life" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '24px', cursor: 'pointer' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '48px' }}>⚽</span>
                <span style={{ padding: '8px 20px', borderRadius: '24px', fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', background: 'rgba(34,197,94,0.25)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)' }}>Available Now</span>
              </div>
              <h2 style={{ fontSize: '64px', fontWeight: '900', color: '#fef3c7', lineHeight: 1.1, margin: 0 }}>{app.name}</h2>
              <p style={{ fontSize: '20px', fontWeight: '500', color: app.color, margin: 0 }}>{app.tagline}</p>
              <p style={{ fontSize: '17px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>{app.fullDesc}</p>
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: app.color }}>→</div>
            </Link>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '520px' }}>
              {VisualComponent && <VisualComponent />}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const handleSectionClick = () => {
    if (appRoute) {
      window.location.href = appRoute;
    } else if (app.link) {
      window.open(app.link, app.external ? "_blank" : "_self");
    }
  };

  return (
    <section className="app-section" style={{ background: app.bg }} onClick={handleSectionClick}>
        <div className="section-content">
          <div className={`section-layout ${isEven ? 'text-left' : 'text-right'}`}>
            <div className="text-content">
              <div className="app-header">
                {APP_ICONS[app.id]
                  ? <img src={APP_ICONS[app.id]} alt={app.name} width={56} height={56} style={{ borderRadius: "12px", flexShrink: 0 }} />
                  : <span className="app-emoji">{app.emoji}</span>
                }
                <span className={`status-badge ${app.status}`}>
                  {app.status === "live" ? "Available Now" : app.status === "beta" ? "Beta" : "Coming Soon"}
                </span>
              </div>
              <h2 className="app-name">{app.name}</h2>
              <p className="app-tagline" style={{ color: app.color }}>{app.tagline}</p>
              <p className="app-description">{app.fullDesc}</p>
              <div className="feature-tags">
                {app.features.map((feature, i) => (
                  <span key={i} className="feature-tag">{feature}</span>
                ))}
              </div>
              <div className="platform-pills">
                {app.platforms.map((platform) => (
                  <span key={platform} className="platform-pill">{platform}</span>
                ))}
              </div>
              {app.link ? (
                <a
                  href={app.link}
                  target={app.external ? "_blank" : undefined}
                  rel={app.external ? "noopener noreferrer" : undefined}
                  onClick={(e) => e.stopPropagation()}
                  className="cta-button"
                  style={{ background: app.color }}
                >
                  {app.external ? "Download Now →" : "Learn More →"}
                </a>
              ) : appRoute ? (
                <Link href={appRoute} onClick={(e) => e.stopPropagation()} className="cta-button" style={{ background: app.color }}>
                  View Details →
                </Link>
              ) : (
                <div className="cta-button disabled">
                  Coming Soon
                </div>
              )}
            </div>
            <div className="visual-content">
              {VisualComponent && <VisualComponent />}
            </div>
          </div>
        </div>
        <style jsx>{`
          .app-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding: 120px 20px;
            position: relative;
            overflow: hidden;
            cursor: pointer;
          }
          .section-content {
            max-width: 1400px;
            margin: 0 auto;
            width: 100%;
          }
          .section-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 100px;
            align-items: center;
          }
          .section-layout.text-right {
            direction: rtl;
          }
          .section-layout.text-right > * {
            direction: ltr;
          }
          .text-content {
            display: flex;
            flex-direction: column;
            gap: 24px;
          }
          .app-header {
            display: flex;
            align-items: center;
            gap: 16px;
          }
          .app-emoji {
            font-size: 56px;
            filter: drop-shadow(0 8px 16px rgba(0,0,0,0.4));
          }
          .status-badge {
            padding: 8px 20px;
            border-radius: 24px;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .status-badge.live {
            background: rgba(34, 197, 94, 0.25);
            color: #4ade80;
            border: 1px solid rgba(34, 197, 94, 0.3);
          }
          .status-badge.beta {
            background: rgba(251, 191, 36, 0.25);
            color: #fbbf24;
            border: 1px solid rgba(251, 191, 36, 0.3);
          }
          .status-badge.coming-soon {
            background: rgba(148, 163, 184, 0.25);
            color: #94a3b8;
            border: 1px solid rgba(148, 163, 184, 0.3);
          }
          .app-name {
            font-size: 64px;
            font-weight: 900;
            color: #f8fafc;
            line-height: 1.1;
            margin: 0;
          }
          .app-tagline {
            font-size: 20px;
            font-weight: 500;
            color: #cbd5e1;
            margin: 0;
          }
          .app-description {
            font-size: 17px;
            color: #94a3b8;
            line-height: 1.6;
            margin: 0;
          }
          .feature-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }
          .feature-tag {
            padding: 8px 16px;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 20px;
            font-size: 13px;
            color: #cbd5e1;
            font-weight: 500;
          }
          .platform-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          .platform-pill {
            padding: 6px 14px;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            font-size: 12px;
            color: #94a3b8;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .cta-button {
            padding: 16px 36px;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 700;
            color: white;
            text-decoration: none;
            text-align: center;
            display: inline-block;
            transition: all 0.2s ease;
            border: none;
            cursor: pointer;
          }
          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0,0,0,0.3);
          }
          .cta-button.disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          .visual-content {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          @media (max-width: 1024px) {
            .section-layout {
              grid-template-columns: 1fr;
              gap: 60px;
            }
            .section-layout.text-right {
              direction: ltr;
            }
            .section-layout.text-right > * {
              direction: ltr;
            }
            .app-description {
              font-size: 17px;
            }
            .section-layout.text-right {
              direction: ltr;
            }
            .visual-content {
              order: -1;
            }
          }
        `}</style>
      </section>
  );
}
function HomePage() {
  return (
    <Layout>
      <div className="homepage">
        {/* Hero Section */}
        <section className="hero">
          <div className="orb-container">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
          </div>
          <div className="hero-content">
            <p className="hero-eyebrow">andrewblewett.com</p>
            <h1 className="hero-title">
              <span className="gradient-text">andysocial</span>
            </h1>
            <p className="hero-subtitle">apps built across web, iOS &amp; Android.</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">9</span>
                <span className="stat-label">Apps</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-number">8</span>
                <span className="stat-label">Live</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-number">3</span>
                <span className="stat-label">Platforms</span>
              </div>
            </div>
            <div className="hero-buttons">
              <Link href="/blog">
                <button style={{
                  padding: '14px 32px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'rgba(255,255,255,0.7)',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.02em',
                }}>
                  Blog
                </button>
              </Link>
              <Link href="/explore">
                <button style={{
                  padding: '14px 32px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: 'white',
                  background: 'linear-gradient(135deg, #b45309 0%, #d97706 50%, #f59e0b 100%)',
                  border: 'none',
                  boxShadow: '0 4px 24px rgba(245, 158, 11, 0.35)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.02em',
                }}>
                  Explore All Apps →
                </button>
              </Link>
            </div>
          </div>
          <div className="scroll-hint">
            <div className="scroll-arrow">↓</div>
          </div>
        </section>

        {/* App Sections */}
        {APPS.map((app, index) => (
          <AppSection key={app.id} app={app} index={index} />
        ))}
      </div>

      <style jsx>{`
        .homepage {
          width: 100%;
        }
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: radial-gradient(ellipse at 50% 0%, #1a1000 0%, #0e0b04 45%, #09080a 100%);
        }
        .orb-container {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }
        .orb-1 {
          width: 700px;
          height: 700px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -60%);
          background: radial-gradient(circle, rgba(180, 120, 20, 0.22) 0%, rgba(245, 158, 11, 0.08) 45%, transparent 70%);
          animation: pulse 7s ease-in-out infinite;
        }
        .orb-2 {
          width: 500px;
          height: 400px;
          bottom: -60px;
          left: 50%;
          transform: translateX(-50%);
          background: radial-gradient(circle, rgba(180, 80, 10, 0.08) 0%, transparent 65%);
          animation: pulse 9s ease-in-out infinite reverse;
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.7; transform: translate(-50%, -60%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -60%) scale(1.08); }
        }
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .hero-eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(167, 139, 250, 0.6);
          margin: 0 0 20px;
        }
        .hero-title {
          font-size: clamp(72px, 12vw, 128px);
          font-weight: 900;
          margin: 0 0 18px 0;
          letter-spacing: -5px;
          line-height: 0.95;
        }
        .gradient-text {
          background: linear-gradient(135deg, #a78bfa 0%, #c084fc 30%, #f472b6 65%, #fb923c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-subtitle {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.35);
          margin: 0 0 52px 0;
          font-weight: 400;
          letter-spacing: 0.04em;
        }
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 0;
          justify-content: center;
          margin-bottom: 44px;
          border: 1px solid rgba(245,158,11,0.15);
          background: rgba(245,158,11,0.04);
          padding: 20px 36px;
          border-radius: 14px;
        }
        .stat-divider {
          width: 1px;
          height: 32px;
          background: rgba(245,158,11,0.12);
          margin: 0 32px;
        }
        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .stat-number {
          font-size: 40px;
          font-weight: 900;
          color: #fbbf24;
          line-height: 1;
          margin-bottom: 6px;
          letter-spacing: -1px;
        }
        .stat-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.3);
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-weight: 600;
        }
        .hero-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
        }
        .hero-button {
          padding: 16px 36px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          color: white;
          transition: all 0.2s ease;
          display: inline-block;
        }
        .hero-button.primary {
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
          border: none;
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.3);
        }
        .hero-button.primary:hover {
          box-shadow: 0 6px 25px rgba(139, 92, 246, 0.4);
        }
        .hero-button.secondary {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .hero-button.secondary:hover {
          background: rgba(255, 255, 255, 0.15);
        }
        .scroll-hint {
          position: absolute;
          bottom: 48px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: bounce 2.2s ease-in-out infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 0.3; }
          50% { transform: translateX(-50%) translateY(8px); opacity: 0.6; }
        }
        .scroll-arrow {
          font-size: 20px;
          color: rgba(255,255,255,0.4);
        }
        @media (max-width: 768px) {
          .hero-subtitle {
            font-size: 15px;
          }
          .orb-1 {
            width: 320px;
            height: 320px;
          }
          .orb-2 {
            width: 240px;
            height: 200px;
          }
          .hero-stats {
            padding: 16px 20px;
          }
          .stat-divider {
            margin: 0 20px;
          }
          .stat-number {
            font-size: 30px;
          }
          .hero-buttons {
            flex-direction: column;
            gap: 10px;
            width: 100%;
            max-width: 280px;
          }
        }
      `}</style>
    </Layout>
  );
}

export default HomePage;
