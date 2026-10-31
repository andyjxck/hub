import React, { useState, useRef } from 'react';

const ITEMS = {
  solitude: { name: 'Solitude', icon: '👤', tier: 1 },
  coffee: { name: 'Coffee', icon: '☕', tier: 1 },
  darkness: { name: 'Darkness', icon: '🌙', tier: 1 },
  phone: { name: 'Phone', icon: '📱', tier: 1 },
  fortress: { name: 'Fortress', icon: '🏠', tier: 2 },
  morning: { name: 'Morning Peace', icon: '🌅', tier: 2 },
  comfy: { name: 'Comfy', icon: '🛏️', tier: 2 },
  selective: { name: 'Selective', icon: '🔇', tier: 2 },
  double: { name: 'Double', icon: '☕', tier: 2 },
  allnighter: { name: 'All-Nighter', icon: '⏳', tier: 2 },
  doom: { name: 'Doomscrolling', icon: '📜', tier: 2 },
  pitch: { name: 'Pitch Black', icon: '⚫', tier: 2 },
  phantom: { name: 'Phantom', icon: '🔔', tier: 2 },
  infinite: { name: 'Infinite', icon: '🔔', tier: 2 },
  router: { name: 'Router', icon: '🔌', tier: 2 },
  procrastination: { name: 'Procrastination', icon: '🔄', tier: 3 },
  insomnia: { name: 'Insomnia', icon: '⏰', tier: 3 },
  perfect: { name: 'Perfect', icon: '✨', tier: 3 },
  panic: { name: 'Panic', icon: '😱', tier: 3 },
  breathing: { name: 'Breathing', icon: '🌬️', tier: 3 },
  introvert: { name: 'Introvert', icon: '🏰', tier: 4 },
  secret: { name: 'Secret', icon: '🔐', tier: 4 },
  ultimate: { name: 'Ultimate', icon: '👑', tier: 4 },
  eternal: { name: 'Eternal', icon: '♾️', tier: 4 },
  hermit: { name: 'Hermit', icon: '👑', tier: 5 },
  silence: { name: 'Silence', icon: '🔇', tier: 5 },
  saint: { name: 'Saint', icon: '😇', tier: 5 },
  king: { name: 'King', icon: '👑', tier: 5 },
  full: { name: 'Full', icon: '📱', tier: 4 },
  family: { name: 'Family', icon: '👨‍👩‍👧', tier: 2, isSocial: true },
  burnout: { name: 'Burnout', icon: '🔥', tier: 4 },
  productivity: { name: 'Productivity', icon: '📈', tier: 3 },
  deadline: { name: 'Deadline', icon: '📅', tier: 3 },
  chaos: { name: 'Chaos', icon: '🌀', tier: 3 },
  villain: { name: 'Villain', icon: '🦹', tier: 3 },
  cyber: { name: 'Cyber', icon: '💻', tier: 3 },
  mixed: { name: 'Mixed', icon: '📨', tier: 3 },
  over: { name: 'Over', icon: '☕', tier: 3 },
  existential: { name: 'Existential', icon: '🤔', tier: 3 },
  big: { name: 'Big', icon: '😢', tier: 3 },
  sad: { name: 'Sad', icon: '😢', tier: 3 },
  depresso: { name: 'Depresso', icon: '☕', tier: 3 },
  polite: { name: 'Polite', icon: '🤝', tier: 3 },
  politesolo: { name: 'Polite Solo', icon: '🤝', tier: 3 },
  sanity: { name: 'Sanity', icon: '🧠', tier: 3 },
  cloak: { name: 'Cloak', icon: '🧥', tier: 3 },
  cloaksilent: { name: 'Cloak Silent', icon: '🧥', tier: 3 },
  andy: { name: 'Andy', icon: '🎯', tier: 3 },
  group: { name: 'Group', icon: '�', tier: 2, isSocial: true },
  mute: { name: 'Mute', icon: '🔇', tier: 3 },
  mutesolo: { name: 'Mute Solo', icon: '🔇', tier: 3 },
  draft: { name: 'Draft', icon: '📝', tier: 2 },
  autoreply: { name: 'Auto Reply', icon: '🤖', tier: 3 },
  autoreplyphone: { name: 'Auto Phone', icon: '🤖', tier: 3 },
  autoreplysol: { name: 'Auto Sol', icon: '🤖', tier: 3 },
  wifi: { name: 'WiFi', icon: '📶', tier: 2 },
  firewall: { name: 'Firewall', icon: '🛡️', tier: 3 },
  firewallfort: { name: 'Firewall Fort', icon: '🛡️', tier: 3 },
  calendar: { name: 'Calendar', icon: '📅', tier: 2 },
  forcefield: { name: 'Forcefield', icon: '🛡️', tier: 3 },
  forcefieldfort: { name: 'Forcefield Fort', icon: '🛡️', tier: 3 },
  obligation: { name: 'Obligation', icon: '📋', tier: 3 },
  obligationsolo: { name: 'Obligation Solo', icon: '📋', tier: 3 },
  networking: { name: 'Networking', icon: '🤝', tier: 2, isSocial: true },
  graceful: { name: 'Graceful', icon: '👻', tier: 3 },
  gracefulsolo: { name: 'Graceful Solo', icon: '👻', tier: 3 },
  dnd: { name: 'DND', icon: '🔕', tier: 2 },
  dndaura: { name: 'DND Aura', icon: '🔕', tier: 3 },
  dndauraselect: { name: 'DND Select', icon: '🔕', tier: 3 },
  visitor: { name: 'Visitor', icon: '🚪', tier: 2, isSocial: true },
  doorbell: { name: 'Doorbell', icon: '🔔', tier: 3 },
  doorbellsolo: { name: 'Doorbell Solo', icon: '🔔', tier: 3 },
  doorbellfort: { name: 'Doorbell Fort', icon: '🔔', tier: 3 },
  ring: { name: 'Ring', icon: '🔔', tier: 3 },
  ringdark: { name: 'Ring Dark', icon: '🔔', tier: 3 },
  ghosting: { name: 'Ghosting', icon: '👻', tier: 2 },
  smalltalk: { name: 'Small Talk', icon: '💬', tier: 2, isSocial: true },
  paradise: { name: 'Introvert Paradise', icon: '🏰', tier: 4 },
};

