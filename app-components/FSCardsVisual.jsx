import React, { useState, useCallback, useRef, useEffect } from 'react';

// ─── Card data ────────────────────────────────────────────────────────────────
const ALL_CARDS = [
  { id: 'maddox',           name: 'Maddox',           cost: 3, power: 6,  pos: 'ATT', rarity: 'Legendary', emoji: '✨', image: '/fscards/maddoxlegendary.png' },
  { id: 'golden-boot',      name: 'Golden Boot',      cost: 5, power: 9,  pos: 'ATT', rarity: 'Legendary', emoji: '👢', image: '/fscards/goldenbootlegendary.png' },
  { id: 'flaming-boots',    name: 'Flaming Boots',    cost: 4, power: 7,  pos: 'ATT', rarity: 'S-Tier',    emoji: '🔥', image: '/fscards/flamingbootsstier.png' },
  { id: 'flaming-gloves',   name: 'Flaming Gloves',   cost: 4, power: 8,  pos: 'GK',  rarity: 'S-Tier',    emoji: '🔥', image: '/fscards/flamingglovestier.png' },
  { id: 'royal-gloves',     name: 'Royal Gloves',     cost: 2, power: 4,  pos: 'GK',  rarity: 'Rare',      emoji: '🛡️', image: '/fscards/royalglovesrare.png' },
  { id: 'basic-gloves',     name: 'Basic Gloves',     cost: 1, power: 2,  pos: 'GK',  rarity: 'Uncommon',  emoji: '🧤', image: '/fscards/basicglovesuncommon.png' },
  { id: 'golden-ball',      name: 'Golden Ball',      cost: 3, power: 5,  pos: 'MID', rarity: 'Legendary', emoji: '🏆', image: '/fscards/goldenball.png' },
  { id: 'basic-ball',       name: 'Basic Ball',       cost: 1, power: 3,  pos: 'MID', rarity: 'Uncommon',  emoji: '⚽', image: '/fscards/basicballuncommon.png' },
  { id: 'power-shot-ball',  name: 'Power Shot Ball',  cost: 3, power: 5,  pos: 'MID', rarity: 'Rare',      emoji: '💥', image: '/fscards/powershotballrare.png' },
  { id: 'royal-boots',      name: 'Royal Boots',      cost: 3, power: 5,  pos: 'DEF', rarity: 'Epic',      emoji: '👑', image: '/fscards/royalbootsepic.png' },
  { id: 'thunder-boot',     name: 'Thunder Boot',     cost: 3, power: 4,  pos: 'DEF', rarity: 'Rare',      emoji: '⚡', image: '/fscards/thunderbootrare.png' },
  { id: 'candyfloss-boots', name: 'Candyfloss Boots', cost: 2, power: 4,  pos: 'DEF', rarity: 'Uncommon',  emoji: '👟', image: '/fscards/candyflossbootsuncommon.png' },
  { id: 'cotton-candy',     name: 'Cotton Candy',     cost: 2, power: 3,  pos: 'MID', rarity: 'Legendary', emoji: '🍭', image: '/fscards/cottoncandylegendary.png' },
  { id: 'hat-trick-hero',   name: 'Hat Trick Hero',   cost: 5, power: 8,  pos: 'ATT', rarity: 'Legendary', emoji: '⚽' },
  { id: 'overhead-kick',    name: 'Overhead Kick',    cost: 4, power: 6,  pos: 'ATT', rarity: 'Epic',      emoji: '🤸' },
  { id: 'last-man',         name: 'Last Man',         cost: 4, power: 5,  pos: 'DEF', rarity: 'Epic',      emoji: '🛡️' },
  { id: 'the-keeper',       name: 'The Keeper',       cost: 3, power: 4,  pos: 'GK',  rarity: 'Rare',      emoji: '🧤' },
  { id: 'the-screamer',     name: 'The Screamer',     cost: 3, power: 5,  pos: 'ATT', rarity: 'Rare',      emoji: '💥' },
  { id: 'sweeper',          name: 'Sweeper',          cost: 2, power: 3,  pos: 'DEF', rarity: 'Uncommon',  emoji: '🧹' },
  { id: 'the-dive',         name: 'The Dive',         cost: 1, power: 2,  pos: 'MID', rarity: 'Uncommon',  emoji: '🎭' },
  { id: 'the-pundit',       name: 'The Pundit',       cost: 3, power: 4,  pos: 'MID', rarity: 'Rare',      emoji: '🎙️' },
  { id: 'content-king',     name: 'Content King',     cost: 4, power: 6,  pos: 'MID', rarity: 'Rare',      emoji: '👑' },
  { id: 'clip-merchant',    name: 'Clip Merchant',    cost: 2, power: 3,  pos: 'ATT', rarity: 'Uncommon',  emoji: '📱' },
  { id: 'post-and-bar',     name: 'Post and Bar',     cost: 3, power: 5,  pos: 'DEF', rarity: 'Epic',      emoji: '🥅' },
  { id: 'offside-trap',     name: 'Offside Trap',     cost: 2, power: 2,  pos: 'DEF', rarity: 'Rare',      emoji: '🚩' },
  { id: 'streamer-supreme', name: 'Streamer Supreme', cost: 5, power: 7,  pos: 'ATT', rarity: 'Legendary', emoji: '🔴' },
];

