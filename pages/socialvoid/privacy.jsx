import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets, Table } from "../../components/LegalPage";

const ACCENT = "#60a5fa";
const APP = "Social Void";
const SLUG = "socialvoid";

export default function SocialVoidPrivacy() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0c1a2e", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Privacy Policy</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: June 2026</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Data Controller">
              <p><strong style={{ color: "#f8fafc" }}>Andrew Blewett</strong><br />
              101 High Trees Close, Redditch, Worcestershire, B98 7XL, United Kingdom<br />
              Email: <a href="mailto:andyblewett991@gmail.com" style={{ color: ACCENT }}>andyblewett991@gmail.com</a></p>
              <p style={{ marginTop: 10 }}>This policy is governed by the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018 (DPA 2018).</p>
            </Section>

            <Section title="2. Data We Collect">
              <Table rows={[
                ["Category", "Examples", "Purpose", "Lawful Basis"],
                ["Guest mode (local)", "Game progress stored in browser localStorage", "Saving progress without account", "No personal data collected"],
                ["Account data (optional)", "Username (pseudonymous), 4-digit PIN hash", "Account creation and sync", "Contract (Art. 6(1)(b))"],
                ["Game progress (if account)", "Recipes discovered, prestige level, upgrades, daily challenge status", "Cross-device sync", "Contract (Art. 6(1)(b))"],
                ["Usage data", "Anonymous session counts, feature usage", "Game improvement", "Legitimate interests (Art. 6(1)(f))"],
                ["Technical data", "Browser type, OS version, error logs (anonymised)", "Stability and debugging", "Legitimate interests (Art. 6(1)(f))"],
              ]} />
              <p style={{ marginTop: 12 }}>We do <strong style={{ color: "#f8fafc" }}>not</strong> collect email addresses, real names, phone numbers, or any data that directly identifies you. Usernames are pseudonymous and not linked to real identity.</p>
            </Section>

            <Section title="3. Guest Mode">
              <p>You can play Social Void entirely without an account. In guest mode, all progress is stored only in your browser’s localStorage. No data is sent to our servers. Clearing your browser data or switching devices will reset your progress.</p>
            </Section>

            <Section title="4. Data Retention">
              <Table rows={[
                ["Data type", "Retention period"],
                ["Guest data (localStorage)", "Until you clear browser storage or uninstall the app"],
                ["Account and game data", "Until account deletion; deleted within 30 days of request"],
                ["Anonymous usage data", "Aggregated after 90 days; no individual records retained"],
              ]} />
            </Section>

            <Section title="5. Third-Party Services">
              <Table rows={[
                ["Processor", "Purpose", "Location", "Safeguard"],
                ["Supabase", "Optional account storage", "European Union", "EU-hosted; DPA in place"],
                ["Cloudflare", "Hosting and DDoS protection", "USA/EU", "Standard Contractual Clauses"],
              ]} />
              <p style={{ marginTop: 12 }}>We do not use advertising networks, sell data, or share personal data with any third party for marketing purposes.</p>
            </Section>

            <Section title="6. Your Rights Under UK GDPR">
              <Bullets color={ACCENT} items={[
                "Right of access – request a copy of all personal data we hold",
                "Right to rectification – correct inaccurate data",
                "Right to erasure – delete your account and all associated data",
                "Right to restriction of processing – limit how your data is used",
                "Right to data portability – receive your data in a portable format",
                "Right to object – object to processing based on legitimate interests",
                "Rights related to automated decision-making – we do not make automated decisions with significant effects",
              ]} />
              <p style={{ marginTop: 12 }}>Email <a href="mailto:andyblewett991@gmail.com" style={{ color: ACCENT }}>andyblewett991@gmail.com</a>. Response within one calendar month.</p>
            </Section>

            <Section title="7. Right to Lodge a Complaint">
              <p><strong style={{ color: "#f8fafc" }}>Information Commissioner's Office (ICO)</strong><br />
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>ico.org.uk</a> · 0303 123 1113</p>
            </Section>

            <Section title="8. Age Restrictions">
              <p>Social Void is suitable for all ages. Users under 13 must have parental consent. We do not knowingly collect personal data from children under 13. Contact us if you believe a child under 13 has created an account.</p>
            </Section>

            <Section title="9. Data Security">
              <Bullets color={ACCENT} items={[
                "All data in transit is encrypted with TLS 1.2+",
                "PINs are hashed and never stored in plaintext",
                "Account data uses Supabase row-level security",
                "We do not store payment or financial data",
              ]} />
            </Section>

            <Section title="10. Changes to This Policy">
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
