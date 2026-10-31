// Generated from the Void Business app's legal text (src/data/legalText.js in
// github.com/andyjxck/voidbusiness). Keep it in sync with the in-app policy.
import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section } from "../../components/LegalPage";

const ACCENT = "#fbbf24";
const APP = "Void Business";
const SLUG = "voidbusiness";
const LAST_UPDATED = "October 30, 2026";

const UL = { listStyle: "none", padding: 0, margin: "10px 0 0", display: "flex", flexDirection: "column", gap: "7px" };
const LI = { paddingLeft: "18px", position: "relative", fontSize: "14px", color: "#94a3b8", lineHeight: 1.7 };
const DOT = { position: "absolute", left: 0, color: ACCENT };

export default function VoidBusinessTerms() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0b0b10", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href="/policies" style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← All policies</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <img src="/app-assets/void-business-icon.png" alt={APP} width={52} height={52} style={{ borderRadius: 12, marginBottom: 16 }} />
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Terms of Use</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: {LAST_UPDATED}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Agreement">
              <p>These Terms of Use apply to Void Business, published by an independent developer trading as AndySocial (&quot;we&quot;, &quot;us&quot;). Your use of the app is also governed by Apple&apos;s Licensed Application End User License Agreement (the &quot;Standard EULA&quot;): <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</a>. These terms add to the Standard EULA. If you do not agree, do not use the app.</p>
            </Section>

            <Section title="2. The game">
              <p>Void Business is a single-player simulation game for entertainment. All companies, coins, products, people and news in the game are fictional. Nothing in the game is financial advice.</p>
            </Section>

            <Section title="3. Virtual items">
              <p>In-game cash, businesses, upgrades, card skins and other items are virtual. They have no real-world monetary value, cannot be exchanged for money or real goods, and are licensed to you, not sold. We may adjust game balance at any time.</p>
            </Section>

            <Section title="4. Purchases">
              <p>In-app purchases and the VIP subscription are billed by Apple to your Apple Account. Prices are shown in the app and confirmed by Apple before you pay. Refunds are handled by Apple under Apple&apos;s policies and your statutory rights. Use Restore Purchases in the shop to restore non-consumable purchases and an active subscription on a new device.</p>
            </Section>

            <Section title="5. VIP subscription">
              <p>VIP is an auto-renewable subscription, available as VIP Monthly (1 month) and VIP Yearly (1 year). Payment is charged to your Apple Account when you confirm the purchase. The subscription renews automatically at the price shown for the same period unless you turn off auto-renew at least 24 hours before the end of the current period. Your account is charged for renewal within 24 hours before the end of the current period.</p>
              <p style={{ marginTop: 12 }}>You can manage or cancel your subscription at any time in your Apple Account settings (iOS Settings &gt; [your name] &gt; Subscriptions). Cancelling stops future charges; VIP benefits continue until the end of the period you have paid for.</p>
              <p style={{ marginTop: 12 }}>If the price changes, Apple notifies you under its standard rules and you can cancel before the new price applies.</p>
            </Section>

            <Section title="6. Digital content and cancellations">
              <p>Under UK consumer law, when you buy digital content for immediate delivery you agree that supply begins immediately and you lose the 14-day cancellation right once delivery begins. Your statutory rights for faulty content are not affected.</p>
            </Section>

            <Section title="7. Fair play">
              <p>Do not exploit bugs, tamper with the app or use automation to gain an advantage. We may reset progress gained through exploits.</p>
            </Section>

            <Section title="8. Availability">
              <p>We may update, suspend or discontinue features. Where a paid entitlement is materially affected, you may be entitled to a proportionate refund under consumer law.</p>
            </Section>

            <Section title="9. Liability">
              <p>Nothing in these terms excludes liability for death or personal injury caused by negligence, for fraud, or for any liability that cannot be excluded under law. Otherwise the app is provided &quot;as is&quot;, and to the extent permitted by law we are not liable for loss of virtual progress caused by device failure or deletion.</p>
            </Section>

            <Section title="10. Governing law">
              <p>These terms are governed by the laws of England and Wales, and the courts of England and Wales have jurisdiction, without affecting any mandatory consumer rights where you live.</p>
            </Section>

            <Section title="11. Privacy">
              <p>How the app handles data is explained in the Privacy Policy: <Link href="/voidbusiness/privacy" style={{ color: ACCENT }}>https://andysocialapps.website/voidbusiness/privacy</Link></p>
            </Section>

            <Section title="12. Contact">
              <p>Questions about these terms: <a href="mailto:andy@theandysocial.website" style={{ color: ACCENT }}>andy@theandysocial.website</a></p>
            </Section>

          </div>
          <div style={{ marginTop: "64px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: "20px" }}>
            <Link href={`/${SLUG}/privacy`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px" }}>Privacy Policy →</Link>
            <Link href="/policies" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", fontSize: "13px" }}>← All policies</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
