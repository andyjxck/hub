import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets, Table } from "../../components/LegalPage";

const ACCENT = "#fbbf24";
const APP = "Tap Tap Three";
const SLUG = "tap-tap-three";

export default function TapTapThreePrivacy() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0a0c10", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <img src="/app-assets/tap-tap-three-icon.png" alt={APP} width={52} height={52} style={{ borderRadius: 12, marginBottom: 16 }} />
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Privacy Policy</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: June 2026</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Data Controller">
              <p><strong style={{ color: "#f8fafc" }}>Andrew Blewett</strong><br />
              101 High Trees Close, Redditch, Worcestershire, B98 7XL, United Kingdom<br />
              Email: <a href="mailto:andyblewett991@gmail.com" style={{ color: ACCENT }}>andyblewett991@gmail.com</a></p>
              <p style={{ marginTop: 10 }}>Governed by the UK GDPR and the Data Protection Act 2018 (DPA 2018).</p>
            </Section>

            <Section title="2. Personal Data We Collect">
              <Table rows={[
                ["Category", "Examples", "Purpose", "Lawful Basis"],
                ["Account data (optional)", "Username, hashed password", "Account creation and sync", "Contract (Art. 6(1)(b))"],
                ["Game progress", "Coins, tap power level, business empire, stock portfolio, upgrades", "Saving and syncing game state", "Contract (Art. 6(1)(b))"],
                ["Usage data", "Session duration, features used, gameplay statistics", "Game improvement", "Legitimate interests (Art. 6(1)(f))"],
                ["Technical data", "Device type, OS version, crash logs", "Stability and support", "Legitimate interests (Art. 6(1)(f))"],
              ]} />
              <p style={{ marginTop: 12 }}>We do not collect email addresses or real names unless voluntarily provided for support purposes.</p>
            </Section>

            <Section title="3. Data Retention">
              <Table rows={[
                ["Data type", "Retention period"],
                ["Account and game data", "Until account deletion; deleted within 30 days of request"],
                ["Usage and analytics data", "Anonymised after 90 days"],
              ]} />
            </Section>

            <Section title="4. Third-Party Services">
              <Table rows={[
                ["Processor", "Purpose", "Location", "Safeguard"],
                ["Supabase", "Account and game data storage", "European Union", "EU-hosted; DPA in place"],
                ["Apple / Google", "App distribution", "USA", "Apple/Google's own privacy policies"],
              ]} />
              <p style={{ marginTop: 12 }}>We do not use advertising networks or sell data.</p>
            </Section>

            <Section title="5. Your Rights Under UK GDPR">
              <Bullets color={ACCENT} items={[
                "Right of access – request a copy of all personal data we hold",
                "Right to rectification – correct inaccurate or incomplete data",
                "Right to erasure – delete your account and all data",
                "Right to restriction of processing – limit how your data is used",
                "Right to data portability – receive your data in a portable format",
                "Right to object – object to processing based on legitimate interests",
                "Rights related to automated decision-making – we do not make automated decisions with significant effects",
                "Right to withdraw consent – where processing is consent-based, withdraw at any time",
              ]} />
              <p style={{ marginTop: 12 }}>Email <a href="mailto:andyblewett991@gmail.com" style={{ color: ACCENT }}>andyblewett991@gmail.com</a>. Response within one calendar month.</p>
            </Section>

            <Section title="6. Right to Lodge a Complaint">
              <p><strong style={{ color: "#f8fafc" }}>Information Commissioner's Office (ICO)</strong><br />
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>ico.org.uk</a> · 0303 123 1113</p>
            </Section>

            <Section title="7. Age Restrictions">
              <p>Tap Tap Three is rated <strong style={{ color: "#f8fafc" }}>4+</strong> (suitable for all ages). We do not knowingly collect personal data from children under 13 without verifiable parental consent.</p>
            </Section>

            <Section title="8. Data Security">
              <Bullets color={ACCENT} items={[
                "All data in transit encrypted with TLS 1.2+",
                "Passwords hashed using bcrypt",
                "Supabase row-level security restricts access to account owners",
              ]} />
            </Section>

            <Section title="9. Changes to This Policy">
              <p>Material changes communicated via in-app notification at least 14 days before taking effect.</p>
            </Section>

          </div>
          <div style={{ marginTop: "64px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: "20px" }}>
            <Link href={`/${SLUG}/terms`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px" }}>Terms &amp; Conditions →</Link>
            <Link href={`/${SLUG}`} style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", fontSize: "13px" }}>← Back to {APP}</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
