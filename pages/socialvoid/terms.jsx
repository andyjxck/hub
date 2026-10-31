import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets } from "../../components/LegalPage";

const ACCENT = "#60a5fa";
const APP = "Social Void";
const SLUG = "socialvoid";

export default function SocialVoidTerms() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0c1a2e", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Terms &amp; Conditions</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: June 2026</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Acceptance of Terms">
              <p>By accessing or playing Social Void (the "Game"), you agree to these Terms and our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link>. If you do not agree, do not use the Game.</p>
            </Section>

            <Section title="2. Description of the Game">
              <p>Social Void is a free-to-play browser-based idle merging game where players discover and combine music elements into albums. The Game can be played fully in guest mode without an account.</p>
            </Section>

            <Section title="3. Eligibility">
              <p>The Game is suitable for all ages. Users under 13 require parental consent. By using the Game, you confirm you are either 13 or older, or have obtained parental consent.</p>
            </Section>

            <Section title="4. Accounts">
              <p>Optional accounts require only a pseudonymous username and a 4-digit PIN. You are responsible for keeping your PIN secure. We reserve the right to remove usernames that are offensive, impersonating, or otherwise inappropriate.</p>
              <p style={{ marginTop: 10 }}>Guest progress is stored locally in your browser. We cannot recover lost guest progress if you clear your browser storage.</p>
            </Section>

            <Section title="5. Acceptable Use">
              <p>You agree not to:</p>
              <Bullets color={ACCENT} items={[
                "Exploit bugs or glitches to gain an unfair advantage",
                "Use automated tools, bots, or scripts to interact with the Game",
                "Attempt to reverse-engineer, decompile, or hack the Game",
                "Interfere with or disrupt the Game's servers or infrastructure",
                "Use the Game for any illegal or unauthorised purpose",
              ]} />
            </Section>

            <Section title="6. Virtual Content">
              <p>All in-game items, progress, currencies, and content are virtual and have no real-world monetary value. We reserve the right to modify, remove, or reset game content at any time without liability.</p>
            </Section>

            <Section title="7. Intellectual Property">
              <p>Social Void is owned by Andrew Blewett. All content, artwork, code, and features are protected by copyright and other intellectual property laws. You may not copy, modify, or redistribute any part of the Game without our written permission.</p>
            </Section>

            <Section title="8. Disclaimer of Warranties">
              <p>THE GAME IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. Guest progress is not guaranteed to persist. We do not guarantee uninterrupted or error-free operation.</p>
            </Section>

            <Section title="9. Limitation of Liability">
              <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ANDREW BLEWETT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE GAME OR LOSS OF GAME PROGRESS. Nothing in these Terms limits liability for fraud or matters that cannot be limited by law.</p>
            </Section>

            <Section title="10. Termination">
              <p>We may suspend or terminate account access at any time if you breach these Terms. You may stop using the Game at any time and delete your account from within the app.</p>
            </Section>

            <Section title="11. Changes to Terms">
              <p>Material changes will be communicated in-app at least 14 days before taking effect. Continued use constitutes acceptance.</p>
            </Section>

            <Section title="12. Governing Law">
              <p>These Terms are governed by the laws of <strong style={{ color: "#f8fafc" }}>England and Wales</strong>. Disputes shall be subject to the exclusive jurisdiction of English and Welsh courts, without prejudice to consumer rights under local law.</p>
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
