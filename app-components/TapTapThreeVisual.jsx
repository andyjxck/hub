import React, { useState, useEffect, useRef, useCallback } from 'react';

const TAP_POWER = 12.5;
const TAP_MULTIPLIER = 1.5;
const AUTO_RATE = 145;
const CRIT_CHANCE = 0.12;
const CRIT_MULT = 3;

function fmt(n) {
  if (n >= 1e9) return (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
  return Math.floor(n).toString();
}

export default function TapTapThreeVisual() {
  const [balance, setBalance] = useState(847293);
  const [totalTaps, setTotalTaps] = useState(124789);
  const [floaters, setFloaters] = useState([]);
  const [orbScale, setOrbScale] = useState(1);
  const [orbPositions, setOrbPositions] = useState(() =>
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 90,
      y: Math.random() * 90,
      tx: Math.random() * 90,
      ty: Math.random() * 90,
      size: Math.random() * 80 + 40,
      opacity: Math.random() * 0.25 + 0.08,
      dur: Math.random() * 8000 + 7000,
      started: Date.now(),
    }))
  );

  // Drift orbs smoothly
  useEffect(() => {
    const id = setInterval(() => {
      setOrbPositions(prev => prev.map(orb => {
        const elapsed = Date.now() - orb.started;
        const t = Math.min(elapsed / orb.dur, 1);
        if (t >= 1) {
          return { ...orb, x: orb.tx, y: orb.ty, tx: Math.random() * 90, ty: Math.random() * 90, started: Date.now(), dur: Math.random() * 8000 + 7000 };
        }
        const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        return { ...orb, _cx: orb.x + (orb.tx - orb.x) * ease, _cy: orb.y + (orb.ty - orb.y) * ease };
      }));
    }, 50);
    return () => clearInterval(id);
  }, []);

  // Auto tap earnings
  useEffect(() => {
    const interval = 1000 / Math.max(1, AUTO_RATE);
    const id = setInterval(() => {
      const earning = TAP_POWER * TAP_MULTIPLIER;
      setBalance(b => b + earning);
    }, interval);
    return () => clearInterval(id);
  }, []);

  // Orb pulse
  useEffect(() => {
    let t = 0;
    const id = setInterval(() => {
      t += 0.04;
      setOrbScale(1 + Math.sin(t) * 0.1);
    }, 50);
    return () => clearInterval(id);
  }, []);

  const containerRef = useRef(null);

  const handleTap = useCallback((e) => {
    const isCrit = Math.random() < CRIT_CHANCE;
    const earning = TAP_POWER * TAP_MULTIPLIER * (isCrit ? CRIT_MULT : 1);
    setBalance(b => b + earning);
    setTotalTaps(t => t + 1);

    const rect = containerRef.current?.getBoundingClientRect();
    const x = e.clientX - (rect?.left ?? 0);
    const y = e.clientY - (rect?.top ?? 0);
    const fid = Date.now() + Math.random();
    setFloaters(prev => [...prev, { id: fid, x, y, value: earning, crit: isCrit }]);
    setTimeout(() => setFloaters(prev => prev.filter(f => f.id !== fid)), 2200);
  }, []);

  const perTap = (TAP_POWER * TAP_MULTIPLIER).toFixed(2);
  const autoPerSec = fmt(AUTO_RATE * TAP_POWER * TAP_MULTIPLIER);

  return (
    <div
      ref={containerRef}
      onClick={handleTap}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '520px',
        background: 'linear-gradient(180deg, #0a0514 0%, #1e0b3d 50%, #0f0520 100%)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        userSelect: 'none',
        borderRadius: '20px',
      }}
    >
      {/* Drifting background orbs */}
      {orbPositions.map(orb => (
        <div
          key={orb.id}
          style={{
            position: 'absolute',
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(99,102,241,0.3) 50%, transparent 70%)',
            left: `${orb._cx ?? orb.x}%`,
            top: `${orb._cy ?? orb.y}%`,
            opacity: orb.opacity,
            filter: 'blur(24px)',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Central WEALTH orb */}
      <div style={{
        position: 'absolute',
        top: '42%',
        left: '50%',
        transform: `translate(-50%, -50%) scale(${orbScale})`,
        transition: 'transform 0.05s ease-out',
        pointerEvents: 'none',
      }}>
        <div style={{
          width: '160px',
          height: '160px',
          borderRadius: '80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 60px rgba(139,92,246,0.9), 0 0 120px rgba(139,92,246,0.3)',
          background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #6366f1 100%)',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: '10px', fontWeight: '800', letterSpacing: '2px', marginBottom: '8px' }}>
            WEALTH
          </span>
          <span style={{ color: '#fff', fontSize: '22px', fontWeight: '900', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            ${fmt(balance)}
          </span>
        </div>
      </div>

      {/* TAP ANYWHERE hint */}
      <div style={{
        position: 'absolute',
        top: '67%',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: 0.3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pointerEvents: 'none',
      }}>
        <span style={{ fontSize: '28px' }}>👆</span>
        <span style={{ color: '#fff', fontSize: '13px', marginTop: '6px', fontWeight: '700', letterSpacing: '2px' }}>
          TAP ANYWHERE
        </span>
      </div>

      {/* Floaters */}
      {floaters.map(f => (
        <div
          key={f.id}
          style={{
            position: 'absolute',
            left: f.x - 30,
            top: f.y - 15,
            color: f.crit ? '#fbbf24' : '#a78bfa',
            fontSize: f.crit ? '20px' : '16px',
            fontWeight: '700',
            pointerEvents: 'none',
            animation: 'tt3FloatUp 2.2s ease-out forwards',
            whiteSpace: 'nowrap',
            textShadow: f.crit ? '0 0 12px rgba(251,191,36,0.8)' : 'none',
          }}
        >
          {f.crit ? '⚡ ' : ''}+${fmt(f.value)}
        </div>
      ))}

      {/* Bottom stats pill */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '16px',
        right: '16px',
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(10px)',
        borderRadius: '28px',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        pointerEvents: 'none',
        border: '1px solid rgba(255,255,255,0.08)',
      }}>
        {[
          { label: 'TAP', value: `$${perTap}`, color: '#60a5fa' },
          { label: 'AUTO', value: `$${autoPerSec}/s`, color: '#34d399' },
          { label: 'TAPS', value: fmt(totalTaps), color: '#fbbf24' },
          { label: 'STREAK', value: '7d 🔥', color: '#eab308' },
        ].map((stat, i, arr) => (
          <React.Fragment key={stat.label}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', fontWeight: '700', letterSpacing: '1px' }}>{stat.label}</span>
              <span style={{ color: stat.color, fontSize: '14px', fontWeight: '900' }}>{stat.value}</span>
            </div>
            {i < arr.length - 1 && <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.1)' }} />}
          </React.Fragment>
        ))}
      </div>

      <style jsx>{`
        @keyframes tt3FloatUp {
          0%   { opacity: 1; transform: translateY(0) scale(0.4); }
          25%  { opacity: 1; transform: translateY(-60px) scale(1); }
          100% { opacity: 0; transform: translateY(-220px) scale(0.9); }
        }
      `}</style>
    </div>
  );
}
