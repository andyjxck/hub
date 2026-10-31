import React, { useState, useEffect, useRef } from "react";

const STARS = [
  [7,10],[13,6],[19,14],[24,5],[30,12],[36,8],[41,15],[46,3],[51,11],
  [57,7],[62,4],[68,13],[73,6],[78,9],[83,5],[88,12],[92,8],
  [10,22],[17,25],[25,21],[33,27],[40,23],[48,26],[55,24],[63,22],[70,29],[77,26],[85,21],[92,28],
  [8,36],[20,39],[34,37],[50,41],[66,38],[80,36],[92,40],
];

// Accent colors matching theme.js gameAccent1-6
const ACCENTS = ["#A78BFA","#34D399","#FBBF24","#F87171","#22D3EE","#F472B6"];

const GAMES = [
  { name: "Bingo",        accent: "#A78BFA" },
  { name: "Chess",        accent: "#34D399" },
  { name: "Fruit Fuse",  accent: "#FBBF24" },
  { name: "G Rummy",     accent: "#F87171" },
  { name: "Void Sums",   accent: "#22D3EE" },
  { name: "Void Jump",   accent: "#F472B6" },
  { name: "Void Ball",   accent: "#A78BFA" },
  { name: "Void Peaks",  accent: "#34D399" },
];

const FEATURED = [
  { name: "Sudoku",        desc: "Fill the grid. Every row, column & box.",        accent1: "#A78BFA", accent2: "#6D28D9", genre: "Puzzle" },
  { name: "2048",          desc: "Slide and merge. Can you reach 2048?",           accent1: "#FBBF24", accent2: "#D97706", genre: "Strategy" },
  { name: "Snake",         desc: "Grow longer. Don't hit the walls.",              accent1: "#34D399", accent2: "#059669", genre: "Action" },
  { name: "Word Search",   desc: "Find every hidden word before time runs out.",   accent1: "#22D3EE", accent2: "#0369A1", genre: "Word" },
  { name: "Void Invaders", desc: "Defend the void. Don't let them through.",       accent1: "#F87171", accent2: "#B91C1C", genre: "Arcade" },
  { name: "Paddle Battle", desc: "Classic head-to-head. One winner. Go.",          accent1: "#F472B6", accent2: "#BE185D", genre: "Multiplayer" },
];

function getAccent(name) {
  const h = name.split("").reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0);
  return ACCENTS[Math.abs(h) % 6];
}

