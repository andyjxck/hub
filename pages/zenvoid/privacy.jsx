import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

const content = `Privacy Policy

Zen Void
Last Updated: February 11, 2026

This Privacy Policy describes how your personal data is collected, used, stored, and shared when you use the Zen Void mobile application (the "App"). Please read it carefully.

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

- Account Information. When you create an account, we collect your chosen username, a numeric User ID, and a password or PIN. Your credentials are never stored in plaintext; they are immediately hashed before being saved to our database. We do not have access to your original password or PIN.
- Profile Information. You may optionally set a display name for your moon companion ("Luna"). This information is stored with your account.
- Wellness Data. If you use the mood tracking, journaling, breathing exercises, grounding exercises, body scan, thought release, affirmations, or wellness check-in features, we store the data you enter (such as mood ratings, journal entries, wellness scores, and exercise completions). This data is associated with your account and is used solely to provide you with personal insights and progress tracking.
- AI Chat Messages. If you use the Zeno Chat feature (AI-powered wellness companion), we store your conversation messages to provide continuity in your chat experience. These messages are processed by our AI service to generate responses.

3.2 Information Collected Automatically

- Usage Data. We collect data about your use of the App's features, including which exercises you complete, session durations, daily streaks, and calendar activity. This data is used to provide personal insights and improve the App.
- Device Information. We collect device type, operating system version, and unique device identifiers for the purpose of delivering push notifications and serving advertisements.
- Push Notification Tokens. If you grant notification permissions, we collect your Expo push notification token to send you daily mood reminders and wellness notifications.
- Advertising Data. We use Google AdMob to serve advertisements. Google may collect device advertising identifiers (such as the IDFA on iOS or the Advertising ID on Android) to serve personalised or non-personalised ads. See Section 7 for more details.
- App Tracking. On iOS, we request your permission via the App Tracking Transparency framework before accessing your device's advertising identifier. You may decline this request, and the App will continue to function normally with non-personalised ads.
- Local Storage. We use on-device storage (AsyncStorage and SecureStore) to save your settings, tutorial completion status, and session credentials locally on your device.
- Biometric Authentication Data. If you enable the biometric lock feature, authentication is handled entirely by your device's operating system (Face ID, Touch ID, or Android biometrics). We do not collect, store, or transmit any biometric data. The biometric lock simply gates access to the App using your device's native authentication.

3.3 Sensitive Personal Data

Wellness data (mood ratings, journal entries, wellness scores) may constitute sensitive personal data relating to your health and wellbeing. We process this data solely on the basis of your explicit consent, which you provide by voluntarily entering this information into the App. You are never required to enter wellness data to use the App's core features. You may delete all wellness data at any time (see Section 12).

4. Lawful Basis for Processing

Under the UK GDPR and EU GDPR, we process your personal data on the following lawful bases:

- Account information (username, User ID, hashed credentials) — Contract: Necessary to create and maintain your account and provide the App's core services.
- Wellness data (mood ratings, journal entries, wellness scores, exercise completions) — Explicit Consent: You voluntarily provide this data by using the wellness features. You may withdraw consent and delete this data at any time.
- AI chat messages — Contract: Necessary to provide the Zeno Chat feature you have chosen to use.
- Usage data (exercise completions, streaks, session durations) — Contract: Necessary to deliver personal insights and progress tracking features.
- Push notification tokens — Consent: We only collect and use your push token after you grant notification permissions. You may withdraw consent at any time (see Section 10).
- Personalised advertising (IDFA / Advertising ID) — Consent: On iOS, we request explicit consent via the App Tracking Transparency prompt. On Android, you may opt out via device settings.
- Non-personalised advertising — Legitimate Interests: We have a legitimate interest in displaying non-personalised ads to fund the free availability of the App.
- Server logs (error and access logs) — Legitimate Interests: Necessary to maintain system security, prevent abuse, and diagnose technical issues.

Where we rely on legitimate interests, we have assessed that our interests do not override your fundamental rights and freedoms.

5. How We Use Your Information

We use the information we collect to:

- Provide and maintain the App, including account creation, authentication, and feature delivery.
- Deliver wellness features, including mood tracking, journaling, breathing exercises, grounding exercises, body scan, thought release, affirmations, and wellness check-ins.
- Provide personal insights based on your wellness data, including mood trends, streak tracking, and calendar views.
- Operate the Zeno Chat AI wellness companion, including generating contextual responses based on your conversation history.
- Send push notifications, including daily mood reminders and wellness prompts (only if you have granted notification permissions).
- Display advertisements to support the free availability of the App.
- Improve the App, including analysing usage patterns and fixing bugs.

We do NOT use your wellness data (mood ratings, journal entries, wellness scores) for advertising, profiling, or any purpose other than providing you with the wellness features and personal insights you have requested.

6. Data Retention

- Account information (username, User ID, hashed credentials, profile data) — Retained until you delete your account.
- Wellness data (mood ratings, journal entries, wellness scores) — Retained until you delete the data or delete your account.
- AI chat messages — Retained until you delete your account. Individual messages cannot currently be selectively deleted.
- Usage data (exercise completions, streaks, session durations) — Retained until you delete your account.
- Push notification tokens — Retained until you revoke notification permissions or delete your account.
- Server logs (error and access logs) — Retained for 3 months, then automatically purged.
- Encrypted database backups — Retained for 30 days on a rolling basis, then automatically overwritten.

When you delete your account, all associated data is removed from our live database immediately. Encrypted backups containing residual data may persist for up to 30 days before being automatically overwritten. During this period, backup data is encrypted and is not used for any purpose other than disaster recovery.

7. Advertising

The App uses Google AdMob to serve advertisements. AdMob may use device advertising identifiers and cookies to provide personalised or non-personalised ads based on your preferences and interactions.

- iOS Users: We request your consent via Apple's App Tracking Transparency (ATT) framework before accessing your IDFA for ad personalisation. If you decline, you will receive non-personalised ads.
- Android Users: Google may use your Advertising ID for ad personalisation. You can reset or opt out of personalised ads in your device settings.

Advertising is never targeted based on your wellness data. Your mood ratings, journal entries, and wellness scores are never shared with advertisers or used for ad personalisation.

8. AI Chat (Zeno)

The Zeno Chat feature uses an AI service to generate wellness-focused conversational responses. When you use Zeno Chat:

- Your messages are sent to our backend server, which forwards them to the AI service provider to generate a response.
- We store your chat history on our servers to provide conversation continuity.
- The AI service provider may process your messages to generate responses but does not retain them beyond the processing session, in accordance with their data processing agreement.
- Zeno Chat is not a substitute for professional medical, psychological, or therapeutic advice. If you are experiencing a mental health crisis, please contact a qualified professional or emergency services.

9. Categories of Recipients

We do not sell your personal data. We may share data with the following categories of recipients:

- Supabase (cloud database hosting) — Data storage and backend infrastructure.
- Google AdMob (advertising) — Serving advertisements. Wellness data is never shared with AdMob.
- AI service provider (Zeno Chat) — Generating AI chat responses.
- Expo / EAS (push notification infrastructure) — Delivering push notifications.
- Law enforcement or regulators — Legal compliance only.

10. International Data Transfers

Our third-party service providers — including Supabase, Google, and Expo — may process your personal data outside the United Kingdom and European Economic Area (EEA), including in the United States. Appropriate safeguards including Standard Contractual Clauses are in place.

11. Your Rights

Under the UK GDPR, EU GDPR, and other applicable data protection laws, you have the following rights: Right of Access, Right to Rectification, Right to Erasure, Right to Data Portability, Right to Restrict Processing, Right to Object, and Right to Withdraw Consent.

To exercise any of these rights, contact us at andyblewett991@gmail.com.

12. Account and Data Deletion

You may permanently delete your account at any time from the Settings screen within the App, or by contacting us at andyblewett991@gmail.com.

13. Data Security

We implement HTTPS/TLS encryption in transit, encryption at rest for backups, hashed credentials, device-level secure storage, journal entry encryption, and row-level security on our database.

14. Automated Decision-Making

We do not use automated decision-making or profiling that produces legal effects on you.

15. Children's Privacy

The App is not directed at children under 13 (or 16 where a higher age of consent applies).

16. Health Disclaimer

The App is NOT a medical device or substitute for professional medical advice. If you are experiencing a mental health crisis, contact emergency services (999 in the UK).

17. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. Your continued use of the App after changes constitutes acceptance of the updated policy.

18. Contact Us

Andrew Blewett
Email: andyblewett991@gmail.com`;

