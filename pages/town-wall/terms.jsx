import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets } from "../../components/LegalPage";

const ACCENT = "#fb923c";
const APP = "Town Wall";
const SLUG = "town-wall";

export default function TownWallTerms() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0a0700", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <img src="/app-assets/town-wall-icon.png" alt={APP} width={52} height={52} style={{ borderRadius: 12, marginBottom: 16 }} />
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Terms &amp; Conditions</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: June 2026</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Acceptance of Terms">
              <p>By downloading, installing, or using the Town Wall application (the "App"), you agree to these Terms and our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link>. If you do not agree, do not use the App.</p>
            </Section>

            <Section title="2. Description of the App">
              <p>Town Wall is a location-based community platform. Features include:</p>
              <Bullets color={ACCENT} items={[
                "Chronological community feed with zone filtering",
                "Stories (24-hour ephemeral content)",
                "Talent marketplace for local creators",
                "Local business directory",
                "Delivery links for local businesses",
                "Real-time notifications",
              ]} />
            </Section>

            <Section title="3. Eligibility">
              <p>You must be at least <strong style={{ color: "#f8fafc" }}>13 years old</strong> to use the App. Users aged 13–15 require verifiable parental consent. By using the App you confirm you meet this requirement.</p>
            </Section>

            <Section title="4. Account Registration">
              <p>You may create an account with a username and email address. You are responsible for maintaining the confidentiality of your credentials and all activity under your account. Notify us immediately of any suspected unauthorised use at <a href="mailto:andyblewett991@gmail.com" style={{ color: ACCENT }}>andyblewett991@gmail.com</a>.</p>
            </Section>

            <Section title="5. User Conduct">
              <p>You agree not to:</p>
              <Bullets color={ACCENT} items={[
                "Post or share illegal, harmful, abusive, defamatory, discriminatory, or harassing content",
                "Use the App for spam, phishing, or commercial solicitation without our consent",
                "Attempt to reverse-engineer, decompile, or hack the App",
                "Impersonate any person or organisation",
                "Share false or misleading information",
                "Violate any applicable law or regulation",
              ]} />
            </Section>

            <Section title="6. Content Guidelines">
              <p>You retain ownership of content you post but grant us a non-exclusive, royalty-free licence to store and display it within the App. We reserve the right to remove content that violates these Terms or our Community Guidelines without prior notice. Repeated violations may result in account suspension or termination.</p>
              <p style={{ marginTop: 10 }}>Prohibited content includes: hate speech, nudity or sexual content, content glorifying violence or self-harm, doxxing or sharing others' private information, and any content that is illegal under English law.</p>
            </Section>

            <Section title="7. Advertising">
              <p>The web version of Town Wall is supported by advertisements via Adsterra. By using the web App, you agree that advertisements may be displayed. Your community content and posts are never used for ad targeting. See our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link> for details.</p>
            </Section>

            <Section title="8. Intellectual Property">
              <p>All App content, features, and design are owned by Andrew Blewett or licensed to us, protected by copyright and other intellectual property laws. You may not copy, modify, or redistribute App content without our written permission.</p>
            </Section>

            <Section title="9. Disclaimer of Warranties">
              <p>THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND. We do not guarantee uninterrupted availability, freedom from errors, or that content posted by other users is accurate or appropriate.</p>
            </Section>

            <Section title="10. Limitation of Liability">
              <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ANDREW BLEWETT IS NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE APP OR CONTENT POSTED BY OTHER USERS. Nothing in these Terms limits liability for death, personal injury caused by negligence, or fraud.</p>
            </Section>

            <Section title="11. Termination">
              <p>We may suspend or terminate your account if you breach these Terms, without prior notice. Upon termination, your account and content will be deleted within 30 days. You may delete your own account at any time.</p>
            </Section>

            <Section title="12. Changes to Terms">
              <p>Material changes will be notified via in-app notification at least 14 days before taking effect. Continued use after that date constitutes acceptance.</p>
            </Section>

            <Section title="13. Governing Law">
              <p>These Terms are governed by the laws of <strong style={{ color: "#f8fafc" }}>England and Wales</strong>. Disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales, without prejudice to your rights as a consumer under local law.</p>
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
