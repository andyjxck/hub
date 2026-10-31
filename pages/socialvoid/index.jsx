import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

// Real recipes from data.js
const RECIPES = [
  { items: ["Solitude", "Solitude"], result: "Fortress of One" },
  { items: ["Solitude", "Coffee"], result: "Morning Peace" },
  { items: ["Coffee", "Coffee"], result: "Double Shot" },
  { items: ["Coffee", "Phone"], result: "Doomscrolling" },
  { items: ["Darkness", "Darkness"], result: "Pitch Black" },
  { items: ["Phone", "Phone"], result: "Infinite Notifications" },
  { items: ["Morning Peace", "Ghosting"], result: "Perfect Weekend" },
  { items: ["Perfect Weekend", "Comfy Isolation"], result: "Introvert Paradise" },
  { items: ["Introvert Paradise", "Secret Lair"], result: "Hermit Kingdom" },
  { items: ["Phone", "Small Talk"], result: "Family Obligation" },
  { items: ["Small Talk", "Fortress of One"], result: "Polite Decline ★" },
];

const FEATURES = [
  { icon: "🧩", title: "500+ Recipes", desc: "Combine base items to discover increasingly absurd and relatable creations." },
  { icon: "⚡", title: "Chaos Events", desc: "Random intrusions like 'Small Talk' and 'Family Obligation' disrupt your board." },
  { icon: "�", title: "Color-Coded Tiers", desc: "Green (T1), Indigo (T2), Purple (T3), Pink (T4), Rose (T5), Gold (Special)." },
  { icon: "🏆", title: "Prestige & Albums", desc: "Track discoveries, reset for bonuses, collect seasonal exclusives." },
  { icon: "🎯", title: "Daily Challenges", desc: "Complete objectives for bonus rewards and bragging rights." },
  { icon: "💎", title: "Actually Free", desc: "No premium currency, no paywalls. Optional ads, never forced." },
];

