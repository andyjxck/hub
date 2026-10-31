import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { Section, Bullets, Table } from "../../components/LegalPage";

const ACCENT = "#a3e635";
const APP = "Fit Void";
const SLUG = "fit-void";

export default function FitVoidPrivacy() {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#050a07", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${SLUG}`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>← Back to {APP}</Link>
          </div>
          <div style={{ marginBottom: "48px" }}>
            <img src="/app-assets/fit-void-icon.png" alt={APP} width={52} height={52} style={{ borderRadius: 12, marginBottom: 16 }} />
            <h1 style={{ fontSize: "34px", fontWeight: 800, color: "#f8fafc", margin: "0 0 6px" }}>Privacy Policy</h1>
            <p style={{ margin: 0, fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>{APP} · Last updated: 15 September 2025</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>

            <Section title="1. Data Controller">
              <p>The Data Controller for your personal data is:</p>
              <p style={{ marginTop: 10 }}><strong style={{ color: "#f8fafc" }}>Andrew Blewett</strong><br />
              101 High Trees Close, Redditch, Worcestershire, B98 7XL, United Kingdom<br />
              Email: <a href="mailto:andy@theandysocial.website" style={{ color: ACCENT }}>andy@theandysocial.website</a></p>
              <p style={{ marginTop: 10 }}>This policy applies to the {APP} app on iOS and Android and is governed by the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018 (DPA 2018).</p>
            </Section>

            <Section title="2. Special Category Data — Health & Fitness">
              <p>{APP} processes <strong style={{ color: "#f8fafc" }}>special category health data</strong> as defined by Article 9 UK GDPR, including:</p>
              <Bullets color={ACCENT} items={[
                "Workout logs, sets, reps and weights",
                "Body weight and body measurements",
                "Meal plans, food logs and nutritional intake",
                "Personal records and progression data",
              ]} />
              <p style={{ marginTop: 12 }}><strong style={{ color: "#f8fafc" }}>All of this data is stored exclusively on your local device in SQLite.</strong> It is never uploaded to our servers unless you explicitly link an account for cloud sync. The lawful basis for processing this special category data is your <strong style={{ color: "#f8fafc" }}>explicit consent</strong> under Article 9(2)(a) UK GDPR, given when you first set up the app. You may withdraw consent at any time by deleting your data or uninstalling the app.</p>
              <p style={{ marginTop: 12 }}>Apple Health data (weight, nutrition, workouts) is read from Apple Health only if you tap Connect. <strong style={{ color: "#f8fafc" }}>We never upload HealthKit data to our servers.</strong> It remains under Apple's control via iCloud.</p>
            </Section>

            <Section title="3. Data We Collect and Where It Is Stored">
              <Table rows={[
                ["Category", "Examples", "Storage", "Lawful Basis"],
                ["Workout & health data (special category)", "Sets, reps, weights, routines, PRs, body metrics, meal logs", "Local device only (SQLite) — never uploaded unless you link an account", "Explicit consent (Art. 9(2)(a))"],
                ["App preferences", "Theme, units, exercise customisations", "Local device only", "Consent (Art. 6(1)(a))"],
                ["Account data (optional)", "Sign-in code, friend code, username, display name, bio, profile photo", "Supabase (EU) — only if you link an account", "Contract (Art. 6(1)(b))"],
                ["Social data (optional)", "Posts, comments, friendships, trophies, blocked-user list", "Supabase (EU) — only if you link an account", "Contract (Art. 6(1)(b))"],
                ["Apple Health data", "Weight, nutrition, workouts", "Local device only — never uploaded", "Explicit consent (Art. 9(2)(a))"],
              ]} />
              <p style={{ marginTop: 12 }}>We do <strong style={{ color: "#f8fafc" }}>not</strong> collect analytics, advertising IDs, or crash telemetry.</p>
            </Section>

            <Section title="4. How We Use Your Data">
              <Bullets color={ACCENT} items={[
                "To run the app (contract): logging, analytics, meal plans, body tracking",
                "To provide social features (contract): feed, friends, posts, comments",
                "To sync your data across devices (consent): only if you link an account",
                "To meet legal obligations: tax records for Void Pro purchases",
              ]} />
            </Section>

            <Section title="5. Who Sees Your Data">
              <Bullets color={ACCENT} items={[
                "Your posts, profile (name, username, bio, avatar, PBs), and comments are visible to your friends only",
                "Your friend code is private — only people you share it with can add you",
                "Supabase (cloud host, EU region) stores linked-account data",
                "Apple Health data never leaves your device except through iCloud (controlled by Apple, not us)",
              ]} />
              <p style={{ marginTop: 12 }}>We do <strong style={{ color: "#f8fafc" }}>not</strong> sell your data. Ever.</p>
            </Section>

            <Section title="6. Data Retention">
              <Table rows={[
                ["Data type", "Retention period"],
                ["All local health and workout data", "Retained on device until you delete it or uninstall the app"],
                ["Optional account & social data", "Kept while your account exists; deleted within 30 days of account removal"],
                ["Backups", "Kept for 30 days, then purged"],
              ]} />
            </Section>

            <Section title="7. Your Rights Under UK GDPR">
              <Bullets color={ACCENT} items={[
                "Right of access — export your data any time from More &gt; Export",
                "Right to erasure — delete the app to wipe local data; unlink your account to remove cloud data",
                "Right to rectification — edit your profile, workouts, and logs in-app",
                "Right to data portability — CSV export of your full history",
                "Right to object — stop social features by unlinking your account",
                "Right to withdraw consent — withdraw consent for health data processing at any time",
              ]} />
              <p style={{ marginTop: 12 }}>To exercise any right, email <a href="mailto:andy@theandysocial.website" style={{ color: ACCENT }}>andy@theandysocial.website</a>. We will respond within one calendar month.</p>
            </Section>

            <Section title="8. Right to Lodge a Complaint">
              <p><strong style={{ color: "#f8fafc" }}>Information Commissioner's Office (ICO)</strong><br />
              Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: ACCENT }}>ico.org.uk</a><br />
              Helpline: 0303 123 1113</p>
            </Section>

            <Section title="9. Age Restrictions">
              <p>{APP} is not intended for children under <strong style={{ color: "#f8fafc" }}>16</strong>. If you believe a child under 16 has an account, contact <a href="mailto:andy@theandysocial.website" style={{ color: ACCENT }}>andy@theandysocial.website</a>.</p>
            </Section>

            <Section title="10. Data Security">
              <Bullets color={ACCENT} items={[
                "All health and workout data is stored only on your device and is never transmitted to our servers unless you link an account",
                "Optional account data is encrypted in transit using TLS",
                "Supabase enforces row-level security ensuring accounts can only access their own data",
                "No analytics, no advertising IDs, no crash telemetry",
              ]} />
            </Section>

            <Section title="11. Changes to This Policy">
              <p>We will update this policy when the app changes. The "last updated" date is at the top; material changes will be announced in-app.</p>
            </Section>

          </div>
          <div style={{ marginTop: "64px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: "20px" }}>
            <Link href={`/${SLUG}/terms`} style={{ color: ACCENT, textDecoration: "none", fontSize: "13px" }}>Terms & Conditions →</Link>
            <Link href={`/${SLUG}`} style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", fontSize: "13px" }}>← Back to {APP}</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
