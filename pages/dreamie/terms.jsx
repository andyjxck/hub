import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets } from "../../components/LegalPage";

const ACCENT = "#a78bfa";
const APP = "dreamie.store";
const SLUG = "dreamie";

export default function DreamieTerms() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0c0a1e", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <img src="/app-assets/dreamie-icon.png" alt={APP} width={52} height={52} style={{ borderRadius: 12, marginBottom: 16 }} />
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Terms &amp; Conditions</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: June 2026</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Acceptance of Terms">
              <p>By accessing or using dreamie.store (the "Platform"), you agree to these Terms and our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link>. If you do not agree, do not use the Platform. dreamie.store is an independent fan project and is <strong style={{ color: "#f8fafc" }}>not affiliated with Nintendo</strong>.</p>
            </Section>

            <Section title="2. Description of the Platform">
              <p>dreamie.store is an Animal Crossing: New Horizons villager trading platform. Features include:</p>
              <Bullets color={ACCENT} items={[
                "Villager catalogue browsing",
                "Queue-based trading system",
                "Dodo code distribution",
                "Trade scheduling",
                "Plot-ready verification",
                "Trade reputation system",
              ]} />
            </Section>

            <Section title="3. Eligibility">
              <p>You must be at least <strong style={{ color: "#f8fafc" }}>13 years old</strong> to use the Platform. By using the Platform you confirm you meet this requirement.</p>
            </Section>

            <Section title="4. Account Registration">
              <p>Accounts require a username and email address. You are responsible for maintaining credentials confidentially and for all activity under your account. We may remove usernames that are offensive or impersonating.</p>
            </Section>

            <Section title="5. Trading Guidelines">
              <p>All trades are conducted entirely at your own risk and between users. We are a platform only and are not a party to any trade:</p>
              <Bullets color={ACCENT} items={[
                "We do not guarantee the availability of any specific villager",
                "We are not responsible for trade disputes, failed trades, or damages resulting from trades between users",
                "Plot-ready verification is provided in good faith but is not guaranteed to be accurate at the time of trade",
                "Dodo codes are shared by users at their own discretion; we are not liable for any misuse",
                "Trade reputation scores are user-generated; we do not verify their accuracy",
              ]} />
            </Section>

            <Section title="6. Acceptable Use">
              <p>You agree not to:</p>
              <Bullets color={ACCENT} items={[
                "Post false or misleading trade listings",
                "Create multiple accounts to abuse the reputation system",
                "Harass other users in or outside the Platform",
                "Attempt to reverse-engineer, decompile, or hack the Platform",
                "Use the Platform for any illegal or unauthorised purpose",
              ]} />
            </Section>

            <Section title="7. Third-Party IP Notice">
              <p>Animal Crossing: New Horizons and all related characters, names, and assets are intellectual property of Nintendo Co., Ltd. dreamie.store is an independent, fan-made project. We claim no ownership of Nintendo's intellectual property. Use of Animal Crossing assets is subject to Nintendo's Fan Art Policy.</p>
            </Section>

            <Section title="8. Intellectual Property">
              <p>Platform code, design, and original content are owned by Andrew Blewett, protected by copyright law. You may not copy, modify, or redistribute the Platform's own content without our written permission.</p>
            </Section>

            <Section title="9. Disclaimer of Warranties">
              <p>THE PLATFORM IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. We do not guarantee uninterrupted availability or that any trade will be completed successfully.</p>
            </Section>

            <Section title="10. Limitation of Liability">
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, ANDREW BLEWETT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES INCLUDING LOSSES ARISING FROM FAILED TRADES OR DISPUTES BETWEEN USERS. Nothing limits liability for fraud or matters that cannot be excluded by law.</p>
            </Section>

            <Section title="11. Termination">
              <p>We may suspend or terminate accounts that violate these Terms. You may delete your account at any time.</p>
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
