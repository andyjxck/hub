import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

const MILESTONES = ["24 Hours", "7 Days", "30 Days", "90 Days", "6 Months", "1 Year"];

export default function BloomPage() {
  return (
    <Layout>
      <div style={{ background: "#060f09", minHeight: "100vh", color: "#fff" }}>

        {/* Hero — warm earthy green, like morning light through leaves */}
        <div style={{ background: "linear-gradient(160deg, #071a0c 0%, #091408 55%, #060f09 100%)", borderBottom: "1px solid rgba(52,211,153,0.1)", padding: "72px 24px 56px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#1a4a28", textDecoration: "none", fontSize: "13px", display: "inline-block", marginBottom: "40px" }}>← All Apps</Link>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "24px", flexWrap: "wrap", marginBottom: "32px" }}>
              <img src="/app-assets/bloom-icon.png" alt="Bloom" width={72} height={72} style={{ borderRadius: "18px", flexShrink: 0, boxShadow: "0 8px 32px rgba(52,211,153,0.25)" }} />
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                  <h1 style={{ margin: 0, fontSize: "40px", fontWeight: "800", letterSpacing: "-1px", color: "#f0fdf4" }}>Bloom</h1>
                  <span style={{ background: "rgba(52,211,153,0.12)", color: "#34d399", border: "1px solid rgba(52,211,153,0.25)", borderRadius: "20px", padding: "3px 11px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.06em" }}>LIVE</span>
                </div>
                <p style={{ margin: "0 0 4px", fontSize: "17px", color: "#2d6a47", fontWeight: "400" }}>Your sobriety companion</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#163d24", letterSpacing: "0.04em" }}>iOS · Android</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://apps.apple.com/gb/app/bloom-sobriety-journal/id6744116401" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", textDecoration: "none" }}>
                <img src="/app-assets/apple.png" alt="Download on the App Store" style={{ height: "44px", borderRadius: "8px" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Milestone strip */}
        <div style={{ borderBottom: "1px solid rgba(52,211,153,0.07)", padding: "20px 24px", overflowX: "auto" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", gap: "10px", alignItems: "center" }}>
            <span style={{ fontSize: "11px", fontWeight: "700", color: "#163d24", textTransform: "uppercase", letterSpacing: "0.1em", whiteSpace: "nowrap", marginRight: "4px" }}>Milestones</span>
            {MILESTONES.map((m, i) => (
              <span key={m} style={{ padding: "5px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: "600", color: i < 2 ? "#34d399" : "#1a4a28", background: i < 2 ? "rgba(52,211,153,0.1)" : "transparent", border: "1px solid rgba(52,211,153,0.15)", whiteSpace: "nowrap" }}>{m}</span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "52px 24px" }}>

          {/* About — 3 col panels */}
          <section style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#163d24", margin: "0 0 20px" }}>About</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
              {[
                { icon: "🐾", title: "The Pet", body: "Choose a dog, cat, or raccoon. Your pet grows with you — excited on good days, worried when you're struggling. Having something that responds to your progress hits different than just a number." },
                { icon: "🔒", title: "Fully Private", body: "No email. No database. Everything lives on your device in AsyncStorage. I can't see any of it. Export your data whenever you want — it's yours." },
                { icon: "🌬️", title: "Craving Tools", body: "4-7-8 breathing, box breathing, a 10-minute 'ride it out' timer, your personal why statement, and a distraction list you build yourself. The practical stuff." },
                { icon: "📓", title: "Journal", body: "Private mood-linked journal entries. Track how you're actually feeling, not just how many days you've been sober. Patterns matter." },
                { icon: "📊", title: "Stats", body: "Money saved, journal activity, relapse history if you choose to track it. Not judgement — just data to help you understand yourself." },
                { icon: "💚", title: "Free Forever", body: "No subscriptions. No premium features behind a paywall. Recovery tools should be available to anyone who needs them, full stop." },
              ].map((item) => (
                <div key={item.title} style={{ padding: "22px", background: "rgba(52,211,153,0.03)", border: "1px solid rgba(52,211,153,0.08)", borderRadius: "12px" }}>
                  <div style={{ fontSize: "24px", marginBottom: "10px" }}>{item.icon}</div>
                  <p style={{ margin: "0 0 8px", fontSize: "13px", fontWeight: "700", color: "#34d399", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.title}</p>
                  <p style={{ margin: 0, fontSize: "14px", color: "#2a5c3a", lineHeight: 1.65 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#163d24", margin: "0 0 20px" }}>Features</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["Live Sobriety Timer", "Virtual Pet (Dog / Cat / Raccoon)", "Private Journal", "Mood Tracking", "4-7-8 Breathing", "Box Breathing", "Ride It Out Timer", "Why Statement", "Distraction List", "Milestone Celebrations", "Money Saved", "Progress Analytics", "Daily Affirmations", "Data Export"].map((f) => (
                <span key={f} style={{ background: "rgba(52,211,153,0.06)", border: "1px solid rgba(52,211,153,0.13)", borderRadius: "6px", padding: "7px 13px", fontSize: "13px", color: "#2a5c3a" }}>{f}</span>
              ))}
            </div>
          </section>

          {/* Footer */}
          <div style={{ borderTop: "1px solid rgba(52,211,153,0.07)", paddingTop: "28px", display: "flex", gap: "20px", fontSize: "13px" }}>
            <Link href="/bloom/privacy" style={{ color: "#163d24", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/bloom/terms" style={{ color: "#163d24", textDecoration: "none" }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
