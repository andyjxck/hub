import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

const STOCKS = ["VOID", "TTT", "IDLE", "COIN", "GRND", "PRST", "EMPL", "VLT"];

export default function TapTapThreePage() {
  return (
    <Layout>
      <div style={{ background: "#0c0900", minHeight: "100vh", color: "#fff" }}>

        {/* Ticker strip */}
        <div style={{ background: "#110d00", borderBottom: "1px solid rgba(251,191,36,0.15)", padding: "8px 0", overflow: "hidden" }}>
          <div style={{ display: "flex", gap: "32px", padding: "0 24px", overflowX: "auto" }}>
            {STOCKS.map((s, i) => {
              const up = i % 3 !== 0;
              return (
                <span key={s} style={{ fontSize: "11px", fontWeight: "700", color: up ? "#4ade80" : "#f87171", whiteSpace: "nowrap", fontFamily: "monospace" }}>
                  {s} {up ? "▲" : "▼"} {(Math.random() * 5 + 0.1).toFixed(2)}%
                </span>
              );
            })}
          </div>
        </div>

        {/* Hero */}
        <div style={{ background: "linear-gradient(160deg, #1a1000 0%, #0f0a00 55%, #0c0900 100%)", borderBottom: "1px solid rgba(251,191,36,0.1)", padding: "72px 24px 56px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#3a2800", textDecoration: "none", fontSize: "13px", display: "inline-block", marginBottom: "40px" }}>← All Apps</Link>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "24px", flexWrap: "wrap", marginBottom: "32px" }}>
              <img src="/app-assets/tap-tap-three-icon.png" alt="Tap Tap Three" width={72} height={72} style={{ borderRadius: "18px", flexShrink: 0, boxShadow: "0 8px 32px rgba(251,191,36,0.3)" }} />
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                  <h1 style={{ margin: 0, fontSize: "40px", fontWeight: "800", letterSpacing: "-1px", color: "#fef3c7" }}>Tap Tap Three</h1>
                  <span style={{ background: "rgba(251,191,36,0.12)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.25)", borderRadius: "20px", padding: "3px 11px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.06em" }}>LIVE</span>
                </div>
                <p style={{ margin: "0 0 4px", fontSize: "17px", color: "#78520a", fontWeight: "400" }}>Tap. Invest. Dominate.</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#3a2800", letterSpacing: "0.04em" }}>iOS · Android · Web</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://taptapthree.co.uk" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 22px", background: "#fbbf24", color: "#1a0a00", textDecoration: "none", borderRadius: "8px", fontWeight: "700", fontSize: "14px" }}>
                Play on Web →
              </a>
              <a href="https://apps.apple.com/gb/app/tap-tap-three-market-rise/id6755093222" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", textDecoration: "none" }}>
                <img src="/app-assets/apple.png" alt="Download on the App Store" style={{ height: "44px", borderRadius: "8px" }} />
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", textDecoration: "none" }}>
                <img src="/app-assets/android.png" alt="Get it on Google Play" style={{ height: "44px", borderRadius: "8px" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "52px 24px" }}>

          {/* Systems grid */}
          <section style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3a2800", margin: "0 0 20px" }}>The Systems</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
              {[
                { icon: "👆", title: "Tapping", body: "The core loop. Tap to earn coins. Upgrade your tap power. Auto-tappers keep earning while you're away. Simple to start, deep to master." },
                { icon: "📈", title: "Stock Market", body: "8 stocks with real-time fluctuating prices. Buy low, sell high, day trade or hold long-term. Market crashes and booms shake everything up." },
                { icon: "🏢", title: "Business Empire", body: "Hire employees who generate passive income. Launch projects that take time but pay big. Upgrade efficiency, returns, and output." },
                { icon: "🏦", title: "The Vault", body: "Store earnings safely. Earn interest over time. Your safety net against market crashes and bad business weeks." },
                { icon: "⭐", title: "Prestige", body: "Reset for a permanent multiplier. Numbers get absurd. That's the point. Each run is faster than the last." },
                { icon: "🏆", title: "Compete", body: "Leaderboards, friends list, in-app messaging. Daily streaks and weekly challenges. Events shake up the economy regularly." },
              ].map((item) => (
                <div key={item.title} style={{ padding: "22px", background: "rgba(251,191,36,0.03)", border: "1px solid rgba(251,191,36,0.08)", borderRadius: "12px" }}>
                  <div style={{ fontSize: "24px", marginBottom: "10px" }}>{item.icon}</div>
                  <p style={{ margin: "0 0 8px", fontSize: "13px", fontWeight: "700", color: "#fbbf24", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.title}</p>
                  <p style={{ margin: 0, fontSize: "14px", color: "#5a3e0a", lineHeight: 1.65 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3a2800", margin: "0 0 20px" }}>Features</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["Tap-Based Idle Gameplay", "8 Real-Time Stocks", "Business Empire", "Employee Hiring", "Project Launching", "Vault + Interest", "Prestige System", "Permanent Multipliers", "Deep Upgrade Trees", "Leaderboards", "Friends & Messaging", "Daily Streaks", "Weekly Challenges", "Offline Earnings", "Market Events"].map((f) => (
                <span key={f} style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.13)", borderRadius: "6px", padding: "7px 13px", fontSize: "13px", color: "#78520a" }}>{f}</span>
              ))}
            </div>
          </section>

          {/* Footer */}
          <div style={{ borderTop: "1px solid rgba(251,191,36,0.07)", paddingTop: "28px", display: "flex", gap: "20px", fontSize: "13px" }}>
            <Link href="/taptapthree/privacy" style={{ color: "#3a2800", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/taptapthree/terms" style={{ color: "#3a2800", textDecoration: "none" }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
