import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets } from "../../components/LegalPage";

const ACCENT = "#f472b6";
const APP = "FS Card Rivals";
const SLUG = "fscards";

export default function FSCardsTerms() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0e0510", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <div style={{ width: 52, height: 52, borderRadius: 12, background: "linear-gradient(135deg, #ec4899, #be185d)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 16 }}>🃏</div>
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Terms &amp; Conditions</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: June 2026</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Acceptance of Terms">
              <p>By downloading, installing, or using the FS Card Rivals application (the "App"), you agree to these Terms and our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link>. If you do not agree, do not use the App.</p>
            </Section>

            <Section title="2. Description of the App">
              <p>FS Card Rivals is a free-to-play competitive football card game. Features include:</p>
              <Bullets color={ACCENT} items={[
                "Card collection with rarity system (Common, Rare, Epic, Legendary)",
                "Formation-based deck building",
                "Real-time multiplayer card battles",
                "Matchmaking and global leaderboards",
                "Missions and reward systems",
                "Cross-platform progress sync via account",
              ]} />
            </Section>

            <Section title="3. Eligibility">
              <p>You must be at least <strong style={{ color: "#f8fafc" }}>13 years old</strong> to use the App. By using the App you confirm you meet this requirement.</p>
            </Section>

            <Section title="4. Account Registration">
              <p>Accounts require a username and email address. You are responsible for keeping credentials confidential and for all activity under your account. Notify us immediately of any suspected unauthorised access.</p>
            </Section>

            <Section title="5. Fair Play">
              <p>The use of cheats, hacks, bots, or any third-party software to gain an unfair advantage is <strong style={{ color: "#f8fafc" }}>strictly prohibited</strong>. We reserve the right to permanently ban accounts found to violate fair play policies without refund or compensation. Fair play violations include:</p>
              <Bullets color={ACCENT} items={[
                "Using automated tools or bots to play matches",
                "Exploiting game bugs to obtain cards or ranking points fraudulently",
                "Collusion with other players to manipulate match outcomes",
                "Reverse-engineering the game to gain unfair information",
              ]} />
            </Section>

            <Section title="6. Acceptable Use">
              <p>You agree not to:</p>
              <Bullets color={ACCENT} items={[
                "Harass, abuse, or threaten other players",
                "Use offensive, discriminatory, or impersonating usernames",
                "Attempt to reverse-engineer, decompile, or hack the App",
                "Interfere with or disrupt the App's servers or infrastructure",
                "Use the App for any illegal or unauthorised purpose",
              ]} />
            </Section>

            <Section title="7. Virtual Content and Purchases">
              <p>All in-game cards, currency, and progress are virtual and have no real-world monetary value. If the App offers optional in-app purchases, these are processed through the Apple App Store or Google Play. We do not store payment card details on our servers. <strong style={{ color: "#f8fafc" }}>All purchases are final</strong> unless required by applicable consumer law. We reserve the right to modify, remove, or rebalance cards and game content at any time.</p>
            </Section>

            <Section title="8. Intellectual Property">
              <p>All App content, card artwork, features, and design are owned by Andrew Blewett or licensed to us, protected by copyright and intellectual property laws. You may not copy, modify, or redistribute any part without our written permission.</p>
            </Section>

            <Section title="9. Disclaimer of Warranties">
              <p>THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. We do not guarantee uninterrupted availability, specific matchmaking times, or that card balances will remain constant.</p>
            </Section>

            <Section title="10. Limitation of Liability">
              <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ANDREW BLEWETT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE APP, LOSS OF VIRTUAL CONTENT, OR INTERACTIONS WITH OTHER PLAYERS. Nothing limits liability for fraud or matters that cannot be excluded by law.</p>
            </Section>

            <Section title="11. Termination">
              <p>We may suspend or permanently ban accounts that violate these Terms, including fair play rules, without prior notice or compensation. You may delete your account at any time.</p>
            </Section>

            <Section title="12. Changes to Terms">
              <p>Material changes notified in-app at least 14 days before taking effect. Continued use constitutes acceptance.</p>
            </Section>

            <Section title="13. Governing Law">
              <p>These Terms are governed by the laws of <strong style={{ color: "#f8fafc" }}>England and Wales</strong>. Disputes subject to the exclusive jurisdiction of English and Welsh courts, without prejudice to consumer rights under local law.</p>
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
