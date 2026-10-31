// pages/policies.jsx
import React, { useState } from "react";
import Layout from "../components/Layout";

// -------------------- POLICY CONTENT --------------------
const content = {
  "zen-void": {
    subtitle: "Mood, journaling, and reflection app",
    privacy: (
  <>
    <p><strong>Last Updated: 26 November 2025</strong></p>

    <p>
      Zen Void is owned and operated by <strong>Andrew Blewett</strong>.  
      This app helps you track mood, energy, and personal reflection, and includes an optional AI-powered companion (“Zeno”) to provide gentle, personalized conversation.
    </p>

    <h4>Information We Collect</h4>
    <ul>
      <li>
        <strong>Mood & Wellbeing Inputs</strong>  
        (mood rating, energy, sleep hours, stress, social energy, productivity, activity, creativity).  
        These are stored securely in Supabase and linked to your account.
      </li>

      <li>
        <strong>AI Conversation Data</strong>  
        Messages you send to the Zeno companion are processed securely through OpenAI solely for generating responses.  
        <em>Zeno never sees encrypted content such as Notes or Gratitude.</em>
      </li>

      <li>
        <strong>Account Information</strong>  
        (username, optional profile emoji).
      </li>

      <li>
        <strong>Analytics</strong>  
        Basic usage events to improve features and understand app performance.
      </li>

      <li>
        <strong>Diagnostics</strong>  
        Crash logs and performance data used to fix bugs and improve stability.
      </li>
    </ul>

    <h4>How Your Data Is Used</h4>
    <ul>
      <li>To store and sync your mood entries across devices.</li>
      <li>To generate optional personalized responses from Zeno.</li>
      <li>To improve and refine features based on usage analytics.</li>
      <li>To maintain stability, security, and app functionality.</li>
    </ul>

    <h4>Sharing</h4>
    <p>
      Your data is <strong>never sold</strong>.  
      It is shared only with trusted service providers:
    </p>
    <ul>
      <li><strong>Supabase</strong> — secure storage and account services.</li>
      <li><strong>OpenAI</strong> — to generate optional AI responses; messages are not used to train models.</li>
    </ul>

    <h4>Encryption & Sensitive Data</h4>
    <p>
      Personal journal text (Notes, Gratitude) is <strong>end-to-end encrypted</strong> on your device and is never visible to Zeno or used in personalization.
    </p>

    <h4>Your Choices</h4>
    <ul>
      <li>Delete all journal and account data at any time by emailing <a href="mailto:andy@theandysocial.website">andy@theandysocial.website</a>.</li>
      <li>Disable or ignore the AI companion — Zeno is fully optional.</li>
    </ul>

    <h4>Children</h4>
    <p>Zen Void is intended for users aged 13+.</p>

    <h4>International Use</h4>
    <p>Your data is processed in the UK and where our providers operate.</p>

    <h4>Changes</h4>
    <p>
      We may update this policy. Continued use after updates means acceptance of the revised terms.
    </p>
  </>
),

    terms: (
      <>
        <p><strong>Last Updated: 23 October 2025</strong></p>
        <p>
          These Terms of Service are a legal agreement between you and <strong>Andrew Blewett</strong> for using Zen Void.
        </p>

        <h4>Eligibility</h4>
        <p>You must be 13+; under-18s require guardian consent.</p>

        <h4>License & Ownership</h4>
        <p>You get a personal, non-transferable license to use Zen Void. All rights remain with Andrew Blewett.</p>

        <h4>User Content</h4>
        <p>Your journal data is private to you. If community sharing is added later, don’t share personal info.</p>

        <h4>Prohibited Activities</h4>
        <ul>
          <li>No hacking, reverse engineering, or misuse of analytics or ads.</li>
        </ul>

        <h4>Disclaimer</h4>
        <p>Zen Void is provided “as is.” We’re not liable for indirect or consequential damages.</p>

        <h4>Governing Law</h4>
        <p>England & Wales law applies; exclusive jurisdiction in its courts.</p>
      </>
    ),
  },

  "fit-void": {
    subtitle: "Offline-first strength, meal & body tracker",
    privacy: (
      <>
        <p><strong>Last Updated: 15 September 2025</strong></p>
        <p>
          Fit Void is operated by <strong>Andrew Blewett</strong> ("we", "us"). This policy explains what
          personal data we collect, why, and your rights under the UK GDPR and the Data Protection Act 2018.
        </p>
        <p>Contact: <a href="mailto:andy@theandysocial.website">andy@theandysocial.website</a></p>

        <h4>What We Collect</h4>
        <ul>
          <li><strong>On-device (local SQLite, never uploaded unless you link an account):</strong> workouts, sets, reps, weights, routines, personal records, body measurements, meal plans, food logs, and app settings.</li>
          <li><strong>If you link an account:</strong> your sign-in code, friend code, username, display name, bio, profile photo, favourite PBs, posts, comments, trophies, friendships, and blocked-user list are stored in Supabase (hosted in the EU).</li>
          <li><strong>Health data</strong> (weight, nutrition, workouts) is read from Apple Health only if you tap Connect. We never upload HealthKit data to our servers.</li>
          <li>We do <strong>not</strong> collect analytics, advertising IDs, or crash telemetry.</li>
        </ul>

        <h4>How We Use It</h4>
        <ul>
          <li>To run the app (contract): logging, analytics, meal plans, body tracking.</li>
          <li>To provide social features (contract): feed, friends, posts, comments.</li>
          <li>To sync your data across devices (consent): only if you link an account.</li>
          <li>To meet legal obligations: tax records for Void Pro purchases.</li>
        </ul>

        <h4>Who Sees It</h4>
        <ul>
          <li>Your posts, profile (name, username, bio, avatar, PBs), and comments are visible to your friends. Your friend code is private — only people you share it with can add you.</li>
          <li>Supabase (cloud host, EU region) stores linked-account data. Apple Health data never leaves your device except through iCloud (controlled by Apple, not us).</li>
          <li>We do <strong>not</strong> sell your data. Ever.</li>
        </ul>

        <h4>Your Rights</h4>
        <ul>
          <li><strong>Access:</strong> export your data any time from More &gt; Export.</li>
          <li><strong>Erasure:</strong> delete the app to wipe local data; unlink your account to remove cloud data.</li>
          <li><strong>Rectification:</strong> edit your profile, workouts, and logs in-app.</li>
          <li><strong>Portability:</strong> CSV export of your full history.</li>
          <li><strong>Object:</strong> stop social features by unlinking your account.</li>
          <li><strong>Complain to the ICO:</strong> ico.org.uk</li>
        </ul>

        <h4>Retention</h4>
        <ul>
          <li>Local data stays on your device until you delete the app. Cloud data is kept while your account exists and deleted within 30 days of account removal.</li>
          <li>Backups are kept for 30 days, then purged.</li>
        </ul>

        <h4>Children</h4>
        <p>Fit Void is not intended for children under 16. If you believe a child has an account, contact <a href="mailto:andy@theandysocial.website">andy@theandysocial.website</a>.</p>

        <h4>Changes</h4>
        <p>We will update this policy when the app changes. The "last updated" date is at the top; material changes will be announced in-app.</p>
      </>
    ),
    terms: (
      <>
        <p><strong>Last Updated: 15 September 2025</strong></p>
        <p>
          Fit Void is a workout, meal, and body tracker. These terms govern your use of the app. By using it you
          agree to them. If you do not agree, do not use the app. You must be 16 or older to use social features.
        </p>

        <h4>What You Get</h4>
        <ul>
          <li><strong>Free tier:</strong> workout logging, routines, exercise library, meal tracking, body metrics, analytics.</li>
          <li><strong>Void Pro (paid):</strong> 1RM progression predictions, fatigue intelligence, volume radar, cloud backup & sync, advanced analytics, custom exercises.</li>
          <li><strong>Void Pro Max:</strong> everything in Pro plus priority support and early access to new features.</li>
        </ul>

        <h4>Subscriptions</h4>
        <ul>
          <li>Void Pro is billed through the App Store as a monthly or yearly auto-renewing subscription, or a one-time lifetime purchase.</li>
          <li>Subscriptions renew automatically unless cancelled at least 24 hours before the period ends. Manage or cancel in iOS Settings &gt; Apple ID &gt; Subscriptions.</li>
          <li>Refunds are handled by Apple under their refund policy. We cannot issue refunds directly.</li>
          <li>If we change pricing we will give you 30 days notice before it applies to you.</li>
        </ul>

        <h4>Your Content</h4>
        <ul>
          <li>You own your posts, photos, and profile. You grant us a licence to store and display them to your friends.</li>
          <li>Do not post content that is illegal, harassing, hateful, or infringes others' rights. We can remove content and suspend accounts that break this.</li>
          <li>You can delete posts and your profile at any time.</li>
        </ul>

        <h4>Acceptable Use</h4>
        <ul>
          <li>Do not use the app to harass, stalk, or harm others. Do not scrape or reverse-engineer the service. Do not use it if you are under 16.</li>
          <li>We may suspend or terminate accounts that break these terms.</li>
        </ul>

        <h4>Medical & Fitness Disclaimer</h4>
        <p>
          Fit Void is a tracking tool, not medical advice. Calorie estimates, 1RM predictions, and health metrics
          are approximations. Consult a doctor before starting any exercise or diet programme. We are not
          responsible for injuries sustained while following data or recommendations in the app.
        </p>

        <h4>Liability</h4>
        <p>
          The app is provided "as is". We are liable only for direct losses caused by our breach of these terms,
          up to the amount you paid us in the last 12 months (or £50 if you paid nothing). Nothing in these terms
          excludes liability for death or personal injury caused by negligence, or for fraud.
        </p>

        <h4>Governing Law</h4>
        <p>These terms are governed by the laws of England and Wales. UK courts have exclusive jurisdiction.</p>
      </>
    ),
  },

  "tap-tap-three": {
    subtitle: "Idle tapping, stocks, businesses, and social features",
    privacy: (
      <>
        <p><strong>Last Updated: 29 September 2025</strong></p>
        <p>
          Tap Tap Three is owned and operated by <strong>Andrew Blewett</strong>. We only collect
          what is required to run the game, support online features, and keep your progress safe.
        </p>

        <h4>Information We Collect</h4>
        <ul>
          <li><strong>Account Data</strong> (username, PIN, profile emoji).</li>
          <li><strong>Gameplay Data</strong> (balance, upgrades, stocks, businesses, stats).</li>
          <li><strong>Social Data</strong> (friends, chat messages, read receipts).</li>
          <li><strong>Device ID</strong> for login verification.</li>
          <li><strong>Crash Logs & Diagnostics</strong> to fix bugs and improve stability.</li>
        </ul>

        <h4>How We Use Data</h4>
        <ul>
          <li>Sync gameplay and save your progress.</li>
          <li>Support account login and device recovery.</li>
          <li>Provide social features (friends, messaging, profiles).</li>
          <li>Fix bugs and improve reliability.</li>
          <li>Detect cheating or abuse.</li>
        </ul>

        <h4>Data Sharing</h4>
        <p>
          We only share necessary data with Supabase, our backend provider.  
          No data is sold, and Tap Tap Three does <strong>not contain advertising</strong>.
        </p>

        <h4>Your Choices</h4>
        <ul>
          <li>Delete your account in-app using the built-in deletion feature.</li>
          <li>Email requests to: <a href="mailto:andy@theandysocial.website">andy@theandysocial.website</a></li>
        </ul>

        <h4>Children</h4>
        <p>Tap Tap Three is intended for players aged 13+.</p>

        <h4>International Users</h4>
        <p>Data is processed in the UK and where our providers operate.</p>
      </>
    ),
    terms: (
      <>
        <p><strong>Last Updated: 29 September 2025</strong></p>
        <p>
          These Terms apply to Tap Tap Three (“the App”). By installing or using the App, you agree to
          these Terms and the Privacy Policy.
        </p>

        <h4>Eligibility</h4>
        <p>You must be 13+ to use Tap Tap Three. Under-18s require guardian consent.</p>

        <h4>License</h4>
        <p>
          You receive a personal, non-transferable license to use the App.  
          All rights belong to <strong>Andrew Blewett</strong>.
        </p>

        <h4>User Conduct</h4>
        <ul>
          <li>No cheating, hacking, or exploiting bugs.</li>
          <li>No abusive usernames, messages, or behaviour.</li>
          <li>We may remove accounts violating rules.</li>
        </ul>

        <h4>Virtual Items</h4>
        <p>
          In-game currency, upgrades, and stats have no cash value and may be changed at any time.
        </p>

        <h4>Social Features</h4>
        <p>
          Chat and friend interactions must remain safe.  
          We may moderate or remove content to protect players.
        </p>

        <h4>Termination</h4>
        <p>We may suspend or terminate accounts that breach these Terms.</p>

        <h4>Liability</h4>
        <p>
          The App is provided “as is.”  
          No liability for indirect or consequential damages.
        </p>

        <h4>Governing Law</h4>
        <p>These Terms are governed by England & Wales law.</p>
      </>
    ),
  },

  "game-void": {
    subtitle: "Arcade hub of classic & puzzle games",
    privacy: (
      <>
        <p><strong>Last Updated: 29 September 2025</strong></p>
        <p>
          Game Void is owned and operated by <strong>Andrew Blewett</strong>. We collect only the
          information needed to operate the app, improve gameplay, and support advertising.
        </p>

        <h4>Information We Collect</h4>
        <ul>
          <li><strong>Advertising Identifiers</strong> (IDFA/AAID) when allowed by your device settings.</li>
          <li><strong>Usage Data</strong> such as screens viewed, taps, session length, and crash reports.</li>
          <li><strong>User-Generated Content</strong> you share (e.g., usernames, chat messages). Don’t post personal info.</li>
        </ul>

        <h4>How We Use Data</h4>
        <ul>
          <li>Deliver, measure, and improve ads (via Google AdMob).</li>
          <li>Monitor stability, fix crashes, and balance gameplay.</li>
          <li>Moderate chat to keep the community safe.</li>
        </ul>

        <h4>Data Sharing</h4>
        <p>
          We share limited data only with trusted providers such as Google AdMob. These providers are bound by their
          own privacy and security obligations and may not use your data for unrelated purposes.
        </p>

        <h4>Retention & Security</h4>
        <p>
          Data is retained only as long as necessary for the purposes above, then aggregated or deleted. We use
          industry-standard safeguards, but no system is perfectly secure.
        </p>

        <h4>Your Choices</h4>
        <ul>
          <li>Control ad tracking in your device settings (iOS/Android).</li>
          <li>Request deletion of user content or account data: <a href="mailto:andy@theandysocial.website">andy@theandysocial.website</a>.</li>
        </ul>

        <h4>Children</h4>
        <p>Game Void is for users 13+ and is not directed to children under 13.</p>

        <h4>International Users</h4>
        <p>Data is processed in the United Kingdom and where our providers operate.</p>

        <h4>Changes</h4>
        <p>We may update this policy; material changes will be highlighted in-app or on our site.</p>

        <h4>Contact</h4>
        <p>Questions or requests: <a href="mailto:andy@theandysocial.website">andy@theandysocial.website</a>.</p>
      </>
    ),
    terms: (
      <>
        <p><strong>Last Updated: 29 September 2025</strong></p>
        <p>
          These Terms of Service form a legal agreement between you and <strong>Andrew Blewett</strong>.
          By installing or using Game Void, you agree to these Terms and the Privacy Policy.
        </p>

        <h4>Eligibility</h4>
        <p>You must be at least 13 years old. Under-18s need parental/guardian consent.</p>

        <h4>License & Ownership</h4>
        <p>
          We grant a personal, non-exclusive, non-transferable license to use the app for entertainment. All rights
          in the app and content remain with Andrew Blewett.
        </p>

        <h4>User Content & Conduct</h4>
        <ul>
          <li>Don’t post unlawful, abusive, defamatory, or offensive content (usernames, chat, etc.).</li>
          <li>We may remove content or suspend accounts at our discretion to protect the community.</li>
        </ul>

        <h4>Monetization</h4>
        <p>No in-app purchases. Virtual items/scores have no real-world value and may change or be removed.</p>

        <h4>Prohibited Activities</h4>
        <ul>
          <li>No cheating, hacking, or exploiting bugs.</li>
          <li>No disrupting servers or interfering with ads/SDKs.</li>
          <li>No reverse engineering or unauthorized distribution.</li>
        </ul>

        <h4>Disclaimers & Limitation of Liability</h4>
        <p>
          The app is provided “as is” and “as available.” To the fullest extent permitted by law, Andrew Blewett
          is not liable for indirect, incidental, or consequential damages (including lost data or profits).
        </p>

        <h4>Termination</h4>
        <p>We may suspend or terminate access at any time, including for rule violations.</p>

        <h4>Governing Law</h4>
        <p>These Terms are governed by the laws of England & Wales, with exclusive jurisdiction in its courts.</p>
      </>
    ),
  },

  "social-void": {
    subtitle: "Merge-based progression game",
    privacy: (
      <>
        <p><strong>Last Updated: 29 September 2025</strong></p>
        <p>
          Social Void is owned and operated by <strong>Andrew Blewett</strong>. We collect only what&apos;s necessary
          to run the game and support advertising.
        </p>

        <h4>Information We Collect</h4>
        <ul>
          <li><strong>Advertising Identifiers</strong> (IDFA/AAID) for ads and measurement.</li>
          <li><strong>Gameplay Data</strong> like levels, merges, achievements, crash logs, and usage stats.</li>
          <li><strong>User-Generated Content</strong> (usernames, chat). Don&apos;t share personal info in chat.</li>
        </ul>

        <h4>How We Use Data</h4>
        <ul>
          <li>Serve/measure ads and analyze performance.</li>
          <li>Maintain stability and tune progression/rewards.</li>
          <li>Moderate chat to keep the community safe.</li>
        </ul>

        <h4>Sharing & Retention</h4>
        <p>Shared only with trusted providers (e.g., Google AdMob). Retained only as long as needed.</p>

        <h4>Your Choices</h4>
        <ul>
          <li>Manage ad preferences/reset your advertising ID in device settings.</li>
          <li>Request data deletion: <a href="mailto:andy@theandysocial.website">andy@theandysocial.website</a>.</li>
        </ul>

        <h4>Children</h4>
        <p>Social Void is intended for players 13+ and not for children under 13.</p>

        <h4>International Users & Changes</h4>
        <p>Data is processed in the UK. We may update this policy; continued use means acceptance.</p>
      </>
    ),
    terms: (
      <>
        <p><strong>Last Updated: 29 September 2025</strong></p>
        <p>
          These Terms of Service are a legal agreement between you and <strong>Andrew Blewett</strong> for your
          use of Social Void.
        </p>

        <h4>Eligibility</h4>
        <p>You must be 13+; under-18s need parental/guardian consent.</p>

        <h4>License & Ownership</h4>
        <p>Personal, non-exclusive, non-transferable license for entertainment only. All rights reserved.</p>

        <h4>User Content & Conduct</h4>
        <ul>
          <li>No illegal, abusive, defamatory, or offensive usernames or chat.</li>
          <li>We may remove content or suspend accounts at our discretion.</li>
        </ul>

        <h4>Monetization</h4>
        <p>No in-app purchases. Virtual items/progress have no cash value and may change or be removed.</p>

        <h4>Prohibited Activities</h4>
        <ul>
          <li>No cheating, hacking, exploiting bugs, or disrupting servers.</li>
          <li>No interference with ads/SDKs; no reverse engineering.</li>
        </ul>

        <h4>Disclaimer & Limitation of Liability</h4>
        <p>Provided &quot;as is.&quot; To the fullest extent permitted by law, no liability for indirect or consequential losses.</p>

        <h4>Termination & Governing Law</h4>
        <p>We may suspend or terminate access at any time. Governed by England & Wales law; exclusive courts of England & Wales.</p>
      </>
    ),
  },

  "bloom": {
    subtitle: "Sobriety & recovery companion with virtual pet",
    privacy: (
      <>
        <p><strong>Last Updated: 8 May 2026</strong></p>
        <p>
          Bloom is owned and operated by <strong>Andrew Blewett</strong>. Privacy is our core principle —
          your personal data never leaves your device.
        </p>

        <h4>Information We Collect</h4>
        <ul>
          <li><strong>Account Data:</strong> User ID and password hash (stored in Supabase).</li>
          <li><strong>Preferences:</strong> Pet choice (dog/cat) and theme preference.</li>
          <li><strong>Local Data:</strong> All journal entries, relapse history, stats, and sobriety data stay on your device only.</li>
        </ul>

        <h4>Local-First Privacy</h4>
        <p>
          Bloom is designed with privacy as the core principle. All personal data (journal, relapse history, stats)
          is stored locally on your device using AsyncStorage. We cannot access your journal entries or personal data.
        </p>

        <h4>Data We Never Collect</h4>
        <ul>
          <li>Real name, email, or phone number</li>
          <li>Location data</li>
          <li>Journal content or sobriety details</li>
          <li>Advertising identifiers</li>
        </ul>

        <h4>Your Choices</h4>
        <ul>
          <li>Export/backup your data anytime from the app</li>
          <li>Delete all local data by uninstalling the app</li>
          <li>Delete account data by emailing <a href="mailto:andy@theandysocial.website">andy@theandysocial.website</a></li>
        </ul>

        <h4>Children</h4>
        <p>Bloom is intended for users aged 13+.</p>
      </>
    ),
    terms: (
      <>
        <p><strong>Last Updated: 8 May 2026</strong></p>
        <p>
          These Terms apply to Bloom (&quot;the App&quot;). By using the App, you agree to these Terms.
        </p>

        <h4>Eligibility</h4>
        <p>You must be 13+. Under-18s require guardian consent.</p>

        <h4>License</h4>
        <p>Personal, non-transferable license. All rights belong to Andrew Blewett.</p>

        <h4>Health Disclaimer</h4>
        <p>Bloom is a companion tool, not medical treatment. For addiction support, consult healthcare professionals.</p>

        <h4>User Data</h4>
        <p>You are responsible for backing up your local data. We cannot recover lost local data.</p>

        <h4>Governing Law</h4>
        <p>England & Wales law applies.</p>
      </>
    ),
  },

  "dreamie": {
    subtitle: "Animal Crossing villager trading platform",
    privacy: (
      <>
        <p><strong>Last Updated: 8 May 2026</strong></p>
        <p>
          Dreamie is owned and operated by <strong>Andrew Blewett</strong>.
        </p>

        <h4>Information We Collect</h4>
        <ul>
          <li><strong>Account:</strong> Email, username, island name, in-game name</li>
          <li><strong>Trade Data:</strong> Villager requests, queue positions, trade history</li>
          <li><strong>Communication:</strong> Messages between traders</li>
        </ul>

        <h4>How We Use Data</h4>
        <ul>
          <li>Match traders and manage queues</li>
          <li>Send trade notifications</li>
          <li>Moderate the platform</li>
        </ul>

        <h4>Data Sharing</h4>
        <p>We only share data necessary for trades (e.g., Dodo codes with your trade partner). We never sell data.</p>

        <h4>Your Choices</h4>
        <ul>
          <li>Delete your account and data anytime</li>
          <li>Opt out of non-essential notifications</li>
        </ul>
      </>
    ),
    terms: (
      <>
        <p><strong>Last Updated: 8 May 2026</strong></p>
        <p>Terms for using Dreamie trading platform.</p>

        <h4>Eligibility</h4>
        <p>You must be 13+ to use Dreamie.</p>

        <h4>Trading Rules</h4>
        <ul>
          <li>Be respectful to other traders</li>
          <li>Honor your trade commitments</li>
          <li>No scamming or exploiting</li>
        </ul>

        <h4>Content</h4>
        <p>Keep content family-friendly (Animal Crossing is rated E for Everyone).</p>
      </>
    ),
  },

  "void-musician": {
    subtitle: "Music creation & exploration (Coming Soon)",
    privacy: (
      <>
        <p><strong>Last Updated: 8 May 2026</strong></p>
        <p>
          Void Musician is owned by <strong>Andrew Blewett</strong>. App not yet released — policy subject to change.
        </p>

        <h4>Planned Data Collection</h4>
        <ul>
          <li>Account data (username, email)</li>
          <li>Music creations (stored locally and optionally synced)</li>
          <li>Usage analytics to improve features</li>
        </ul>

        <h4>Preview Disclaimer</h4>
        <p>This app is in development. Privacy policy will be finalized before release.</p>
      </>
    ),
    terms: (
      <>
        <p><strong>Last Updated: 8 May 2026</strong></p>
        <p>Terms for Void Musician (coming soon).</p>
        <p>Full terms will be published before app release.</p>
      </>
    ),
  },

  "void-survival": {
    subtitle: "2D auto-battler survival game (Beta)",
    privacy: (
      <>
        <p><strong>Last Updated: 8 May 2026</strong></p>
        <p>
          Void Survival is owned and operated by <strong>Andrew Blewett</strong>. Currently in beta.
        </p>

        <h4>Information We Collect</h4>
        <ul>
          <li><strong>Gameplay Data:</strong> High scores, progression, settings</li>
          <li><strong>Crash Logs:</strong> To fix bugs and improve stability</li>
          <li><strong>Device Info:</strong> Basic info for optimization</li>
        </ul>

        <h4>Beta Disclaimer</h4>
        <p>This is a beta release. Data may be reset during development. Features and policies may change.</p>

        <h4>Your Choices</h4>
        <p>Email <a href="mailto:andy@theandysocial.website">andy@theandysocial.website</a> to request data deletion.</p>

        <h4>Children</h4>
        <p>Intended for players 13+.</p>
      </>
    ),
    terms: (
      <>
        <p><strong>Last Updated: 8 May 2026</strong></p>
        <p>Terms for Void Survival beta.</p>

        <h4>Beta Terms</h4>
        <ul>
          <li>This is a pre-release version</li>
          <li>Progress may be reset</li>
          <li>Bugs and crashes are expected</li>
          <li>Your feedback helps improve the game</li>
        </ul>

        <h4>Governing Law</h4>
        <p>England & Wales law applies.</p>
      </>
    ),
  },

  "game-void-2": {
    subtitle: "Sequel to Game Void (Coming Soon)",
    privacy: (
      <>
        <p><strong>Last Updated: 8 May 2026</strong></p>
        <p>
          Game Void 2 is owned by <strong>Andrew Blewett</strong>. App not yet released.
        </p>

        <h4>Planned Data Collection</h4>
        <ul>
          <li>Account data (username, email)</li>
          <li>Game progress and achievements</li>
          <li>Multiplayer match data</li>
          <li>Analytics to improve gameplay</li>
        </ul>

        <h4>Coming Soon Disclaimer</h4>
        <p>This app is in development. Privacy policy will be finalized before release.</p>
      </>
    ),
    terms: (
      <>
        <p><strong>Last Updated: 8 May 2026</strong></p>
        <p>Terms for Game Void 2 (coming soon).</p>
        <p>Full terms will be published before app release.</p>
      </>
    ),
  },
  "football-life": {
    subtitle: "Football career simulator",
    privacy: (
      <>
        <p><strong>Last Updated: June 2026</strong></p>
        <p>
          Void Baller is owned and operated by <strong>Andrew Blewett</strong>.  
          This app is a football career simulation where you manage your rise from academy prospect to world-class superstar.
        </p>

        <h4>Information We Collect</h4>
        <ul>
          <li>
            <strong>Account Information</strong>  
            (username, email address, hashed password).  
            Stored securely in Supabase.
          </li>

          <li>
            <strong>Game Progress</strong>  
            (player profile, skills, career data, match history, achievements, trophies).  
            Saved to your account and synced across devices.
          </li>

          <li>
            <strong>Usage Data</strong>  
            (session duration, feature usage, in-game actions).  
            Used for game improvement and balancing.
          </li>

          <li>
            <strong>Technical Data</strong>  
            (device type, OS version, crash logs).  
            Used for stability and support.
          </li>
        </ul>

        <h4>Data Sharing</h4>
        <p>
          We do not sell your data. We use Supabase for data storage (EU-hosted).  
          Apple/Google are used for app distribution and in-app purchases under their own privacy policies.
        </p>

        <h4>Your Rights</h4>
        <p>
          You have the right to access, correct, or delete your data.  
          To delete your account and all associated data, email <a href="mailto:andy@theandysocial.website">andy@theandysocial.website</a>.
        </p>

        <h4>Contact</h4>
        <p>
          Email: <a href="mailto:andy@theandysocial.website">andy@theandysocial.website</a><br />
          Post: Andrew Blewett, 101 High Trees Close, Redditch, Worcestershire, B98 7XL, United Kingdom
        </p>
      </>
    ),
    terms: (
      <>
        <p><strong>Last Updated: June 2026</strong></p>
        <p>
          By downloading or using Void Baller, you agree to these terms.
        </p>

        <h4>Description</h4>
        <p>
          Void Baller is a football career simulation game where you create and manage a player's journey from academy prospect to world-class superstar. Features include creating and customising your player with position (GK, LB, CB, RB, CDM, CM, CAM, LW, RW, ST), training 8 skill attributes (shooting, passing, dribbling, defending, physical, pace, vision, heading) through 8 training drills, playing matches across multiple leagues, signing contracts (youth/standard/long-term/elite), building reputation through social media (Instagram, Twitter/X, TikTok, YouTube), securing endorsement deals (Nike, Adidas, Puma, Under Armour, New Balance), earning international caps, and winning trophies (World Cup, Champions League, Ballon d'Or, Golden Boot).
        </p>

        <h4>Eligibility</h4>
        <p>
          You must be at least 12 years old to use this app.
        </p>

        <h4>Acceptable Use</h4>
        <p>
          You agree not to exploit bugs, use automated tools, reverse-engineer the app, create multiple accounts for abuse, or interfere with servers.
        </p>

        <h4>Virtual Content</h4>
        <p>
          All in-game items, currencies, and progress are virtual with no real-world monetary value. We may modify or remove virtual content at any time.
        </p>

        <h4>Intellectual Property</h4>
        <p>
          All app content is owned by Andrew Blewett and protected by copyright. You may not copy or distribute without permission.
        </p>

        <h4>Termination</h4>
        <p>
          We may suspend or terminate accounts that breach these terms. You may delete your account at any time.
        </p>

        <h4>Contact</h4>
        <p>
          Email: <a href="mailto:andy@theandysocial.website">andy@theandysocial.website</a>
        </p>
      </>
    ),
  },
};

