import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets } from "../../components/LegalPage";

const ACCENT = "#22d3ee";
const APP = "Void Musician";
const SLUG = "void-musician";

export default function VoidMusicianTerms() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#000d12", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <img src="/app-assets/void-musician-icon.png" alt={APP} width={52} height={52} style={{ borderRadius: 12, marginBottom: 16 }} />
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Terms &amp; Conditions</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: June 2026</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Acceptance of Terms">
              <p>By downloading, installing, or using the Void Musician mobile application (the "App"), you agree to these Terms and our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link>. If you do not agree, do not use the App.</p>
            </Section>

            <Section title="2. Description of the App">
              <p>Void Musician is a music industry simulation game. Features include:</p>
              <Bullets color={ACCENT} items={[
                "Artist career management and reputation building",
                "Fan base growth mechanics",
                "Tour planning and execution",
                "Music release and chart management",
                "Achievement and milestone unlocking",
              ]} />
            </Section>

            <Section title="3. Eligibility">
              <p>You must be at least <strong style={{ color: "#f8fafc" }}>12 years old</strong> to use the App. Users under 13 require parental consent. By using the App you confirm you meet this requirement.</p>
            </Section>

            <Section title="4. Account Registration">
              <p>You may create an account with a username and email address. You are responsible for keeping your credentials confidential and for all activity under your account. Notify us immediately of any suspected unauthorised use.</p>
            </Section>

            <Section title="5. Acceptable Use">
              <p>You agree not to:</p>
              <Bullets color={ACCENT} items={[
                "Exploit bugs, glitches, or vulnerabilities to gain an unfair advantage",
                "Use automated tools, bots, or scripts to interact with the App",
                "Attempt to reverse-engineer, decompile, or hack the App",
                "Create multiple accounts for abusive purposes",
                "Interfere with or disrupt the App's servers or infrastructure",
                "Use the App for any illegal or unauthorised purpose",
              ]} />
            </Section>

            <Section title="6. Virtual Content">
              <p>All in-game items, currencies, and progress are virtual and have no real-world monetary value. We reserve the right to modify, reset, or remove virtual content at any time without liability.</p>
            </Section>

            <Section title="7. Intellectual Property">
              <p>All content, features, and functionality of the App are owned by Andrew Blewett or licensed to us, protected by copyright and intellectual property laws. You may not copy, modify, or distribute any App content without our written permission.</p>
            </Section>

            <Section title="8. Disclaimer of Warranties">
              <p>THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. We do not guarantee uninterrupted availability, freedom from errors, or that game progress will never be lost.</p>
            </Section>

            <Section title="9. Limitation of Liability">
              <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ANDREW BLEWETT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE APP OR LOSS OF VIRTUAL CONTENT. Nothing in these Terms limits liability for fraud or matters that cannot be excluded by law.</p>
            </Section>

            <Section title="10. Termination">
              <p>We may suspend or terminate your account if you breach these Terms. You may delete your account at any time, permanently removing all associated data.</p>
            </Section>

            <Section title="11. Changes to Terms">
              <p>Material changes communicated via in-app notification at least 14 days before taking effect. Continued use constitutes acceptance.</p>
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
