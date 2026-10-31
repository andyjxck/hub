import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets, Table } from "../../components/LegalPage";

const ACCENT = "#fbbf24";
const APP = "Football Life";
const SLUG = "football-life";

export default function FootballLifePrivacy() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0c0900", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ width: "52px", height: "52px", borderRadius: "12px", background: "linear-gradient(135deg, #713f12, #fbbf24)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px", marginBottom: 16 }}>⚽</div>
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#fef3c7", margin: "0 0 6px" }}>Privacy Policy</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: June 2026</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Data Controller">
              <p><strong style={{ color: "#fef3c7" }}>Andrew Blewett</strong><br />
              101 High Trees Close, Redditch, Worcestershire, B98 7XL, United Kingdom<br />
              Email: <a href="mailto:andy@theandysocial.website" style={{ color: ACCENT }}>andy@theandysocial.website</a></p>
              <p style={{ marginTop: 10 }}>Governed by the UK GDPR and the Data Protection Act 2018 (DPA 2018).</p>
            </Section>

            <Section title="2. Personal Data We Collect">
              <Table rows={[
                ["Category", "Examples", "Purpose", "Lawful Basis"],
                ["Account data", "Username, email address, hashed password", "Authentication and account management", "Contract (Art. 6(1)(b))"],
                ["Game progress", "Player profile, skills, career data, match history, achievements, trophies", "Saving and syncing game state", "Contract (Art. 6(1)(b))"],
                ["Usage data", "Session duration, feature usage, in-game actions", "Game improvement and balancing", "Legitimate interests (Art. 6(1)(f))"],
                ["Technical data", "Device type, OS version, crash logs", "Stability and support", "Legitimate interests (Art. 6(1)(f))"],
                ["Communications", "Support emails, feedback submissions", "Customer support", "Legitimate interests"],
              ]} />
            </Section>

            <Section title="3. Data Retention">
              <Table rows={[
                ["Data type", "Retention period"],
                ["Account and game data", "Until account deletion; deleted within 30 days of request"],
                ["Usage and analytics data", "Anonymised after 90 days"],
                ["Support correspondence", "3 years from last contact"],
              ]} />
            </Section>

            <Section title="4. Third-Party Services">
              <Table rows={[
                ["Processor", "Purpose", "Location", "Safeguard"],
                ["Supabase", "Account and game data storage", "European Union", "EU-hosted; DPA in place"],
                ["Apple / Google", "App distribution, in-app purchases", "USA", "Apple/Google's own privacy policies"],
              ]} />
              <p style={{ marginTop: 12 }}>We do not sell data or use advertising networks.</p>
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
              <p style={{ marginTop: 12 }}>Email <a href="mailto:andy@theandysocial.website" style={{ color: ACCENT }}>andy@theandysocial.website</a>. Response within one calendar month.</p>
            </Section>

            <Section title="6. Right to Lodge a Complaint">
              <p><strong style={{ color: "#fef3c7" }}>Information Commissioner's Office (ICO)</strong><br />
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>ico.org.uk</a> · 0303 123 1113</p>
            </Section>

            <Section title="7. Age Restrictions">
              <p>Football Life is rated <strong style={{ color: "#fef3c7" }}>12+</strong>. We do not knowingly collect data from users under 13.</p>
            </Section>

            <Section title="8. Data Security">
              <Bullets color={ACCENT} items={[
                "All data in transit encrypted with TLS 1.2+",
                "Passwords hashed using bcrypt",
                "Supabase row-level security restricts access to account owners",
              ]} />
            </Section>

            <Section title="9. Changes to This Policy">
              <p>Material changes will be communicated via in-app notification at least 14 days before taking effect.</p>
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
