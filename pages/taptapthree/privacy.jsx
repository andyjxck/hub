import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

const PRIVACY_CONTENT = `Privacy Policy

Tap Tap Three
Last Updated: February 11, 2026

This Privacy Policy describes how your personal data is collected, used, stored, and shared when you use the Tap Tap Three mobile application (the "App"). Please read it carefully.

1. Data Controller

The Data Controller responsible for your personal data is:

Andrew Blewett
101 High Trees Close, Redditch, Worcestershire, B98 7XL
Email: andyblewett991@gmail.com

As the Data Controller, we determine the purposes and means of processing your personal data in connection with the App.

2. Data Minimisation

We are committed to collecting only the minimum amount of personal data necessary to provide and operate the App. We do not require your real name, email address, phone number, physical address, payment information, or precise geolocation. We do not access your contacts, photos, camera, or calendar.

3. Information We Collect

3.1 Information You Provide

• Account Information. When you create an account, we collect your chosen username, a numeric User ID, and a password. Your password is never stored in plaintext; it is immediately hashed before being saved to our database. We do not have access to your original password.
• Profile Information. You may optionally set a profile emoji and display name. This information is stored with your account.
• Chat Messages. If you use the in-app friends and messaging features, we store the messages you send and receive so they can be delivered and displayed.
• Friend Connections. If you add friends, we store the friendship relationship between your account and theirs.

3.2 Information Collected Automatically

• Game Data. We collect gameplay data including tap counts, balance, upgrades purchased, prestige resets, business ownership, stock portfolio values, vault balances, achievements, daily streaks, weekly challenge completions, and offline earnings. This data is associated with your player account.
• Leaderboard Data. Your gameplay statistics (such as balance, tap power, total taps, reset count, vault value, business value, and total earned) are submitted to our leaderboard system and may be visible to other players.
• Device Information. We collect device type and operating system version for the purpose of delivering push notifications and ensuring App compatibility.
• Push Notification Tokens. If you grant notification permissions, we collect your Expo push notification token to send you reminders and gameplay notifications.
• Local Storage. We use on-device storage (AsyncStorage) to save your game progress, settings, and session credentials locally on your device.

4. Lawful Basis for Processing

Under the UK GDPR and EU GDPR, we process your personal data on the following lawful bases:

• Account information (username, User ID, hashed password) — Contract: Necessary to create and maintain your account and provide the App's core services.
• Game data (taps, balance, upgrades, prestige, businesses, stocks, vault, achievements) — Contract: Necessary to deliver gameplay features, progress tracking, and leaderboards.
• Chat messages and friend connections — Contract: Necessary to provide the social and messaging features you have chosen to use.
• Leaderboard data — Contract: Necessary to provide the competitive leaderboard features of the App.
• Push notification tokens — Consent: We only collect and use your push token after you grant notification permissions. You may withdraw consent at any time (see Section 9).
• Server logs (error and access logs) — Legitimate Interests: Necessary to maintain system security, prevent abuse, and diagnose technical issues.
• Abuse and fair-play detection — Legitimate Interests: We have a legitimate interest in detecting and preventing cheating, manipulation of leaderboards, and abuse of game systems to protect all users.

Where we rely on legitimate interests, we have assessed that our interests do not override your fundamental rights and freedoms.

5. How We Use Your Information

We use the information we collect to:

• Provide and maintain the App, including account creation, authentication, gameplay tracking, leaderboards, achievements, and social features.
• Enable social features, including friends lists, friend requests, in-app chat, and public profiles.
• Operate leaderboards displaying player rankings across multiple categories.
• Calculate and deliver offline earnings when you return to the App.
• Send push notifications, including gameplay reminders and daily streak alerts (only if you have granted notification permissions).
• Improve the App, including analysing gameplay patterns and fixing bugs.
• Ensure fair play, including detecting and preventing abuse of leaderboard and game systems.

6. Data Retention

• Account information (username, User ID, hashed password, profile data) — Retained until you delete your account.
• Game data (taps, balance, upgrades, prestige, businesses, stocks, vault, achievements, streaks) — Retained until you delete your account.
• Chat messages — Retained for 12 months from the date sent, or until you delete your account, whichever comes first.
• Friend connections and friend requests — Retained until you delete your account or remove the friendship.
• Leaderboard entries — Retained until you delete your account.
• Push notification tokens — Retained until you revoke notification permissions or delete your account.
• Server logs (error and access logs) — Retained for 3 months, then automatically purged.
• Encrypted database backups — Retained for 30 days on a rolling basis, then automatically overwritten.

When you delete your account, all associated data is removed from our live database immediately. Encrypted backups containing residual data may persist for up to 30 days before being automatically overwritten. During this period, backup data is encrypted and is not used for any purpose other than disaster recovery.

7. Categories of Recipients

We do not sell your personal data. We may share data with the following categories of recipients:

• Other Players — Social and competitive features: Username, profile emoji, leaderboard rankings, and public profile information. Chat messages are visible only to the friend you are messaging.
• Supabase (cloud database hosting) — Data storage and backend infrastructure: All account and gameplay data, stored on Supabase's cloud infrastructure.
• Expo / EAS (push notification infrastructure) — Delivering push notifications: Push notification tokens and device identifiers.
• Law enforcement or regulators — Legal compliance: Any data required by law or in response to valid legal requests by public authorities.

8. International Data Transfers

Our third-party service providers — including Supabase and Expo — may process your personal data outside the United Kingdom and European Economic Area (EEA), including in the United States.

Where your data is transferred outside the UK/EEA, we ensure that appropriate safeguards are in place, including:

• Standard Contractual Clauses (SCCs) approved by the European Commission and/or the UK Information Commissioner's Office.
• Adequacy decisions where applicable.
• The service provider's compliance with recognised data protection frameworks.

You can request further details about the safeguards in place by contacting us at andyblewett991@gmail.com.

9. Your Rights

Under the UK GDPR, EU GDPR, and other applicable data protection laws, you have the following rights:

• Right of Access. You can view your account data, game statistics, and achievements within the App at any time. You may also request a copy of all personal data we hold about you.
• Right to Rectification. You can update your username and profile emoji within the App at any time.
• Right to Erasure (Deletion). You can permanently delete your account and all associated data from the Menu screen within the App (see Section 10).
• Right to Data Portability. You may request a copy of your personal data in a structured, commonly used, machine-readable format (JSON or CSV). Contact us at andyblewett991@gmail.com to make this request.
• Right to Restrict Processing. You may request that we restrict the processing of your personal data in certain circumstances.
• Right to Object. You may object to processing based on legitimate interests (such as abuse detection). We will cease processing unless we can demonstrate compelling legitimate grounds.
• Right to Withdraw Consent. Where we process your data based on consent (push notifications), you may withdraw your consent at any time without affecting the lawfulness of processing carried out before withdrawal. You can withdraw consent by disabling push notifications in your device settings.

To exercise any of these rights, contact us at andyblewett991@gmail.com. We will respond within one month (or within the timeframe required by applicable law).

10. Account Deletion

You may permanently delete your account at any time from the Menu screen within the App, or by contacting us at andyblewett991@gmail.com. When you delete your account, the following data is immediately removed from our live database:

• Your player profile (username, User ID, hashed password, profile emoji)
• All game data (taps, balance, upgrades, prestige, businesses, stocks, vault, achievements, streaks)
• All leaderboard entries
• All friendships and friend requests
• All chat messages sent and received
• Your push notification token

Account deletion is immediate and cannot be undone. Encrypted database backups may retain residual data for up to 30 days before being automatically overwritten; during this period, backup data is encrypted, inaccessible for any purpose other than disaster recovery, and is not used to restore deleted accounts.

11. Data Security

We implement appropriate technical and organisational measures to protect your personal data from unauthorised access, alteration, disclosure, or destruction. These measures include:

• Encryption in transit: All data transmitted between the App and our servers is encrypted using HTTPS/TLS.
• Encryption at rest: Database backups are encrypted at rest.
• Credential security: Passwords are never stored in plaintext. They are hashed using industry-standard algorithms before being stored in the database. Sensitive local credentials (such as session tokens) are stored using device-level secure storage where available.
• Database security: Row-level security (RLS) policies are enforced on our Supabase database, ensuring that queries are scoped to the authenticated context.
• Access control: Administrative access to our database and infrastructure is restricted and protected by strong authentication.

No method of electronic storage or transmission over the Internet is 100% secure. We cannot guarantee absolute security, but we are committed to protecting your data using industry-standard practices.

12. Automated Decision-Making and Profiling

We do not use automated decision-making or profiling that produces legal effects or similarly significant effects on you. No decisions about your account, access, or gameplay are made solely by automated means without human oversight.

13. Children's Privacy

The App is not directed at children under the age of 13 (or 16 in jurisdictions where a higher age of consent applies). We do not knowingly collect personal information from children under these ages.

In accordance with the UK Age Appropriate Design Code (Children's Code), we have taken the following steps:

• We do not require children to provide personal information beyond what is necessary to use the App.
• We do not use personal data in ways that are detrimental to a child's wellbeing.
• We do not use nudge techniques to encourage children to provide unnecessary personal data or weaken their privacy settings.
• We provide age-appropriate default privacy settings.
• Push notifications require explicit consent, which is not enabled by default.

If you are a parent or guardian and believe your child has created an account or provided us with personal data, please contact us at andyblewett991@gmail.com so we can take appropriate action, including deleting the account and associated data.

14. Third-Party Services

The App uses the following third-party services, each of which has its own privacy policy:

• Supabase (database and backend): https://supabase.com/privacy
• Expo / EAS (app infrastructure and push notifications): https://expo.dev/privacy

15. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any material changes by updating the "Last Updated" date at the top of this policy. Your continued use of the App after any changes constitutes your acceptance of the updated policy.

16. Complaints

If you are not satisfied with how we handle your personal data, you have the right to lodge a complaint with a supervisory authority.

For UK residents:
Information Commissioner's Office (ICO)
Website: https://ico.org.uk
Helpline: 0303 123 1113

For EEA residents:
You may contact your local Data Protection Authority. A list is available at https://edpb.europa.eu/about-edpb/about-edpb/members_en

17. Contact Us

If you have any questions or concerns about this Privacy Policy, your personal data, or wish to exercise any of your rights, please contact us at:

Andrew Blewett
101 High Trees Close, Redditch, Worcestershire, B98 7XL
Email: andyblewett991@gmail.com

This Privacy Policy is effective as of the date listed above.`;