export default function SocialVoidPage() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "linear-gradient(180deg, #0c4a6e 0%, #082f49 50%, #0c4a6e 100%)", minHeight: "100vh" }}>

        {/* Hero */}
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "100px 24px 60px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "32px", flexWrap: "wrap" }}>
            <img src="/app-assets/social-void-icon.png" alt="Social Void" width={80} height={80} style={{ borderRadius: "18px", flexShrink: 0 }} />
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
                <h1 style={{ fontSize: "48px", fontWeight: "900", color: "#f8fafc", margin: 0, lineHeight: 1 }}>Social Void</h1>
                <span style={{ padding: "5px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", background: "rgba(34,197,94,0.2)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.3)" }}>Live</span>
              </div>
              <p style={{ fontSize: "20px", fontWeight: "600", color: "#60a5fa", margin: "0 0 4px 0" }}>Merge. Escape. Survive the social chaos.</p>
              <p style={{ fontSize: "14px", color: "#64748b", margin: 0 }}>Web & Mobile · Free · No signup</p>
            </div>
          </div>

          <p style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.8, maxWidth: "680px", marginBottom: "32px" }}>
            Social Void: Merge Mayhem is a puzzle game about avoiding people. Start with four base items: 
            <strong>Solitude</strong> (It's just you, your thoughts, and absolutely no plans), 
            <strong>Coffee</strong> (Brown rocket fuel for pretending to cope), 
            <strong>Darkness</strong> (Like light, but for people who hate hope), and 
            <strong>Phone</strong> (A pocket-sized panic generator).
          </p>
          <p style={{ fontSize: "18px", color: "#cbd5e1", lineHeight: 1.8, maxWidth: "680px", marginBottom: "32px" }}>
            Merge them on a 5×7 grid to discover 500+ recipes like "Doomscrolling," "Ghosting," 
            "Introvert Paradise," and "Hermit Kingdom." But watch out — <strong>Chaos Events</strong> spawn 
            intrusive pink social items ("Small Talk," "Family Obligation") that ruin everything. 
            Embrace the void.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="https://socialvoid.net" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 22px", background: "#60a5fa", color: "#082f49", textDecoration: "none", borderRadius: "8px", fontWeight: "700", fontSize: "14px" }}>
              Play on Web →
            </a>
            <a href="https://apps.apple.com/gb/app/social-void/id6751636874" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", textDecoration: "none" }}>
              <img src="/app-assets/apple.png" alt="Download on the App Store" style={{ height: "44px", borderRadius: "8px" }} />
            </a>
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", textDecoration: "none" }}>
              <img src="/app-assets/android.png" alt="Get it on Google Play" style={{ height: "44px", borderRadius: "8px" }} />
            </a>
          </div>
        </div>

        {/* Features */}
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px 72px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#f8fafc", marginBottom: "28px" }}>What's inside</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{ padding: "20px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "12px" }}>
                <div style={{ fontSize: "26px", marginBottom: "10px" }}>{f.icon}</div>
                <div style={{ fontSize: "15px", fontWeight: "700", color: "#f8fafc", marginBottom: "6px" }}>{f.title}</div>
                <div style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recipe Examples */}
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px 72px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#f8fafc", marginBottom: "8px" }}>Merge Recipes</h2>
          <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "32px" }}>A taste of what you can discover. 500+ total recipes to find.</p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>
            {RECIPES.map((r, i) => (
              <div key={i} style={{ padding: "16px", background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.15)", borderRadius: "10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px", flexWrap: "wrap" }}>
                  {r.items.map((item, j) => (
                    <React.Fragment key={j}>
                      <span style={{ padding: "4px 10px", background: "rgba(255,255,255,0.08)", borderRadius: "6px", fontSize: "12px", color: "#cbd5e1" }}>{item}</span>
                      {j < r.items.length - 1 && <span style={{ color: "#60a5fa" }}>+</span>}
                    </React.Fragment>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ color: "#60a5fa" }}>→</span>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "#f8fafc" }}>{r.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Play */}
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px 72px" }}>
          <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#f8fafc", marginBottom: "28px" }}>How to play</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>
            {[
              { step: "1", title: "Drag & Drop", desc: "Move items around the 5x7 grid to position them." },
              { step: "2", title: "Merge", desc: "Drop two identical items on top of each other to merge." },
              { step: "3", title: "Discover", desc: "New recipes appear in your album when discovered." },
              { step: "4", title: "Survive Chaos", desc: "Random events spawn intrusive items. Clear them fast!" },
            ].map(s => (
              <div key={s.step} style={{ padding: "20px", background: "rgba(255,255,255,0.03)", borderRadius: "12px" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#60a5fa", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: "700", color: "#082f49", marginBottom: "12px" }}>{s.step}</div>
                <div style={{ fontSize: "15px", fontWeight: "700", color: "#f8fafc", marginBottom: "6px" }}>{s.title}</div>
                <div style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.6 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy */}
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px 72px" }}>
          <div style={{ padding: "24px", background: "rgba(96,165,250,0.05)", borderRadius: "12px", border: "1px solid rgba(96,165,250,0.1)" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#f8fafc", marginBottom: "12px" }}>Privacy First</h2>
            <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.7, marginBottom: "16px" }}>
              No email required to play. Guest mode works immediately. Optional accounts only need a username 
              and 4-digit PIN. We don't track your merges or sell your data.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <Link href="/socialvoid/privacy" style={{ padding: "8px 16px", background: "transparent", color: "#60a5fa", borderRadius: "6px", border: "1px solid #60a5fa", fontSize: "13px", fontWeight: "500", textDecoration: "none" }}>Privacy Policy</Link>
              <Link href="/socialvoid/terms" style={{ padding: "8px 16px", background: "transparent", color: "#94a3b8", borderRadius: "6px", border: "1px solid #475569", fontSize: "13px", fontWeight: "500", textDecoration: "none" }}>Terms</Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px 80px" }}>
          <div style={{ paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <p style={{ fontSize: "13px", color: "#475569", margin: 0 }}>Made by Andrew · Free to play</p>
            <div style={{ display: "flex", gap: "12px" }}>
              <Link href="/socialvoid/privacy" style={{ fontSize: "13px", color: "#64748b", textDecoration: "none" }}>Privacy</Link>
              <Link href="/socialvoid/terms" style={{ fontSize: "13px", color: "#64748b", textDecoration: "none" }}>Terms</Link>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