const RECIPES = {
  'solitude+solitude': 'fortress',
  'solitude+coffee': 'morning',
  'solitude+darkness': 'comfy',
  'solitude+phone': 'selective',
  'coffee+coffee': 'double',
  'coffee+darkness': 'allnighter',
  'coffee+phone': 'doom',
  'darkness+darkness': 'pitch',
  'darkness+phone': 'phantom',
  'phone+phone': 'infinite',
  'coffee+pitch': 'router',
  'morning+doom': 'procrastination',
  'comfy+allnighter': 'insomnia',
  'morning+ghosting': 'perfect',
  'coffee+insomnia': 'panic',
  'morning+solitude': 'breathing',
  'introvert+fortress': 'secret',
  'perfect+comfy': 'introvert',
  'secret+perfect': 'ultimate',
  'introvert+week': 'eternal',
  'eternal+secret': 'hermit',
  'secret+solitude': 'silence',
  'silence+nap': 'saint',
  'hermit+quiet': 'king',
  'full+ghosting': 'phantom',
  'phone+smalltalk': 'family',
  'coffee+burnout': 'productivity',
  'panic+deadline': 'chaos',
  'phone+villain': 'cyber',
  'mixed+coffee': 'over',
  'existential+darkness': 'big',
  'big+coffee': 'sad',
  'coffee+big': 'depresso',
  'smalltalk+fortress': 'polite',
  'smalltalk+solitude': 'politesolo',
  'smalltalk+introvert': 'sanity',
  'smalltalk+selective': 'cloak',
  'smalltalk+selective2': 'cloaksilent',
  'smalltalk+phone': 'andy',
  'group+selective': 'mute',
  'group+dnd': 'mutesolo',
  'group+draft': 'autoreply',
  'group+phone': 'autoreplyphone',
  'group+solitude': 'autoreplysol',
  'group+wifi': 'firewall',
  'group+fortress': 'firewallfort',
  'family+calendar': 'forcefield',
  'family+fortress': 'forcefieldfort',
  'family+perfect': 'obligation',
  'family+phone': 'obligationsolo',
  'networking+ghosting': 'graceful',
  'networking+solitude': 'gracefulsolo',
  'networking+dnd': 'dndaura',
  'networking+selective': 'dndauraselect',
  'visitor+secret': 'doorbell',
  'visitor+solitude': 'doorbellsolo',
  'visitor+fortress': 'doorbellfort',
  'visitor+selective': 'ring',
  'visitor+darkness': 'ringdark',
};

const getColor = (tier, isSocial) => {
  if (isSocial) return { bg: '#EC4899', border: '#f472b6' };
  if (tier === 1) return { bg: '#10B981', border: '#34d399' };
  if (tier === 2) return { bg: '#6366F1', border: '#818cf8' };
  if (tier === 3) return { bg: '#8B5CF6', border: '#a78bfa' };
  return { bg: '#EC4899', border: '#f472b6' };
};

