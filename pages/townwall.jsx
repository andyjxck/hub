// pages/townwall.jsx
import React, { useState } from "react";
import Layout from "../components/Layout";

export default function TownWall() {
  const [openModal, setOpenModal] = useState(null);

  return (
    <Layout>
      {/* HERO */}
   <section className="hero">
  <img
    src="https://ucarecdn.com/d8da2fdb-f7f4-4dcd-94fe-531c7a08fd51/-/format/auto/"
    alt="Town Wall logo"
    className="townwall-logo"
  />
  <h1 className="title">Town Wall</h1>
  <p className="subtitle">
    A community platform built around real towns, zones, and shared spaces.
  </p>
</section>


      {/* ABOUT */}
      <section className="card">
        <h2>What Town Wall Is</h2>
        <p>
          Town Wall is a community-driven platform designed to connect people
          through their local area, while still allowing global discovery,
          discussion, and shared spaces.
        </p>
        <p>
          It supports local towns and neighbourhood zones, global feeds,
          popularity-based sorting, follower systems, and open discussion —
          all moderated to keep communities usable and safe.
        </p>
      </section>

      {/* FEATURES */}
      <section className="card">
        <h2>How Town Wall Works</h2>
        <ul>
          <li>Towns and neighbourhood zones</li>
          <li>Manual switching between towns and zones</li>
          <li>Local feeds and a global feed</li>
          <li>Sorting by newest or most popular</li>
          <li>Follower counts and engagement</li>
          <li>Global chat</li>
          <li>Automated and human moderation</li>
        </ul>
      </section>

      {/* LEGAL BUTTONS */}
      <section className="legal">
        <button onClick={() => setOpenModal("guidelines")}>
          Community Guidelines
        </button>
        <button onClick={() => setOpenModal("privacy")}>
          Privacy Policy
        </button>
      </section>

      {/* MODALS */}
      {openModal && (
        <div className="modal-backdrop" onClick={() => setOpenModal(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {/* COMMUNITY GUIDELINES */}
            {openModal === "guidelines" && (
              <>
                <h3>Community Guidelines</h3>

                <h4>The Rules of the Wall</h4>
                <p>
                  Town Wall is built on the idea that local communities are
                  stronger when people talk to each other. It exists to
                  celebrate local talent, support neighbourhood businesses,
                  and keep people informed.
                </p>

                <h4>Be Neighbourly & Kind</h4>
                <p>
                  Treat others with the same respect you would give someone in
                  person. There is zero tolerance for bullying, harassment,
                  hate speech, or discrimination.
                </p>

                <h4>Quality Over Quantity</h4>
                <p>
                  Posts should add value. Context, useful information, and
                  genuine discussion are encouraged. Low-effort or purely
                  inflammatory posts may be removed.
                </p>

                <h4>Keep It Relevant</h4>
                <p>
                  Town Wall works best when content is relevant to towns,
                  zones, or the wider community. Global topics are allowed,
                  but relevance still matters.
                </p>

                <h4>Respect Privacy</h4>
                <p>
                  Do not post private contact details, addresses, or sensitive
                  personal information without explicit permission.
                </p>

                <h4>Promotions & Hustles</h4>
                <p>
                  Local businesses and talent are welcome. Spammy, repetitive,
                  or automated advertising will be removed.
                </p>

                <h4>No Misinformation</h4>
                <p>
                  Deliberately misleading or false information damages trust.
                  Content flagged as significantly inaccurate may be removed.
                </p>

                <h4>Moderation</h4>
                <p>
                  Automated systems and moderators work together to keep the
                  Wall usable. Content may be approved, held, or removed.
                  Decisions can be appealed.
                </p>

                <p className="footer">
                  Together, let’s keep Town Wall useful, safe, and human.
                </p>
              </>
            )}

            {/* PRIVACY POLICY */}
            {openModal === "privacy" && (
              <>
                <h3>Privacy Policy</h3>

                <h4>1. Overview</h4>
                <p>
                  This policy explains how Town Wall handles information. By
                  using the service, you agree to the terms below. The platform
                  prioritises pseudonymity and data minimisation.
                </p>

                <h4>2. Data We Do NOT Collect</h4>
                <ul>
                  <li>Legal names</li>
                  <li>Email addresses</li>
                  <li>Phone numbers</li>
                  <li>Physical addresses</li>
                  <li>Government IDs</li>
                  <li>Precise GPS location data</li>
                </ul>

                <h4>3. Required Data</h4>
                <p>
                  The only required data is a username and a securely hashed
                  password. This is used solely for authentication.
                </p>

                <h4>4. Public Content</h4>
                <p>
                  Posts, comments, images, and profile metadata are public by
                  design. Anonymous posting removes public attribution but
                  does not change how data is stored.
                </p>

                <h4>5. Third-Party Services</h4>
                <p>
                  Infrastructure and payments are handled by trusted providers
                  such as Supabase, Stripe, and RevenueCat. Payment details are
                  never stored directly by Town Wall.
                </p>

                <h4>6. Security & Recovery</h4>
                <p>
                  Passwords are cryptographically hashed. Forgotten credentials
                  cannot be recovered without recovery codes. Loss of access
                  may be permanent.
                </p>

                <h4>7. Service Provided As-Is</h4>
                <p>
                  The service is provided “as is” without guarantees of
                  availability or reliability.
                </p>

                <h4>8. Limitation of Liability</h4>
                <p>
                  To the fullest extent permitted by law, the operator is not
                  liable for indirect, incidental, or consequential damages.
                </p>

                <h4>9. Changes</h4>
                <p>
                  This policy may be updated. Continued use means acceptance of
                  the revised terms.
                </p>

                <p className="footer">
                  Last updated: December 27, 2025
                </p>
              </>
            )}

            <button className="close" onClick={() => setOpenModal(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style jsx>{`
        .hero {
          text-align: center;
          padding: 40px 20px;
        }

        .townwall-logo {
          width: 100px;
          height: 100px;
          border-radius: 20px;
          margin-bottom: 20px;
          box-shadow: 0 8px 30px rgba(251, 146, 60, 0.3);
        }

        .title {
          font-size: clamp(32px, 6vw, 42px);
          font-weight: 800;
          background: linear-gradient(135deg, #fb923c, #f97316);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 12px;
        }

        .subtitle {
          color: #9aa7bf;
          font-size: 18px;
          max-width: 500px;
          margin: 0 auto;
        }

        .card {
          margin-bottom: 24px;
        }

        .card ul {
          padding-left: 20px;
          display: grid;
          gap: 10px;
          color: #94a3b8;
        }

        .legal {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        .legal button {
          padding: 12px 20px;
          border-radius: 12px;
          border: 1px solid rgba(251, 146, 60, 0.3);
          background: linear-gradient(135deg, rgba(251, 146, 60, 0.9), rgba(249, 115, 22, 0.9));
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .legal button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(251, 146, 60, 0.4);
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal {
          max-height: 80vh;
          overflow-y: auto;
          width: 100%;
          max-width: 640px;
          background: rgba(10,10,22,0.95);
          border-radius: 20px;
          padding: 28px;
          border: 1px solid rgba(255,255,255,0.15);
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        .modal h3 {
          margin: 0 0 20px;
          font-weight: 700;
          font-size: 24px;
          color: #f1f5f9;
        }

        .modal h4 {
          margin: 20px 0 10px;
          color: #fb923c;
          font-size: 16px;
        }

        .modal p {
          color: #94a3b8;
          line-height: 1.7;
        }

        .modal ul {
          padding-left: 20px;
          color: #94a3b8;
        }

        .modal li {
          margin-bottom: 8px;
        }

        .footer {
          margin-top: 20px;
          font-style: italic;
          color: #64748b;
        }

        .close {
          margin-top: 24px;
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, rgba(124,58,237,0.9), rgba(139,92,246,0.9));
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .close:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(124,58,237,0.4);
        }
      `}</style>
    </Layout>
  );
}
