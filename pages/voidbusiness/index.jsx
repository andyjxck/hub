import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

const ACCENT = "#fbbf24";

export default function VoidBusinessPage() {
  return (
    <Layout>
      <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#fff" }}>
        <div style={{ background: "linear-gradient(160deg, #0a0a0a 0%, #1f1606 60%, #0a0a0a 100%)", borderBottom: "1px solid rgba(251,191,36,0.12)", padding: "80px 24px 60px" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <Link href="/" style={{ color: "#7a6020", textDecoration: "none", fontSize: "13px", display: "inline-block", marginBottom: "40px" }}>← All Apps</Link>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "28px", flexWrap: "wrap", marginBottom: "36px" }}>
              <img src="/app-assets/void-business-icon.png" alt="Void Business" width={80} height={80} style={{ borderRadius: "22px", flexShrink: 0, boxShadow: "0 8px 32px rgba(251,191,36,0.3)" }} />
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <h1 style={{ margin: 0, fontSize: "42px", fontWeight: "800", letterSpacing: "-1px", color: "#fff" }}>Void Business</h1>
                  <span style={{ background: "rgba(251,191,36,0.15)", color: ACCENT, border: "1px solid rgba(251,191,36,0.3)", borderRadius: "20px", padding: "4px 12px", fontSize: "12px", fontWeight: "600" }}>COMING SOON</span>
                </div>
                <p style={{ margin: 0, fontSize: "18px", color: "#a08440", fontWeight: "400" }}>Tap. Invest. Build an empire.</p>
                <p style={{ margin: "6px 0 0", fontSize: "13px", color: "#7a6020" }}>iPhone · iPad</p>
              </div>
            </div>
            <p style={{ margin: 0, fontSize: "13px", color: "#a08440", fontStyle: "italic" }}>Coming soon to the App Store</p>
          </div>
        </div>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "56px 24px" }}>
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7a6020", marginBottom: "20px" }}>About</h2>
            <div className="vbiz-about">
              {[
                { q: "Tap to Earn", a: "Every tap earns cash on your VOIDPAY card. Watch an optional ad for a 60-second 7x boost on every tap." },
                { q: "Job Board", a: "Fifteen jobs, from Barista to Astronaut. Each has its own hiring chance, pay per tap and shift length, and the board refreshes every 15 minutes." },
                { q: "Live Market", a: "Trade 77 stocks, 30 cryptocurrencies and 20 properties. Prices move every minute, and holdings pay dividends or rent into your income per hour." },
                { q: "Businesses", a: "Nine businesses, from a $5K Local Cafe to the $2.5B Void City Bank. Run buses, couriers, a clothing factory, a dealership, game and movie studios." },
                { q: "Legacy", a: "Own a Private Estate to unlock your Vault, Gallery and Showroom, then collect rare items from the Auction House, the Private Dealer and the Exchange." },
                { q: "No Account", a: "Play straight away in any of 29 languages. There are no accounts: your game stays on your device and, if iCloud is on, syncs through your own iCloud." },
              ].map((item, i) => (
                <div key={item.q} style={{ padding: "24px", background: i % 2 === 0 ? "rgba(251,191,36,0.04)" : "rgba(0,0,0,0.2)", borderBottom: i < 4 ? "1px solid rgba(251,191,36,0.07)" : "none", borderRight: i % 2 === 0 ? "1px solid rgba(251,191,36,0.07)" : "none" }}>
                  <p style={{ margin: "0 0 8px", fontSize: "12px", fontWeight: "700", color: ACCENT, textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.q}</p>
                  <p style={{ margin: 0, fontSize: "14px", color: "#8a7a5a", lineHeight: 1.6 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>
          <section style={{ marginBottom: "60px" }}>
            <h2 style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase", color: "#7a6020", marginBottom: "20px" }}>Features</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {["Tap to Earn", "7x Boosts", "Job Board", "Stocks", "Crypto", "Real Estate", "Dividends", "Market News", "9 Businesses", "Business Upgrades", "Legacy Collection", "Auction House", "Card Skins", "29 Languages", "iCloud Sync"].map((f) => (
                <span key={f} style={{ background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.18)", borderRadius: "8px", padding: "8px 14px", fontSize: "13px", color: "#fcd34d" }}>{f}</span>
              ))}
            </div>
          </section>
          <div style={{ borderTop: "1px solid rgba(251,191,36,0.1)", paddingTop: "28px", display: "flex", gap: "20px", fontSize: "13px" }}>
            <Link href="/voidbusiness/privacy" style={{ color: ACCENT, textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/voidbusiness/terms" style={{ color: ACCENT, textDecoration: "none" }}>Terms of Use</Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .vbiz-about {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(251, 191, 36, 0.1);
        }
        @media (max-width: 640px) {
          .vbiz-about {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
}