// ─── Rarity styling ───────────────────────────────────────────────────────────
const RC = {
  Uncommon:  { border: '#4ade80', glow: '0 0 10px rgba(74,222,128,0.5)',   bg: 'linear-gradient(160deg,#052e16,#0f172a)' },
  Rare:      { border: '#60a5fa', glow: '0 0 14px rgba(96,165,250,0.55)',  bg: 'linear-gradient(160deg,#07143c,#0f172a)' },
  Epic:      { border: '#c084fc', glow: '0 0 18px rgba(168,85,247,0.6)',   bg: 'linear-gradient(160deg,#1e0a3c,#0f0520)' },
  Legendary: { border: '#facc15', glow: '0 0 22px rgba(250,204,21,0.65)', bg: 'linear-gradient(160deg,#3c2300,#1a0f00)' },
  'S-Tier':  { border: '#ff4d4d', glow: '0 0 26px rgba(255,77,77,0.75)',  bg: 'linear-gradient(160deg,#3c0000,#1a0000)' },
};
const getRc = r => RC[r] || RC.Uncommon;

// ─── Formation definitions ─────────────────────────────────────────────────
const FORMATIONS = {
  '4-4-2': { gk: 1, def: 4, mid: 4, att: 2 },
  '4-3-3': { gk: 1, def: 4, mid: 3, att: 3 },
  '5-4-1': { gk: 1, def: 5, mid: 4, att: 1 },
};