export default function GameVoidVisual() {
  const [featIdx, setFeatIdx] = useState(0);
  const [shimmerX, setShimmerX] = useState(-100);
  const shimmerRef = useRef(null);

  // Auto-rotate featured carousel every 4s
  useEffect(() => {
    const t = setInterval(() => setFeatIdx(i => (i + 1) % FEATURED.length), 4000);
    return () => clearInterval(t);
  }, []);

  // Shimmer animation
  useEffect(() => {
    let frame;
    let start = null;
    const DURATION = 2000;

    const animate = (ts) => {
      if (!start) start = ts;
      const p = ((ts - start) % DURATION) / DURATION;
      setShimmerX(-100 + p * 300);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const feat = FEATURED[featIdx];

  return (
    <div style={{
      width: "100%",
      borderRadius: "20px",
      overflow: "hidden",
      position: "relative",
      background: "linear-gradient(180deg, #05070D 0%, #0A1122 40%, #101B33 70%, #0C1020 100%)",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    }}>
      {/* ─── Night Sky Background ─── */}
      {/* Milky Way diagonal band */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg, rgba(160,190,255,0.07) 0%, transparent 55%)", pointerEvents: "none" }} />

      {/* Stars */}
      {STARS.map(([nx, ny], i) => (
        <div key={i} style={{
          position: "absolute",
          left: `${nx}%`,
          top: `${ny * 0.45}%`,
          width: i % 4 === 0 ? "3px" : "2px",
          height: i % 4 === 0 ? "3px" : "2px",
          borderRadius: "50%",
          background: "#EAF0FF",
          opacity: 0.45 + (i % 5) * 0.1,
          pointerEvents: "none",
        }} />
      ))}

      {/* Moon glow + body */}
      <div style={{ position: "absolute", top: "3%", right: "8%", width: "72px", height: "72px", borderRadius: "50%", background: "rgba(230,236,255,0.10)", boxShadow: "0 0 36px 18px rgba(220,230,255,0.10)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "3%", right: "8%", width: "72px", height: "72px", borderRadius: "50%", background: "linear-gradient(135deg, #F8FAFF 0%, #E0E8F8 100%)", boxShadow: "inset -6px -6px 14px rgba(0,0,0,0.12)", pointerEvents: "none", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "26%", left: "24%", width: "18%", height: "18%", borderRadius: "50%", background: "#D0D8EC" }} />
        <div style={{ position: "absolute", top: "46%", left: "56%", width: "12%", height: "12%", borderRadius: "50%", background: "#D0D8EC" }} />
        <div style={{ position: "absolute", top: "61%", left: "36%", width: "10%", height: "10%", borderRadius: "50%", background: "#D0D8EC" }} />
      </div>

      {/* Mountain silhouettes */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "18%", pointerEvents: "none" }}>
        <div style={{ position: "absolute", left: "-5%", right: "-5%", bottom: "44%", height: "80%", borderTopLeftRadius: "100%", borderTopRightRadius: "100%", background: "rgba(30,40,70,0.52)" }} />
        <div style={{ position: "absolute", left: "-3%", right: "-3%", bottom: "18%", height: "70%", borderTopLeftRadius: "90%", borderTopRightRadius: "90%", background: "rgba(20,28,52,0.68)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "55%", borderTopLeftRadius: "80%", borderTopRightRadius: "80%", background: "rgba(12,18,36,0.97)" }} />
      </div>

      {/* ─── Content ─── */}
      <div style={{ position: "relative", zIndex: 10, padding: "20px 16px 24px" }}>

        {/* ─── Featured Game Carousel ─── */}
        <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" }}>
            <span style={{ fontSize: "16px" }}>✨</span>
            <span style={{ fontSize: "15px", fontWeight: "700", color: "#F8FAFC" }}>Featured Game</span>
          </div>

          {/* Card */}
          <div style={{
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
            position: "relative",
          }}>
            <div style={{
              background: `linear-gradient(135deg, ${feat.accent1}55 0%, ${feat.accent2}55 100%)`,
              padding: "18px",
              minHeight: "140px",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Shimmer sweep */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.10) 50%, transparent 100%)`,
                transform: `translateX(${shimmerX}%)`,
                pointerEvents: "none",
                zIndex: 1,
              }} />

              {/* Genre tag — top right */}
              <div style={{ position: "absolute", top: "14px", right: "14px", zIndex: 2 }}>
                <div style={{
                  padding: "4px 10px",
                  borderRadius: "20px",
                  background: `${feat.accent1}35`,
                  border: `1px solid ${feat.accent1}50`,
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}>{feat.genre}</div>
              </div>

              {/* Game name + description */}
              <div style={{ zIndex: 2, position: "relative", maxWidth: "65%" }}>
                <div style={{ fontSize: "22px", fontWeight: "800", color: "#FFFFFF", marginBottom: "6px", lineHeight: 1.2 }}>{feat.name}</div>
                <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", lineHeight: 1.5, marginBottom: "14px" }}>{feat.desc}</div>
                {/* Trending badge */}
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "3px", padding: "3px 8px", borderRadius: "10px", background: `${feat.accent2}50`, fontSize: "11px", fontWeight: "600", color: feat.accent1 }}>
                    <span>⚡</span><span>Trending</span>
                  </div>
                </div>
              </div>

              {/* Play Now button */}
              <div style={{ position: "absolute", bottom: "16px", right: "14px", zIndex: 2 }}>
                <div style={{
                  padding: "9px 18px",
                  borderRadius: "16px",
                  background: `linear-gradient(135deg, ${feat.accent1} 0%, ${feat.accent2} 100%)`,
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  cursor: "pointer",
                }}>Play Now</div>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "12px" }}>
            {FEATURED.map((_, i) => (
              <div
                key={i}
                onClick={() => setFeatIdx(i)}
                style={{
                  height: "7px",
                  width: i === featIdx ? "22px" : "7px",
                  borderRadius: "4px",
                  background: i === featIdx ? FEATURED[featIdx].accent1 : "rgba(255,255,255,0.20)",
                  cursor: "pointer",
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* ─── All Games section ─── */}
        <div>
          <div style={{ fontSize: "12px", fontWeight: "500", color: "#CBD5E1", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "10px" }}>
            All Games (40+)
          </div>

          {/* 2-column game card grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            {GAMES.map((game) => {
              const accent = game.accent;
              return (
                <div key={game.name} style={{
                  height: "76px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  background: "rgba(148,163,184,0.05)",
                  border: "0.5px solid rgba(148,163,184,0.10)",
                  backdropFilter: "blur(8px)",
                  padding: "10px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                  {/* Top row: icon + star + chevron */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{
                      width: "26px", height: "26px", borderRadius: "7px",
                      background: `${accent}18`,
                      border: `0.5px solid ${accent}30`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "13px",
                    }}>🎮</div>
                    <div style={{ display: "flex", gap: "4px" }}>
                      <div style={{ width: "22px", height: "22px", borderRadius: "11px", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px" }}>★</div>
                      <div style={{ width: "22px", height: "22px", borderRadius: "11px", background: `${accent}20`, border: `0.5px solid ${accent}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", color: accent }}>›</div>
                    </div>
                  </div>

                  {/* Bottom: name + "Play" */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                    <div>
                      <div style={{ fontSize: "12px", fontWeight: "600", color: "#F8FAFC", marginBottom: "1px" }}>{game.name}</div>
                      <div style={{ fontSize: "10px", color: "#94A3B8" }}>Not Played Yet</div>
                    </div>
                    <div style={{ fontSize: "10px", fontWeight: "700", color: accent, textTransform: "uppercase", letterSpacing: "0.5px" }}>Play</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
