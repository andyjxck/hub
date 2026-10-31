import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets } from "../../components/LegalPage";

const ACCENT = "#a78bfa";
const APP = "Zen Void";
const SLUG = "zen-void";

export default function ZenVoidTerms() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0f0c29", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <img src="/app-assets/zen-void-icon.png" alt={APP} width={52} height={52} style={{ borderRadius: 12, marginBottom: 16 }} />
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Terms &amp; Conditions</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: June 2026</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Acceptance of Terms">
              <p>By downloading, installing, or using the Zen Void mobile application (the "App"), you agree to these Terms and our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link>. If you do not agree, do not use the App.</p>
            </Section>

            <Section title="2. Description of the App">
              <p>Zen Void is a free wellness and mindfulness application. Features include:</p>
              <Bullets color={ACCENT} items={[
                "Daily mood tracking and check-ins",
                "Guided breathing exercises",
                "Grounding exercises and body scan meditation",
                "Personal journaling",
                "Wellness insights and personal analytics",
                "Zeno Chat — an AI-powered wellness companion",
                "Luna — a customisable moon companion",
                "Advertisements served via Google AdMob",
              ]} />
            </Section>

            <Section title="3. Important Health Disclaimer">
              <p><strong style={{ color: "#f8fafc" }}>The App is NOT a medical device, therapeutic tool, or substitute for professional medical, psychological, or psychiatric advice, diagnosis, or treatment.</strong> It is designed to support general wellbeing. It does not diagnose, treat, cure, or prevent any disease or mental health condition.</p>
              <p style={{ marginTop: 12 }}>If you are experiencing a mental health crisis:</p>
              <Bullets color="#f87171" items={[
                "Emergency services: 999 (UK)",
                "Samaritans: 116 123 (free, 24/7)",
                "Crisis Text Line: Text SHOUT to 85258",
                "NHS 111 for urgent medical advice",
              ]} />
            </Section>

            <Section title="4. Eligibility">
              <p>You must be at least <strong style={{ color: "#f8fafc" }}>12 years old</strong> to use the App. By using the App you confirm you meet this requirement. Users under 13 require parental consent for the collection of any personal data.</p>
            </Section>

            <Section title="5. Account Registration">
              <p>Accounts require a username and password. You are responsible for keeping credentials confidential and for all activity under your account. Contact us immediately if you suspect unauthorised access.</p>
            </Section>

            <Section title="6. Special Category Data Consent">
              <p>By using the mood tracking, journaling, and AI companion features, you give <strong style={{ color: "#f8fafc" }}>explicit consent</strong> under Article 9(2)(a) UK GDPR for us to process your wellness and mental wellbeing data to provide these features. You may withdraw consent at any time by deleting your account. See our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link> for full details.</p>
            </Section>

            <Section title="7. Acceptable Use">
              <p>You agree not to:</p>
              <Bullets color={ACCENT} items={[
                "Attempt to reverse-engineer, decompile, or hack the App",
                "Interfere with or disrupt the App's servers or infrastructure",
                "Use the App to harm yourself or others",
                "Use the App for any illegal or unauthorised purpose",
              ]} />
            </Section>

            <Section title="8. Advertising">
              <p>The App is free and supported by Google AdMob advertisements. By using the App, you agree that advertisements may be displayed. Wellness data is <strong style={{ color: "#f8fafc" }}>never used for ad targeting</strong>. See our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link> for opt-out instructions.</p>
            </Section>

            <Section title="9. Intellectual Property">
              <p>All App content and features are owned by Andrew Blewett or licensed to us, protected by copyright law. You may not copy, modify, or redistribute any part without our written permission.</p>
            </Section>

            <Section title="10. Disclaimer of Warranties">
              <p>THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. We do not guarantee uninterrupted availability or that the AI companion’s responses are clinically accurate.</p>
            </Section>

            <Section title="11. Limitation of Liability">
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, ANDREW BLEWETT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES. Nothing limits liability for death, personal injury from negligence, or fraud.</p>
            </Section>

            <Section title="12. Termination">
              <p>We may suspend or terminate access if you breach these Terms. You may delete your account at any time to permanently remove your data.</p>
            </Section>

            <Section title="13. Changes to Terms">
              <p>Material changes notified in-app at least 14 days before taking effect. Continued use constitutes acceptance.</p>
            </Section>

            <Section title="14. Governing Law">
              <p>These Terms are governed by the laws of <strong style={{ color: "#f8fafc" }}>England and Wales</strong>. Disputes subject to the exclusive jurisdiction of English and Welsh courts, without prejudice to consumer rights under local law.</p>
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
