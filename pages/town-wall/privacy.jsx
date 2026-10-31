import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets, Table } from "../../components/LegalPage";

const ACCENT = "#fb923c";
const APP = "Town Wall";
const SLUG = "town-wall";

export default function TownWallPrivacy() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0a0700", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <img src="/app-assets/town-wall-icon.png" alt={APP} width={52} height={52} style={{ borderRadius: 12, marginBottom: 16 }} />
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
                ["Account data", "Username, email address, hashed password", "Account creation and authentication", "Contract (Art. 6(1)(b))"],
                ["Location data", "City, zone (coarse — you choose it; no GPS tracking)", "Show locally relevant content", "Consent (Art. 6(1)(a))"],
                ["User content", "Posts, stories, business listings, talent showcases", "Community platform functionality", "Contract (Art. 6(1)(b))"],
                ["Advertising identifiers", "Device ad ID (anonymised), web cookies", "Serving ads via Adsterra (web)", "Consent (Art. 6(1)(a)) or Legitimate interests"],
                ["Usage data", "Session duration, features used", "Platform improvement", "Legitimate interests (Art. 6(1)(f))"],
                ["Technical data", "Device type, OS version, crash logs", "Stability and support", "Legitimate interests (Art. 6(1)(f))"],
              ]} />
            </Section>

            <Section title="3. Location Privacy">
              <p>Town Wall uses your <strong style={{ color: "#f8fafc" }}>self-selected city or zone</strong> to show locally relevant content. We do <strong style={{ color: "#f8fafc" }}>not</strong> track your precise GPS location, real-time movements, or share location data with any third party. You can change or remove your location at any time in Settings.</p>
            </Section>

            <Section title="4. User-Generated Content">
              <p>Posts, stories, listings, and showcases you create are stored on our servers and may be visible to other users in your zone. You retain ownership of content you post. You grant us a limited licence to store and display it within the platform. You may delete your content at any time. Upon account deletion, all your content is permanently removed within 30 days.</p>
            </Section>

            <Section title="5. Advertising">
              <p>The web version uses <strong style={{ color: "#f8fafc" }}>Adsterra</strong> for display advertising. Adsterra may use cookies or device identifiers to serve contextual or interest-based ads. You can manage cookie preferences via the cookie consent banner or your browser settings. Your posts and community content are <strong style={{ color: "#f8fafc" }}>never used for ad targeting</strong>.</p>
            </Section>

            <Section title="6. Data Retention">
              <Table rows={[
                ["Data type", "Retention period"],
                ["Account and profile data", "Until account deletion; deleted within 30 days of request"],
                ["User-generated content", "Until you delete it or your account is deleted; removed within 30 days"],
                ["Usage data", "Anonymised after 90 days"],
                ["Moderation logs", "12 months for community safety purposes"],
              ]} />
            </Section>

            <Section title="7. Third-Party Services">
              <Table rows={[
                ["Processor", "Purpose", "Location", "Safeguard"],
                ["Supabase", "Account and content storage", "European Union", "EU-hosted; DPA in place"],
                ["Adsterra", "Web advertising", "Cyprus/EU", "EU-based; GDPR compliant"],
                ["Expo", "Push notifications", "USA", "Standard Contractual Clauses"],
                ["Apple / Google", "App distribution", "USA", "Apple/Google's own privacy policies"],
              ]} />
            </Section>

            <Section title="8. Your Rights Under UK GDPR">
              <Bullets color={ACCENT} items={[
                "Right of access – request a copy of all personal data we hold",
                "Right to rectification – correct inaccurate or incomplete data",
                "Right to erasure – delete your account and all content",
                "Right to restriction of processing – limit how your data is used",
                "Right to data portability – receive your data in a portable format",
                "Right to object – object to processing based on legitimate interests or for direct marketing",
                "Right to withdraw consent – withdraw location or advertising consent at any time",
                "Rights related to automated decision-making – we do not make solely automated decisions with significant effects",
              ]} />
              <p style={{ marginTop: 12 }}>Email <a href="mailto:andyblewett991@gmail.com" style={{ color: ACCENT }}>andyblewett991@gmail.com</a>. Response within one calendar month.</p>
            </Section>

            <Section title="9. Right to Lodge a Complaint">
              <p><strong style={{ color: "#f8fafc" }}>Information Commissioner's Office (ICO)</strong><br />
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>ico.org.uk</a> · 0303 123 1113</p>
            </Section>

            <Section title="10. Age Restrictions">
              <p>Town Wall is intended for users aged <strong style={{ color: "#f8fafc" }}>13 and over</strong>. Users aged 13–15 must have verifiable parental consent. We do not knowingly process data from children under 13.</p>
            </Section>

            <Section title="11. Data Security">
              <Bullets color={ACCENT} items={[
                "All data in transit encrypted with TLS 1.2+",
                "Passwords hashed using bcrypt",
                "Supabase row-level security restricts access to account owners",
                "Content moderation tools to detect and remove prohibited material",
              ]} />
            </Section>

            <Section title="12. Changes to This Policy">
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
