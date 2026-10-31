import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets, Table } from "../../components/LegalPage";

const ACCENT = "#a78bfa";
const APP = "Zen Void";
const SLUG = "zen-void";

export default function ZenVoidPrivacy() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0f0c29", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <img src="/app-assets/zen-void-icon.png" alt={APP} width={52} height={52} style={{ borderRadius: 12, marginBottom: 16 }} />
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

            <Section title="2. Special Category Data — Important Notice">
              <p>Zen Void processes <strong style={{ color: "#f8fafc" }}>special category health and mental wellbeing data</strong> under Article 9 UK GDPR, including mood ratings, journal entries, wellness scores, and AI chat content. The lawful basis is your <strong style={{ color: "#f8fafc" }}>explicit consent</strong> (Art. 9(2)(a)). You may withdraw consent at any time by deleting your account.</p>
              <p style={{ marginTop: 10 }}><strong style={{ color: "#f8fafc" }}>Wellness data is never used for advertising purposes.</strong> It is processed only to provide your personal insights and the Zeno AI companion.</p>
            </Section>

            <Section title="3. Personal Data We Collect">
              <Table rows={[
                ["Category", "Examples", "Purpose", "Lawful Basis"],
                ["Account data", "Username, hashed password", "Authentication", "Contract (Art. 6(1)(b))"],
                ["Wellness data (special category)", "Mood ratings, journal entries, wellness scores, streak data", "Personal insights, progress tracking", "Explicit consent (Art. 9(2)(a))"],
                ["AI chat messages", "Conversation history with Zeno", "Operating AI companion", "Explicit consent (Art. 9(2)(a))"],
                ["Push notification tokens", "Device token for reminders", "Daily mood reminders (if enabled)", "Consent (Art. 6(1)(a))"],
                ["Advertising identifiers", "Device ad ID (anonymised)", "Serving non-personalised ads via AdMob", "Consent (Art. 6(1)(a)) or Legitimate interests"],
                ["Usage data", "Session duration, feature usage", "App improvement", "Legitimate interests (Art. 6(1)(f))"],
                ["Technical data", "OS version, device type, crash logs", "Stability and support", "Legitimate interests (Art. 6(1)(f))"],
              ]} />
            </Section>

            <Section title="4. Advertising">
              <p>The App uses <strong style={{ color: "#f8fafc" }}>Google AdMob</strong> to display advertisements. AdMob may use device advertising identifiers to serve contextual or, with your consent, personalised ads. You can opt out of personalised advertising at any time in your device settings (iOS: Settings → Privacy → Tracking; Android: Settings → Google → Ads).</p>
              <p style={{ marginTop: 10 }}>Your wellness data, journal entries, and AI conversations are <strong style={{ color: "#f8fafc" }}>never shared with AdMob</strong> or any advertiser.</p>
            </Section>

            <Section title="5. Data Retention">
              <Table rows={[
                ["Data type", "Retention period"],
                ["Wellness data and AI chat history", "Until account deletion; deleted within 30 days of request"],
                ["Account data", "Until account deletion; deleted within 30 days of request"],
                ["Usage and analytics data", "Anonymised after 90 days"],
                ["Notification tokens", "Deleted when notifications are disabled or account is deleted"],
              ]} />
            </Section>

            <Section title="6. Third-Party Services">
              <Table rows={[
                ["Processor", "Purpose", "Location", "Safeguard"],
                ["Supabase", "Account storage, wellness data sync", "European Union", "EU-hosted; DPA in place"],
                ["Google AdMob", "In-app advertising", "USA", "Standard Contractual Clauses + UK IDTA"],
                ["Expo", "Push notifications", "USA", "Standard Contractual Clauses"],
                ["Apple / Google", "App distribution", "USA", "Apple/Google's own privacy policies"],
              ]} />
            </Section>

            <Section title="7. Your Rights Under UK GDPR">
              <Bullets color={ACCENT} items={[
                "Right of access – request a copy of all personal data we hold",
                "Right to rectification – correct inaccurate or incomplete data",
                "Right to erasure – delete your account and all data",
                "Right to restriction of processing – limit how your data is used",
                "Right to data portability – receive your data in a portable format",
                "Right to object – object to processing based on legitimate interests",
                "Right to withdraw consent – withdraw consent for special category data at any time",
                "Rights related to automated decision-making – we do not make solely automated decisions with legal or significant effects",
              ]} />
              <p style={{ marginTop: 12 }}>Email <a href="mailto:andyblewett991@gmail.com" style={{ color: ACCENT }}>andyblewett991@gmail.com</a> to exercise any right. Response within one calendar month.</p>
            </Section>

            <Section title="8. Right to Lodge a Complaint">
              <p><strong style={{ color: "#f8fafc" }}>Information Commissioner's Office (ICO)</strong><br />
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>ico.org.uk</a> · 0303 123 1113</p>
            </Section>

            <Section title="9. Age Restrictions">
              <p>Zen Void is rated <strong style={{ color: "#f8fafc" }}>12+</strong>. We do not knowingly collect personal data from children under 13. If you believe a child under 13 has an account, contact us immediately.</p>
            </Section>

            <Section title="10. Data Security">
              <Bullets color={ACCENT} items={[
                "All data in transit is encrypted with TLS 1.2+",
                "Journal entries and wellness data are encrypted at rest",
                "Passwords are hashed using bcrypt",
                "Supabase row-level security ensures each user can only access their own data",
              ]} />
            </Section>

            <Section title="11. Changes to This Policy">
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
