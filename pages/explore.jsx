import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

// App data - same as index.jsx
const APPS = [
  {
    id: "fit-void",
    name: "Fit Void",
    tagline: "Lift. Eat. Track.",
    link: "",
    status: "coming-soon",
    emoji: "🏋️",
    color: "#a3e635",
    page: "/fit-void",
  },
  {
    id: "football-life",
    name: "Void Baller",
    tagline: "Rise. Play. Become a Legend.",
    status: "live",
    emoji: "⚽",
    color: "#fbbf24",
    page: "/football-life",
  },
  {
    id: "void-musician",
    name: "Void Musician",
    tagline: "Book. Release. Conquer.",
    link: "https://voidmusician.app",
    status: "in-development",
    emoji: "🎵",
    color: "#22d3ee",
  },
  {
    id: "game-void",
    name: "Game Void",
    tagline: "Play. Compete. Win.",
    link: "https://gamevoid.co.uk",
    status: "live",
    emoji: "🎮",
    color: "#f87171",
  },
  {
    id: "zen-void",
    name: "Zen Void",
    tagline: "Breathe. Reflect. Reset.",
    link: "https://zenvoid.app",
    status: "live",
    emoji: "�",
    color: "#a78bfa",
  },
  {
    id: "bloom",
    name: "Bloom",
    tagline: "Recover. Grow. Thrive.",
    status: "live",
    emoji: "🐕",
    color: "#34d399",
  },
  {
    id: "social-void",
    name: "Social Void",
    tagline: "Merge. Discover. Escape.",
    link: "https://socialvoid.net",
    status: "live",
    emoji: "🧩",
    color: "#60a5fa",
  },
  {
    id: "tap-tap-three",
    name: "Tap Tap Three",
    tagline: "Tap. Invest. Dominate.",
    link: "https://taptapthree.co.uk",
    status: "live",
    emoji: "�",
    color: "#fbbf24",
  },
  {
    id: "dreamie",
    name: "dreamie.store",
    tagline: "Browse. Trade. Collect.",
    link: "https://dreamie.store",
    status: "live",
    emoji: "�",
    color: "#f472b6",
  },
];

export default function ExplorePage() {
  return (
    <Layout>
      <div className="explore-page">
        <div className="explore-content">
          <h1 className="explore-title">Explore All Apps</h1>
          <p className="explore-subtitle">Discover the complete collection of digital experiences</p>
          
          <div className="apps-grid">
            {APPS.map((app) => (
              <Link 
                key={app.id} 
                href={app.page || app.link || "#"} 
                target={app.link && !app.page ? "_blank" : undefined}
                rel={app.link && !app.page ? "noopener noreferrer" : undefined}
                className="app-card"
                style={{ borderColor: app.color }}
              >
                <div className="app-card-header">
                  <span className="app-emoji">{app.emoji}</span>
                  <span className={`status-badge ${app.status}`}>
                    {app.status === "live" ? "Live" : app.status === "in-development" ? "In Dev" : "Coming Soon"}
                  </span>
                </div>
                <h3 className="app-card-name">{app.name}</h3>
                <p className="app-card-tagline" style={{ color: app.color }}>{app.tagline}</p>
                <div className="app-card-arrow" style={{ color: app.color }}>→</div>
              </Link>
            ))}
          </div>
        </div>

        <style jsx>{`
          .explore-page {
            min-height: 100vh;
            background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%);
            padding: 60px 20px;
          }
          .explore-content {
            max-width: 1200px;
            margin: 0 auto;
          }
          .explore-title {
            font-size: 64px;
            font-weight: 800;
            color: white;
            text-align: center;
            margin: 0 0 16px 0;
            background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .explore-subtitle {
            font-size: 20px;
            color: rgba(255, 255, 255, 0.7);
            text-align: center;
            margin: 0 0 60px 0;
          }
          .apps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 24px;
          }
          .app-card {
            background: rgba(255, 255, 255, 0.05);
            border: 2px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 24px;
            text-decoration: none;
            transition: all 0.2s ease;
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .app-card:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-4px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }
          .app-card-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .app-emoji {
            font-size: 40px;
          }
          .status-badge {
            padding: 6px 12px;
            border-radius: 12px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .status-badge.live {
            background: rgba(34, 197, 94, 0.2);
            color: #4ade80;
          }
          .status-badge.in-development {
            background: rgba(251, 191, 36, 0.2);
            color: #fbbf24;
          }
          .status-badge.coming-soon {
            background: rgba(148, 163, 184, 0.2);
            color: #94a3b8;
          }
          .app-card-name {
            font-size: 24px;
            font-weight: 700;
            color: white;
            margin: 0;
          }
          .app-card-tagline {
            font-size: 16px;
            font-weight: 500;
            margin: 0;
            opacity: 0.8;
          }
          .app-card-arrow {
            position: absolute;
            bottom: 24px;
            right: 24px;
            font-size: 24px;
            font-weight: 700;
            opacity: 0;
            transform: translateX(-10px);
            transition: all 0.2s ease;
          }
          .app-card:hover .app-card-arrow {
            opacity: 1;
            transform: translateX(0);
          }
          @media (max-width: 768px) {
            .explore-title {
              font-size: 48px;
            }
            .explore-subtitle {
              font-size: 18px;
            }
            .apps-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
}
