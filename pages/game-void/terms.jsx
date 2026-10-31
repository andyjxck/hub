import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets } from "../../components/LegalPage";

const ACCENT = "#f87171";
const APP = "Game Void";
const SLUG = "game-void";

export default function GameVoidTerms() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#05070D", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <img src="/app-assets/game-void-icon.png" alt={APP} width={52} height={52} style={{ borderRadius: 12, marginBottom: 16 }} />
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Terms &amp; Conditions</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: June 2026</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Acceptance of Terms">
              <p>By downloading, installing, or using the Game Void mobile application (the "App"), you agree to these Terms and our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link>. If you do not agree, do not use the App.</p>
            </Section>

            <Section title="2. Description of the App">
              <p>Game Void is a free collection of 40+ mini-games. Features include:</p>
              <Bullets color={ACCENT} items={[
                "40+ mini-games including Sudoku, Chess, Snake, 2048, Solitaire, and more",
                "Global leaderboards and rankings",
                "Real-time multiplayer with friends",
                "In-app friends, friend requests, and chat",
                "Daily challenges and achievements",
                "Offline play for supported games",
              ]} />
            </Section>

            <Section title="3. Eligibility">
              <p>You must be at least <strong style={{ color: "#f8fafc" }}>13 years old</strong> to use the App. We do not knowingly collect data from children under 13. By using the App you confirm you meet this requirement.</p>
            </Section>

            <Section title="4. Accounts">
              <p>Accounts require only a username and 4-digit PIN — no email address required. You are responsible for keeping your PIN secure and for all activity under your account. We may remove usernames that are offensive or impersonating.</p>
            </Section>

            <Section title="5. Acceptable Use">
              <p>You agree not to:</p>
              <Bullets color={ACCENT} items={[
                "Cheat, use hacks, bots, or third-party software to manipulate gameplay or leaderboards",
                "Harass, abuse, threaten, or intimidate other players via chat or otherwise",
                "Exploit bugs or vulnerabilities to gain an unfair advantage",
                "Attempt to reverse-engineer, decompile, or hack the App",
                "Interfere with or disrupt the App's servers or infrastructure",
                "Create multiple accounts for abusive purposes",
                "Use the App for any illegal or unauthorised purpose",
              ]} />
            </Section>

            <Section title="6. Chat and Social Features">
              <p>In-app chat and friend messaging are provided for gameplay communication. You agree not to send offensive, harassing, illegal, or unwanted messages. We reserve the right to moderate, remove, or suspend access to chat features for violations. Chat messages are stored for up to 12 months as described in our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link>.</p>
            </Section>

            <Section title="7. Advertising">
              <p>The App is free and supported by Google AdMob advertisements. By using the App, you agree that advertisements may be displayed. On iOS, we request consent via the App Tracking Transparency framework before using your advertising identifier. You can opt out in your device settings. See our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link> for details.</p>
            </Section>

            <Section title="8. Virtual Content">
              <p>All in-game progress, scores, achievements, and rankings are virtual and have no real-world monetary value. We reserve the right to modify, reset, or remove virtual content at any time without liability.</p>
            </Section>

            <Section title="9. Intellectual Property">
              <p>All App content, features, and design are owned by Andrew Blewett or licensed to us, protected by copyright and intellectual property laws. You may not copy, modify, or redistribute any part without our written permission.</p>
            </Section>

            <Section title="10. Disclaimer of Warranties">
              <p>THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. We do not guarantee uninterrupted availability, freedom from errors, or that leaderboard data will always be preserved.</p>
            </Section>

            <Section title="11. Limitation of Liability">
              <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ANDREW BLEWETT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM USE OF THE APP, LOSS OF GAME PROGRESS, OR INTERACTIONS WITH OTHER USERS. Nothing limits liability for fraud or matters that cannot be excluded by law.</p>
            </Section>

            <Section title="12. Termination">
              <p>We may suspend or terminate accounts that violate these Terms without prior notice. You may delete your account at any time from the Profile screen, permanently removing all associated data.</p>
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

