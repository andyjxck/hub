import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

const content = `Terms & Conditions

Social Void
Last Updated: 2025

1. Acceptance of Terms

By downloading, installing, or using the Social Void mobile application (the "App"), you agree to be bound by these Terms and Conditions. If you do not agree to these Terms, do not use the App.

2. Description of the App

Social Void is a merge game about avoiding social interaction. The App includes features such as:
• 500+ merge recipes
• Chaos events
• Prestige system
• Seasons and albums
• Daily challenges
• Optional in-app purchases

3. Account Registration

You may create an account by choosing a username. You are responsible for maintaining the confidentiality of your account credentials.

4. User Conduct

You agree to use the App in a lawful and respectful manner. You agree not to:
• Use the App for any illegal or unauthorised purpose
• Attempt to exploit, hack, reverse-engineer, or disassemble the App
• Interfere with or disrupt the App's servers or infrastructure
• Use automated tools to gain unfair advantages

5. Intellectual Property

All content, features, and functionality of the App are owned by Social Void or its licensors and are protected by copyright, trademark, and other intellectual property laws.

6. In-App Purchases

The App offers optional in-app purchases for speed-ups and cosmetics. These purchases are processed through the app store. We do not store payment information on our servers.

7. Advertisements

The App is free to use and is supported by advertisements served through Google AdMob. By using the App, you acknowledge and agree that advertisements may be displayed during your use.

8. Disclaimers

THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.

We do not guarantee that the App will be available at all times, uninterrupted, secure, or error-free.

9. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL SOCIAL VOID BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE APP.

10. Governing Law

These Terms shall be governed by and construed in accordance with the laws of England and Wales.

11. Contact Us

Email: andyblewett991@gmail.com`;

export default function SocialVoidTerms() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0c4a6e", minHeight: "100vh" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "100px 24px" }}>

          <div style={{ marginBottom: "32px" }}>
            <Link href="/social-void" style={{ fontSize: "13px", color: "#60a5fa", textDecoration: "none", letterSpacing: "0.04em" }}>
              ← Back to Social Void
            </Link>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <div style={{ marginBottom: "12px" }}>
              <img src="/app-assets/social-void-icon.png" alt="Social Void" width={56} height={56} style={{ borderRadius: "12px" }} />
            </div>
            <h1 style={{ fontSize: "36px", fontWeight: "700", color: "#f8fafc", marginBottom: "4px", lineHeight: 1.1 }}>
              Terms &amp; Conditions
            </h1>
            <p style={{ fontSize: "13px", color: "#475569", margin: 0, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Social Void · Last Updated: 2025
            </p>
          </div>

          <div style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.9, whiteSpace: "pre-line" }}>
            {content}
          </div>

          <div style={{ paddingTop: "48px", borderTop: "1px solid #075985", marginTop: "48px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/social-void/privacy" style={{ fontSize: "13px", color: "#94a3b8", textDecoration: "none" }}>
              Privacy Policy →
            </Link>
            <Link href="/social-void" style={{ fontSize: "13px", color: "#475569", textDecoration: "none" }}>
              ← Back to Social Void
            </Link>
          </div>

        </div>
      </div>
    </Layout>
  );
}
