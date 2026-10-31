import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets, Table } from "../../components/LegalPage";

const ACCENT = "#94a3b8";
const APP = "MaintainA";
const SLUG = "maintaina";

export default function MaintainAPrivacy() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0c111a", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <img src="/app-assets/maintaina-icon.png" alt={APP} width={52} height={52} style={{ borderRadius: 12, marginBottom: 16 }} />
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

            <Section title="2. Important — Third-Party Data (Your Clients)">
              <p>MaintainA is a business management tool. When you add client contact information, project details, or invoices to the platform, <strong style={{ color: "#f8fafc" }}>you become a Data Controller</strong> for that third-party data under UK GDPR. You are responsible for ensuring you have a lawful basis to store your clients' personal data in MaintainA and for informing them accordingly. MaintainA acts as your <strong style={{ color: "#f8fafc" }}>Data Processor</strong> for that data.</p>
            </Section>

            <Section title="3. Personal Data We Collect About You">
              <Table rows={[
                ["Category", "Examples", "Purpose", "Lawful Basis"],
                ["Account data", "Name, email address, hashed password", "Account creation and authentication", "Contract (Art. 6(1)(b))"],
                ["Business data you enter", "Client names/contacts, project details, time logs, service rates, quotes, invoices", "Providing the platform functionality", "Contract (Art. 6(1)(b))"],
                ["Usage data", "Session duration, features used", "Platform improvement", "Legitimate interests (Art. 6(1)(f))"],
                ["Technical data", "Device type, OS version, crash logs", "Stability and support", "Legitimate interests (Art. 6(1)(f))"],
              ]} />
            </Section>

            <Section title="4. Data Retention">
              <Table rows={[
                ["Data type", "Retention period"],
                ["Account and business data", "Until account deletion; deleted within 30 days of request"],
                ["Invoices and quotes (your data)", "Retained for as long as your account is active; you may export before deletion"],
                ["Usage data", "Anonymised after 90 days"],
                ["Support correspondence", "3 years from last contact"],
              ]} />
              <p style={{ marginTop: 12 }}>Note: If you are subject to statutory record-keeping obligations (e.g., HMRC self-assessment), you are responsible for retaining your own copies of invoices and financial records before deleting your account.</p>
            </Section>

            <Section title="5. Third-Party Services">
              <Table rows={[
                ["Processor", "Purpose", "Location", "Safeguard"],
                ["Supabase", "Account and business data storage", "European Union", "EU-hosted; DPA in place"],
                ["Resend / Email provider", "Invoice and quote email delivery (if enabled)", "USA/EU", "Standard Contractual Clauses"],
                ["Apple / Google", "App distribution", "USA", "Apple/Google's own privacy policies"],
              ]} />
              <p style={{ marginTop: 12 }}>We do not sell data or use advertising networks.</p>
            </Section>

            <Section title="6. Your Rights Under UK GDPR">
              <Bullets color={ACCENT} items={[
                "Right of access – request a copy of all personal data we hold",
                "Right to rectification – correct inaccurate or incomplete data",
                "Right to erasure – delete your account and all data",
                "Right to restriction of processing – limit how your data is used",
                "Right to data portability – export your data before account deletion",
                "Right to object – object to processing based on legitimate interests",
                "Rights related to automated decision-making – we do not make automated decisions with significant effects",
              ]} />
              <p style={{ marginTop: 12 }}>Email <a href="mailto:andyblewett991@gmail.com" style={{ color: ACCENT }}>andyblewett991@gmail.com</a>. Response within one calendar month.</p>
            </Section>

            <Section title="7. Right to Lodge a Complaint">
              <p><strong style={{ color: "#f8fafc" }}>Information Commissioner's Office (ICO)</strong><br />
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>ico.org.uk</a> · 0303 123 1113</p>
            </Section>

            <Section title="8. Data Security">
              <Bullets color={ACCENT} items={[
                "All data in transit encrypted with TLS 1.2+",
                "Passwords hashed using bcrypt",
                "Supabase row-level security restricts access to account owners",
                "PDF generation occurs server-side and files are not retained after delivery",
              ]} />
            </Section>

            <Section title="9. Changes to This Policy">
              <p>Material changes communicated via email or in-app notification at least 14 days before taking effect.</p>
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
