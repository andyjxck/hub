import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets, Table } from "../../components/LegalPage";

const ACCENT = "#f472b6";
const APP = "FS Card Rivals";
const SLUG = "fscards";

export default function FSCardsPrivacy() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0d0009", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ width: 52, height: 52, borderRadius: 12, background: "linear-gradient(135deg,#ec4899,#be185d)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 16 }}>🃏</div>
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Privacy Policy</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: June 2026</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Data Controller">
              <p>The Data Controller for your personal data is:</p>
              <p style={{ marginTop: 10 }}><strong style={{ color: "#f8fafc" }}>Andrew Blewett</strong><br />
              101 High Trees Close, Redditch, Worcestershire, B98 7XL, United Kingdom<br />
              Email: <a href="mailto:andyblewett991@gmail.com" style={{ color: ACCENT }}>andyblewett991@gmail.com</a></p>
              <p style={{ marginTop: 10 }}>This policy applies to {APP} on iOS, Android, and Web (the "App") and is governed by the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018 (DPA 2018).</p>
            </Section>

            <Section title="2. Personal Data We Collect">
              <Table rows={[
                ["Category", "Examples", "Purpose", "Lawful Basis"],
                ["Account data", "Username, email address, hashed password", "Account creation and authentication", "Contract (Art. 6(1)(b))"],
                ["Game progress", "Card collection, deck builds, battle history, XP, level, leaderboard position", "Providing core game functionality", "Contract (Art. 6(1)(b))"],
                ["Usage data", "Session duration, features accessed, match outcomes, timestamps", "Game improvement and balancing", "Legitimate interests (Art. 6(1)(f))"],
                ["Technical data", "Device type, OS version, IP address (transient)", "Security, error diagnosis, fraud prevention", "Legitimate interests (Art. 6(1)(f))"],
                ["Communications", "Support emails, feedback", "Customer support", "Contract / Legitimate interests"],
              ]} />
            </Section>

            <Section title="3. How We Use Your Data">
              <Bullets color={ACCENT} items={[
                "To create and maintain your account and authenticate your identity",
                "To save and synchronise your game progress, deck, and collection across devices",
                "To operate matchmaking, ranked play, and global leaderboards",
                "To detect and prevent cheating, fraud, and abuse",
                "To respond to support requests and communicate service changes",
                "To analyse aggregate, anonymised usage data to improve game balance and stability",
              ]} />
            </Section>

            <Section title="4. Data Retention">
              <Table rows={[
                ["Data type", "Retention period"],
                ["Account and game progress data", "Until account deletion, then permanently deleted within 30 days"],
                ["Usage and analytics data", "Aggregated and anonymised after 12 months; individual session logs deleted after 90 days"],
                ["Support correspondence", "3 years from last contact, then deleted"],
                ["Fraud/security logs", "12 months, unless required for ongoing legal proceedings"],
              ]} />
            </Section>

            <Section title="5. Third-Party Services and Data Transfers">
              <p>We use the following third-party processors. Each acts as a data processor under a written agreement with us:</p>
              <Table rows={[
                ["Processor", "Purpose", "Location", "Safeguard"],
                ["Firebase (Google LLC)", "Real-time database, authentication, cloud functions", "USA (primarily)", "Google's Standard Contractual Clauses + UK IDTA"],
                ["Apple App Store / Google Play", "App distribution, in-app purchases", "USA", "Governed by Apple/Google's own privacy policies"],
              ]} />
              <p style={{ marginTop: 12 }}>We do not sell, rent, or share your personal data with any third party for advertising or marketing purposes.</p>
            </Section>

            <Section title="6. Cookies and Local Storage">
              <p>The App uses local storage and session tokens solely to maintain your logged-in state and save preferences. We do not use advertising cookies, tracking pixels, or third-party analytics cookies. No consent banner is required for strictly necessary storage.</p>
            </Section>

            <Section title="7. Age Restrictions">
              <p>The App is rated for ages <strong style={{ color: "#f8fafc" }}>12 and over</strong>. We do not knowingly collect personal data from children under 13 (under 16 in certain EU member states). If you believe a child under 13 has created an account, please contact us at <a href="mailto:andyblewett991@gmail.com" style={{ color: ACCENT }}>andyblewett991@gmail.com</a> and we will delete the account promptly.</p>
            </Section>

            <Section title="8. Your Rights Under UK GDPR">
              <p>Under the UK GDPR and DPA 2018, you have the following rights:</p>
              <Bullets color={ACCENT} items={[
                "Right of access – request a copy of the personal data we hold about you (Subject Access Request)",
                "Right to rectification – request correction of inaccurate or incomplete data",
                "Right to erasure ('right to be forgotten') – request deletion of your data where there is no compelling reason for continued processing",
                "Right to restriction of processing – request we limit how we use your data in certain circumstances",
                "Right to data portability – receive your data in a structured, commonly used format",
                "Right to object – object to processing based on legitimate interests",
                "Rights related to automated decision-making – we do not make solely automated decisions with legal or significant effects on you",
                "Right to withdraw consent – where processing is based on consent, you may withdraw at any time without affecting prior lawful processing",
              ]} />
              <p style={{ marginTop: 12 }}>To exercise any of these rights, email <a href="mailto:andyblewett991@gmail.com" style={{ color: ACCENT }}>andyblewett991@gmail.com</a>. We will respond within one calendar month. No fee is charged for reasonable requests.</p>
            </Section>

            <Section title="9. Right to Lodge a Complaint">
              <p>If you believe we have handled your personal data unlawfully, you have the right to lodge a complaint with the UK's supervisory authority:</p>
              <p style={{ marginTop: 10 }}><strong style={{ color: "#f8fafc" }}>Information Commissioner's Office (ICO)</strong><br />
              Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>ico.org.uk</a><br />
              Helpline: 0303 123 1113</p>
            </Section>

            <Section title="10. Data Security">
              <Bullets color={ACCENT} items={[
                "All data transmitted between your device and our servers is encrypted using TLS 1.2+",
                "Passwords are hashed using bcrypt and never stored in plaintext",
                "Access to production databases is restricted to authorised personnel only, using role-based access controls",
                "Firebase Security Rules restrict data access to authenticated account owners",
                "We conduct periodic reviews of our security practices",
              ]} />
            </Section>

            <Section title="11. Changes to This Policy">
              <p>We may update this Privacy Policy to reflect changes in law or our practices. Material changes will be communicated via an in-app notification or email (if you have provided one) at least 14 days before the change takes effect. Continued use of the App after that date constitutes acceptance of the updated policy.</p>
            </Section>

            <Section title="12. Contact">
              <p>For any data protection queries:<br />
              Email: <a href="mailto:andyblewett991@gmail.com" style={{ color: ACCENT }}>andyblewett991@gmail.com</a><br />
              Post: Andrew Blewett, 101 High Trees Close, Redditch, Worcestershire, B98 7XL</p>
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