// Phases: what positions get picked each half
// FIRST_HALF → GK + DEF, SECOND_HALF → MID, EXTRA_TIME → ATT
const PHASE_LABELS = {
  formation: 'Pick Formation',
  firsthalf_gk: '1st Half — Pick GK',
  firsthalf_def: '1st Half — Pick Defenders',
  secondhalf: '2nd Half — Pick Midfielders',
  extratime: 'Extra Time — Pick Attackers',
  revealing: 'Revealing...',
  gameover: 'Full Time',
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeCollection() {
  return shuffle(ALL_CARDS).slice(0, 14);
}

function cardsByPos(collection, pos) {
  return collection.filter(c => c.pos === pos).sort((a,b) => b.power - a.power);
}

function aiPickForSlots(collection, pos, count, energy) {
  const eligible = cardsByPos(collection, pos).filter(c => c.cost <= energy);
  const picks = [];
  let spent = 0;
  for (const c of eligible) {
    if (picks.length >= count) break;
    if (spent + c.cost <= energy) {
      picks.push(c);
      spent += c.cost;
    }
  }
  return picks;
}

// Build empty lineup slots for a formation
function buildSlots(formation) {
  const f = FORMATIONS[formation];
  const slots = [];
  for (let i = 0; i < f.gk;  i++) slots.push({ id: `gk-${i}`,  pos: 'GK',  card: null });
  for (let i = 0; i < f.def; i++) slots.push({ id: `def-${i}`, pos: 'DEF', card: null });
  for (let i = 0; i < f.mid; i++) slots.push({ id: `mid-${i}`, pos: 'MID', card: null });
  for (let i = 0; i < f.att; i++) slots.push({ id: `att-${i}`, pos: 'ATT', card: null });
  return slots;
}

// X% positions on the pitch SVG per position
const POS_X = { GK: 8, DEF: 28, MID: 50, ATT: 72 };
const OPP_POS_X = { GK: 92, DEF: 72, MID: 50, ATT: 28 };

// ─── Mini Card ────────────────────────────────────────────────────────────────
function MiniCard({ card, faceDown = false, selected = false, onClick, size = 52 }) {
  const h = Math.round(size * 1.4);
  if (faceDown) {
    return (
      <div onClick={onClick} style={{
        width: size, height: h, borderRadius: 7, flexShrink: 0,
        cursor: onClick ? 'pointer' : 'default',
        background: 'linear-gradient(135deg,#1e293b,#0f172a)',
        border: '1.5px solid rgba(255,255,255,0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: size * 0.38,
      }}>🃏</div>
    );
  }
  const rc = getRc(card?.rarity);
  return (
    <div onClick={onClick} style={{
      width: size, height: h, borderRadius: 7, flexShrink: 0,
      cursor: onClick ? 'pointer' : 'default',
      background: card?.image ? 'transparent' : rc.bg,
      border: `2px solid ${selected ? '#fff' : rc.border}`,
      boxShadow: selected ? `0 0 0 2px #fff, ${rc.glow}` : rc.glow,
      transform: selected ? 'translateY(-5px) scale(1.05)' : 'none',
      transition: 'all 0.15s',
      position: 'relative', overflow: 'hidden',
    }}>
      {card?.image
        ? <img src={card.image} alt={card.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
        : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: size * 0.4 }}>{card?.emoji}</div>
      }
      <div style={{ position: 'absolute', bottom: 2, left: 2, background: 'rgba(0,0,0,0.85)', borderRadius: 3,
        padding: '1px 3px', fontSize: 8, fontWeight: 900, color: '#facc15' }}>
        {card?.power}
      </div>
      <div style={{ position: 'absolute', top: 2, right: 2, background: 'rgba(30,58,95,0.9)', borderRadius: 3,
        padding: '1px 3px', fontSize: 7, fontWeight: 900, color: '#93c5fd' }}>
        {card?.cost}⚡
      </div>
    </div>
  );
}

// ─── Formation pitch SVG diagram ──────────────────────────────────────────────
const F_DOTS = {
  '4-4-2': [[50,90],[15,68],[38,70],[62,70],[85,68],[15,46],[38,48],[62,48],[85,46],[35,24],[65,24]],
  '4-3-3': [[50,90],[15,68],[38,70],[62,70],[85,68],[22,46],[50,48],[78,46],[18,22],[50,20],[82,22]],
  '5-4-1': [[50,90],[8,68],[26,70],[50,72],[74,70],[92,68],[16,46],[38,48],[62,48],[84,46],[50,24]],
};
function PitchSVG({ id, active }) {
  const dots = F_DOTS[id] || [];
  const c = active ? '#34d399' : 'rgba(255,255,255,0.25)';
  const s = active ? 'rgba(52,211,153,0.6)' : 'rgba(255,255,255,0.1)';
  return (
    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', display: 'block' }}>
      <rect x={1} y={1} width={98} height={98} rx={4} fill="none" stroke={s} strokeWidth={0.8} />
      <line x1={1} y1={40} x2={99} y2={40} stroke={s} strokeWidth={0.4} strokeDasharray="2 2" />
      <circle cx={50} cy={40} r={10} fill="none" stroke={s} strokeWidth={0.4} />
      <rect x={30} y={78} width={40} height={20} fill="none" stroke={s} strokeWidth={0.6} />
      <rect x={42} y={90} width={16} height={8} fill="none" stroke={s} strokeWidth={0.5} />
      {dots.map((d, i) => (
        <circle key={i} cx={d[0]} cy={d[1]} r={active ? 4 : 3}
          fill={active ? '#34d399' : 'rgba(255,255,255,0.3)'}
          stroke={active ? 'rgba(52,211,153,0.8)' : 'none'} strokeWidth={1} />
      ))}
    </svg>
  );
}

