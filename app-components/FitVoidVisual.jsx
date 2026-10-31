import React, { useState, useEffect, useRef } from 'react';

const ACCENT = '#a3e635';

// ---- Data -----------------------------------------------------------------

const WORKOUT = {
  exercise: 'Bench Press',
  sets: [
    { id: 0, label: '5 × 80kg', done: true },
    { id: 1, label: '5 × 82.5kg', done: true },
    { id: 2, label: '5 × 82.5kg', done: false },
    { id: 3, label: '3 × 85kg', done: false },
    { id: 4, label: '3 × 87.5kg', done: false },
  ],
};

const PRS = [
  { name: 'Squat', value: '140kg' },
  { name: 'Bench', value: '100kg' },
  { name: 'Deadlift', value: '180kg' },
];

const VOLUME = [4200, 5100, 3800, 6200, 5400, 7100, 2900]; // Mon-Sun
const VOLUME_MAX = Math.max(...VOLUME);
const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

const BODY_WEIGHT = [
  { d: 'W1', v: 82.4 },
  { d: 'W2', v: 82.1 },
  { d: 'W3', v: 81.6 },
  { d: 'W4', v: 81.2 },
  { d: 'W5', v: 80.8 },
  { d: 'W6', v: 80.5 },
];

const MEALS = [
  { name: 'Breakfast', items: 'Oats + whey', kcal: 420, p: 38, c: 52, f: 9, emoji: '🥣' },
  { name: 'Lunch', items: 'Chicken rice', kcal: 680, p: 55, c: 78, f: 12, emoji: '🍗' },
  { name: 'Dinner', items: 'Salmon veg', kcal: 540, p: 42, c: 24, f: 28, emoji: '🐟' },
];

const DAILY_TARGET = { kcal: 2400, p: 180, c: 220, f: 65 };

// ---- Component ------------------------------------------------------------

