import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets } from "../../components/LegalPage";

const ACCENT = "#fbbf24";
const APP = "Tap Tap Three";
const SLUG = "tap-tap-three";

export default function TapTapThreeTerms() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0a0c10", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <img src="/app-assets/tap-tap-three-icon.png" alt={APP} width={52} height={52} style={{ borderRadius: 12, marginBottom: 16 }} />
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Terms &amp; Conditions</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: June 2026</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Acceptance of Terms">
              <p>By downloading, installing, or using the Tap Tap Three mobile application (the "App"), you agree to these Terms and our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link>. If you do not agree, do not use the App.</p>
            </Section>

            <Section title="2. Description of the App">
              <p>Tap Tap Three is a free idle tapping and economic simulation game. Features include:</p>
              <Bullets color={ACCENT} items={[
                "Tapping to earn coins",
                "Stock market simulation and trading",
                "Business empire building and upgrades",
                "Vault system",
                "Prestige system",
                "Daily events and challenges",
              ]} />
            </Section>

            <Section title="3. Eligibility">
              <p>The App is suitable for all ages. We do not knowingly collect personal data from children under 13 without parental consent. By using the App you confirm you are 13 or older, or have obtained parental consent.</p>
            </Section>

            <Section title="4. Accounts">
              <p>Accounts are optional and require only a username. No email address is required. You are responsible for keeping your credentials secure and for all activity under your account.</p>
            </Section>

            <Section title="5. Acceptable Use">
              <p>You agree not to:</p>
              <Bullets color={ACCENT} items={[
                "Use automated tools, bots, or scripts to gain an unfair advantage",
                "Exploit bugs or glitches to manipulate in-game economies",
                "Attempt to reverse-engineer, decompile, or hack the App",
                "Interfere with or disrupt the App's servers or infrastructure",
                "Use the App for any illegal or unauthorised purpose",
              ]} />
            </Section>

            <Section title="6. Virtual Content">
              <p>All in-game coins, businesses, stocks, progress, and upgrades are virtual and have no real-world monetary value. We reserve the right to modify, reset, or remove virtual content at any time without liability.</p>
            </Section>

            <Section title="7. Intellectual Property">
              <p>All App content, features, and design are owned by Andrew Blewett, protected by copyright law. You may not copy, modify, or redistribute any part without our written permission.</p>
            </Section>

            <Section title="8. Disclaimer of Warranties">
              <p>THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. We do not guarantee uninterrupted availability or that game progress will always be preserved.</p>
            </Section>

            <Section title="9. Limitation of Liability">
              <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ANDREW BLEWETT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE APP OR LOSS OF GAME PROGRESS. Nothing limits liability for fraud or matters that cannot be excluded by law.</p>
            </Section>

            <Section title="10. Termination">
              <p>We may suspend or terminate accounts that violate these Terms. You may delete your account at any time.</p>
            </Section>

            <Section title="11. Changes to Terms">
              <p>Material changes notified in-app at least 14 days before taking effect. Continued use constitutes acceptance.</p>
            </Section>

            <Section title="12. Governing Law">
              <p>These Terms are governed by the laws of <strong style={{ color: "#f8fafc" }}>England and Wales</strong>. Disputes subject to the exclusive jurisdiction of English and Welsh courts, without prejudice to consumer rights under local law.</p>
            </Section>

            <Section title="13. Contact">
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
