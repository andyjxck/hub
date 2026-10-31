import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="wrap">
      <main>{children}</main>

      <footer className="footer">
        <Link href="/policies">Policies</Link>
        <span className="divider">·</span>
        © {new Date().getFullYear()} an andysocial game
        <span className="divider">·</span>
        <Link href="/contact">Contact</Link>
      </footer>

      <style jsx>{`
        .wrap {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        main {
          flex: 1;
        }

        .footer {
          padding: 40px 20px;
          text-align: center;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .footer a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
        }

        .footer a:hover {
          color: white;
          text-decoration: underline;
        }

        .divider {
          color: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}