export default function FitVoidVisual() {
  const [view, setView] = useState(0); // 0 = workout, 1 = stats, 2 = meals
  const [rest, setRest] = useState(90);
  const [sets, setSets] = useState(WORKOUT.sets);
  const [activeSet, setActiveSet] = useState(2);
  const [hoverIdx, setHoverIdx] = useState(null);
  const [dotHover, setDotHover] = useState(null);
  const [nextHover, setNextHover] = useState(false);
  const [scanHover, setScanHover] = useState(false);
  const timerRef = useRef(null);

  // Auto-advance every 30s, reset on manual view change
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setView((v) => (v + 1) % 3);
    }, 30000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // Rest timer countdown
  useEffect(() => {
    const t = setInterval(() => {
      setRest((r) => (r <= 0 ? 90 : r - 1));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const goTo = (i) => {
    setView(i);
    resetTimer();
  };

  const toggleSet = (id) => {
    setSets((prev) => prev.map((s) => (s.id === id ? { ...s, done: !s.done } : s)));
  };

  const advanceSet = () => {
    setSets((prev) => prev.map((s) => (s.id === activeSet ? { ...s, done: true } : s)));
    setActiveSet((a) => Math.min(a + 1, sets.length - 1));
    setRest(90);
  };

  const mmss = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, '0')}`;
  };

  // ---- Views ---------------------------------------------------------------

  const cardStyle = {
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '12px',
    padding: '14px',
    border: '1px solid rgba(255,255,255,0.1)',
  };

  const sectionTitle = {
    fontSize: '11px',
    fontWeight: '600',
    color: 'rgba(255,255,255,0.5)',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    margin: 0,
  };

  // -- Workout Logger view
  const renderWorkout = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' }}>
      <div style={{ ...cardStyle, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ ...sectionTitle, marginBottom: '4px' }}>Now Lifting</p>
          <p style={{ fontSize: '18px', fontWeight: '700', color: '#f8fafc', margin: 0 }}>
            {WORKOUT.exercise}
          </p>
        </div>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          background: `${ACCENT}22`,
          border: `1px solid ${ACCENT}55`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6.5 6.5h11v11h-11z" />
            <path d="M2 9v6M22 9v6" />
            <path d="M4 12h2M18 12h2" />
          </svg>
        </div>
      </div>

      <div style={{ ...cardStyle, flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={sectionTitle}>Sets</p>
        {sets.map((s, i) => {
          const isActive = i === activeSet;
          const isHover = hoverIdx === i;
          return (
            <div
              key={s.id}
              onClick={() => toggleSet(s.id)}
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: isActive
                  ? `${ACCENT}1a`
                  : isHover
                  ? 'rgba(255,255,255,0.08)'
                  : 'rgba(255,255,255,0.03)',
                border: isActive
                  ? `1px solid ${ACCENT}66`
                  : '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px',
                  fontWeight: '700',
                  background: s.done ? ACCENT : 'rgba(255,255,255,0.08)',
                  color: s.done ? '#0a0a0a' : 'rgba(255,255,255,0.6)',
                }}>
                  {s.done ? '✓' : i + 1}
                </span>
                <span style={{
                  fontSize: '13px',
                  fontWeight: '500',
                  color: s.done ? 'rgba(255,255,255,0.4)' : '#f8fafc',
                  textDecoration: s.done ? 'line-through' : 'none',
                }}>
                  {s.label}
                </span>
              </div>
              {isActive && (
                <span style={{
                  fontSize: '10px',
                  fontWeight: '600',
                  color: ACCENT,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}>
                  Active
                </span>
              )}
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        <div style={{ ...cardStyle, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ ...sectionTitle, marginBottom: '4px' }}>Rest</p>
            <p style={{
              fontSize: '22px',
              fontWeight: '700',
              color: rest <= 10 ? '#f87171' : ACCENT,
              margin: 0,
              fontVariantNumeric: 'tabular-nums',
            }}>
              {mmss(rest)}
            </p>
          </div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="13" r="8" />
            <path d="M12 9v4l2 2" />
          </svg>
        </div>
        <button
          onClick={advanceSet}
          onMouseEnter={() => setNextHover(true)}
          onMouseLeave={() => setNextHover(false)}
          style={{
            flex: 1,
            padding: '0 16px',
            borderRadius: '12px',
            background: nextHover ? `${ACCENT}` : `${ACCENT}cc`,
            border: 'none',
            color: '#0a0a0a',
            fontSize: '13px',
            fontWeight: '700',
            cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
          }}
        >
          Next Set
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );

  // -- Stats Dashboard view
  const renderStats = () => {
    const bwMin = Math.min(...BODY_WEIGHT.map((b) => b.v));
    const bwMax = Math.max(...BODY_WEIGHT.map((b) => b.v));
    const bwRange = bwMax - bwMin || 1;
    const bwW = 100 / (BODY_WEIGHT.length - 1);
    const bwPoints = BODY_WEIGHT.map(
      (b, i) => `${i * bwW},${30 - ((b.v - bwMin) / bwRange) * 24}`
    ).join(' ');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {PRS.map((pr) => (
            <div key={pr.name} style={{ ...cardStyle, textAlign: 'center', padding: '12px' }}>
              <p style={{ ...sectionTitle, marginBottom: '6px' }}>{pr.name}</p>
              <p style={{ fontSize: '18px', fontWeight: '700', color: ACCENT, margin: 0 }}>
                {pr.value}
              </p>
            </div>
          ))}
        </div>

        <div style={{ ...cardStyle, flex: 1, display: 'flex', flexDirection: 'column' }}>
          <p style={{ ...sectionTitle, marginBottom: '12px' }}>Weekly Volume</p>
          <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '6px', paddingBottom: '4px' }}>
            {VOLUME.map((v, i) => {
              const h = (v / VOLUME_MAX) * 100;
              const isPeak = v === VOLUME_MAX;
              return (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%', justifyContent: 'flex-end' }}>
                  <div style={{
                    width: '100%',
                    height: `${h}%`,
                    borderRadius: '6px 6px 2px 2px',
                    background: isPeak ? ACCENT : `${ACCENT}55`,
                    transition: 'all 0.3s',
                    minHeight: '4px',
                  }} />
                  <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontWeight: '600' }}>
                    {DAYS[i]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ ...cardStyle, display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ flex: '0 0 90px' }}>
            <p style={{ ...sectionTitle, marginBottom: '4px' }}>Body Wt</p>
            <p style={{ fontSize: '16px', fontWeight: '700', color: '#f8fafc', margin: 0 }}>
              {BODY_WEIGHT[BODY_WEIGHT.length - 1].v}kg
            </p>
            <p style={{ fontSize: '10px', color: ACCENT, margin: '2px 0 0 0', fontWeight: '600' }}>
              ▼ 1.9kg
            </p>
          </div>
          <div style={{ flex: 1, height: '40px', position: 'relative' }}>
            <svg width="100%" height="100%" viewBox="0 0 100 30" preserveAspectRatio="none">
              <polyline
                points={bwPoints}
                fill="none"
                stroke={ACCENT}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
              {BODY_WEIGHT.map((b, i) => {
                const x = i * bwW;
                const y = 30 - ((b.v - bwMin) / bwRange) * 24;
                const isLast = i === BODY_WEIGHT.length - 1;
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r={isLast ? 2 : 1.2}
                    fill={isLast ? ACCENT : `${ACCENT}aa`}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    );
  };

  // -- Meal Tracker view
  const renderMeals = () => {
    const totalKcal = MEALS.reduce((a, m) => a + m.kcal, 0);
    const totalP = MEALS.reduce((a, m) => a + m.p, 0);
    const totalC = MEALS.reduce((a, m) => a + m.c, 0);
    const totalF = MEALS.reduce((a, m) => a + m.f, 0);
    const kcalPct = Math.min((totalKcal / DAILY_TARGET.kcal) * 100, 100);

    const macroBar = (label, val, target, color) => (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', fontWeight: '600' }}>{label}</span>
          <span style={{ fontSize: '10px', color: '#f8fafc', fontWeight: '600' }}>{val}g</span>
        </div>
        <div style={{ height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
          <div style={{
            width: `${Math.min((val / target) * 100, 100)}%`,
            height: '100%',
            background: color,
            borderRadius: '2px',
          }} />
        </div>
      </div>
    );

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', height: '100%' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          {MEALS.map((m) => (
            <div key={m.name} style={{ ...cardStyle, flex: 1, padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '14px' }}>{m.emoji}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '11px', fontWeight: '700', color: '#f8fafc', margin: 0 }}>{m.name}</p>
                  <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', margin: '1px 0 0 0' }}>{m.items}</p>
                </div>
              </div>
              <p style={{ fontSize: '16px', fontWeight: '700', color: ACCENT, margin: 0 }}>
                {m.kcal}<span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontWeight: '500' }}> kcal</span>
              </p>
              <div style={{ display: 'flex', gap: '6px', fontSize: '9px', fontWeight: '600' }}>
                <span style={{ color: '#818cf8' }}>P {m.p}</span>
                <span style={{ color: '#fbbf24' }}>C {m.c}</span>
                <span style={{ color: '#f87171' }}>F {m.f}</span>
              </div>
            </div>
          ))}
        </div>

        <div
          onMouseEnter={() => setScanHover(true)}
          onMouseLeave={() => setScanHover(false)}
          style={{
            ...cardStyle,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            cursor: 'pointer',
            background: scanHover ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)',
            border: `1px dashed ${scanHover ? `${ACCENT}66` : 'rgba(255,255,255,0.15)'}`,
            transition: 'all 0.2s',
            padding: '12px',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
            <path d="M7 9v6M11 9v6M15 9v6" />
          </svg>
          <span style={{ fontSize: '12px', fontWeight: '600', color: ACCENT }}>Scan Barcode</span>
        </div>

        <div style={{ ...cardStyle, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <p style={{ ...sectionTitle, marginBottom: 0 }}>Daily Total</p>
            <p style={{ fontSize: '12px', fontWeight: '700', color: '#f8fafc', margin: 0 }}>
              {totalKcal}<span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontWeight: '500' }}> / {DAILY_TARGET.kcal} kcal</span>
            </p>
          </div>
          <div style={{ height: '6px', borderRadius: '3px', background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
            <div style={{
              width: `${kcalPct}%`,
              height: '100%',
              background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT}aa)`,
              borderRadius: '3px',
              transition: 'width 0.4s',
            }} />
          </div>
          <div style={{ display: 'flex', gap: '14px' }}>
            {macroBar('Protein', totalP, DAILY_TARGET.p, '#818cf8')}
            {macroBar('Carbs', totalC, DAILY_TARGET.c, '#fbbf24')}
            {macroBar('Fat', totalF, DAILY_TARGET.f, '#f87171')}
          </div>
        </div>
      </div>
    );
  };

  const views = [renderWorkout(), renderStats(), renderMeals()];
  const labels = ['Workout', 'Stats', 'Meals'];

  // ---- Render --------------------------------------------------------------

  return (
    <div style={{
      width: '100%',
      height: '100%',
      minHeight: '520px',
      display: 'flex',
      flexDirection: 'column',
      padding: '16px',
      gap: '14px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '28px',
            height: '28px',
            borderRadius: '8px',
            background: ACCENT,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6.5 6.5h11v11h-11z" />
              <path d="M2 9v6M22 9v6" />
              <path d="M4 12h2M18 12h2" />
            </svg>
          </div>
          <span style={{ fontSize: '14px', fontWeight: '700', color: '#f8fafc', letterSpacing: '0.3px' }}>
            Fit Void
          </span>
        </div>
        <span style={{
          fontSize: '10px',
          fontWeight: '600',
          color: ACCENT,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}>
          {labels[view]}
        </span>
      </div>

      {/* Sliding viewport */}
      <div style={{
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {views.map((v, i) => {
          const offset = i - view;
          const isActive = i === view;
          return (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                transform: `translateX(${offset * 30}px)`,
                opacity: isActive ? 1 : 0,
                transition: 'transform 0.5s ease, opacity 0.5s ease',
                pointerEvents: isActive ? 'auto' : 'none',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {v}
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
        {views.map((_, i) => (
          <div
            key={i}
            onClick={() => goTo(i)}
            onMouseEnter={() => setDotHover(i)}
            onMouseLeave={() => setDotHover(null)}
            style={{
              width: i === view ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: i === view ? ACCENT : dotHover === i ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.15)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
