import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

const content = `Terms & Conditions

Zen Void
Last Updated: February 11, 2026

These Terms and Conditions ("Terms") govern your access to and use of the Zen Void mobile application (the "App") provided by Andrew Blewett. By downloading, installing, or using the App, you agree to be bound by these Terms.

1. Acceptance of Terms

By accessing or using the App, you confirm that you are at least 13 years of age and that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you are under 18, you may only use the App with the consent and supervision of a parent or legal guardian.

2. Description of the App

Zen Void is a free-to-use mobile wellness and mindfulness application. Features include:

- Daily mood tracking and check-ins
- Guided breathing exercises
- Grounding exercises
- Body scan meditation
- Thought release exercises
- Daily affirmations
- Journaling
- Wellness insights and personal analytics
- Calendar view of your wellness activity
- Ambient soundscapes (rain, waves, wind, forest)
- Zeno Chat — an AI-powered wellness companion
- Luna — a customisable moon companion
- Optional biometric lock for privacy
- Player accounts with usernames, User IDs, and credential-based authentication
- Daily streaks and reminders
- Push notifications
- Advertisements served via Google AdMob

3. Important Health Disclaimer

3.1 Not Medical Advice
THE APP IS NOT A MEDICAL DEVICE, THERAPEUTIC TOOL, OR SUBSTITUTE FOR PROFESSIONAL MEDICAL, PSYCHOLOGICAL, OR PSYCHIATRIC ADVICE, DIAGNOSIS, OR TREATMENT.

3.2 Not Emergency Services
If you are experiencing a mental health crisis, suicidal thoughts, or any medical emergency, please immediately contact:
- Emergency services: 999 (UK)
- Samaritans: 116 123 (UK, free, 24/7)
- Crisis Text Line: Text "SHOUT" to 85258 (UK)
- NHS 111 for urgent medical advice

3.3 AI Chat Limitations
The Zeno Chat feature uses artificial intelligence to generate conversational responses. Zeno is NOT a therapist, counsellor, or healthcare professional. AI-generated responses may be inaccurate, incomplete, or inappropriate.

4. Account Registration

4.1 Creating an Account
You may create an account by choosing a username, a numeric User ID, and a password or PIN. You are not required to provide your real name, email address, or any other personally identifiable information.

4.2 Account Security
You are solely responsible for maintaining the confidentiality of your User ID and credentials.

4.3 Account Deletion
You may permanently delete your account at any time from the Settings screen within the App, or by contacting us at andyblewett991@gmail.com.

5. User Conduct

You agree not to:
- Use the App for any illegal or unauthorised purpose.
- Attempt to exploit, hack, reverse-engineer, decompile, or disassemble the App.
- Interfere with or disrupt the App's servers, networks, or infrastructure.
- Use the AI chat feature to generate harmful, abusive, or illegal content.

6. Wellness Data

You retain ownership of all wellness data you enter into the App. Your wellness data is used solely to provide you with the wellness features and personal insights you have requested. We do NOT use your wellness data for advertising or profiling.

7. AI Chat (Zeno)

Zeno Chat is an AI-powered conversational feature designed to provide supportive, wellness-focused responses. It is not a human, therapist, or healthcare professional. AI responses may be inaccurate or contextually inappropriate. You are solely responsible for how you interpret and act upon information provided by Zeno Chat.

8. Intellectual Property

All content, features, and functionality of the App are owned by Zen Void or its licensors. We grant you a limited, non-exclusive, non-transferable, revocable licence to use the App for your personal, non-commercial use.

9. Advertisements

The App is free to use and is supported by advertisements served through Google AdMob. Your wellness data is never used for advertising purposes.

10. Push Notifications

You can enable or disable push notifications at any time through your device settings.

11. Disclaimers

THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND. We make no representations regarding the effectiveness of the App's wellness features.

12. Limitation of Liability

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ZEN VOID SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE APP.

13. Termination

We may suspend or terminate your access to the App at any time, with or without cause. You may stop using the App and delete your account at any time.

14. Governing Law

These Terms shall be governed by and construed in accordance with the laws of England and Wales.

15. Contact Us

If you have any questions about these Terms, please contact us at:

Email: andyblewett991@gmail.com`;

export default function ZenVoidTerms() {
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
              Terms &amp; Conditions
            </h1>
            <p style={{ fontSize: "13px", color: "#475569", margin: 0, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Zen Void · Last Updated: February 11, 2026
            </p>
          </div>

          <div style={{ fontSize: "14px", color: "#cbd5e1", lineHeight: 1.9, whiteSpace: "pre-line" }}>
            {content}
          </div>

          <div style={{ paddingTop: "48px", borderTop: "1px solid #1e1e24", marginTop: "48px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/zenvoid/privacy" style={{ fontSize: "13px", color: "#94a3b8", textDecoration: "none" }}>
              Privacy Policy →
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