// ─── Pitch board with slot positions ─────────────────────────────────────────
function PitchBoard({ playerSlots, oppSlots, pendingPlayerSlots, pendingOppSlots, revealed, onSlotClick, activePos }) {
  // Vertical spread per position count
  function getYs(count) {
    if (count === 1) return [50];
    const margin = count <= 2 ? 30 : count <= 3 ? 22 : 15;
    const step = (100 - margin * 2) / (count - 1);
    return Array.from({ length: count }, (_, i) => margin + i * step);
  }

  function renderSlots(slots, pending, side) {
    const posGroups = {};
    slots.forEach(s => {
      if (!posGroups[s.pos]) posGroups[s.pos] = [];
      posGroups[s.pos].push(s);
    });

    const pendingByPos = {};
    (pending || []).forEach(p => {
      if (!pendingByPos[p.pos]) pendingByPos[p.pos] = [];
      pendingByPos[p.pos].push(p);
    });

    return Object.entries(posGroups).map(([pos, group]) => {
      const ys = getYs(group.length);
      const xPct = side === 'player' ? POS_X[pos] : OPP_POS_X[pos];
      return group.map((slot, i) => {
        const yPct = ys[i];
        const isPlayer = side === 'player';
        const isPending = isPlayer && pendingByPos[pos]?.[i];
        const isTarget = isPlayer && activePos === pos && !slot.card && !isPending;

        return (
          <div
            key={slot.id}
            onClick={() => isTarget && onSlotClick && onSlotClick(slot.id)}
            style={{
              position: 'absolute',
              left: `${xPct}%`,
              top: `${yPct}%`,
              transform: 'translate(-50%, -50%)',
              zIndex: isTarget ? 10 : 5,
            }}
          >
            {slot.card && revealed ? (
              <MiniCard card={slot.card} size={44} />
            ) : slot.card && !revealed && !isPlayer ? (
              <MiniCard faceDown size={44} />
            ) : slot.card && !revealed && isPlayer ? (
              <MiniCard card={slot.card} size={44} />
            ) : isPending ? (
              <div style={{
                width: 44, height: 62, borderRadius: 7,
                border: '2px dashed rgba(250,204,21,0.7)',
                background: 'rgba(250,204,21,0.07)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18,
              }}>🃏</div>
            ) : isTarget ? (
              <div style={{
                width: 44, height: 62, borderRadius: 7,
                border: '2px dashed rgba(96,165,250,0.7)',
                background: 'rgba(96,165,250,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 9, color: 'rgba(147,197,253,0.7)', fontWeight: 700,
                animation: 'pulse 1.2s ease-in-out infinite',
              }}>DROP</div>
            ) : (
              <div style={{
                width: 44, height: 62, borderRadius: 7,
                border: '2px dashed rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.02)',
              }} />
            )}
          </div>
        );
      });
    });
  }

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      paddingBottom: '56%',
      background: 'linear-gradient(180deg, rgba(5,25,10,0.9) 0%, rgba(8,40,16,0.9) 50%, rgba(5,25,10,0.9) 100%)',
      borderRadius: 10,
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.06)',
    }}>
      {/* Pitch lines SVG */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.25, pointerEvents: 'none' }}>
        <svg viewBox="0 0 400 224" style={{ width: '100%', height: '100%' }}>
          {/* Outline */}
          <rect x={4} y={4} width={392} height={216} rx={4} fill="none" stroke="white" strokeWidth={1.5} />
          {/* Centre line */}
          <line x1={200} y1={4} x2={200} y2={220} stroke="white" strokeWidth={1} />
          {/* Centre circle */}
          <circle cx={200} cy={112} r={30} fill="none" stroke="white" strokeWidth={1} />
          {/* Penalty boxes */}
          <rect x={4} y={62} width={50} height={100} fill="none" stroke="white" strokeWidth={1} />
          <rect x={346} y={62} width={50} height={100} fill="none" stroke="white" strokeWidth={1} />
          {/* Goal boxes */}
          <rect x={4} y={86} width={22} height={52} fill="none" stroke="white" strokeWidth={1} />
          <rect x={374} y={86} width={22} height={52} fill="none" stroke="white" strokeWidth={1} />
        </svg>
      </div>

      {/* AI label */}
      <div style={{ position: 'absolute', top: 6, right: 10, fontSize: 8, fontWeight: 800, color: 'rgba(248,113,113,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 20 }}>
        ⚔ AI
      </div>
      {/* Player label */}
      <div style={{ position: 'absolute', top: 6, left: 10, fontSize: 8, fontWeight: 800, color: 'rgba(74,222,128,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em', zIndex: 20 }}>
        YOU
      </div>

      {/* Slots layer */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {renderSlots(playerSlots, pendingPlayerSlots, 'player')}
        {renderSlots(oppSlots, pendingOppSlots, 'opponent')}
      </div>

      <style>{`@keyframes pulse { 0%,100%{opacity:0.5} 50%{opacity:1} }`}</style>
    </div>
  );
}

// ─── Power display ────────────────────────────────────────────────────────────
function PowerBar({ playerPower, oppPower }) {
  const total = playerPower + oppPower || 1;
  const playerPct = Math.round((playerPower / total) * 100);
  const winning = playerPower > oppPower ? 'player' : oppPower > playerPower ? 'opp' : 'tie';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ fontSize: 13, fontWeight: 900, color: winning === 'player' ? '#4ade80' : '#94a3b8', minWidth: 24, textAlign: 'right' }}>{playerPower}</span>
      <div style={{ flex: 1, height: 6, borderRadius: 3, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
        <div style={{
          height: '100%', borderRadius: 3,
          width: `${playerPct}%`,
          background: winning === 'player' ? 'linear-gradient(90deg,#16a34a,#4ade80)' : winning === 'opp' ? '#374151' : '#6b7280',
          transition: 'width 0.4s ease',
        }} />
      </div>
      <span style={{ fontSize: 13, fontWeight: 900, color: winning === 'opp' ? '#f87171' : '#94a3b8', minWidth: 24 }}>{oppPower}</span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function FSCardsVisual() {
  // Screens: 'formation' | 'game' | 'gameover'
  const [screen, setScreen] = useState('formation');
  const [selectedFormation, setSelectedFormation] = useState(null);

  // Game state
  const [phase, setPhase] = useState('firsthalf_gk'); // firsthalf_gk | firsthalf_def | secondhalf | extratime | revealing | gameover
  const [playerSlots, setPlayerSlots] = useState([]);
  const [oppSlots, setOppSlots]       = useState([]);
  const [playerCollection, setPlayerCollection] = useState([]);
  const [oppCollection, setOppCollection]       = useState([]);
  const [playerPower, setPlayerPower] = useState(0);
  const [oppPower, setOppPower]       = useState(0);
  const [selectedCard, setSelectedCard] = useState(null); // card in hand selected to place
  const [activePos, setActivePos]     = useState('GK'); // which position slots are active
  const [energy, setEnergy]           = useState(5);
  const [energySpent, setEnergySpent] = useState(0);
  const [winner, setWinner]           = useState(null);
  const [notification, setNotification] = useState(null);
  const timerRef = useRef(null);

  // Current hand: cards available for this phase's position
  const handCards = playerCollection.filter(c => {
    if (activePos === 'GK') return c.pos === 'GK';
    if (activePos === 'DEF') return c.pos === 'DEF';
    if (activePos === 'MID') return c.pos === 'MID';
    if (activePos === 'ATT') return c.pos === 'ATT';
    return false;
  }).filter(c => {
    const alreadyPlaced = playerSlots.some(s => s.card?.id === c.id);
    return !alreadyPlaced;
  });

  const phaseEnergy = {
    firsthalf_gk:  5,
    firsthalf_def: 16,
    secondhalf:    20,
    extratime:     14,
  };

  function startGame(formation) {
    const pCol = makeCollection();
    const oCol = makeCollection();
    const pSlots = buildSlots(formation);
    const oSlots = buildSlots(formation);
    setPlayerCollection(pCol);
    setOppCollection(oCol);
    setPlayerSlots(pSlots);
    setOppSlots(oSlots);
    setPlayerPower(0);
    setOppPower(0);
    setPhase('firsthalf_gk');
    setActivePos('GK');
    setEnergy(phaseEnergy['firsthalf_gk']);
    setEnergySpent(0);
    setSelectedCard(null);
    setWinner(null);
    setNotification('Pick your GK');
    setScreen('game');
  }

  // Place a card into a slot
  function placeCard(slotId) {
    if (!selectedCard) return;
    const slot = playerSlots.find(s => s.id === slotId);
    if (!slot || slot.card || slot.pos !== activePos) return;
    if (selectedCard.cost > energy - energySpent) return;

    setPlayerSlots(prev => prev.map(s => s.id === slotId ? { ...s, card: selectedCard } : s));
    setEnergySpent(prev => prev + selectedCard.cost);
    setSelectedCard(null);
  }

  // Check if player has filled all required slots for current phase
  const requiredSlots = playerSlots.filter(s => s.pos === activePos);
  const filledSlots   = requiredSlots.filter(s => s.card !== null);
  const canConfirm    = filledSlots.length === requiredSlots.length;

  // Confirm picks → AI picks → reveal → advance
  function confirmPicks() {
    if (!canConfirm) return;

    // AI picks for this phase
    const aiFormation = selectedFormation; // same formation for simplicity
    let newOppSlots = [...oppSlots];
    const aiPicks = aiPickForSlots(oppCollection, activePos, requiredSlots.length, phaseEnergy[phase] || 20);
    const emptyOppSlots = newOppSlots.filter(s => s.pos === activePos && !s.card);
    aiPicks.forEach((card, i) => {
      if (emptyOppSlots[i]) {
        newOppSlots = newOppSlots.map(s => s.id === emptyOppSlots[i].id ? { ...s, card } : s);
      }
    });
    setOppSlots(newOppSlots);

    setPhase('revealing');
    setNotification('Revealing...');

    timerRef.current = setTimeout(() => {
      // Recalc power
      const pp = newOppSlots.reduce((sum, s) => sum + (s.card?.power || 0), 0) +
                 playerSlots.reduce((sum, s) => sum + (s.card?.power || 0), 0);
      const newPlayerPower = playerSlots.reduce((sum, s) => sum + (s.card?.power || 0), 0) +
                              aiPicks.reduce((sum, c) => sum, 0); // simplified
      // Real power calc
      const realPlayerPower = playerSlots.reduce((s, sl) => s + (sl.card?.power || 0), 0);
      const realOppPower    = newOppSlots.reduce((s, sl) => s + (sl.card?.power || 0), 0);
      setPlayerPower(realPlayerPower);
      setOppPower(realOppPower);

      // Advance phase
      const next = getNextPhase(phase, selectedFormation);
      if (next === 'gameover') {
        const w = realPlayerPower > realOppPower ? 'player' : realOppPower > realPlayerPower ? 'ai' : 'draw';
        setWinner(w);
        setPhase('gameover');
        setScreen('gameover');
      } else {
        setPhase(next.phase);
        setActivePos(next.pos);
        setEnergy(phaseEnergy[next.phase] || 20);
        setEnergySpent(0);
        setSelectedCard(null);
        setNotification(next.label);
      }
    }, 1200);
  }

  function getNextPhase(current, formation) {
    const f = FORMATIONS[formation];
    if (current === 'firsthalf_gk')  return { phase: 'firsthalf_def', pos: 'DEF', label: 'Pick your Defenders' };
    if (current === 'firsthalf_def') return { phase: 'secondhalf', pos: 'MID', label: 'Pick your Midfielders' };
    if (current === 'secondhalf')    return { phase: 'extratime', pos: 'ATT', label: 'Pick your Attackers' };
    return 'gameover';
  }

  useEffect(() => () => clearTimeout(timerRef.current), []);

  // ── SCREEN: Formation Select ────────────────────────────────────────────────
  if (screen === 'formation') {
    return (
      <div style={{ width: '100%', maxWidth: 520, margin: '0 auto',
        background: 'linear-gradient(160deg,#060d14,#0c1624)', borderRadius: 16,
        border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden' }}>

        <div style={{ padding: '16px 18px 12px', borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 9, fontWeight: 900, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.14em' }}>FS Card Rivals</div>
            <div style={{ fontSize: 17, fontWeight: 800, color: '#fff', marginTop: 2 }}>Pick Your Formation</div>
          </div>
          <div style={{ padding: '4px 12px', borderRadius: 20,
            background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.3)',
            fontSize: 9, color: '#ec4899', fontWeight: 700 }}>vs AI</div>
        </div>

        <div style={{ display: 'flex', gap: 10, padding: 14 }}>
          {Object.entries(FORMATIONS).map(([id]) => {
            const active = selectedFormation === id;
            const labels = { '4-4-2': ['Balanced', '4-4-2'], '4-3-3': ['Attacking', '4-3-3'], '5-4-1': ['Defensive', '5-4-1'] };
            return (
              <div key={id} onClick={() => setSelectedFormation(id)} style={{
                flex: 1, borderRadius: 10, cursor: 'pointer', overflow: 'hidden',
                border: `2px solid ${active ? '#34d399' : 'rgba(255,255,255,0.07)'}`,
                background: active ? 'rgba(52,211,153,0.06)' : 'rgba(255,255,255,0.02)',
                boxShadow: active ? '0 0 18px rgba(52,211,153,0.2)' : 'none',
                transition: 'all 0.15s',
              }}>
                <div style={{ aspectRatio: '1/1', padding: 8 }}>
                  <PitchSVG id={id} active={active} />
                </div>
                <div style={{ padding: '5px 8px 10px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: 15, fontWeight: 900, color: active ? '#34d399' : '#f1f5f9' }}>{labels[id][1]}</div>
                  <div style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.07em',
                    color: active ? '#34d399' : 'rgba(255,255,255,0.25)', marginTop: 2 }}>{labels[id][0]}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ padding: '0 14px 16px' }}>
          <div onClick={() => selectedFormation && startGame(selectedFormation)} style={{
            width: '100%', padding: '13px 0', borderRadius: 10, textAlign: 'center',
            fontWeight: 800, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em',
            cursor: selectedFormation ? 'pointer' : 'not-allowed',
            background: selectedFormation ? 'linear-gradient(135deg,#166534,#22c55e)' : 'rgba(255,255,255,0.04)',
            color: selectedFormation ? '#fff' : 'rgba(255,255,255,0.18)',
            boxShadow: selectedFormation ? '0 4px 18px rgba(34,197,94,0.3)' : 'none',
            transition: 'all 0.15s',
          }}>
            {selectedFormation ? `Kick Off — ${selectedFormation} →` : 'Select a Formation First'}
          </div>
        </div>
      </div>
    );
  }

  // ── SCREEN: Game Over ───────────────────────────────────────────────────────
  if (screen === 'gameover') {
    const result = winner;
    return (
      <div style={{ width: '100%', maxWidth: 520, margin: '0 auto',
        background: 'linear-gradient(160deg,#060d14,#0c1624)', borderRadius: 16,
        border: `1px solid ${result === 'player' ? 'rgba(74,222,128,0.3)' : result === 'ai' ? 'rgba(248,113,113,0.3)' : 'rgba(255,255,255,0.1)'}`,
        overflow: 'hidden' }}>
        <div style={{ padding: '28px 22px 24px', textAlign: 'center' }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>
            {result === 'player' ? '🏆' : result === 'ai' ? '💀' : '🤝'}
          </div>
          <div style={{ fontSize: 22, fontWeight: 900, marginBottom: 4,
            color: result === 'player' ? '#4ade80' : result === 'ai' ? '#f87171' : '#94a3b8' }}>
            {result === 'player' ? 'You Win!' : result === 'ai' ? 'AI Wins' : 'Draw'}
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginBottom: 20 }}>Full Time</div>

          <PowerBar playerPower={playerPower} oppPower={oppPower} />

          <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
            <div style={{ flex: 1, borderRadius: 8, padding: '8px 6px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 4 }}>Your Power</div>
              <div style={{ fontSize: 22, fontWeight: 900, color: result === 'player' ? '#4ade80' : '#94a3b8' }}>{playerPower}</div>
            </div>
            <div style={{ flex: 1, borderRadius: 8, padding: '8px 6px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 4 }}>AI Power</div>
              <div style={{ fontSize: 22, fontWeight: 900, color: result === 'ai' ? '#f87171' : '#94a3b8' }}>{oppPower}</div>
            </div>
          </div>

          <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
            <div onClick={() => startGame(selectedFormation)} style={{
              flex: 1, padding: '10px 0', borderRadius: 8, textAlign: 'center',
              fontWeight: 800, fontSize: 12, cursor: 'pointer',
              background: 'linear-gradient(135deg,#166534,#22c55e)', color: '#fff',
              boxShadow: '0 3px 14px rgba(34,197,94,0.3)',
            }}>Rematch →</div>
            <div onClick={() => { setScreen('formation'); setSelectedFormation(null); }} style={{
              flex: 1, padding: '10px 0', borderRadius: 8, textAlign: 'center',
              fontWeight: 800, fontSize: 12, cursor: 'pointer',
              background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)',
              border: '1px solid rgba(255,255,255,0.09)',
            }}>Change Formation</div>
          </div>
        </div>
      </div>
    );
  }

  // ── SCREEN: Game Board ──────────────────────────────────────────────────────
  const isRevealing = phase === 'revealing';
  const phaseLabel = PHASE_LABELS[phase] || '';
  const energyLeft = energy - energySpent;

  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto',
      background: 'linear-gradient(160deg,#060d14,#0c1624)', borderRadius: 16,
      border: '1px solid rgba(255,255,255,0.07)', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', gap: 0 }}>

      {/* ── Header ── */}
      <div style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{selectedFormation}</span>
          <span style={{ padding: '3px 9px', borderRadius: 10,
            background: 'rgba(236,72,153,0.1)', border: '1px solid rgba(236,72,153,0.25)',
            fontSize: 9, color: '#ec4899', fontWeight: 700 }}>{phaseLabel}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {Array.from({ length: energy }).map((_, i) => (
            <div key={i} style={{ width: 8, height: 8, borderRadius: 4,
              background: i < energyLeft ? '#3b82f6' : 'rgba(59,130,246,0.15)',
              boxShadow: i < energyLeft ? '0 0 5px rgba(59,130,246,0.7)' : 'none',
              transition: 'all 0.2s' }} />
          ))}
          <span style={{ fontSize: 9, color: '#93c5fd', fontWeight: 700, marginLeft: 4 }}>{energyLeft}⚡</span>
        </div>
      </div>

      {notification && (
        <div style={{ padding: '5px 14px', background: 'rgba(250,204,21,0.06)',
          borderBottom: '1px solid rgba(250,204,21,0.1)',
          fontSize: 10, color: '#fde68a', fontWeight: 700, textAlign: 'center' }}>
          {notification}
        </div>
      )}

      {/* ── Power bar ── */}
      <div style={{ padding: '8px 14px 4px' }}>
        <PowerBar playerPower={playerPower} oppPower={oppPower} />
      </div>

      {/* ── Pitch ── */}
      <div style={{ padding: '6px 10px' }}>
        <PitchBoard
          playerSlots={playerSlots}
          oppSlots={oppSlots}
          revealed={isRevealing}
          onSlotClick={placeCard}
          activePos={activePos}
        />
      </div>

      {/* ── Hand ── */}
      {!isRevealing && (
        <div style={{ padding: '4px 10px 6px', borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex', gap: 5, overflowX: 'auto', background: 'rgba(0,0,0,0.2)', alignItems: 'flex-end' }}>
          {handCards.length === 0 && (
            <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', padding: '8px 0' }}>No {activePos} cards available</span>
          )}
          {handCards.map(card => (
            <MiniCard
              key={card.id}
              card={card}
              selected={selectedCard?.id === card.id}
              size={50}
              onClick={() => {
                if (card.cost > energyLeft) return;
                setSelectedCard(prev => prev?.id === card.id ? null : card);
              }}
            />
          ))}
        </div>
      )}

      {/* ── Confirm button ── */}
      <div style={{ padding: '6px 10px 12px', background: 'rgba(0,0,0,0.2)' }}>
        <div onClick={confirmPicks} style={{
          width: '100%', padding: '11px 0', borderRadius: 9, textAlign: 'center',
          fontWeight: 800, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.07em',
          cursor: canConfirm && !isRevealing ? 'pointer' : 'not-allowed',
          background: canConfirm && !isRevealing ? 'linear-gradient(135deg,#1d4ed8,#3b82f6)' : 'rgba(255,255,255,0.04)',
          color: canConfirm && !isRevealing ? '#fff' : 'rgba(255,255,255,0.18)',
          boxShadow: canConfirm && !isRevealing ? '0 3px 14px rgba(59,130,246,0.35)' : 'none',
          transition: 'all 0.15s',
        }}>
          {isRevealing
            ? 'Revealing...'
            : canConfirm
            ? `Confirm ${activePos} Picks →`
            : `Fill all ${activePos} slots (${filledSlots.length}/${requiredSlots.length})`}
        </div>
      </div>
    </div>
  );
}
