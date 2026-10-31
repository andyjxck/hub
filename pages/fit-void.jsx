import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function FitVoidPage() {
  return (
    <Layout>
      <div style={{ background: "#071410", minHeight: "100vh", color: "#fff" }}>
        <div style={{ background: "linear-gradient(160deg, #0a1a0c 0%, #061a10 60%, #071410 100%)", borderBottom: "1px solid rgba(163,230,53,0.12)", padding: "80px 24px 60px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#3a5a1a", textDecoration: "none", fontSize: "13px", display: "inline-block", marginBottom: "40px" }}>← All Apps</Link>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "28px", flexWrap: "wrap", marginBottom: "36px" }}>
              <img src="/app-assets/fit-void-icon.png" alt="Fit Void" width={80} height={80} style={{ borderRadius: "22px", flexShrink: 0, boxShadow: "0 8px 32px rgba(163,230,53,0.3)" }} />
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <h1 style={{ margin: 0, fontSize: "42px", fontWeight: "800", letterSpacing: "-1px", color: "#fff" }}>Fit Void</h1>
                  <span style={{ background: "rgba(163,230,53,0.15)", color: "#a3e635", border: "1px solid rgba(163,230,53,0.3)", borderRadius: "20px", padding: "4px 12px", fontSize: "12px", fontWeight: "600" }}>LIVE</span>
                </div>
                <p style={{ margin: 0, fontSize: "18px", color: "#5a7a2a", fontWeight: "400" }}>Offline-first strength, meal & body tracker</p>
                <p style={{ margin: "6px 0 0", fontSize: "13px", color: "#3a5a1a" }}>iOS · Android</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <p style={{ margin: 0, fontSize: "13px", color: "#5a7a2a", fontStyle: "italic" }}>Coming soon to iOS & Android</p>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "56px 24px" }}>
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3a5a1a", marginBottom: "20px" }}>About</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", borderRadius: "14px", overflow: "hidden", border: "1px solid rgba(163,230,53,0.1)" }}>
              {[
                { q: "Why I built it", a: "I wanted a strength tracker that respected my data. Everything you log lives on your device in SQLite and works offline. Cloud sync and social features are optional — guests never touch the network." },
                { q: "Workout Logging", a: "Log sets, reps and weights with a live workout state machine — ghost sets, rest HUD, automatic PR detection. Build routines and let the app guide your sets and rest." },
                { q: "Meal Tracking", a: "Plan meals, scan barcodes with Open Food Facts, import recipes from a link, and log macros to your day. Per-serving macro math is all done for you." },
                { q: "Body & Analytics", a: "Track weight and measurements. Volume radar, fatigue intelligence and 1RM progression predictions (Void Pro) turn your log into insight, not noise." },
                { q: "Privacy First", a: "Local-first by design. No analytics, no advertising IDs, no crash telemetry. HealthKit data is read locally only and never uploaded. Link an account only if you want sync or social." },
                { q: "Pricing", a: "Free tier covers logging, routines, meals and body metrics. Void Pro adds advanced analytics, cloud sync and custom exercises. Void Pro Max adds priority support and early access." },
              ].map((item, i) => (
                <div key={i} style={{ padding: "24px", background: i % 2 === 0 ? "rgba(163,230,53,0.04)" : "rgba(0,0,0,0.2)", borderBottom: i < 4 ? "1px solid rgba(163,230,53,0.07)" : "none", borderRight: i % 2 === 0 ? "1px solid rgba(163,230,53,0.07)" : "none" }}>
                  <p style={{ margin: "0 0 8px", fontSize: "12px", fontWeight: "700", color: "#a3e635", textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.q}</p>
                  <p style={{ margin: 0, fontSize: "14px", color: "#5a7a4a", lineHeight: 1.6 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#3a5a1a", marginBottom: "20px" }}>Features</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["Workout Logging", "Set/Rep/Weight Tracking", "Rest Timer", "Personal Records", "Routines", "Meal Planning", "Barcode Scanning", "Recipe Import", "Body Metrics", "Volume Radar", "Fatigue Intelligence", "Apple Health", "Local-First Privacy", "Optional Cloud Sync", "Social Feed", "CSV Export"].map((f) => (
                <span key={f} style={{ background: "rgba(163,230,53,0.08)", border: "1px solid rgba(163,230,53,0.18)", borderRadius: "8px", padding: "8px 14px", fontSize: "13px", color: "#6ee7b7" }}>{f}</span>
              ))}
            </div>
          </section>
          <div style={{ borderTop: "1px solid rgba(163,230,53,0.1)", paddingTop: "28px", display: "flex", gap: "20px", fontSize: "13px" }}>
            <Link href="/fit-void/privacy" style={{ color: "#a3e635", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/fit-void/terms" style={{ color: "#a3e635", textDecoration: "none" }}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
