import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets, Table } from "../../components/LegalPage";

const ACCENT = "#34d399";
const APP = "Bloom";
const SLUG = "bloom";

export default function BloomPrivacy() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#050a07", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <img src="/app-assets/bloom-icon.png" alt="Bloom" width={52} height={52} style={{ borderRadius: 12, marginBottom: 16 }} />
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Privacy Policy</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: June 2026</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Data Controller">
              <p>The Data Controller for your personal data is:</p>
              <p style={{ marginTop: 10 }}><strong style={{ color: "#f8fafc" }}>Andrew Blewett</strong><br />
              101 High Trees Close, Redditch, Worcestershire, B98 7XL, United Kingdom<br />
              Email: <a href="mailto:andyblewett991@gmail.com" style={{ color: ACCENT }}>andyblewett991@gmail.com</a></p>
              <p style={{ marginTop: 10 }}>This policy applies to the {APP} app on iOS, Android, and Web and is governed by the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018 (DPA 2018).</p>
            </Section>

            <Section title="2. Special Category Data — Important Notice">
              <p>Bloom processes <strong style={{ color: "#f8fafc" }}>special category health data</strong> as defined by Article 9 UK GDPR, including:</p>
              <Bullets color={ACCENT} items={[
                "Sobriety start date and milestones",
                "Relapse history and timestamps",
                "Journal entries including mood ratings and freeform text",
                "Craving tool usage records",
                "Recovery-related notes and reflections",
              ]} />
              <p style={{ marginTop: 12 }}><strong style={{ color: "#f8fafc" }}>All of this data is stored exclusively on your local device.</strong> It is never uploaded to our servers or transmitted to any third party. The lawful basis for processing this special category data is your <strong style={{ color: "#f8fafc" }}>explicit consent</strong> under Article 9(2)(a) UK GDPR, given when you first set up the app. You may withdraw consent at any time by deleting your data via Settings → Reset Everything.</p>
            </Section>

            <Section title="3. Data We Collect and Where It Is Stored">
              <Table rows={[
                ["Category", "Examples", "Storage", "Lawful Basis"],
                ["Recovery data (special category)", "Sobriety date, relapses, journal, mood, craving logs", "Local device only — never uploaded", "Explicit consent (Art. 9(2)(a))"],
                ["App preferences", "Theme, pet name, custom labels", "Local device only", "Consent (Art. 6(1)(a))"],
                ["Account credentials (optional)", "Email address, hashed password", "Supabase (EU) — only if you create an account", "Contract (Art. 6(1)(b))"],
                ["Technical data", "App version, OS version, crash reports (anonymised)", "Local or anonymised", "Legitimate interests (Art. 6(1)(f))"],
              ]} />
            </Section>

            <Section title="4. Data Retention">
              <Table rows={[
                ["Data type", "Retention period"],
                ["All local health and recovery data", "Retained on device until you delete it via Settings or uninstall the app"],
                ["Optional account credentials", "Until you request account deletion; deleted within 30 days of request"],
                ["Anonymised crash reports", "90 days"],
              ]} />
            </Section>

            <Section title="5. Third-Party Services">
              <Table rows={[
                ["Processor", "Purpose", "Location", "Safeguard"],
                ["Supabase", "Optional account authentication only — no health data stored", "European Union", "EU-hosted; DPA in place"],
                ["Apple App Store / Google Play", "App distribution", "USA", "Apple/Google's own privacy policies"],
              ]} />
              <p style={{ marginTop: 12 }}>We do not use advertising networks, tracking SDKs, or sell your data.</p>
            </Section>

            <Section title="6. Your Rights Under UK GDPR">
              <Bullets color={ACCENT} items={[
                "Right of access – request a copy of the personal data we hold about you",
                "Right to rectification – request correction of inaccurate data",
                "Right to erasure – delete your account or data at any time via Settings",
                "Right to restriction of processing – request we limit how we use your data",
                "Right to data portability – export your data as JSON from Settings → Export Data",
                "Right to object – object to processing based on legitimate interests",
                "Right to withdraw consent – withdraw consent for health data processing at any time without affecting prior processing",
              ]} />
              <p style={{ marginTop: 12 }}>To exercise any right, email <a href="mailto:andyblewett991@gmail.com" style={{ color: ACCENT }}>andyblewett991@gmail.com</a>. We will respond within one calendar month.</p>
            </Section>

            <Section title="7. Right to Lodge a Complaint">
              <p><strong style={{ color: "#f8fafc" }}>Information Commissioner's Office (ICO)</strong><br />
              Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>ico.org.uk</a><br />
              Helpline: 0303 123 1113</p>
            </Section>

            <Section title="8. Age Restrictions">
              <p>Bloom is intended for users aged <strong style={{ color: "#f8fafc" }}>17 and over</strong>. The app deals with sobriety and addiction recovery. We do not knowingly collect data from users under 13. If you believe a child under 13 is using the app, please contact us immediately.</p>
            </Section>

            <Section title="9. Data Security">
              <Bullets color={ACCENT} items={[
                "All health data is stored only on your device and is never transmitted to our servers",
                "Optional account data is encrypted in transit using TLS 1.2+",
                "Passwords are hashed and never stored in plaintext",
                "Supabase enforces row-level security ensuring accounts can only access their own data",
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
