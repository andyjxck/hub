import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets } from "../../components/LegalPage";

const ACCENT = "#a3e635";
const APP = "Fit Void";
const SLUG = "fit-void";

export default function FitVoidTerms() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#050a07", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <img src="/app-assets/fit-void-icon.png" alt={APP} width={52} height={52} style={{ borderRadius: 12, marginBottom: 16 }} />
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Terms & Conditions</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: 15 September 2025</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Acceptance of Terms">
              <p>By downloading, installing, or using the {APP} mobile application (the "App"), you agree to be bound by these Terms and Conditions ("Terms") and our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link>. If you do not agree, do not use the App. You must be 16 or older to use social features.</p>
            </Section>

            <Section title="2. Description of the App">
              <p>{APP} is an offline-first strength, meal and body tracker. Features include:</p>
              <Bullets color={ACCENT} items={[
                "Workout logging with sets, reps and weights",
                "Live workout state machine with ghost sets and rest HUD",
                "Personal record tracking and routines",
                "Meal planning, barcode scanning and recipe import",
                "Body metrics tracking with volume radar and fatigue intelligence",
                "Apple Health integration (read-only, local)",
                "Optional cloud sync and social features",
              ]} />
            </Section>

            <Section title="3. Tiers &amp; Subscriptions">
              <Bullets color={ACCENT} items={[
                "Free tier: workout logging, routines, exercise library, meal tracking, body metrics, analytics",
                "Void Pro (paid): 1RM progression predictions, fatigue intelligence, volume radar, cloud backup & sync, advanced analytics, custom exercises",
                "Void Pro Max: everything in Pro plus priority support and early access to new features",
              ]} />
              <p style={{ marginTop: 12 }}>Void Pro is billed through the App Store as a monthly or yearly auto-renewing subscription, or a one-time lifetime purchase. Subscriptions renew automatically unless cancelled at least 24 hours before the period ends. Manage or cancel in iOS Settings &gt; Apple ID &gt; Subscriptions. Refunds are handled by Apple under their refund policy. If we change pricing we will give you 30 days notice before it applies to you.</p>
            </Section>

            <Section title="4. Important Medical &amp; Fitness Disclaimer">
              <p><strong style={{ color: "#f8fafc" }}>The App is a tracking tool, not medical advice.</strong> Calorie estimates, 1RM predictions, and health metrics are approximations. Consult a doctor before starting any exercise or diet programme. We are not responsible for injuries sustained while following data or recommendations in the App.</p>
            </Section>

            <Section title="5. Eligibility and Age">
              <p>You must be aged <strong style={{ color: "#f8fafc" }}>16 or over</strong> to use social features. By using the App you confirm you meet this requirement.</p>
            </Section>

            <Section title="6. Your Content">
              <Bullets color={ACCENT} items={[
                "You own your posts, photos, and profile",
                "You grant us a licence to store and display them to your friends",
                "Do not post content that is illegal, harassing, hateful, or infringes others' rights",
                "We can remove content and suspend accounts that break this",
                "You can delete posts and your profile at any time",
              ]} />
            </Section>

            <Section title="7. Acceptable Use">
              <p>You agree not to:</p>
              <Bullets color={ACCENT} items={[
                "Use the App to harass, stalk, or harm others",
                "Scrape or reverse-engineer the service",
                "Use the App if you are under 16",
              ]} />
              <p style={{ marginTop: 12 }}>We may suspend or terminate accounts that break these terms.</p>
            </Section>

            <Section title="8. Data and Privacy">
              <p>All personal health data is stored locally on your device and is never uploaded to our servers unless you link an account. For full details, see our <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT }}>Privacy Policy</Link>. We do not sell data, use advertising, or use third-party analytics.</p>
            </Section>

            <Section title="9. Intellectual Property">
              <p>All content, features, and functionality of the App are owned by Andrew Blewett or licensed to us and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our written permission.</p>
            </Section>

            <Section title="10. Disclaimer of Warranties">
              <p>THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. We do not guarantee the App will be available at all times, uninterrupted, or error-free.</p>
            </Section>

            <Section title="11. Limitation of Liability">
              <p>The App is provided "as is". We are liable only for direct losses caused by our breach of these terms, up to the amount you paid us in the last 12 months (or £50 if you paid nothing). Nothing in these Terms excludes liability for death or personal injury caused by negligence, or for fraud.</p>
            </Section>

            <Section title="12. Termination">
              <p>We reserve the right to suspend or terminate access to the App at any time if you violate these Terms. You may stop using the App at any time. On deletion of your account, all your cloud data is permanently removed within 30 days.</p>
            </Section>

            <Section title="13. Changes to Terms">
              <p>We may update these Terms. Material changes will be communicated via in-app notification. Continued use after that date constitutes acceptance.</p>
            </Section>

            <Section title="14. Governing Law and Disputes">
              <p>These Terms are governed by the laws of <strong style={{ color: "#f8fafc" }}>England and Wales</strong>. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.</p>
            </Section>

            <Section title="15. Contact">
              <p>Email: <a href="mailto:andy@theandysocial.website" style={{ color: ACCENT }}>andy@theandysocial.website</a><br />
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
