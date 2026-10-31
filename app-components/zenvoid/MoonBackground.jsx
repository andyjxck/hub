import React, { useRef, useEffect, useMemo, useState } from "react";

// ── Theme data ────────────────────────────────────────────────────────────
const THEMES = {
  aurora: {
    baseColors: {
      1: ["#1a1a2e", "#2d1b69", "#4c1d95"],
      2: ["#1a1a2e", "#3730a3", "#5b21b6"],
      3: ["#1a1a2e", "#4338ca", "#6366f1"],
      4: ["#1a1a2e", "#4f46e5", "#7c3aed"],
      5: ["#1a1a2e", "#8b5cf6", "#a855f7"],
    },
    moonColors: {
      1: "#94a3b8", 2: "#a78bfa", 3: "#c4b5fd", 4: "#ddd6fe", 5: "#f3e8ff",
    },
    nebulaBase: ["rgba(167,139,250,", "rgba(139,92,246,"],
    nebulaScale: [0.6, 0.75, 1.0, 1.25, 1.5],
  },
};

// Simple star field for web
function buildStarField(width, height) {
  const stars = [];
  for (let i = 0; i < 30; i++) {
    stars.push({
      id: i,
      x: Math.random() * width,
      y: Math.random() * height * 0.6,
      size: 1 + Math.random() * 2,
      opacity: 0.3 + Math.random() * 0.5,
    });
  }
  return stars;
}

export default function MoonBackground({
  moodTrend = 3,
  theme = "aurora",
  children,
}) {
  const [moonPulse, setMoonPulse] = useState(1);
  const [moonGlow, setMoonGlow] = useState(0.3);
  const [nebula1Opacity, setNebula1Opacity] = useState(1);
  const [nebula2Opacity, setNebula2Opacity] = useState(1);

  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });

  const stars = useMemo(() => buildStarField(dimensions.width, dimensions.height), [dimensions]);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Simple CSS animations via useEffect
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setMoonPulse(prev => prev === 1 ? 1.15 : 1);
    }, 2000);
    return () => clearInterval(pulseInterval);
  }, []);

  useEffect(() => {
    const glowInterval = setInterval(() => {
      setMoonGlow(prev => prev === 0.3 ? 0.55 : 0.3);
    }, 2200);
    return () => clearInterval(glowInterval);
  }, []);

  useEffect(() => {
    const nebula1Interval = setInterval(() => {
      setNebula1Opacity(prev => prev === 0.7 ? 1.4 : 0.7);
    }, 7000);
    return () => clearInterval(nebula1Interval);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const nebula2Interval = setInterval(() => {
        setNebula2Opacity(prev => prev === 0.5 ? 1.3 : 0.5);
      }, 9000);
      return () => clearInterval(nebula2Interval);
    }, 2500);
  }, []);

  const selected = THEMES[theme] || THEMES.aurora;
  const moodIndex = Math.max(1, Math.min(5, Math.round(moodTrend)));
  const gradient = selected.baseColors[moodIndex];
  const moonColor = selected.moonColors[moodIndex];
  const moonSize = 80 + moodTrend * 10;
  const glowStrength = 0.3 + moodTrend * 0.12;
  const nebulaScale = selected.nebulaScale[moodIndex - 1];
  const [nb1, nb2] = selected.nebulaBase;

  const n1Color = `${nb1}${(0.09 * nebulaScale).toFixed(3)})`;
  const n2Color = `${nb2}${(0.07 * nebulaScale).toFixed(3)})`;

  return (
    <div style={{ flex: 1, position: 'relative', width: '100%', height: '100%', overflow: 'hidden', display: 'flex' }}>
      {/* Background gradient */}
      <div style={{
        position: 'absolute',
        left: 0, right: 0, top: 0, bottom: 0,
        zIndex: 0,
        background: `linear-gradient(135deg, ${gradient[0]}, ${gradient[1]}, ${gradient[2]})`,
      }} />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            position: 'absolute',
            left: star.x - star.size / 2,
            top: star.y - star.size / 2,
            width: star.size,
            height: star.size,
            backgroundColor: '#f8fafc',
            borderRadius: star.size / 2,
            opacity: star.opacity,
            zIndex: 1,
          }}
        />
      ))}

      {/* Nebula blobs */}
      <div style={{
        position: 'absolute',
        top: dimensions.height * 0.18, left: dimensions.width * 0.05,
        width: dimensions.width * 0.35, height: dimensions.height * 0.14,
        backgroundColor: n1Color,
        borderRadius: 60,
        opacity: nebula1Opacity,
        zIndex: 1,
        pointerEvents: 'none',
        transition: 'opacity 3.5s ease-in-out',
      }} />
      <div style={{
        position: 'absolute',
        top: dimensions.height * 0.38, right: dimensions.width * 0.08,
        width: dimensions.width * 0.28, height: dimensions.height * 0.12,
        backgroundColor: n2Color,
        borderRadius: 50,
        opacity: nebula2Opacity,
        zIndex: 1,
        pointerEvents: 'none',
        transition: 'opacity 4.5s ease-in-out',
      }} />

      {/* Children */}
      <div style={{ flex: 1, zIndex: 10, position: 'relative' }}>{children}</div>

      {/* Moon */}
      <div
        style={{
          position: 'absolute',
          top: 80, left: 0, right: 0,
          display: 'flex',
          justifyContent: 'center',
          zIndex: 5,
        }}
      >
        {/* Glow halo */}
        <div
          style={{
            position: 'absolute',
            top: -moonSize * 0.4,
            width: moonSize * 1.8,
            height: moonSize * 1.8,
            borderRadius: moonSize * 0.9,
            backgroundColor: moonColor,
            opacity: moonGlow,
            transition: 'opacity 2.2s ease-in-out',
          }}
        />

        <div
          style={{
            transform: `scale(${moonPulse})`,
            width: moonSize,
            height: moonSize,
            borderRadius: moonSize / 2,
            backgroundColor: moonColor,
            boxShadow: `0 0 ${28 * glowStrength}px ${moonColor}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'transform 2s ease-in-out',
          }}
        >
          {/* Moon craters */}
          <div style={{
            position: 'absolute', top: '22%', left: '28%',
            width: '20%', height: '20%',
            borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.16)',
          }} />
          <div style={{
            position: 'absolute', top: '52%', right: '54%',
            width: '14%', height: '14%',
            borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.13)',
          }} />
          <div style={{
            position: 'absolute', right: '20%',
            width: '17%', height: '17%',
            borderRadius: '50%', backgroundColor: 'rgba(0,0,0,0.14)',
          }} />
        </div>
      </div>
    </div>
  );
}
