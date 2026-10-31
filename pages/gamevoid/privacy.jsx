import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

const PRIVACY_CONTENT = `Privacy Policy

Game Void
Last Updated: February 11, 2026

This Privacy Policy describes how your personal data is collected, used, stored, and shared when you use the Game Void mobile application (the "App"). Please read it carefully.

1. Data Controller

The Data Controller responsible for your personal data is:

Andrew Blewett
101 High Trees Close, Redditch, Worcestershire, B98 7XL
Email: andyblewett991@gmail.com

As the Data Controller, we determine the purposes and means of processing your personal data in connection with the App.

2. Data Minimisation

We are committed to collecting only the minimum amount of personal data necessary to provide and operate the App. We do not require your real name, email address, phone number, physical address, payment information, or precise geolocation. We do not access your contacts, photos, camera, microphone, or calendar.

3. Information We Collect

3.1 Information You Provide

• Account Information. When you create an account, we collect your chosen username, a numeric User ID, and a 4-digit PIN. Your PIN is never stored in plaintext; it is immediately hashed using SHA-256 with a unique random salt before being saved to our database. We do not have access to your original PIN.
• Profile Information. You may optionally set a profile emoji. This information is stored with your account.
• Chat Messages. If you use the in-app friends and messaging features, we store the messages you send and receive so they can be delivered and displayed.
• Friend Connections. If you add friends, we store the friendship relationship between your account and theirs.

3.2 Information Collected Automatically

• Game Data. We collect gameplay data including scores, game sessions, play counts, playtime, achievements, and daily challenge completions. This data is associated with your player account.
• Device Information. We collect device type, operating system version, and unique device identifiers for the purpose of delivering push notifications and serving advertisements.
• Push Notification Tokens. If you grant notification permissions, we collect your Expo push notification token to send you reminders, rewards, and gameplay notifications.
• Advertising Data. We use Google AdMob to serve advertisements. Google may collect device advertising identifiers (such as the IDFA on iOS or the Advertising ID on Android) to serve personalised or non-personalised ads.
• App Tracking. On iOS, we request your permission via the App Tracking Transparency framework before accessing your device's advertising identifier. You may decline this request, and the App will continue to function normally with non-personalised ads.

4. Lawful Basis for Processing

Under the UK GDPR and EU GDPR, we process your personal data on the following lawful bases:

• Account information (username, User ID, hashed PIN) — Contract: Necessary to create and maintain your account and provide the App's core services.
• Game data (scores, sessions, achievements, stats) — Contract: Necessary to deliver gameplay features, leaderboards, and progress tracking.
• Chat messages and friend connections — Contract: Necessary to provide the social and messaging features you have chosen to use.
• Push notification tokens — Consent: We only collect and use your push token after you grant notification permissions. You may withdraw consent at any time.
• Personalised advertising (IDFA / Advertising ID) — Consent: On iOS, we request explicit consent via the App Tracking Transparency prompt. On Android, you may opt out via device settings.
• Non-personalised advertising — Legitimate Interests: We have a legitimate interest in displaying non-personalised ads to fund the free availability of the App.
• Abuse and fair-play detection — Legitimate Interests: Necessary to detect and prevent cheating and manipulation of leaderboards.
• Server logs — Legitimate Interests: Necessary to maintain system security and diagnose technical issues.

5. How We Use Your Information

• Provide and maintain the App, including account creation, gameplay tracking, leaderboards, achievements, and multiplayer features.
• Enable social features, including friends lists, friend requests, in-app chat, and friend challenges.
• Send push notifications (only if you have granted notification permissions).
• Display advertisements to support the free availability of the App.
• Improve the App, including analysing gameplay patterns and fixing bugs.
• Ensure fair play, including detecting and preventing abuse of multiplayer and leaderboard systems.

6. Data Retention

• Account information — Retained until you delete your account.
• Game data (scores, sessions, achievements, stats) — Retained until you delete your account.
• Chat messages — Retained for 12 months from the date sent, or until you delete your account, whichever comes first.
• Friend connections and friend requests — Retained until you delete your account or remove the friendship.
• Push notification tokens — Retained until you revoke notification permissions or delete your account.
• Multiplayer match history — Retained for 6 months from match completion, or until you delete your account, whichever comes first.
• Daily challenge completions — Retained until you delete your account.
• Server logs — Retained for 3 months, then automatically purged.
• Encrypted database backups — Retained for 30 days on a rolling basis, then automatically overwritten.

When you delete your account, all associated data is removed from our live database immediately. Encrypted backups may persist for up to 30 days before being automatically overwritten.

7. Advertising

The App uses Google AdMob to serve advertisements. AdMob may use device advertising identifiers and cookies to provide personalised or non-personalised ads.

• iOS Users: We request your consent via Apple's App Tracking Transparency (ATT) framework before accessing your IDFA for ad personalisation. If you decline, you will receive non-personalised ads.
• Android Users: Google may use your Advertising ID for ad personalisation. You can reset or opt out in your device settings.

Google Ad Settings: https://adssettings.google.com/
Google Privacy Policy: https://policies.google.com/privacy

8. Categories of Recipients

We do not sell your personal data. We may share data with:

• Other Players — Username, profile emoji, game scores, leaderboard rankings. Chat messages are visible only to the friend you are messaging.
• Supabase (cloud database hosting) — All account and gameplay data.
• Google AdMob (advertising) — Device advertising identifiers and usage data.
• Expo / EAS (push notifications) — Push notification tokens and device identifiers.
• Law enforcement or regulators — Any data required by law.

9. International Data Transfers

Our third-party service providers — including Supabase, Google, and Expo — may process your personal data outside the UK/EEA, including in the United States. We ensure appropriate safeguards are in place, including Standard Contractual Clauses (SCCs).

10. Your Rights

Under the UK GDPR and EU GDPR, you have the right to:

• Access your account data and game statistics within the App at any time.
• Rectify your username and profile emoji within the App.
• Erase your account and all data from the Profile screen.
• Data portability — request a copy in JSON or CSV format by contacting us.
• Restrict processing in certain circumstances.
• Object to processing based on legitimate interests.
• Withdraw consent (push notifications and personalised advertising) at any time via device settings.
• Opt-Out (CCPA) — we do not sell personal information.

To exercise any rights, contact us at andyblewett991@gmail.com.

11. Account Deletion

You may permanently delete your account from the Profile screen within the App. The following data is immediately removed:

• Your player profile (username, User ID, hashed PIN, profile emoji)
• All game sessions, scores, and statistics
• All achievements and progress
• All friendships and friend requests
• All chat messages sent and received
• All multiplayer match history
• All daily challenge completions
• Your push notification token

Account deletion is immediate and cannot be undone.

12. Data Security

• Encryption in transit: All data is encrypted using HTTPS/TLS.
• Encryption at rest: Database backups are encrypted at rest.
• Credential security: PINs are hashed using SHA-256 with a cryptographically random 128-bit salt. The stored format is salt:hash. Sensitive local credentials are stored using device-level secure storage (SecureStore).
• Database security: Row-level security (RLS) policies are enforced on our Supabase database.
• Access control: Administrative access is restricted and protected by strong authentication.

13. Automated Decision-Making and Profiling

We do not use automated decision-making or profiling that produces legal or similarly significant effects on you.

14. Children's Privacy

The App is not directed at children under the age of 13 (or 16 where applicable). We do not knowingly collect personal information from children under these ages. If you believe your child has created an account, contact us at andyblewett991@gmail.com.

15. Third-Party Services

• Supabase (database and backend): https://supabase.com/privacy
• Google AdMob (advertising): https://policies.google.com/privacy
• Expo / EAS (app infrastructure and push notifications): https://expo.dev/privacy

16. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. Your continued use of the App after any changes constitutes your acceptance of the updated policy.

17. Complaints

For UK residents: Information Commissioner's Office (ICO) — https://ico.org.uk — 0303 123 1113
For EEA residents: Contact your local Data Protection Authority — https://edpb.europa.eu/about-edpb/about-edpb/members_en

18. Contact Us

Andrew Blewett
101 High Trees Close, Redditch, Worcestershire, B98 7XL
Email: andyblewett991@gmail.com`;

