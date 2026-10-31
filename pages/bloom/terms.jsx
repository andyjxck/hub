import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets } from "../../components/LegalPage";

const ACCENT = "#34d399";
const APP = "Bloom";
const SLUG = "bloom";

export default function BloomTerms() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#050a07", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <img src="/app-assets/bloom-icon.png" alt={APP} width={52} height={52} style={{ borderRadius: 12, marginBottom: 16 }} />
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Terms &amp; Conditions</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: June 2026</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Acceptance of Terms">
              <p>By downloading, installing, or using the Bloom mobile application (the "App"), you agree to be bound by these Terms and Conditions ("Terms") and our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link>. If you do not agree, do not use the App.</p>
            </Section>

            <Section title="2. Description of the App">
              <p>Bloom is a free sobriety and recovery support application. Features include:</p>
              <Bullets color={ACCENT} items={[
                "Sobriety day tracking and milestone celebrations",
                "Journaling with mood tracking and timestamps",
                "Craving management tools",
                "Relapse history tracking",
                "Customisable pet companion",
                "Daily affirmations",
                "Wellness insights and progress tracking",
              ]} />
            </Section>

            <Section title="3. Important Health Disclaimer">
              <p><strong style={{ color: "#f8fafc" }}>The App is NOT a medical device, therapeutic tool, or substitute for professional medical, psychological, or psychiatric advice, diagnosis, or treatment.</strong> The App is designed to support general wellness and sobriety tracking only. It does not diagnose, treat, cure, or prevent any disease, addiction, or medical condition.</p>
              <p style={{ marginTop: 12 }}>If you are experiencing a medical emergency, mental health crisis, or substance withdrawal symptoms requiring immediate attention:</p>
              <Bullets color="#f87171" items={[
                "Emergency services: 999 (UK)",
                "Samaritans: 116 123 (free, 24/7)",
                "Crisis Text Line: Text SHOUT to 85258",
                "NHS 111 for urgent medical advice",
              ]} />
              <p style={{ marginTop: 12 }}>Always consult a qualified healthcare professional before making decisions about your health or recovery journey.</p>
            </Section>

            <Section title="4. Eligibility and Age">
              <p>You must be aged <strong style={{ color: "#f8fafc" }}>17 or over</strong> to use the App. Bloom addresses sobriety and addiction recovery — it is not appropriate for children. By using the App you confirm you meet this requirement.</p>
            </Section>

            <Section title="5. Account Terms">
              <p>Accounts are optional. If you create one, you are responsible for maintaining the confidentiality of your credentials and all activity under your account. You must notify us immediately if you suspect unauthorised use.</p>
            </Section>

            <Section title="6. Acceptable Use">
              <p>You agree not to:</p>
              <Bullets color={ACCENT} items={[
                "Use the App for any illegal or unauthorised purpose",
                "Attempt to reverse-engineer, decompile, disassemble, or hack the App",
                "Interfere with or disrupt the App's servers or infrastructure",
                "Use the App to harm yourself or others",
              ]} />
            </Section>

            <Section title="7. Data and Privacy">
              <p>All personal health data is stored locally on your device and is never uploaded to our servers. For full details, see our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link>. We do not sell data, use advertising, or use third-party analytics.</p>
            </Section>

            <Section title="8. Intellectual Property">
              <p>All content, features, and functionality of the App are owned by Andrew Blewett or licensed to us and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written permission.</p>
            </Section>

            <Section title="9. Disclaimer of Warranties">
              <p>THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not guarantee the App will be available at all times, uninterrupted, or error-free.</p>
            </Section>

            <Section title="10. Limitation of Liability">
              <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ANDREW BLEWETT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE APP. IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED £50. Nothing in these Terms limits liability for death or personal injury caused by negligence, fraud, or any other matter where liability cannot be limited by law.</p>
            </Section>

            <Section title="11. Termination">
              <p>We reserve the right to suspend or terminate access to the App at any time if you violate these Terms. You may stop using the App at any time. On deletion of your account, all your data is permanently removed from our systems.</p>
            </Section>

            <Section title="12. Changes to Terms">
              <p>We may update these Terms. Material changes will be communicated via in-app notification at least 14 days before taking effect. Continued use after that date constitutes acceptance.</p>
            </Section>

            <Section title="13. Governing Law and Disputes">
              <p>These Terms are governed by the laws of <strong style={{ color: "#f8fafc" }}>England and Wales</strong>. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales. If you are a consumer, you may also have rights under the laws of your country of residence that cannot be overridden by this clause.</p>
            </Section>

            <Section title="14. Contact">
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
