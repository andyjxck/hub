import Link from "next/link";

export default function AppLayout({ children }) {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", width: "100%" }}>
      <main style={{ flex: 1 }}>{children}</main>
      <footer style={{ padding: "40px 20px", textAlign: "center", fontSize: "14px", color: "rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
        <Link href="/policies" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Policies</Link>
        <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
        © {new Date().getFullYear()} an andysocial game
        <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>
        <Link href="/contact" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Contact</Link>
      </footer>
    </div>
  );
}
