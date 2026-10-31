// pages/contact.jsx
import { useState } from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const CONTACT_EMAIL = "andy@theandysocial.website";

export default function Contact() {
  const [name, setName] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  function submit(e) {
    e.preventDefault();
    setStatus(null);

    if (!message.trim()) {
      setStatus({ type: "err", msg: "Please write a message." });
      return;
    }
    if (replyTo && !/^\S+@\S+\.\S+$/.test(replyTo)) {
      setStatus({ type: "err", msg: "Please enter a valid email address." });
      return;
    }

    const subjectLine = subject.trim() || (name.trim() ? `Message from ${name.trim()}` : "Message from andysocial.com");
    const body = [
      name.trim() ? `From: ${name.trim()}` : "",
      replyTo.trim() ? `Reply to: ${replyTo.trim()}` : "",
      "",
      message.trim(),
    ].filter(Boolean).join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;

    setName("");
    setReplyTo("");
    setSubject("");
    setMessage("");
    setStatus({ type: "ok", msg: "Your email client should open now with the message pre-filled. Hit send!" });
  }

  return (
    <Layout>
      <div className="contact-root">

        {/* Back nav */}
        <Link href="/" className="back-link">← All Projects</Link>

        {/* Header */}
        <div className="page-header">
          <p className="eyebrow">andysocial</p>
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-desc">Questions, feedback, bug reports, or just want to say hi — send me an email directly.</p>
        </div>

        <div className="two-col">
          {/* Left: form */}
          <div className="form-col">
            <div className="form-card">
              <p className="form-card-label">Direct Message</p>
              <form onSubmit={submit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name <span className="opt">(optional)</span></label>
                    <input id="name" className="input" placeholder="Your name" value={name} onChange={e => setName(e.target.value)} autoComplete="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Reply email <span className="opt">(optional)</span></label>
                    <input id="email" className="input" type="email" placeholder="you@example.com" value={replyTo} onChange={e => setReplyTo(e.target.value)} autoComplete="email" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject <span className="opt">(optional)</span></label>
                  <input id="subject" className="input" placeholder="What's it about?" value={subject} onChange={e => setSubject(e.target.value)} />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message <span className="req">*</span></label>
                  <textarea id="message" className="textarea" rows={6} placeholder="Write your message here..." value={message} onChange={e => setMessage(e.target.value)} required />
                </div>

                {status && (
                  <div className={`status-msg ${status.type}`}>{status.msg}</div>
                )}

                <div className="form-actions">
                  <button className="submit-btn" type="submit">Open Email Client →</button>
                  <button type="button" className="clear-btn" onClick={() => { setName(""); setReplyTo(""); setSubject(""); setMessage(""); setStatus(null); }}>Clear</button>
                </div>
              </form>
            </div>
          </div>

          {/* Right: info */}
          <div className="info-col">
            <div className="info-card">
              <p className="info-label">Email directly</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="email-link">{CONTACT_EMAIL}</a>
              <p className="info-note">Clicking "Open Email Client" above pre-fills your email app and sends directly to this address.</p>
            </div>

            <a href="https://www.instagram.com/anandysocialgame/" target="_blank" rel="noreferrer" className="social-card">
              <div className="social-icon ig"><IconInstagram /></div>
              <div className="social-info">
                <div className="social-name">Instagram</div>
                <div className="social-handle">@anandysocialgame</div>
              </div>
              <span className="arrow">→</span>
            </a>

            <a href="https://discord.gg/PmWMEH8RWJ" target="_blank" rel="noreferrer" className="social-card">
              <div className="social-icon dc"><IconDiscord /></div>
              <div className="social-info">
                <div className="social-name">Discord</div>
                <div className="social-handle">Join the community</div>
              </div>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-root {
          max-width: 960px;
          margin: 0 auto;
          padding: 40px 24px 80px;
        }
        .back-link {
          display: inline-block;
          font-size: 13px;
          color: rgba(251,191,36,0.5);
          text-decoration: none;
          margin-bottom: 40px;
          letter-spacing: 0.02em;
        }
        .page-header {
          margin-bottom: 48px;
        }
        .eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(251,191,36,0.5);
          margin: 0 0 12px;
        }
        .page-title {
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 1;
          margin: 0 0 16px;
          color: #fff;
        }
        .page-desc {
          font-size: 16px;
          color: rgba(255,255,255,0.35);
          margin: 0;
          max-width: 520px;
        }
        .two-col {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 24px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr; }
        }
        .form-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(245,158,11,0.1);
          border-radius: 16px;
          padding: 28px;
        }
        .form-card-label {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(245,158,11,0.5);
          margin: 0 0 20px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 520px) { .form-row { grid-template-columns: 1fr; } }
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        label {
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.5);
          letter-spacing: 0.03em;
        }
        .opt { color: rgba(255,255,255,0.25); font-weight: 400; }
        .req { color: #f59e0b; }
        .input, .textarea {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 9px;
          padding: 10px 14px;
          font-size: 14px;
          color: #f1f5f9;
          outline: none;
          transition: border-color 0.15s;
          font-family: inherit;
          resize: vertical;
        }
        .input:focus, .textarea:focus {
          border-color: rgba(245,158,11,0.4);
        }
        .input::placeholder, .textarea::placeholder {
          color: rgba(255,255,255,0.2);
        }
        .status-msg {
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
        }
        .status-msg.ok {
          background: rgba(245,158,11,0.08);
          border: 1px solid rgba(245,158,11,0.2);
          color: #fbbf24;
        }
        .status-msg.err {
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.2);
          color: #fca5a5;
        }
        .form-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .submit-btn {
          padding: 11px 24px;
          border-radius: 9px;
          background: linear-gradient(135deg, #b45309, #f59e0b);
          color: #fff;
          border: none;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 3px 16px rgba(245,158,11,0.3);
          transition: opacity 0.15s;
        }
        .submit-btn:hover { opacity: 0.9; }
        .clear-btn {
          padding: 11px 20px;
          border-radius: 9px;
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.4);
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.15s;
        }
        .clear-btn:hover { background: rgba(255,255,255,0.07); }
        .info-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .info-card {
          background: rgba(245,158,11,0.04);
          border: 1px solid rgba(245,158,11,0.12);
          border-radius: 14px;
          padding: 20px;
        }
        .info-label {
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: rgba(245,158,11,0.5);
          margin: 0 0 8px;
        }
        .email-link {
          display: block;
          font-size: 14px;
          font-weight: 700;
          color: #fbbf24;
          text-decoration: none;
          margin-bottom: 10px;
          word-break: break-all;
        }
        .email-link:hover { color: #fde68a; }
        .info-note {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          line-height: 1.6;
          margin: 0;
        }
        .social-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          text-decoration: none;
          color: inherit;
          transition: all 0.2s;
        }
        .social-card:hover {
          border-color: rgba(245,158,11,0.2);
          background: rgba(245,158,11,0.03);
          transform: translateY(-1px);
        }
        .social-card:hover .arrow { color: #fbbf24; }
        .social-icon {
          width: 40px; height: 40px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .social-icon.ig {
          background: rgba(225,48,108,0.12);
          border: 1px solid rgba(225,48,108,0.2);
          color: #e1306c;
        }
        .social-icon.dc {
          background: rgba(88,101,242,0.12);
          border: 1px solid rgba(88,101,242,0.2);
          color: #5865f2;
        }
        .social-info { flex: 1; }
        .social-name { font-size: 14px; font-weight: 600; color: #f1f5f9; }
        .social-handle { font-size: 12px; color: rgba(255,255,255,0.3); margin-top: 2px; }
        .arrow { color: rgba(255,255,255,0.2); font-size: 16px; transition: color 0.2s; }
      `}</style>
    </Layout>
  );
}

/* ── Minimal inline SVG icons (no extra deps) ─────────────────────── */
function IconInstagram(props) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}
function IconDiscord(props) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 71 55"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M60.104 4.552A58.13 58.13 0 0 0 46.852.8a40.67 40.67 0 0 0-1.9 3.99 53.02 53.02 0 0 0-15.9 0 40.76 40.76 0 0 0-1.9-3.99 58.14 58.14 0 0 0-13.25 3.75C4.478 17.275 1.33 29.584 2.516 41.69a58.63 58.63 0 0 0 17.896 9.014 42.48 42.48 0 0 0 3.84-6.205 37.48 37.48 0 0 1-5.982-2.85c.5-.37.99-.75 1.46-1.14 11.49 5.373 23.9 5.373 35.33 0 .48.39.96.77 1.46 1.14a37.52 37.52 0 0 1-5.99 2.86 42.42 42.42 0 0 0 3.84 6.2 58.63 58.63 0 0 0 17.9-9.014c1.27-12.747-2.07-25.057-9.666-37.14ZM23.725 36.675c-3.49 0-6.333-3.245-6.333-7.238 0-3.994 2.82-7.24 6.333-7.24 3.515 0 6.35 3.246 6.333 7.24 0 3.993-2.82 7.238-6.333 7.238Zm23.55 0c-3.49 0-6.333-3.245-6.333-7.238 0-3.994 2.82-7.24 6.333-7.24 3.515 0 6.35 3.246 6.333 7.24 0 3.993-2.818 7.238-6.333 7.238Z" />
    </svg>
  );
}
