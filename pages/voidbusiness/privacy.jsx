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

export default function VoidBusinessPrivacy() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0b0b10", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href="/policies" style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← All policies</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <img src="/app-assets/void-business-icon.png" alt={APP} width={52} height={52} style={{ borderRadius: 12, marginBottom: 16 }} />
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Privacy Policy</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: {LAST_UPDATED}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Who we are">
              <p>Void Business is a single-player game published by an independent developer trading as AndySocial (&quot;we&quot;, &quot;us&quot;). We are the data controller for the limited processing described in this policy.</p>
              <p style={{ marginTop: 12 }}>Contact: <a href="mailto:andy@theandysocial.website" style={{ color: ACCENT }}>andy@theandysocial.website</a></p>
            </Section>

            <Section title="2. The short version">
              <p>There are no accounts and we run no servers. Your game stays on your device and, if iCloud is on, in your own iCloud. The only other parties involved are Apple, which handles purchases and iCloud, and Google, whose AdMob SDK serves the optional rewarded ads. We do not run analytics or crash reporting of our own.</p>
            </Section>

            <Section title="3. What stays on your device">
              <ul style={UL}>
                <li style={LI}><span style={DOT}>&bull;</span>Game data: your balance, businesses, investments, collections, purchases, settings and stats.</li>
                <li style={LI}><span style={DOT}>&bull;</span>Names you type: names you give your games, films, businesses and similar items are saved only on your device (and in your own iCloud save if iCloud is on). They are never sent to us, to Google or to anyone else.</li>
              </ul>
              <p style={{ marginTop: 12 }}>We cannot see any of this data.</p>
            </Section>

            <Section title="4. iCloud">
              <p>If iCloud is enabled for Void Business on your device, a copy of your save is stored in your private iCloud key-value store under your Apple Account so it can sync between your devices. Apple holds it under Apple&apos;s privacy policy. We cannot see, access or retrieve it.</p>
            </Section>

            <Section title="5. Purchases">
              <p>Apple processes all payments for in-app purchases and the VIP subscription. Apple tells the app which product you bought and whether your subscription is active, and the app stores that on your device. We never see your name, Apple Account details or card details.</p>
            </Section>

            <Section title="6. Ads (Google AdMob)">
              <p>Void Business shows rewarded video ads only. An ad plays only when you choose to watch one in exchange for an in-game reward. There are no banner or pop-up ads.</p>
              <ul style={UL}>
                <li style={LI}><span style={DOT}>&bull;</span>Google&apos;s Mobile Ads SDK starts when the app launches. For players without VIP, the app then loads one rewarded ad in advance so it is ready if you choose to watch it. For VIP members the app does not load or show ads, but the SDK still starts at launch.</li>
                <li style={LI}><span style={DOT}>&bull;</span>The app requests non-personalised ads only. Google does not use your activity in this app to personalise ads.</li>
                <li style={LI}><span style={DOT}>&bull;</span>The app never asks for permission to track you, so iOS does not give the app or Google your advertising identifier (IDFA).</li>
                <li style={LI}><span style={DOT}>&bull;</span>As Google discloses for its Mobile Ads SDK, Google may collect your IP address (which can indicate your general location), app- or developer-scoped device identifiers, how you interact with ads and the app (such as launches, taps and video views), and diagnostic information such as crash logs and performance data (for example launch time, hang rate and energy use). Google uses this to deliver ads, measure them, prevent fraud and improve its services.</li>
              </ul>
              <p style={{ marginTop: 12 }}>Google&apos;s disclosure: <a href="https://developers.google.com/admob/ios/privacy/data-disclosure" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>https://developers.google.com/admob/ios/privacy/data-disclosure</a><br />Google&apos;s privacy policy: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>https://policies.google.com/privacy</a></p>
            </Section>

            <Section title="7. What we do not do">
              <ul style={UL}>
                <li style={LI}><span style={DOT}>&bull;</span>No accounts, sign-ins or profiles</li>
                <li style={LI}><span style={DOT}>&bull;</span>No analytics, crash reporting or telemetry of our own</li>
                <li style={LI}><span style={DOT}>&bull;</span>No tracking across other companies&apos; apps or websites, and no advertising profiles</li>
                <li style={LI}><span style={DOT}>&bull;</span>No sale of personal data</li>
                <li style={LI}><span style={DOT}>&bull;</span>No servers of our own, so nothing is stored by us</li>
              </ul>
            </Section>

            <Section title="8. Sharing and third parties">
              <p>Data is processed only by the companies needed to run the features described above:</p>
              <ul style={UL}>
                <li style={LI}><span style={DOT}>&bull;</span>Apple: App Store payments, subscriptions and iCloud sync (<a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>https://www.apple.com/legal/privacy/</a>)</li>
                <li style={LI}><span style={DOT}>&bull;</span>Google: AdMob ad delivery and the diagnostics described above (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>https://policies.google.com/privacy</a>). This may involve processing in the United States under appropriate UK GDPR transfer safeguards.</li>
              </ul>
              <p style={{ marginTop: 12 }}>Any third party that receives user data from the app, including Apple and Google, must provide the same or equal protection of that data as stated in this policy and as required by Apple&apos;s App Store Review Guidelines. No one else receives data from the app.</p>
            </Section>

            <Section title="9. Lawful bases (UK GDPR)">
              <ul style={UL}>
                <li style={LI}><span style={DOT}>&bull;</span>Contract: storing your game and purchase entitlements is necessary to provide the game you chose to use.</li>
                <li style={LI}><span style={DOT}>&bull;</span>Legitimate interests: showing optional, non-personalised rewarded ads that fund the free game, and Apple&apos;s and Google&apos;s fraud prevention and security.</li>
              </ul>
            </Section>

            <Section title="10. Retention and deletion">
              <p>Game data stays until you delete it. Reset Progress in Settings deletes your progress on this device and clears the iCloud copy. Deleting the app removes the local copy. You can also remove the iCloud copy in iOS Settings &gt; [your name] &gt; iCloud &gt; Manage Storage (or Storage).</p>
              <p style={{ marginTop: 12 }}>Purchase records are kept by Apple under Apple&apos;s policies. Data collected by Google&apos;s SDK is kept under Google&apos;s policies.</p>
            </Section>

            <Section title="11. Your rights">
              <p>Under UK GDPR you have the right to access, rectification, erasure, restriction, portability and to object to processing. Because your data lives on your device and in your own iCloud, you already hold it: you can reset it in Settings or delete the app at any time.</p>
              <p style={{ marginTop: 12 }}>For anything else, email <a href="mailto:andy@theandysocial.website" style={{ color: ACCENT }}>andy@theandysocial.website</a>. You can also complain to the UK Information Commissioner&apos;s Office (<a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>ico.org.uk</a>).</p>
            </Section>

            <Section title="12. Children">
              <p>The app is not directed at children and we do not knowingly collect personal information from them. Purchases are protected by Apple&apos;s parental controls and Ask to Buy.</p>
            </Section>

            <Section title="13. Security">
              <p>Your game data leaves your device only through Apple&apos;s iCloud (encrypted in transit and at rest under your Apple Account) and the purchase and ad requests described above. No system is perfectly secure, but the app keeps its data footprint deliberately small.</p>
            </Section>

            <Section title="14. Changes">
              <p>If this policy changes, the new version will appear in the app and at <Link href="/voidbusiness/privacy" style={{ color: ACCENT }}>https://andysocialapps.website/voidbusiness/privacy</Link> with a new &quot;last updated&quot; date.</p>
            </Section>

            <Section title="15. Contact">
              <p>Questions about privacy: <a href="mailto:andy@theandysocial.website" style={{ color: ACCENT }}>andy@theandysocial.website</a></p>
            </Section>

          </div>
          <div style={{ marginTop: "64px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: "20px" }}>
            <Link href={`/${SLUG}/terms`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px" }}>Terms of Use →</Link>
            <Link href="/policies" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", fontSize: "13px" }}>← All policies</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
