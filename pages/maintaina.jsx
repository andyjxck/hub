import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function MaintainAPage() {
  return (
    <Layout>
      <div style={{ background: "#07090f", minHeight: "100vh", color: "#fff" }}>

        {/* Hero */}
        <div style={{ background: "linear-gradient(160deg, #0c111e 0%, #090d18 55%, #07090f 100%)", borderBottom: "1px solid rgba(99,102,241,0.1)", padding: "72px 24px 56px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#1a1f3a", textDecoration: "none", fontSize: "13px", display: "inline-block", marginBottom: "40px" }}>← All Apps</Link>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "24px", flexWrap: "wrap", marginBottom: "32px" }}>
              <div style={{ width: "72px", height: "72px", borderRadius: "18px", background: "linear-gradient(135deg, #4338ca, #818cf8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "36px", flexShrink: 0, boxShadow: "0 8px 32px rgba(99,102,241,0.3)" }}>🛠️</div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                  <h1 style={{ margin: 0, fontSize: "40px", fontWeight: "800", letterSpacing: "-1px", color: "#f0f0ff" }}>MaintainA</h1>
                  <span style={{ background: "rgba(99,102,241,0.12)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.25)", borderRadius: "20px", padding: "3px 11px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.06em" }}>LIVE</span>
                </div>
                <p style={{ margin: "0 0 4px", fontSize: "17px", color: "#2a2f5a", fontWeight: "400" }}>Support. Invoice. Grow.</p>
                <p style={{ margin: 0, fontSize: "12px", color: "#141830", letterSpacing: "0.04em" }}>Web · For freelancers &amp; small businesses</p>
              </div>
            </div>

            <a href="https://maintain-a.site" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 22px", background: "#6366f1", color: "#fff", textDecoration: "none", borderRadius: "8px", fontWeight: "700", fontSize: "14px" }}>
              Try MaintainA →
            </a>
          </div>
        </div>

        {/* Two sides strip */}
        <div style={{ borderBottom: "1px solid rgba(99,102,241,0.07)", padding: "20px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 18px", background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.12)", borderRadius: "8px" }}>
              <span style={{ fontSize: "16px" }}>⚙️</span>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#4a50a0" }}>Admin Dashboard</span>
              <span style={{ fontSize: "11px", color: "#2a2f5a" }}>— for you</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 18px", background: "rgba(99,102,241,0.04)", border: "1px solid rgba(99,102,241,0.08)", borderRadius: "8px" }}>
              <span style={{ fontSize: "16px" }}>👤</span>
              <span style={{ fontSize: "13px", fontWeight: "600", color: "#4a50a0" }}>Client Portal</span>
              <span style={{ fontSize: "11px", color: "#2a2f5a" }}>— for your clients</span>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "52px 24px" }}>

          <section style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#141830", margin: "0 0 20px" }}>How It Works</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
              {[
                { icon: "🎫", title: "Support Tickets", body: "Create tickets and track them through resolution. Clients can also raise their own — instead of emailing you, they submit a ticket with all the context you need." },
                { icon: "📄", title: "Quotes & Invoices", body: "Send quotes with line items and custom pricing. One click generates a PDF invoice with Stripe checkout built in. Clients pay directly from their portal." },
                { icon: "⏱️", title: "Time Tracking", body: "Start a timer on a project, stop when done. Hours log automatically. Generate invoices from tracked time or bill manually. Either way, the data is there." },
                { icon: "📊", title: "Dashboard", body: "Unpaid invoices, open tickets, recent activity, revenue metrics. Everything that needs attention at a glance. No digging through multiple systems." },
                { icon: "🔗", title: "Client Portal", body: "Give every client their own portal. They see their tickets, quotes, invoices, and project progress. No more 'where are we on this?' emails." },
                { icon: "🚨", title: "Crash Reports", body: "If you're shipping software, monitor crash reports from within the same dashboard. Issues surface automatically and link to tickets." },
              ].map((item) => (
                <div key={item.title} style={{ padding: "22px", background: "rgba(99,102,241,0.03)", border: "1px solid rgba(99,102,241,0.07)", borderRadius: "12px" }}>
                  <div style={{ fontSize: "24px", marginBottom: "10px" }}>{item.icon}</div>
                  <p style={{ margin: "0 0 8px", fontSize: "13px", fontWeight: "700", color: "#818cf8", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.title}</p>
                  <p style={{ margin: 0, fontSize: "14px", color: "#2a2f5a", lineHeight: 1.65 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "56px" }}>
            <p style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#141830", margin: "0 0 20px" }}>Features</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["Support Ticketing", "Client Ticket Submission", "Quote Generation", "PDF Invoicing", "Stripe Checkout", "Time Tracking", "Client Portal", "Project Progress", "Dashboard Analytics", "Crash Reports", "Invoice History", "Revenue Metrics"].map((f) => (
                <span key={f} style={{ background: "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.1)", borderRadius: "6px", padding: "7px 13px", fontSize: "13px", color: "#2a2f5a" }}>{f}</span>
              ))}
            </div>
          </section>

          <div style={{ borderTop: "1px solid rgba(99,102,241,0.07)", paddingTop: "28px", display: "flex", gap: "20px", fontSize: "13px" }}>
            <Link href="/maintaina/privacy" style={{ color: "#141830", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/maintaina/terms" style={{ color: "#141830", textDecoration: "none" }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
