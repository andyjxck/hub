import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function VoidMusicianPage() {
  return (
    <Layout>
      <div style={{ background: "#030a0d", minHeight: "100vh", color: "#fff" }}>

        {/* Hero */}
        <div style={{ background: "linear-gradient(160deg, #041218 0%, #030d12 55%, #030a0d 100%)", borderBottom: "1px solid rgba(34,211,238,0.1)", padding: "72px 24px 56px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#0a2a33", textDecoration: "none", fontSize: "13px", display: "inline-block", marginBottom: "40px" }}>← All Apps</Link>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "24px", flexWrap: "wrap", marginBottom: "32px" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "18px", background: "linear-gradient(135deg, #0e7490, #22d3ee)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px", flexShrink: 0, boxShadow: "0 8px 32px rgba(34,211,238,0.3)" }}>🎵</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                  <h1 style={{ margin: 0, fontSize: "40px", fontWeight: "800", letterSpacing: "-1px", color: "#ecfeff" }}>Void Musician</h1>
                  <span style={{ background: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.25)", borderRadius: "20px", padding: "3px 11px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.06em" }}>LIVE</span>
                </div>
                <p style={{ margin: "0 0 4px", fontSize: "17px", color: "#0e4a5a", fontWeight: "400" }}>Book. Release. Conquer.</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#072030", letterSpacing: "0.04em" }}>iOS · Android · Web</p>
              </div>
            </div>

            <a href="https://apps.apple.com/gb/app/void-musician-music-life-sim/id6759539876" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 22px", background: "rgba(34,211,238,0.1)", color: "#22d3ee", textDecoration: "none", borderRadius: "8px", fontWeight: "700", fontSize: "14px", border: "1px solid rgba(34,211,238,0.25)" }}>
              Download Now →
            </a>
          </div>
        </div>

        {/* Body */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "52px 24px" }}>

          <section style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#072030", margin: "0 0 20px" }}>The Game</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
              {[
                { icon: "📅", title: "Weekly Turns", body: "Each week you make decisions. Book gigs, release music, hire people, manage crises. One turn per week. Every choice counts." },
                { icon: "🎤", title: "Gigs & Venues", body: "Dive bars for quick cash and low risk. Arenas for massive exposure but you can bomb. Match the venue to where you are in your career." },
                { icon: "💿", title: "Releases", body: "Singles build buzz fast. Albums are high stakes. Choose your timing, your genre, your rollout strategy. The charts respond to everything." },
                { icon: "🤖", title: "AI Competition", body: "Other artists are playing the same game. A rival's viral hit can tank your momentum. Their flop opens a slot. The industry is alive." },
                { icon: "🧠", title: "The Void", body: "Fame comes with psychological pressure. Ignore it and you crack. Manage it and you might just make it to the top. Sanity is a resource." },
                { icon: "🌍", title: "Global Charts", body: "Real-time leaderboard against other players. Weekly summaries show your rise or decline. The top spot is contested." },
              ].map((item) => (
                <div key={item.title} style={{ padding: "22px", background: "rgba(34,211,238,0.03)", border: "1px solid rgba(34,211,238,0.07)", borderRadius: "12px" }}>
                  <div style={{ fontSize: "24px", marginBottom: "10px" }}>{item.icon}</div>
                  <p style={{ margin: "0 0 8px", fontSize: "13px", fontWeight: "700", color: "#22d3ee", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.title}</p>
                  <p style={{ margin: 0, fontSize: "14px", color: "#0a3a47", lineHeight: 1.65 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#072030", margin: "0 0 20px" }}>Features</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["Weekly Career Turns", "Gig Booking", "Single Releases", "Album Releases", "Genre Selection", "Band Management", "Producer Hiring", "Writer Hiring", "PR & Crisis Management", "AI Industry Competition", "Global Charts", "Void Pressure System", "Weekly Summaries", "Multiplayer"].map((f) => (
                <span key={f} style={{ background: "rgba(34,211,238,0.05)", border: "1px solid rgba(34,211,238,0.1)", borderRadius: "6px", padding: "7px 13px", fontSize: "13px", color: "#0a3a47" }}>{f}</span>
              ))}
            </div>
          </section>

          <div style={{ borderTop: "1px solid rgba(34,211,238,0.07)", paddingTop: "28px", display: "flex", gap: "20px", fontSize: "13px" }}>
            <Link href="/void-musician/privacy" style={{ color: "#072030", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/void-musician/terms" style={{ color: "#072030", textDecoration: "none" }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
