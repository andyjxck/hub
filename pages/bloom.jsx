import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function BloomPage() {
  return (
    <Layout>
      <div style={{ background: "#071410", minHeight: "100vh", color: "#fff" }}>
        <div style={{ background: "linear-gradient(160deg, #0a2419 0%, #061a10 60%, #071410 100%)", borderBottom: "1px solid rgba(52,211,153,0.12)", padding: "80px 24px 60px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#1a4a30", textDecoration: "none", fontSize: "13px", display: "inline-block", marginBottom: "40px" }}>← All Apps</Link>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "28px", flexWrap: "wrap", marginBottom: "36px" }}>
              <div style={{ width: "80px", height: "80px", borderRadius: "22px", flexShrink: 0, background: "linear-gradient(135deg, #065f46, #34d399)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px", boxShadow: "0 8px 32px rgba(52,211,153,0.3)" }}>🌸</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <h1 style={{ margin: 0, fontSize: "42px", fontWeight: "800", letterSpacing: "-1px", color: "#fff" }}>Bloom</h1>
                  <span style={{ background: "rgba(52,211,153,0.15)", color: "#34d399", border: "1px solid rgba(52,211,153,0.3)", borderRadius: "20px", padding: "4px 12px", fontSize: "12px", fontWeight: "600" }}>LIVE</span>
                </div>
                <p style={{ margin: 0, fontSize: "18px", color: "#2a7a52", fontWeight: "400" }}>Never paywalling mental health tools</p>
                <p style={{ margin: "6px 0 0", fontSize: "13px", color: "#1a4030" }}>iOS · Android</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com/gb/app/bloom-sobriety-tracker/id6760922929" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", textDecoration: "none" }}>
                <img src="/app-assets/apple.png" alt="Download on the App Store" style={{ height: "48px", borderRadius: "8px" }} />
              </a>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "56px 24px" }}>
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4030", marginBottom: "20px" }}>About</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(52,211,153,0.1)" }}>
              {[
                { q: "Why I built it", a: "I wanted a sobriety companion that actually respected privacy — no cloud storage, no analytics, no data mining. Your recovery journey is yours alone." },
                { q: "The Pet", a: "You choose a dog or cat and it grows with you. When you're doing well, it's excited. When you're struggling, it looks worried. Having something that depends on you hitting different than a number." },
                { q: "Craving Tools", a: "Breathing exercises (4-7-8 and box breathing), a 10-minute 'ride it out' timer, your 'why' statement, and a distraction list you build yourself. The stuff that actually helps." },
                { q: "Privacy First", a: "The journal is built with AsyncStorage — nothing leaves your device. No account required unless you want sync. Even then, just a user ID and password. No email, no personal info." },
                { q: "Milestones", a: "Automatic celebrations at 24 hours, 7 days, 30 days, 90 days, 6 months, 1 year. Not gamification for its own sake — recognising progress in a journey that can feel endless." },
                { q: "Pricing", a: "Free. No subscriptions, no premium features behind paywalls. Recovery tools should be accessible to everyone who needs them, regardless of what they can afford." },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", background: i % 2 === 0 ? "rgba(52,211,153,0.04)" : "rgba(0,0,0,0.2)", borderBottom: i < 4 ? "1px solid rgba(52,211,153,0.07)" : "none", borderRight: i % 2 === 0 ? "1px solid rgba(52,211,153,0.07)" : "none" }}>
                  <p style={{ margin: "0 0 8px", fontSize: "12px", fontWeight: "700", color: "#34d399", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.q}</p>
                  <p style={{ margin: 0, fontSize: "14px", color: "#2a6a48", lineHeight: 1.6 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#1a4030", marginBottom: "20px" }}>Features</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["Virtual Pet (Dog/Cat)", "Live Sobriety Timer", "Private Journal", "Breathing Exercises", "Ride It Out Timer", "Why Statement", "Distraction List", "Milestone Celebrations", "Stats Dashboard", "Money Saved Tracker", "Local-First Privacy", "Data Export/Import"].map((f) => (
                <span key={f} style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.18)", borderRadius: "8px", padding: "8px 14px", fontSize: "13px", color: "#6ee7b7" }}>{f}</span>
              ))}
            </div>
          </section>
          <div style={{ borderTop: "1px solid rgba(52,211,153,0.1)", paddingTop: "28px", display: "flex", gap: "20px", fontSize: "13px" }}>
            <Link href="/bloom/privacy" style={{ color: "#1a4030", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/bloom/terms" style={{ color: "#1a4030", textDecoration: "none" }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
