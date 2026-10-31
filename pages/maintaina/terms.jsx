import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets } from "../../components/LegalPage";

const ACCENT = "#94a3b8";
const APP = "MaintainA";
const SLUG = "maintaina";

export default function MaintainATerms() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0c111a", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <img src="/app-assets/maintaina-icon.png" alt={APP} width={52} height={52} style={{ borderRadius: 12, marginBottom: 16 }} />
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Terms &amp; Conditions</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: June 2026</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Acceptance of Terms">
              <p>By downloading, installing, or using the MaintainA application (the "App"), you agree to these Terms and our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link>. If you do not agree, do not use the App.</p>
            </Section>

            <Section title="2. Description of the App">
              <p>MaintainA is a business management platform for service providers. Features include:</p>
              <Bullets color={ACCENT} items={[
                "Client contact and project management",
                "Quote and estimate generation",
                "Invoice creation and delivery",
                "Time tracking and job logging",
                "PDF export",
              ]} />
            </Section>

            <Section title="3. Eligibility">
              <p>The App is intended for adult business users aged <strong style={{ color: "#f8fafc" }}>18 and over</strong>. By using the App you confirm you are using it for legitimate business or self-employment purposes.</p>
            </Section>

            <Section title="4. Account Registration">
              <p>Accounts require your name and email address. You are responsible for keeping credentials confidential and for all activity under your account.</p>
            </Section>

            <Section title="5. Your Responsibility for Client Data">
              <p>When you add your clients' personal data (names, contact information, addresses) to MaintainA, <strong style={{ color: "#f8fafc" }}>you become the Data Controller</strong> for that data under UK GDPR. You are responsible for:</p>
              <Bullets color={ACCENT} items={[
                "Having a lawful basis to process your clients' data",
                "Informing your clients that their data is stored in MaintainA",
                "Responding to any data subject requests from your clients",
                "Exporting and retaining your own records before deleting your account",
              ]} />
              <p style={{ marginTop: 10 }}>See our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link> for details on our role as your Data Processor.</p>
            </Section>

            <Section title="6. Acceptable Use">
              <p>You agree not to:</p>
              <Bullets color={ACCENT} items={[
                "Use the App to generate fraudulent, false, or misleading invoices or quotes",
                "Use the App for any illegal or unauthorised commercial purpose",
                "Attempt to reverse-engineer, decompile, or hack the App",
                "Interfere with or disrupt the App's servers or infrastructure",
                "Store data unrelated to your legitimate business operations",
              ]} />
            </Section>

            <Section title="7. No Financial or Legal Advice">
              <p>MaintainA generates quotes and invoices based on data you input. The App does not constitute financial, accounting, tax, or legal advice. You are responsible for ensuring your invoices and quotes comply with applicable tax and commercial law, including Making Tax Digital and VAT obligations if relevant.</p>
            </Section>

            <Section title="8. Data Retention and Export">
              <p>Your account data is retained for as long as your account is active. You may export invoices and records at any time. Upon account deletion, all data is permanently removed within 30 days. <strong style={{ color: "#f8fafc" }}>You are responsible for retaining your own records</strong> in accordance with any statutory obligations (e.g., HMRC requires business records for at least 5 years after the tax return deadline).</p>
            </Section>

            <Section title="9. Intellectual Property">
              <p>All App content, features, and design are owned by Andrew Blewett, protected by copyright law. You may not copy, modify, or redistribute any part without our written permission.</p>
            </Section>

            <Section title="10. Disclaimer of Warranties">
              <p>THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. We do not guarantee uninterrupted availability or that generated documents will meet all legal and regulatory requirements in your jurisdiction.</p>
            </Section>

            <Section title="11. Limitation of Liability">
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, ANDREW BLEWETT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, OR FOR LOSSES ARISING FROM RELIANCE ON APP-GENERATED DOCUMENTS. Nothing limits liability for fraud or matters that cannot be excluded by law.</p>
            </Section>

            <Section title="12. Termination">
              <p>We may suspend or terminate accounts that violate these Terms. You may delete your account at any time. Export your data before deletion as we cannot recover it afterwards.</p>
            </Section>

            <Section title="13. Changes to Terms">
              <p>Material changes communicated via email or in-app notification at least 14 days before taking effect. Continued use constitutes acceptance.</p>
            </Section>

            <Section title="14. Governing Law">
              <p>These Terms are governed by the laws of <strong style={{ color: "#f8fafc" }}>England and Wales</strong>. Disputes subject to the exclusive jurisdiction of English and Welsh courts.</p>
            </Section>

            <Section title="15. Contact">
              <p>Email: <a href="mailto:andyblewett991@gmail.com" style={{ color: ACCENT }}>andyblewett991@gmail.com</a><br />
              Post: Andrew Blewett, 101 High Trees Close, Redditch, Worcestershire, B98 7XL</p>
            </Section>

          </div>
          <div style={{ marginTop: "64px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: "20px" }}>
            <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px" }}>Privacy Policy →</Link>
            <Link href={`/${SLUG}`} style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", fontSize: "13px" }}>← Back to {APP}</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
