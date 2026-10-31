import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const ACCENT = "#a78bfa";
const BG_DEEP = "#0a081a";
const BG_MID = "#120f2e";

export default function ZenVoidPage() {
  return (
    <Layout>
      <div style={{ background: BG_DEEP, minHeight: "100vh", color: "#fff" }}>

        {/* Hero */}
        <div style={{
          background: `linear-gradient(160deg, #1a1040 0%, #0d0a22 60%, ${BG_DEEP} 100%)`,
          borderBottom: "1px solid rgba(167,139,250,0.12)",
          padding: "80px 24px 60px",
        }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#6b6b8a", textDecoration: "none", fontSize: "13px", display: "inline-block", marginBottom: "40px" }}>
              ← All Apps
            </Link>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "28px", flexWrap: "wrap", marginBottom: "36px" }}>
              <div style={{
                width: "80px", height: "80px", borderRadius: "22px", flexShrink: 0,
                background: "linear-gradient(135deg, #7c3aed, #a78bfa)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "36px", boxShadow: "0 8px 32px rgba(167,139,250,0.3)",
              }}>🪷</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <h1 style={{ margin: 0, fontSize: "42px", fontWeight: "800", letterSpacing: "-1px", color: "#fff" }}>Zen Void</h1>
                  <span style={{ background: "rgba(167,139,250,0.15)", color: ACCENT, border: "1px solid rgba(167,139,250,0.3)", borderRadius: "20px", padding: "4px 12px", fontSize: "12px", fontWeight: "600", letterSpacing: "0.05em" }}>LIVE</span>
                </div>
                <p style={{ margin: 0, fontSize: "18px", color: "#8b7ec8", fontWeight: "400" }}>Never gating mental health</p>
                <p style={{ margin: "6px 0 0", fontSize: "13px", color: "#4a4468" }}>iOS · Android</p>
              </div>
            </div>

            {/* CTAs at top */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com/gb/app/zen-void-mood-journal-ai/id6754387933" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", textDecoration: "none" }}>
                <img src="/app-assets/apple.png" alt="Download on the App Store" style={{ height: "48px", borderRadius: "8px" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "56px 24px" }}>

          {/* About */}
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4a4468", marginBottom: "20px" }}>About</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(167,139,250,0.1)" }}>
              {[
                { q: "Why did I build it?", a: "I was tired of mental health apps that gate their best features behind paywalls. Your mental wellness shouldn't be a subscription service." },
                { q: "The AI Companion", a: "Zeno is your AI companion. Chat about anything — anxiety, stress, a rough day. It's not a replacement for therapy, but it's there when you need someone to talk to at 3am." },
                { q: "The Journal", a: "End-to-end encrypted. Your entries never leave your device unencrypted. I can't read them. No one can. That was non-negotiable." },
                { q: "The Tools", a: "Breathing exercises, body scans, grounding techniques — the stuff that actually helps when you're spiraling. No fluff." },
                { q: "Daily Check-in", a: "Sleep, mood, gratitude, social battery. Over time you build a picture of your patterns and the insights page shows your trends." },
                { q: "Pricing", a: "Free to download with optional ad removal. No subscriptions, no premium tiers locking core features. Mental health tools should be accessible to everyone, period." },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", background: i % 2 === 0 ? "rgba(167,139,250,0.04)" : "rgba(0,0,0,0.2)", borderBottom: i < 4 ? "1px solid rgba(167,139,250,0.07)" : "none", borderRight: i % 2 === 0 ? "1px solid rgba(167,139,250,0.07)" : "none" }}>
                  <p style={{ margin: "0 0 8px", fontSize: "12px", fontWeight: "700", color: ACCENT, textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.q}</p>
                  <p style={{ margin: 0, fontSize: "14px", color: "#9990c0", lineHeight: 1.6 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#4a4468", marginBottom: "20px" }}>Features</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {[
                "Zeno AI Companion", "Encrypted Journal", "Breathing Exercises",
                "Body Scans", "Grounding Techniques", "Daily Mood Tracking",
                "Sleep Tracking", "Gratitude Practice", "Affirmations",
                "Insights & Analytics", "Streak System", "Guided Meditation",
              ].map((f) => (
                <span key={f} style={{ background: "rgba(167,139,250,0.08)", border: "1px solid rgba(167,139,250,0.18)", borderRadius: "8px", padding: "8px 14px", fontSize: "13px", color: "#c4b5fd" }}>{f}</span>
              ))}
            </div>
          </section>

          {/* Footer links */}
          <div style={{ borderTop: "1px solid rgba(167,139,250,0.1)", paddingTop: "28px", display: "flex", gap: "20px", fontSize: "13px" }}>
            <Link href="/zen-void/privacy" style={{ color: "#4a4468", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/zen-void/terms" style={{ color: "#4a4468", textDecoration: "none" }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
