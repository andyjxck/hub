import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function VoidBallerPage() {
  return (
    <Layout>
      <div style={{ background: "#0c0900", minHeight: "100vh", color: "#fff" }}>

        {/* Hero */}
        <div style={{ background: "linear-gradient(160deg, #1a1000 0%, #713f12 50%, #0c0900 100%)", borderBottom: "1px solid rgba(251,191,36,0.1)", padding: "72px 24px 56px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#3d2800", textDecoration: "none", fontSize: "13px", display: "inline-block", marginBottom: "40px" }}>← All Apps</Link>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "24px", flexWrap: "wrap", marginBottom: "32px" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "18px", background: "linear-gradient(135deg, #713f12, #fbbf24)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px", flexShrink: 0, boxShadow: "0 8px 32px rgba(251,191,36,0.3)" }}>⚽</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                  <h1 style={{ margin: 0, fontSize: "40px", fontWeight: "800", letterSpacing: "-1px", color: "#fef3c7" }}>Void Baller</h1>
                  <span style={{ background: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.25)", borderRadius: "20px", padding: "3px 11px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.06em" }}>LIVE</span>
                </div>
                <p style={{ margin: "0 0 4px", fontSize: "17px", color: "#fbbf24", fontWeight: "400" }}>Rise. Play. Become a Legend.</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#3d2800", letterSpacing: "0.04em" }}>iOS · Android</p>
              </div>
            </div>

            <a href="https://apps.apple.com/gb/app/void-baller-football-sim/id6781029771" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", textDecoration: "none" }}>
              <img src="/app-assets/apple.png" alt="Download on the App Store" style={{ height: "48px", borderRadius: "8px" }} />
            </a>
          </div>
        </div>

        {/* Body */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "52px 24px" }}>

          <section style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3d2800", margin: "0 0 20px" }}>The Game</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
              {[
                { icon: "📈", title: "Career Progression", body: "Start as a youth prospect, develop your skills, and rise through the ranks from academy to world-class superstar." },
                { icon: "⚽", title: "Match Performance", body: "Train, play matches, and improve your stats. Your performance on the pitch determines your career trajectory." },
                { icon: "✍️", title: "Club Management", body: "Sign with clubs, negotiate contracts, and build your reputation. Your choices shape your career path." },
                { icon: "💪", title: "Training System", body: "Develop skills like shooting, passing, dribbling, and defending. Specialize in your playstyle." },
                { icon: "📱", title: "Social Media", body: "Build your fanbase and manage your public image. Your social presence affects endorsement deals." },
                { icon: "💰", title: "Endorsements", body: "Sign deals with brands to earn extra income. Build your brand beyond the pitch." },
                { icon: "🔄", title: "Transfer Market", body: "Move between clubs, negotiate better contracts. The market is dynamic and competitive." },
                { icon: "🌍", title: "International Career", body: "Earn caps for your national team. Represent your country on the world stage." },
                { icon: "🏆", title: "Trophies", body: "Win league titles, cups, and individual awards. Build a legacy that lasts decades." },
              ].map((item) => (
                <div key={item.title} style={{ padding: "22px", background: "rgba(251,191,36,0.03)", border: "1px solid rgba(251,191,36,0.07)", borderRadius: "12px" }}>
                  <div style={{ fontSize: "24px", marginBottom: "10px" }}>{item.icon}</div>
                  <p style={{ margin: "0 0 8px", fontSize: "13px", fontWeight: "700", color: "#fbbf24", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.title}</p>
                  <p style={{ margin: 0, fontSize: "14px", color: "#3d2800", lineHeight: 1.65 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3d2800", margin: "0 0 20px" }}>Features</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["Career Progression", "Match Performance", "Club Management", "Training System", "Social Media", "Endorsements", "Transfer Market", "International Career", "Trophies"].map((f) => (
                <span key={f} style={{ background: "rgba(251,191,36,0.05)", border: "1px solid rgba(251,191,36,0.1)", borderRadius: "6px", padding: "7px 13px", fontSize: "13px", color: "#3d2800" }}>{f}</span>
              ))}
            </div>
          </section>

          <div style={{ borderTop: "1px solid rgba(251,191,36,0.07)", paddingTop: "28px", display: "flex", gap: "20px", fontSize: "13px" }}>
            <Link href="/football-life/privacy" style={{ color: "#3d2800", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/football-life/terms" style={{ color: "#3d2800", textDecoration: "none" }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