export default function ZenVoidPrivacy() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#050508", minHeight: "100vh" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "100px 24px" }}>

          <div style={{ marginBottom: "32px" }}>
            <Link href="/zenvoid" style={{ fontSize: "13px", color: "#a78bfa", textDecoration: "none", letterSpacing: "0.04em" }}>
              ← Back to Zen Void
            </Link>
          </div>

          <div style={{ marginBottom: "40px" }}>
            <div style={{ marginBottom: "12px" }}>
              <img src="/app-assets/zen-void-icon.png" alt="Zen Void" width={56} height={56} style={{ borderRadius: "12px" }} />
            </div>
            <h1 style={{ fontSize: "36px", fontWeight: "700", color: "#f8fafc", marginBottom: "4px", lineHeight: 1.1 }}>
              Privacy Policy
            </h1>
            <p style={{ fontSize: "13px", color: "#475569", margin: 0, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Zen Void · Last Updated: February 11, 2026
            </p>
          </div>

          <div style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.9, whiteSpace: "pre-line" }}>
            {content}
          </div>

          <div style={{ paddingTop: "48px", borderTop: "1px solid #1e1e24", marginTop: "48px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/zenvoid/terms" style={{ fontSize: "13px", color: "#94a3b8", textDecoration: "none" }}>
              Terms &amp; Conditions →
            </Link>
            <Link href="/zenvoid" style={{ fontSize: "13px", color: "#475569", textDecoration: "none" }}>
              ← Back to Zen Void
            </Link>
          </div>

        </div>
      </div>
    </Layout>
  );
}
