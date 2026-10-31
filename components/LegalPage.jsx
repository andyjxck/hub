import React from "react";
import Link from "next/link";
import Layout from "./Layout";

export function LegalPage({ appName, appSlug, accentColor, backLabel, icon, children, lastUpdated = "June 2026" }) {
  return (
    <Layout>
      <div style={{ width: "100%", background: "#0a0a0f", minHeight: "100vh" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "80px 24px 120px" }}>

          <div style={{ marginBottom: "40px" }}>
            <Link href={`/${appSlug}`} style={{ color: accentColor, textDecoration: "none", fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em" }}>
              ← Back to {appName}
            </Link>
          </div>

          <div style={{ marginBottom: "48px", display: "flex", alignItems: "center", gap: "20px" }}>
            {icon}
            <div>
              <p style={{ margin: "0 0 4px", fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.14em" }}>
                {appName}
              </p>
              {children[0]}
              <p style={{ margin: "4px 0 0", fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>Last updated: {lastUpdated}</p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {children.slice(1)}
          </div>

          <div style={{ marginTop: "64px", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <Link href={`/${appSlug}`} style={{ color: accentColor, textDecoration: "none", fontSize: "13px" }}>← Back to {appName}</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function Section({ title, accentColor = "#60a5fa", children }) {
  return (
    <section>
      <h2 style={{ fontSize: "17px", fontWeight: 700, color: "#f8fafc", marginBottom: "14px", paddingBottom: "8px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        {title}
      </h2>
      <div style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.85 }}>
        {children}
      </div>
    </section>
  );
}

export function Bullets({ items, color = "#60a5fa" }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "10px 0 0", display: "flex", flexDirection: "column", gap: "7px" }}>
      {items.map((item, i) => (
        <li key={i} style={{ paddingLeft: "18px", position: "relative", fontSize: "14px", color: "#94a3b8", lineHeight: 1.7 }}>
          <span style={{ position: "absolute", left: 0, color }}>&bull;</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Table({ rows }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "12px", fontSize: "13px" }}>
      <thead>
        <tr>
          {rows[0].map((h, i) => (
            <th key={i} style={{ textAlign: "left", padding: "8px 12px", background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.5)", fontWeight: 700, fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.slice(1).map((row, i) => (
          <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            {row.map((cell, j) => (
              <td key={j} style={{ padding: "9px 12px", color: "#94a3b8", verticalAlign: "top" }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
