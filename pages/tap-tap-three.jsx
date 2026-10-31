import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function TapTapThreePage() {
  return (
    <Layout>
      <div style={{
        width: "100%",
        background: "#0a0a0f",
        minHeight: "100vh",
      }}>
        <div style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "60px 24px",
        }}>
          <Link href="/" style={{
            display: "inline-block",
            marginBottom: "24px",
            color: "#666",
            textDecoration: "none",
            fontSize: "13px",
          }}>
            ← Back
          </Link>

          <div style={{
            marginBottom: "32px",
          }}>
            <h1 style={{
              fontSize: "32px",
              fontWeight: "600",
              marginBottom: "8px",
              color: "#fff",
              letterSpacing: "-0.5px",
            }}>
              Tap Tap Three
            </h1>
            <p style={{
              fontSize: "14px",
              color: "#666",
              margin: 0,
            }}>
              Tap. Invest. Dominate.
            </p>
          </div>

          <div style={{
            marginBottom: "40px",
            paddingBottom: "40px",
            borderBottom: "1px solid #1a1a1f",
          }}>
            <a
              href="https://apps.apple.com/gb/app/tap-tap-three-market-rise/id6755093222"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                background: "#fff",
                color: "#0a0a0f",
                textDecoration: "none",
                borderRadius: "6px",
                fontWeight: "500",
                fontSize: "14px",
                marginRight: "12px",
              }}
            >
              App Store
            </a>
            <a
              href="https://taptapthree.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                background: "#1a1a1f",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "6px",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              Web
            </a>
          </div>

          <div style={{
            fontSize: "15px",
            lineHeight: 1.7,
            color: "#888",
            marginBottom: "40px",
          }}>
            <p style={{ marginBottom: "20px" }}>
              Tap Tap Three is the third evolution of my idle tapping games. I wanted something that went beyond just tapping - a game with actual depth, systems that interact with each other, and progression that feels meaningful.
            </p>

            <p style={{ marginBottom: "20px" }}>
              The core is still tapping. You tap to earn coins. But those coins go into a real stock market with 8 different stocks that fluctuate in real-time. You can buy low, sell high, day trade, or hold long-term.
            </p>

            <p style={{ marginBottom: "20px" }}>
              Then there's the business empire. You hire employees who generate passive income. You launch projects that take time to complete but pay out big. You can upgrade everything - tap power, auto-tap rate, stock returns, business efficiency.
            </p>

            <p style={{ marginBottom: "20px" }}>
              The vault is where you store your earnings. It protects your coins from market crashes and business failures. You can deposit, withdraw, and the vault earns interest over time.
            </p>

            <p style={{ marginBottom: "20px" }}>
              Prestige is the endgame. When you've maxed everything, you can prestige - reset your progress for a permanent multiplier that makes your next run faster. The numbers get absurd. That's the point.
            </p>

            <p style={{ marginBottom: "20px" }}>
              Daily streaks reward consistent play. Events shake up the economy - market crashes, business booms, surprise bonuses.
            </p>

            <p>
              I built Tap Tap Three to be the idle game I wanted to play - one with actual systems, meaningful choices, and progression that never ends.
            </p>
          </div>

          <h2 style={{
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#fff",
          }}>
            Features
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "12px",
            marginBottom: "40px",
          }}>
            {[
              "Stock Market Trading",
              "8 Real-time Stocks",
              "Business Empire",
              "Employee Hiring",
              "Project Launching",
              "Vault System",
              "Interest Earnings",
              "Prestige System",
              "Permanent Multipliers",
              "Deep Upgrade Trees",
              "Daily Streaks",
              "Random Events",
            ].map((feature) => (
              <div
                key={feature}
                style={{
                  padding: "12px",
                  borderRadius: "4px",
                  border: "1px solid #1a1a1f",
                  fontSize: "13px",
                  color: "#888",
                }}
              >
                {feature}
              </div>
            ))}
          </div>

          <div style={{
            paddingTop: "40px",
            borderTop: "1px solid #1a1a1f",
            display: "flex",
            gap: "24px",
            fontSize: "13px",
          }}>
            <Link href="/tap-tap-three/privacy" style={{ color: "#666", textDecoration: "none" }}>
              Privacy
            </Link>
            <Link href="/tap-tap-three/terms" style={{ color: "#666", textDecoration: "none" }}>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
