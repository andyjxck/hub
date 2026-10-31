import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function TownWallPage() {
  return (
    <Layout>
      <div style={{ background: "#0d0800", minHeight: "100vh", color: "#fff" }}>

        {/* Hero */}
        <div style={{ background: "linear-gradient(160deg, #1c0e00 0%, #150a00 55%, #0d0800 100%)", borderBottom: "1px solid rgba(251,146,60,0.1)", padding: "72px 24px 56px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#2a1500", textDecoration: "none", fontSize: "13px", display: "inline-block", marginBottom: "40px" }}>← All Apps</Link>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "24px", flexWrap: "wrap", marginBottom: "32px" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "18px", background: "linear-gradient(135deg, #c2410c, #fb923c)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px", flexShrink: 0, boxShadow: "0 8px 32px rgba(251,146,60,0.3)" }}>🏘️</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                  <h1 style={{ margin: 0, fontSize: "40px", fontWeight: "800", letterSpacing: "-1px", color: "#fff7ed" }}>Town Wall</h1>
                  <span style={{ background: "rgba(251,146,60,0.12)", color: "#fb923c", border: "1px solid rgba(251,146,60,0.25)", borderRadius: "20px", padding: "3px 11px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.06em" }}>LIVE</span>
                </div>
                <p style={{ margin: "0 0 4px", fontSize: "17px", color: "#7a3a10", fontWeight: "400" }}>Your town's digital community hub</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#2a1500", letterSpacing: "0.04em" }}>Web · iOS · Android</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://townwall.co.uk" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 22px", background: "#fb923c", color: "#431407", textDecoration: "none", borderRadius: "8px", fontWeight: "700", fontSize: "14px" }}>
                Join Town Wall →
              </a>
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", textDecoration: "none" }}>
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

          <section style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#2a1500", margin: "0 0 20px" }}>About</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
              {[
                { icon: "📌", title: "Why I built it", body: "Social media is too big, too algorithmic, too disconnected from where you actually live. Your neighbors aren't on Twitter. Your local businesses aren't on Instagram. They needed somewhere." },
                { icon: "📰", title: "Chronological Feed", body: "No algorithm. Posts appear in the order they're posted, from people in your town. Filter by zone — see what's happening in different areas of your city." },
                { icon: "📸", title: "Stories", body: "Share moments that disappear after 24 hours. A quick photo, a snapshot of something happening today. Ephemeral, casual, real." },
                { icon: "🎨", title: "Talent Marketplace", body: "Local creators — YouTubers, Podcasters, Musicians, Artists, Developers, Photographers. Find local talent or showcase your own with links to your platforms." },
                { icon: "🏪", title: "Business Directory", body: "Local businesses list their services with delivery links to Amazon, Just Eat, Deliveroo, Uber Eats. Map integration shows where they are. Shop and hire local." },
                { icon: "🔒", title: "Privacy First", body: "Your location shows you relevant content — it doesn't track you. You control what you share. Town Wall is about community, not data mining." },
              ].map((item) => (
                <div key={item.title} style={{ padding: "22px", background: "rgba(251,146,60,0.03)", border: "1px solid rgba(251,146,60,0.07)", borderRadius: "12px" }}>
                  <div style={{ fontSize: "24px", marginBottom: "10px" }}>{item.icon}</div>
                  <p style={{ margin: "0 0 8px", fontSize: "13px", fontWeight: "700", color: "#fb923c", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.title}</p>
                  <p style={{ margin: 0, fontSize: "14px", color: "#5a2a0a", lineHeight: 1.65 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#2a1500", margin: "0 0 20px" }}>Features</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["Chronological Feed", "Zone Filtering", "Stories (24hr)", "Talent Marketplace", "Local Business Directory", "Map Integration", "Delivery Links", "Location-Based", "No Algorithms", "Privacy Focused", "Free with Ads"].map((f) => (
                <span key={f} style={{ background: "rgba(251,146,60,0.05)", border: "1px solid rgba(251,146,60,0.1)", borderRadius: "6px", padding: "7px 13px", fontSize: "13px", color: "#5a2a0a" }}>{f}</span>
              ))}
            </div>
          </section>

          <div style={{ borderTop: "1px solid rgba(251,146,60,0.07)", paddingTop: "28px", display: "flex", gap: "20px", fontSize: "13px" }}>
            <Link href="/town-wall/privacy" style={{ color: "#2a1500", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/town-wall/terms" style={{ color: "#2a1500", textDecoration: "none" }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