export default function TapTapThreePrivacy() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0a0514", minHeight: "100vh" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "100px 24px" }}>

          <div style={{ marginBottom: "32px" }}>
            <Link href="/taptapthree" style={{ fontSize: "13px", color: "#fbbf24", textDecoration: "none", letterSpacing: "0.04em" }}>
              ← Back to Tap Tap Three
            </Link>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <div style={{ marginBottom: "12px" }}>
              <img src="/app-assets/tap-tap-three-icon.png" alt="Tap Tap Three" width={56} height={56} style={{ borderRadius: "12px" }} />
            </div>
            <h1 style={{ fontSize: "36px", fontWeight: "700", color: "#f8fafc", marginBottom: "4px", lineHeight: 1.1 }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: "13px", color: "#475569", margin: 0, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Tap Tap Three · Last Updated: February 11, 2026
            </p>
          </div>

          <div style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.9, whiteSpace: "pre-line" }}>
            {PRIVACY_CONTENT}
          </div>

          <div style={{ paddingTop: "48px", borderTop: "1px solid #1e1e24", marginTop: "48px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/taptapthree/terms" style={{ fontSize: "13px", color: "#94a3b8", textDecoration: "none" }}>
              Terms &amp; Conditions →
            </Link>
            <Link href="/taptapthree" style={{ fontSize: "13px", color: "#475569", textDecoration: "none" }}>
              ← Back to Tap Tap Three
            </Link>
          </div>

        </div>
      </div>
    </Layout>
  );
}
