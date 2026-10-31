import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function ZenVoidPage() {
  return (
    <Layout>
      <div style={{ background: "#0a081a", minHeight: "100vh", color: "#fff" }}>

        {/* Hero */}
        <div style={{ background: "linear-gradient(160deg, #1a1040 0%, #0d0a22 60%, #0a081a 100%)", borderBottom: "1px solid rgba(167,139,250,0.12)", padding: "72px 24px 56px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#4a4068", textDecoration: "none", fontSize: "13px", display: "inline-block", marginBottom: "40px" }}>← All Apps</Link>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "24px", flexWrap: "wrap", marginBottom: "32px" }}>
              <img src="/app-assets/zen-void-icon.png" alt="Zen Void" width={72} height={72} style={{ borderRadius: "18px", flexShrink: 0, boxShadow: "0 8px 32px rgba(167,139,250,0.35)" }} />
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                  <h1 style={{ margin: 0, fontSize: "40px", fontWeight: "800", letterSpacing: "-1px" }}>Zen Void</h1>
                  <span style={{ background: "rgba(167,139,250,0.15)", color: "#a78bfa", border: "1px solid rgba(167,139,250,0.3)", borderRadius: "20px", padding: "3px 11px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.06em" }}>LIVE</span>
                </div>
                <p style={{ margin: "0 0 4px", fontSize: "17px", color: "#6b5fa8", fontWeight: "400" }}>Never gating mental health</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#3a3055", letterSpacing: "0.04em" }}>iOS · Android</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com/gb/app/zen-void-mood-journal-ai/id6754387933" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", textDecoration: "none" }}>
                <img src="/app-assets/apple.png" alt="Download on the App Store" style={{ height: "44px", borderRadius: "8px" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "52px 24px" }}>

          {/* About grid */}
          <section style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3a3055", marginBottom: "20px", margin: "0 0 20px" }}>About</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1px", background: "rgba(167,139,250,0.08)", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(167,139,250,0.1)" }}>
              {[
                { q: "Why I built it", a: "Mental health apps that gate their best features behind paywalls. Your wellness shouldn't be a subscription. Everything in Zen Void is free." },
                { q: "Zeno AI", a: "Your AI companion. Chat about anything — anxiety, stress, a rough day. It's there when you need someone to talk to at 3am and therapy isn't an option." },
                { q: "The Journal", a: "End-to-end encrypted. Your entries never leave your device unencrypted. I can't read them. No one can. Non-negotiable." },
                { q: "Daily Check-in", a: "Sleep, mood, gratitude, social battery. Simple questions. Over time you build a picture of your patterns — the insights page shows your trends." },
                { q: "Crisis Tools", a: "Breathing exercises, body scans, grounding techniques. The stuff that actually works when you're spiraling. No fluff." },
                { q: "Streak System", a: "Sometimes you just need that small push to keep showing up for yourself. It's not about perfection — it's about consistency." },
              ].map((item, i) => (
                <div key={i} style={{ padding: "22px 24px", background: "#0a081a" }}>
                  <p style={{ margin: "0 0 7px", fontSize: "11px", fontWeight: "700", color: "#a78bfa", textTransform: "uppercase", letterSpacing: "0.07em" }}>{item.q}</p>
                  <p style={{ margin: 0, fontSize: "14px", color: "#5a5080", lineHeight: 1.65 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3a3055", margin: "0 0 20px" }}>Features</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["Zeno AI Companion", "Encrypted Journal", "Breathing Exercises", "Body Scans", "Grounding Techniques", "Daily Mood Tracking", "Sleep Tracking", "Gratitude Practice", "Affirmations", "Insights & Analytics", "Streak System", "Ambient Sounds", "Luna Moon Companion", "Guided Meditation"].map((f) => (
                <span key={f} style={{ background: "rgba(167,139,250,0.07)", border: "1px solid rgba(167,139,250,0.15)", borderRadius: "6px", padding: "7px 13px", fontSize: "13px", color: "#7a6aaa" }}>{f}</span>
              ))}
            </div>
          </section>

          {/* Footer */}
          <div style={{ borderTop: "1px solid rgba(167,139,250,0.08)", paddingTop: "28px", display: "flex", gap: "20px", fontSize: "13px" }}>
            <Link href="/zenvoid/privacy" style={{ color: "#3a3055", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/zenvoid/terms" style={{ color: "#3a3055", textDecoration: "none" }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