export default function GameVoidPrivacy() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#05070D", minHeight: "100vh" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "100px 24px" }}>

          <div style={{ marginBottom: "32px" }}>
            <Link href="/gamevoid" style={{ fontSize: "13px", color: "#f87171", textDecoration: "none", letterSpacing: "0.04em" }}>
              ← Back to Game Void
            </Link>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <div style={{ marginBottom: "12px" }}>
              <img src="/app-assets/game-void-icon.png" alt="Game Void" width={56} height={56} style={{ borderRadius: "12px" }} />
            </div>
            <h1 style={{ fontSize: "36px", fontWeight: "700", color: "#f8fafc", marginBottom: "4px", lineHeight: 1.1 }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: "13px", color: "#475569", margin: 0, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Game Void · Last Updated: February 11, 2026
            </p>
          </div>

          <div style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.9, whiteSpace: "pre-line" }}>
            {PRIVACY_CONTENT}
          </div>

          <div style={{ paddingTop: "48px", borderTop: "1px solid #1e1e24", marginTop: "48px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/gamevoid/terms" style={{ fontSize: "13px", color: "#94a3b8", textDecoration: "none" }}>Terms &amp; Conditions →</Link>
            <Link href="/gamevoid" style={{ fontSize: "13px", color: "#475569", textDecoration: "none" }}>← Back to Game Void</Link>
          </div>

        </div>
      </div>
    </Layout>
  );
}