export default function SocialVoidVisual() {
  const [grid, setGrid] = useState([
    'solitude', null, 'coffee', 'coffee', null,
    null, 'solitude', null, null, 'darkness',
    null, null, null, null, 'phone',
    null, null, null, null, null,
    null, null, null, null, null,
    null, null, null, null, null,
    null, null, null, null, null,
  ]);
  const [dragging, setDragging] = useState(null);
  const [dragPos, setDragPos] = useState({ x: 0, y: 0 });
  const [message, setMessage] = useState(null);
  const gridRef = useRef(null);

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 1500);
  };

  const getGridIndex = (clientX, clientY) => {
    if (!gridRef.current) return null;
    const rect = gridRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const cellSize = 74;
    const gap = 12;
    const col = Math.round((x - cellSize/2) / (cellSize + gap));
    const row = Math.round((y - cellSize/2) / (cellSize + gap));
    if (col < 0 || col >= 5 || row < 0 || row >= 7) return null;
    return row * 5 + col;
  };

  const handleMouseDown = (index, e) => {
    if (!grid[index]) return;
    setDragging(index);
    setDragPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (dragging === null) return;
    setDragPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = (e) => {
    if (dragging === null) return;
    
    const targetIndex = getGridIndex(e.clientX, e.clientY);
    
    if (targetIndex !== null && targetIndex !== dragging) {
      const newGrid = [...grid];
      const draggedItem = newGrid[dragging];
      const targetItem = newGrid[targetIndex];
      
      if (targetItem === null) {
        // Move to empty cell
        newGrid[targetIndex] = draggedItem;
        newGrid[dragging] = null;
      } else if (draggedItem === targetItem) {
        // Merge same items
        const key = draggedItem + '+' + targetItem;
        const result = RECIPES[key];
        if (result) {
          newGrid[targetIndex] = result;
          newGrid[dragging] = null;
          showMessage(`${ITEMS[result].name} discovered!`);
        }
      } else {
        // Try to merge different items
        const key1 = draggedItem + '+' + targetItem;
        const key2 = targetItem + '+' + draggedItem;
        const result = RECIPES[key1] || RECIPES[key2];
        if (result) {
          newGrid[targetIndex] = result;
          newGrid[dragging] = null;
          showMessage(`${ITEMS[result].name} discovered!`);
        } else {
          // Swap if no recipe
          newGrid[targetIndex] = draggedItem;
          newGrid[dragging] = targetItem;
        }
      }
      
      setGrid(newGrid);
    }
    
    setDragging(null);
  };

  return (
    <div 
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {message && (
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '10px 20px',
          background: 'rgba(15,23,42,0.9)',
          border: '1px solid rgba(99,102,241,0.5)',
          borderRadius: '12px',
          fontSize: '14px',
          fontWeight: 600,
          color: '#f8fafc',
          zIndex: 100,
        }}>
          {message}
        </div>
      )}

      <div 
        ref={gridRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 74px)',
          gridTemplateRows: 'repeat(7, 74px)',
          gap: '12px',
        }}
      >
        {grid.map((key, i) => {
          const isDragging = dragging === i;
          
          if (!key) {
            return (
              <div
                key={i}
                style={{
                  width: '74px',
                  height: '74px',
                  borderRadius: '16px',
                  border: '2px dashed rgba(255,255,255,0.15)',
                  background: dragging !== null ? 'rgba(99,102,241,0.1)' : 'transparent',
                  pointerEvents: 'none',
                }}
              />
            );
          }

          const item = ITEMS[key];
          const colors = getColor(item.tier, item.isSocial);

          return (
            <div
              key={i}
              onMouseDown={(e) => !isDragging && handleMouseDown(i, e)}
              style={{
                width: '74px',
                height: '74px',
                borderRadius: '16px',
                background: `linear-gradient(135deg, ${colors.bg}dd, ${colors.bg}99)`,
                border: `3px solid ${colors.border}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: isDragging ? 'default' : 'grab',
                opacity: isDragging ? 0.3 : 1,
                transform: isDragging ? 'scale(0.9)' : 'scale(1)',
                transition: 'opacity 0.1s, transform 0.1s',
                userSelect: 'none',
                pointerEvents: isDragging ? 'none' : 'auto',
              }}
            >
              <span style={{ fontSize: '32px' }}>{item.icon}</span>
              <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.9)', textAlign: 'center', maxWidth: '68px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {item.name.substring(0, 7)}
              </span>
            </div>
          );
        })}
      </div>

      {dragging !== null && grid[dragging] && (
        <div
          style={{
            position: 'fixed',
            left: dragPos.x - 37,
            top: dragPos.y - 37,
            width: '74px',
            height: '74px',
            borderRadius: '16px',
            background: `linear-gradient(135deg, ${getColor(ITEMS[grid[dragging]].tier, ITEMS[grid[dragging]].isSocial).bg}dd, ${getColor(ITEMS[grid[dragging]].tier, ITEMS[grid[dragging]].isSocial).bg}99)`,
            border: `3px solid ${getColor(ITEMS[grid[dragging]].tier, ITEMS[grid[dragging]].isSocial).border}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            zIndex: 1000,
            transform: 'scale(1.1)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
          }}
        >
          <span style={{ fontSize: '32px' }}>{ITEMS[grid[dragging]].icon}</span>
          <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>
            {ITEMS[grid[dragging]].name.substring(0, 7)}
          </span>
        </div>
      )}
    </div>
  );
}
