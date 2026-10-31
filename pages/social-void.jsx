import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function SocialVoidPage() {
  return (
    <Layout>
      <div style={{ background: "#06111f", minHeight: "100vh", color: "#fff" }}>
        <div style={{ background: "linear-gradient(160deg, #0a1f3a 0%, #061628 60%, #06111f 100%)", borderBottom: "1px solid rgba(96,165,250,0.12)", padding: "80px 24px 60px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#3a5a7a", textDecoration: "none", fontSize: "13px", display: "inline-block", marginBottom: "40px" }}>← All Apps</Link>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "28px", flexWrap: "wrap", marginBottom: "36px" }}>
              <div style={{ width: "80px", height: "80px", borderRadius: "22px", flexShrink: 0, background: "linear-gradient(135deg, #1d4ed8, #60a5fa)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px", boxShadow: "0 8px 32px rgba(96,165,250,0.3)" }}>🌀</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <h1 style={{ margin: 0, fontSize: "42px", fontWeight: "800", letterSpacing: "-1px", color: "#fff" }}>Social Void</h1>
                  <span style={{ background: "rgba(96,165,250,0.15)", color: "#60a5fa", border: "1px solid rgba(96,165,250,0.3)", borderRadius: "20px", padding: "4px 12px", fontSize: "12px", fontWeight: "600" }}>LIVE</span>
                </div>
                <p style={{ margin: 0, fontSize: "18px", color: "#5a8ab0", fontWeight: "400" }}>Merge. Escape. Survive the social chaos.</p>
                <p style={{ margin: "6px 0 0", fontSize: "13px", color: "#2a4060" }}>iOS</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com/gb/app/social-void/id6751636874" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", textDecoration: "none" }}>
                <img src="/app-assets/apple.png" alt="Download on the App Store" style={{ height: "48px", borderRadius: "8px" }} />
              </a>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "56px 24px" }}>
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#2a4060", marginBottom: "20px" }}>About</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(96,165,250,0.1)" }}>
              {[
                { q: "Origin", a: "It started as a joke — what if the goal of a game was to be as antisocial as possible? Then I kept adding recipes and it became something actually fun." },
                { q: "How it works", a: "You start with Solitude, Coffee, Darkness, and Phone. Merge two of the same to discover new items. Keep merging and you'll find 500+ recipes — Introvert Paradise to Hermit Kingdom to Villain Arc." },
                { q: "The Recipes", a: "Small Talk + Family Obligation = Social Anxiety Spiral. Networking Event + Awkward Silence = Panic Attack. The humor is dark but it hits home." },
                { q: "Chaos Events", a: "The game spawns intrusive social items on your board — Small Talk, Networking Event, Party Invitation. They take up space. You have to clear them. They're annoying. That's the point." },
                { q: "Meta Progression", a: "Prestige for permanent bonuses. Seasons bring themed content and limited-time recipes. Albums let you collect your discoveries. Daily challenges give you goals." },
                { q: "Strategy", a: "Limited board slots means real decisions. Do you go for high-tier recipes or clear chaos events? Do you save items for future merges or use them now?" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", background: i % 2 === 0 ? "rgba(96,165,250,0.04)" : "rgba(0,0,0,0.2)", borderBottom: i < 4 ? "1px solid rgba(96,165,250,0.07)" : "none", borderRight: i % 2 === 0 ? "1px solid rgba(96,165,250,0.07)" : "none" }}>
                  <p style={{ margin: "0 0 8px", fontSize: "12px", fontWeight: "700", color: "#60a5fa", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.q}</p>
                  <p style={{ margin: 0, fontSize: "14px", color: "#4a7a9a", lineHeight: 1.6 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#2a4060", marginBottom: "20px" }}>Features</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["500+ Merge Recipes", "Chaos Events", "Prestige System", "Seasons & Albums", "Daily Challenges", "Board Strategy", "Themed Content", "Achievements", "Favorites System", "Streak Bonuses"].map((f) => (
                <span key={f} style={{ background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.18)", borderRadius: "8px", padding: "8px 14px", fontSize: "13px", color: "#93c5fd" }}>{f}</span>
              ))}
            </div>
          </section>
          <div style={{ borderTop: "1px solid rgba(96,165,250,0.1)", paddingTop: "28px", display: "flex", gap: "20px", fontSize: "13px" }}>
            <Link href="/social-void/privacy" style={{ color: "#2a4060", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/social-void/terms" style={{ color: "#2a4060", textDecoration: "none" }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
