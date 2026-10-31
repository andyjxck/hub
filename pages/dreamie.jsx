import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const VILLAGERS = ["Raymond", "Marshal", "Judy", "Ankha", "Roald", "Lolly", "Marina", "Bob", "Sherb", "Audie"];

export default function DreamiePage() {
  return (
    <Layout>
      <div style={{ background: "#0e0814", minHeight: "100vh", color: "#fff" }}>

        {/* Hero */}
        <div style={{ background: "linear-gradient(160deg, #1a0f2e 0%, #120a22 55%, #0e0814 100%)", borderBottom: "1px solid rgba(167,139,250,0.1)", padding: "72px 24px 56px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#3a2860", textDecoration: "none", fontSize: "13px", display: "inline-block", marginBottom: "40px" }}>← All Apps</Link>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "24px", flexWrap: "wrap", marginBottom: "32px" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "18px", background: "linear-gradient(135deg, #7c3aed, #a78bfa)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px", flexShrink: 0, boxShadow: "0 8px 32px rgba(167,139,250,0.35)" }}>🌿</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                  <h1 style={{ margin: 0, fontSize: "40px", fontWeight: "800", letterSpacing: "-1px", color: "#f5f0ff" }}>dreamie.store</h1>
                  <span style={{ background: "rgba(167,139,250,0.12)", color: "#a78bfa", border: "1px solid rgba(167,139,250,0.25)", borderRadius: "20px", padding: "3px 11px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.06em" }}>LIVE</span>
                </div>
                <p style={{ margin: "0 0 4px", fontSize: "17px", color: "#5a4080", fontWeight: "400" }}>The villager trading platform</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#2e1d50", letterSpacing: "0.04em" }}>Web · iOS coming soon</p>
              </div>
            </div>

            <a href="https://dreamie.store" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 22px", background: "#a78bfa", color: "#1e1b4b", textDecoration: "none", borderRadius: "8px", fontWeight: "700", fontSize: "14px" }}>
              Visit dreamie.store →
            </a>
          </div>
        </div>

        {/* Popular villagers strip */}
        <div style={{ borderBottom: "1px solid rgba(167,139,250,0.07)", padding: "16px 24px", overflowX: "auto" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", gap: "8px", alignItems: "center" }}>
            <span style={{ fontSize: "11px", fontWeight: "700", color: "#2e1d50", textTransform: "uppercase", letterSpacing: "0.1em", whiteSpace: "nowrap", marginRight: "4px" }}>Popular</span>
            {VILLAGERS.map((v) => (
              <span key={v} style={{ padding: "4px 12px", borderRadius: "20px", fontSize: "12px", fontWeight: "600", color: "#7c6aaa", background: "rgba(167,139,250,0.07)", border: "1px solid rgba(167,139,250,0.12)", whiteSpace: "nowrap" }}>{v}</span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "52px 24px" }}>

          <section style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#2e1d50", margin: "0 0 20px" }}>About</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
              {[
                { icon: "💜", title: "Why I built it", body: "I built it for my girlfriend. She loves Animal Crossing and the existing trade methods were a mess — Discord chaos, Twitter threads, Reddit posts. No structure, no safety, no scheduling." },
                { icon: "🗂️", title: "The Catalog", body: "400+ villagers searchable by name, species, personality, or popularity. Add to your basket and request multiple at once instead of one chaotic trade at a time." },
                { icon: "🔢", title: "Queue System", body: "First-come-first-serve with plot-ready priority. If you have an open plot, you move up. Stops people holding spots they can't fill." },
                { icon: "📅", title: "Scheduling", body: "Book a timeslot once a trade is accepted. Supplier shares their Dodo code at the scheduled time. No waiting around, no timezone confusion." },
                { icon: "✅", title: "Trade Verification", body: "Both parties confirm completion. Builds reputation over time — good suppliers get more requests, reliable traders get queue priority." },
                { icon: "🔔", title: "Notifications", body: "Queue position changes, trade accepted, your turn, Dodo code shared. Real-time updates so you're never refreshing and wondering." },
              ].map((item) => (
                <div key={item.title} style={{ padding: "22px", background: "rgba(167,139,250,0.03)", border: "1px solid rgba(167,139,250,0.08)", borderRadius: "12px" }}>
                  <div style={{ fontSize: "24px", marginBottom: "10px" }}>{item.icon}</div>
                  <p style={{ margin: "0 0 8px", fontSize: "13px", fontWeight: "700", color: "#a78bfa", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.title}</p>
                  <p style={{ margin: 0, fontSize: "14px", color: "#4a3870", lineHeight: 1.65 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#2e1d50", margin: "0 0 20px" }}>Features</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["400+ Villager Catalog", "Basket System", "Queue Management", "Plot-Ready Priority", "Timeslot Scheduling", "Dodo Code Distribution", "Trade Verification", "Real-time Notifications", "Supplier Dashboard", "Reputation System", "Search & Filter", "Mobile Responsive"].map((f) => (
                <span key={f} style={{ background: "rgba(167,139,250,0.06)", border: "1px solid rgba(167,139,250,0.13)", borderRadius: "6px", padding: "7px 13px", fontSize: "13px", color: "#5a4080" }}>{f}</span>
              ))}
            </div>
          </section>

          <div style={{ borderTop: "1px solid rgba(167,139,250,0.07)", paddingTop: "28px", display: "flex", gap: "20px", fontSize: "13px" }}>
            <Link href="/dreamie/privacy" style={{ color: "#2e1d50", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/dreamie/terms" style={{ color: "#2e1d50", textDecoration: "none" }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
