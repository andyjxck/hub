import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const RARITIES = [
  { label: "Uncommon", color: "#4ade80", glow: "rgba(74,222,128,0.2)" },
  { label: "Rare",     color: "#60a5fa", glow: "rgba(96,165,250,0.2)" },
  { label: "Epic",     color: "#c084fc", glow: "rgba(192,132,252,0.2)" },
  { label: "Legendary",color: "#facc15", glow: "rgba(250,204,21,0.2)" },
  { label: "S-Tier",   color: "#ff4d4d", glow: "rgba(255,77,77,0.2)" },
];

const HOW_IT_WORKS = [
  { icon: "⚽", title: "Pick Your Formation", body: "Choose 4-4-2, 4-3-3, or 5-4-1 before each match. Your formation determines how many GK, DEF, MID and ATT slots you fill — and your energy budget for each phase." },
  { icon: "🃏", title: "Build a 14-Card Deck", body: "Assemble a 14-card deck from five rarity tiers: Uncommon through S-Tier. Cards have fixed power — no levelling, no upgrades. Just strategy." },
  { icon: "🏟️", title: "Place Cards on the Pitch", body: "Matches unfold in phases across your formation. First Half: pick your GK and Defenders. Second Half: Midfielders. Extra Time: Attackers. Both sides submit face-down, then reveal simultaneously." },
  { icon: "💡", title: "Card Abilities", body: "Reveal abilities fire the moment a card is flipped. Ongoing abilities persist for the rest of the match. Timing and deck composition are everything." },
  { icon: "🎫", title: "Battle Pass", body: "Earn XP from every match. Climb 30 Battle Pass tiers to unlock new cards. No purchases — just play." },
  { icon: "🌍", title: "Leaderboards", body: "Four global leaderboards: Casual Wins, Ranked Wins, Time Played, and Level. Cross-platform rankings updated in real-time." },
];

const FEATURES = [
  "Formation-Based Pitch Play", "14-Card Deck Building", "5 Rarity Tiers",
  "Simultaneous Reveal", "Reveal & Ongoing Abilities", "30-Tier Battle Pass",
  "Casual & Ranked Modes", "Global Leaderboards", "Real-Time Multiplayer",
  "Cross-Platform Sync", "Free to Play — No Purchases",
];

