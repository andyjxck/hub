import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

const content = `Privacy Policy

Social Void
Last Updated: 2025

Data Controller

The Data Controller responsible for your personal data is:

Andrew Blewett
101 High Trees Close, Redditch, Worcestershire, B98 7XL
Email: andyblewett991@gmail.com

Information We Collect

• Account Information: Username, password (hashed)
• Game Progress: Merged items, recipes discovered, prestige level
• Usage Data: Session duration, features used, gameplay statistics
• Device Information: Device type, operating system version
• Purchase Data: In-app purchase history (if applicable)

How We Use Your Information

We use your information to:
• Provide and maintain the game
• Save your game progress and settings
• Process in-app purchases (if applicable)
• Display advertisements to support the free app
• Send you notifications about game events (if enabled)
• Improve the game experience

Data Retention

Your data is retained until you delete your account. Upon deletion, all data is removed from our live systems immediately.

Your Rights

Under UK/EU GDPR, you have the right to:
• Access your data
• Rectify inaccurate data
• Erase your data
• Data portability
• Withdraw consent

To exercise these rights, contact us at andyblewett991@gmail.com.

Data Security

We implement appropriate technical measures to protect your data:
• Encryption in transit (HTTPS/TLS)
• Secure password hashing
• Access controls on our database

Advertising

The App uses Google AdMob to serve advertisements. AdMob may use device advertising identifiers to provide personalised or non-personalised ads. You can manage your ad preferences in your device settings.

Third-Party Services

We use third-party services for:
• Database hosting (Supabase)
• Advertising (Google AdMob)
• In-app purchases (if applicable)

Each service has its own privacy policy.

Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of material changes by updating the "Last Updated" date.

Contact Us

For data protection enquiries, contact: andyblewett991@gmail.com`;

export default function SocialVoidPrivacy() {
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
              Privacy Policy
            </h1>
            <p style={{ fontSize: "13px", color: "#475569", margin: 0, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Social Void · Last Updated: 2025
            </p>
          </div>

          <div style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.9, whiteSpace: "pre-line" }}>
            {content}
          </div>

          <div style={{ paddingTop: "48px", borderTop: "1px solid #075985", marginTop: "48px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/social-void/terms" style={{ fontSize: "13px", color: "#94a3b8", textDecoration: "none" }}>
              Terms &amp; Conditions →
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
