import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

const CATEGORIES = [
  {
    label: "Puzzle",
    color: "#A78BFA",
    games: ["Sudoku", "Void Sums", "Sliding Puzzle", "Mine Finder", "Fill The Grid", "Pipe Puzzle", "Void Gems", "Block Place"],
  },
  {
    label: "Card & Board",
    color: "#34D399",
    games: ["Chess", "G Rummy", "Solitaire", "Void Peaks", "Bingo", "Dots & Boxes", "Four in a Row", "Tic Tac Toe", "Mancala"],
  },
  {
    label: "Word",
    color: "#FBBF24",
    games: ["Word Search", "Word Tiles", "Word Wheel", "Word Reflex", "Hangman", "Choices"],
  },
  {
    label: "Action & Arcade",
    color: "#F87171",
    games: ["Snake", "Void Ball", "Void Jump", "Void Invaders", "Void Flap", "Paddle Battle", "Smash Em", "Stack Em", "Void Pop", "Void Toss", "Whack-A-Tap", "Ocean Front"],
  },
  {
    label: "Strategy",
    color: "#22D3EE",
    games: ["2048", "Water Sort", "Color Flow", "Memory Match", "Pattern Match", "Hi-Lo", "Block Rise"],
  },
  {
    label: "Fun & Other",
    color: "#F472B6",
    games: ["Fruit Fuse", "Bubble Bloom", "Void Trivia", "Jewel Slider", "Penalty Shootout", "Tap Void"],
  },
];

const FEATURES = [
  { icon: "🎮", title: "40+ Games", desc: "A constantly growing library spanning puzzle, word, card, arcade, and strategy genres." },
  { icon: "⚔️", title: "Multiplayer", desc: "Challenge friends head-to-head in real-time multiplayer matches across supported games." },
  { icon: "🏆", title: "Leaderboards", desc: "Global and per-game high score boards. See how you stack up against every player." },
  { icon: "🎯", title: "Daily Challenges", desc: "A new challenge every day to keep you sharp and earn bonus rewards." },
  { icon: "💬", title: "Friends & Chat", desc: "Add friends by username, send challenges, and chat in-app." },
  { icon: "🌙", title: "Offline Play", desc: "No internet? No problem. Most games work completely offline." },
  { icon: "🔔", title: "Push Notifications", desc: "Daily challenge reminders and friend challenge pings so you never miss a beat." },
  { icon: "⭐", title: "Favourites", desc: "Star the games you play most. They rise to the top of your library automatically." },
];

export default function GameVoidPage() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "linear-gradient(180deg, #05070D 0%, #0A1122 40%, #101B33 70%, #0C1020 100%)", minHeight: "100vh", color: "#f8fafc", fontFamily: "'Inter', -apple-system, sans-serif" }}>

        {/* ─── Hero ─── */}
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "100px 24px 60px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "32px", flexWrap: "wrap" }}>
            <img src="/app-assets/game-void-icon.png" alt="Game Void" width={80} height={80} style={{ borderRadius: "18px", flexShrink: 0 }} />
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
                <h1 style={{ fontSize: "48px", fontWeight: "900", color: "#f8fafc", margin: 0, lineHeight: 1 }}>Game Void</h1>
                <span style={{ padding: "5px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", background: "rgba(34,197,94,0.2)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.3)" }}>Live</span>
              </div>
              <p style={{ fontSize: "20px", fontWeight: "600", color: "#f87171", margin: "0 0 4px 0" }}>Play. Compete. Win.</p>
              <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>40+ games · iOS · Android · Web · Free</p>
            </div>
          </div>

          <p style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.8, maxWidth: "680px", marginBottom: "32px" }}>
            One app. Forty-plus games. Game Void is a free-to-play mobile gaming platform packed with puzzle, word, card, arcade, and strategy games — plus a roster of exclusive Void originals you won't find anywhere else. Compete on global leaderboards, take on daily challenges, go head-to-head in multiplayer, and chat with friends. New games added regularly.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="https://gamevoid.co.uk" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 22px", background: "#f87171", color: "#1a0000", textDecoration: "none", borderRadius: "8px", fontWeight: "700", fontSize: "14px" }}>
              Play on Web →
            </a>
            <a href="https://apps.apple.com/gb/app/game-void/id6743164354" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", textDecoration: "none" }}>
              <img src="/app-assets/apple.png" alt="Download on the App Store" style={{ height: "44px", borderRadius: "8px" }} />
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", textDecoration: "none" }}>
              <img src="/app-assets/android.png" alt="Get it on Google Play" style={{ height: "44px", borderRadius: "8px" }} />
            </a>
          </div>
        </div>

        {/* ─── Features grid ─── */}
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px 72px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#f8fafc", marginBottom: "28px" }}>What's inside</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{ padding: "20px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px" }}>
                <div style={{ fontSize: "26px", marginBottom: "10px" }}>{f.icon}</div>
                <div style={{ fontSize: "15px", fontWeight: "700", color: "#f8fafc", marginBottom: "6px" }}>{f.title}</div>
                <div style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Game library by category ─── */}
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px 72px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#f8fafc", marginBottom: "8px" }}>The full library</h2>
          <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "32px" }}>Every game available right now. More added regularly.</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {CATEGORIES.map(cat => (
              <div key={cat.label}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "4px", height: "20px", borderRadius: "2px", background: cat.color, flexShrink: 0 }} />
                  <span style={{ fontSize: "14px", fontWeight: "700", color: cat.color, textTransform: "uppercase", letterSpacing: "0.08em" }}>{cat.label}</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {cat.games.map(g => (
                    <span key={g} style={{ padding: "5px 12px", background: `${cat.color}12`, border: `1px solid ${cat.color}25`, borderRadius: "6px", fontSize: "13px", fontWeight: "500", color: "#cbd5e1" }}>{g}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Account & Social ─── */}
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px 72px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#f8fafc", marginBottom: "20px" }}>Accounts & community</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {[
              { title: "Free accounts", desc: "Sign up with just a username and 4-digit PIN. No email required." },
              { title: "Friends system", desc: "Find friends by username, send requests, and accept challenges." },
              { title: "In-app messaging", desc: "Chat directly with friends inside the app." },
              { title: "Public profiles", desc: "Your username and top scores are visible on the leaderboard." },
              { title: "Achievements", desc: "Unlock achievements as you play across the library." },
              { title: "Privacy first", desc: "We collect only what we need. No ads for premium features, no email, no real name." },
            ].map(item => (
              <div key={item.title} style={{ padding: "18px 20px", background: "rgba(248,113,113,0.04)", border: "1px solid rgba(248,113,113,0.08)", borderRadius: "10px" }}>
                <div style={{ fontSize: "14px", fontWeight: "700", color: "#f87171", marginBottom: "6px" }}>{item.title}</div>
                <div style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Footer ─── */}
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px 80px" }}>
          <div style={{ paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <p style={{ fontSize: "13px", color: "#475569", margin: 0 }}>Made by Andrew · Free to play · iOS, Android &amp; Web</p>
            <div style={{ display: "flex", gap: "12px" }}>
              <Link href="/gamevoid/privacy" style={{ fontSize: "13px", color: "#64748b", textDecoration: "none" }}>Privacy Policy</Link>
              <Link href="/gamevoid/terms" style={{ fontSize: "13px", color: "#64748b", textDecoration: "none" }}>Terms</Link>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