export default function FSCards() {
  return (
    <Layout>
      <div style={{ background: "#08000d", minHeight: "100vh", color: "#fff", fontFamily: "inherit" }}>

        {/* ── Hero ── */}
        <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(160deg, #1a0012 0%, #110009 60%, #08000d 100%)", padding: "80px 24px 72px", borderBottom: "1px solid rgba(236,72,153,0.1)" }}>
          {/* Glow blobs */}
          <div style={{ position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)", width: "700px", height: "400px", background: "radial-gradient(ellipse, rgba(236,72,153,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: 0, right: "-100px", width: "400px", height: "300px", background: "radial-gradient(ellipse, rgba(168,85,247,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative" }}>
            <Link href="/" style={{ color: "rgba(236,72,153,0.45)", textDecoration: "none", fontSize: "13px", display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "48px", letterSpacing: "0.02em" }}>
              ← All Projects
            </Link>

            {/* Title block */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap", marginBottom: "20px" }}>
              <img src="/app-assets/fscards-icon.png" alt="FS Card Rivals" width={80} height={80}
                style={{ borderRadius: "20px", flexShrink: 0, boxShadow: "0 0 0 1px rgba(236,72,153,0.2), 0 12px 40px rgba(236,72,153,0.3)" }} />
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                  <h1 style={{ margin: 0, fontSize: "clamp(36px, 6vw, 58px)", fontWeight: "900", letterSpacing: "-2px", color: "#fff", lineHeight: 1 }}>
                    FS Card Rivals
                  </h1>
                  <span style={{ background: "rgba(236,72,153,0.12)", color: "#ec4899", border: "1px solid rgba(236,72,153,0.3)", borderRadius: "20px", padding: "4px 12px", fontSize: "11px", fontWeight: "800", letterSpacing: "0.08em", textTransform: "uppercase", flexShrink: 0 }}>
                    Live
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "18px", color: "#ec4899", fontWeight: "500", opacity: 0.8 }}>
                  A free competitive football card game
                </p>
              </div>
            </div>

            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: "640px", margin: "0 0 36px" }}>
              Pick your formation, build a 14-card deck, and place your squad on the pitch phase by phase. Both sides reveal simultaneously — higher total power wins. Completely free, no purchases.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
              <a href="https://fscardrivals.co.uk" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "13px 28px", background: "linear-gradient(135deg, #be185d, #ec4899)", color: "#fff", textDecoration: "none", borderRadius: "10px", fontWeight: "800", fontSize: "15px", boxShadow: "0 4px 24px rgba(236,72,153,0.4)", letterSpacing: "0.01em" }}>
                Play Free Now →
              </a>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em" }}>Web · iOS · Android</span>
            </div>

            {/* Rarity tier bar */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "10px", fontWeight: "700", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", letterSpacing: "0.12em", marginRight: "4px" }}>Rarities</span>
              {RARITIES.map(({ label, color, glow }) => (
                <span key={label} style={{ padding: "5px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: "700", color, background: glow, border: `1px solid ${color}40`, whiteSpace: "nowrap", letterSpacing: "0.02em" }}>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── How it works ── */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "64px 24px 0" }}>
          <div style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(236,72,153,0.5)", margin: "0 0 8px" }}>How It Works</p>
            <h2 style={{ margin: "0 0 32px", fontSize: "28px", fontWeight: "800", color: "#fff", letterSpacing: "-0.5px" }}>Build your squad, phase by phase</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "14px" }}>
              {HOW_IT_WORKS.map((item) => (
                <div key={item.title} style={{ padding: "24px", background: "rgba(236,72,153,0.03)", border: "1px solid rgba(236,72,153,0.08)", borderRadius: "14px", transition: "border-color 0.2s" }}>
                  <div style={{ fontSize: "26px", marginBottom: "14px" }}>{item.icon}</div>
                  <p style={{ margin: "0 0 8px", fontSize: "13px", fontWeight: "800", color: "#f9a8d4", textTransform: "uppercase", letterSpacing: "0.07em" }}>{item.title}</p>
                  <p style={{ margin: 0, fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Feature tags ── */}
          <div style={{ marginBottom: "64px" }}>
            <p style={{ fontSize: "10px", fontWeight: "800", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(236,72,153,0.5)", margin: "0 0 20px" }}>Features</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {FEATURES.map((f) => (
                <span key={f} style={{ background: "rgba(236,72,153,0.05)", border: "1px solid rgba(236,72,153,0.12)", borderRadius: "8px", padding: "8px 14px", fontSize: "13px", color: "rgba(255,255,255,0.45)", fontWeight: "500" }}>{f}</span>
              ))}
            </div>
          </div>

          {/* ── CTA banner ── */}
          <div style={{ marginBottom: "64px", background: "linear-gradient(135deg, rgba(190,24,93,0.12), rgba(168,85,247,0.08))", border: "1px solid rgba(236,72,153,0.15)", borderRadius: "16px", padding: "36px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <p style={{ margin: "0 0 6px", fontSize: "20px", fontWeight: "800", color: "#fff" }}>Ready to play?</p>
              <p style={{ margin: 0, fontSize: "14px", color: "rgba(255,255,255,0.35)" }}>Free on web, iOS and Android. No account needed to start.</p>
            </div>
            <a href="https://fscardrivals.co.uk" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 26px", background: "linear-gradient(135deg, #be185d, #ec4899)", color: "#fff", textDecoration: "none", borderRadius: "10px", fontWeight: "800", fontSize: "14px", boxShadow: "0 4px 20px rgba(236,72,153,0.35)", whiteSpace: "nowrap" }}>
              Play FS Card Rivals →
            </a>
          </div>

          {/* ── Footer links ── */}
          <div style={{ borderTop: "1px solid rgba(236,72,153,0.07)", paddingTop: "28px", paddingBottom: "48px", display: "flex", gap: "24px", fontSize: "13px" }}>
            <Link href="/fscards/privacy" style={{ color: "rgba(255,255,255,0.2)", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/fscards/terms" style={{ color: "rgba(255,255,255,0.2)", textDecoration: "none" }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