// -------------------- ALL APPS --------------------
const ALL_APPS = [
  { id: "fit-void",      title: "Fit Void" },
  { id: "zen-void",      title: "Zen Void" },
  { id: "bloom",         title: "Bloom" },
  { id: "tap-tap-three", title: "Tap Tap Three" },
  { id: "game-void",     title: "Game Void" },
  { id: "social-void",   title: "Social Void" },
  { id: "void-survival", title: "Void Survival" },
  { id: "dreamie",       title: "Dreamie" },
  { id: "void-musician", title: "Void Musician" },
  { id: "game-void-2",   title: "Game Void 2" },
  { id: "football-life", title: "Void Baller" },
];

// -------------------- COMPONENT --------------------
export default function Policies() {
  const [openId, setOpenId] = useState(null);

  return (
    <Layout>
      <div className="policies-root">

        {/* Header */}
        <div className="page-header">
          <p className="eyebrow">andysocial</p>
          <h1 className="page-title">Policies</h1>
          <p className="page-desc">Privacy policies and terms of service for every app. Tap an app to expand.</p>
        </div>

        {/* App grid */}
        <div className="app-grid">
          {ALL_APPS.map(({ id, title }) => (
            <PolicyTile
              key={id}
              appId={id}
              title={title}
              subtitle={content[id].subtitle}
              isOpen={openId === id}
              onToggle={() => setOpenId(openId === id ? null : id)}
              privacy={content[id].privacy}
              terms={content[id].terms}
            />
          ))}
        </div>

        {/* Delete account */}
        <section className="delete-section">
          <div className="delete-inner">
            <div className="delete-left">
              <p className="delete-label">Account Deletion</p>
              <h2 className="delete-title">Delete Your Account</h2>
              <p className="delete-desc">
                To permanently delete your account and all associated data, email us directly.
                Include your <strong>User ID</strong> (shown in-app) so we can verify ownership.
              </p>
              <div className="delete-steps">
                <div className="delete-step">
                  <span className="step-num">1</span>
                  <span>Email <a href="mailto:andy@theandysocial.website" className="gold-link">andy@theandysocial.website</a> with your User ID</span>
                </div>
                <div className="delete-step">
                  <span className="step-num">2</span>
                  <span>We may ask a quick question to confirm ownership</span>
                </div>
                <div className="delete-step">
                  <span className="step-num">3</span>
                  <span>Your account and data are permanently removed — this cannot be undone</span>
                </div>
              </div>
            </div>
            <a href="mailto:andy@theandysocial.website" className="delete-cta">
              Request Deletion →
            </a>
          </div>
        </section>

      </div>

      <style jsx>{`
        .policies-root {
          max-width: 1100px;
          margin: 0 auto;
          padding: 48px 24px 80px;
        }
        .page-header { margin-bottom: 48px; }
        .eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 0.25em;
          text-transform: uppercase; color: rgba(251,191,36,0.5); margin: 0 0 12px;
        }
        .page-title {
          font-size: clamp(36px, 6vw, 56px); font-weight: 900;
          letter-spacing: -2px; line-height: 1; margin: 0 0 14px; color: #fff;
        }
        .page-desc { font-size: 16px; color: rgba(255,255,255,0.35); margin: 0; }

        .app-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 12px;
          margin-bottom: 56px;
        }

        .delete-section {
          border: 1px solid rgba(245,158,11,0.15);
          background: rgba(245,158,11,0.03);
          border-radius: 18px;
          padding: 36px;
        }
        .delete-inner {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .delete-left { flex: 1; min-width: 260px; }
        .delete-label {
          font-size: 10px; font-weight: 800; letter-spacing: 0.2em;
          text-transform: uppercase; color: rgba(245,158,11,0.5); margin: 0 0 10px;
        }
        .delete-title {
          font-size: 26px; font-weight: 900; letter-spacing: -0.5px;
          margin: 0 0 12px; color: #fff;
        }
        .delete-desc {
          font-size: 14px; color: rgba(255,255,255,0.4); line-height: 1.7; margin: 0 0 20px;
        }
        .delete-desc strong { color: rgba(255,255,255,0.7); }
        .delete-steps { display: flex; flex-direction: column; gap: 10px; }
        .delete-step {
          display: flex; align-items: flex-start; gap: 12px;
          font-size: 13px; color: rgba(255,255,255,0.45); line-height: 1.5;
        }
        .step-num {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(245,158,11,0.12); border: 1px solid rgba(245,158,11,0.25);
          color: #fbbf24; font-size: 11px; font-weight: 800;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .gold-link { color: #fbbf24; text-decoration: none; }
        .gold-link:hover { color: #fde68a; }
        .delete-cta {
          display: inline-flex; align-items: center; padding: 12px 24px;
          background: linear-gradient(135deg, #b45309, #f59e0b);
          color: #fff; text-decoration: none; border-radius: 10px;
          font-size: 14px; font-weight: 700;
          box-shadow: 0 3px 16px rgba(245,158,11,0.3);
          white-space: nowrap; flex-shrink: 0;
        }
        .delete-cta:hover { opacity: 0.9; }
      `}</style>
    </Layout>
  );
}

function PolicyTile({ appId, title, subtitle, isOpen, onToggle, privacy, terms }) {
  const [tab, setTab] = useState("privacy");

  function handleToggle() {
    onToggle();
    setTab("privacy");
  }

  return (
    <div className="tile">
      <button className="tile-head" onClick={handleToggle} aria-expanded={isOpen}>
        <div className="head-left">
          <div className="dot" />
          <div>
            <div className="tile-title">{title}</div>
            <div className="tile-sub">{subtitle}</div>
          </div>
        </div>
        <span className="chev">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="tile-body">
          <div className="tabs">
            <button className={`tab ${tab === "privacy" ? "active" : ""}`} onClick={() => setTab("privacy")}>Privacy Policy</button>
            <button className={`tab ${tab === "terms" ? "active" : ""}`} onClick={() => setTab("terms")}>Terms of Service</button>
          </div>
          <div className="prose">
            {tab === "privacy" ? privacy : terms}
          </div>
        </div>
      )}

      <style jsx>{`
        .tile {
          border-radius: 14px; overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.02);
        }
        .tile-head {
          width: 100%; background: none; border: none;
          padding: 16px 18px; display: flex; align-items: center;
          justify-content: space-between; gap: 12px; cursor: pointer;
          color: inherit; text-align: left; transition: background 0.15s;
        }
        .tile-head:hover { background: rgba(245,158,11,0.05); }
        .head-left { display: flex; align-items: center; gap: 12px; min-width: 0; }
        .dot {
          width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
          background: radial-gradient(circle at 30% 30%, #fbbf24, #d97706);
          box-shadow: 0 0 8px rgba(245,158,11,0.5);
        }
        .tile-title { font-size: 14px; font-weight: 700; color: #f1f5f9; }
        .tile-sub { font-size: 12px; color: rgba(255,255,255,0.3); margin-top: 2px; }
        .chev { font-size: 11px; color: rgba(255,255,255,0.3); flex-shrink: 0; }
        .tile-body { border-top: 1px solid rgba(255,255,255,0.06); }
        .tabs {
          display: flex; border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .tab {
          flex: 1; padding: 10px 16px; background: none; border: none;
          font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.3);
          cursor: pointer; text-transform: uppercase; letter-spacing: 0.08em;
          transition: all 0.15s; border-bottom: 2px solid transparent;
        }
        .tab.active {
          color: #fbbf24;
          border-bottom-color: #fbbf24;
          background: rgba(245,158,11,0.04);
        }
        .tab:hover:not(.active) { color: rgba(255,255,255,0.55); }
        .prose {
          padding: 18px; font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.7;
        }
        .prose :global(p) { margin: 0 0 10px; }
        .prose :global(p:last-child) { margin-bottom: 0; }
        .prose :global(h4) { font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: rgba(255,255,255,0.7); margin: 16px 0 6px; }
        .prose :global(ul) { margin: 0 0 10px; padding-left: 16px; }
        .prose :global(li) { margin-bottom: 4px; }
        .prose :global(strong) { color: rgba(255,255,255,0.8); font-weight: 700; }
        .prose :global(a) { color: #fbbf24; text-decoration: none; }
        .prose :global(a:hover) { color: #fde68a; }
      `}</style>
    </div>
  );
}
