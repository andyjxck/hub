import React, { useState } from 'react';

const SPECIES_ICONS = {
  'Alligator': '�', 'AntEater': '�', 'Bear': '🐻', 'Bird': '�‍⬛', 'Bull': '🐂',
  'Cat': '�', 'Chicken': '🐔', 'Cow': '�', 'Cub': '🧸', 'Deer': '🦌',
  'Dog': '�', 'Duck': '🦆', 'Eagle': '🦅', 'Elephant': '🐘', 'Frog': '🐸',
  'Goat': '🐐', 'Gorilla': '�', 'Hamster': '�', 'Hippo': '�', 'Horse': '�',
  'Kangaroo': '🦘', 'Koala': '�', 'Lion': '🦁', 'Monkey': '�', 'Mouse': '🐭',
  'Octopus': '🐙', 'Ostrich': '🦃', 'Penguin': '�', 'Pig': '�', 'Rabbit': '�',
  'Rhino': '�', 'Sheep': '🐑', 'Squirrel': '🐿️', 'Tiger': '🐯', 'Wolf': '�',
};

const PERSONALITY_ICONS = {
  'Snooty': '💎', 'Uchi': '�', 'Peppy': '⭐', 'Normal': '🌸',
  'Cranky': '�', 'Lazy': '�', 'Jock': '🏃', 'Smug': '😎',
};

const VILLAGERS = [
  { name: 'Marshall', species: 'Squirrel', personality: 'Smug', gender: 'male' },
  { name: 'Ankha', species: 'Cat', personality: 'Snooty', gender: 'female' },
  { name: 'Raymond', species: 'Cat', personality: 'Smug', gender: 'male' },
  { name: 'Audie', species: 'Wolf', personality: 'Peppy', gender: 'female' },
  { name: 'Dom', species: 'Sheep', personality: 'Jock', gender: 'male' },
  { name: 'Judy', species: 'Bear', personality: 'Snooty', gender: 'female' },
  { name: 'Sherb', species: 'Goat', personality: 'Lazy', gender: 'male' },
  { name: 'Megan', species: 'Bear', personality: 'Normal', gender: 'female' },
  { name: 'Tasha', species: 'Wolf', personality: 'Uchi', gender: 'female' },
  { name: 'Coco', species: 'Rabbit', personality: 'Normal', gender: 'female' },
  { name: 'Stitches', species: 'Cub', personality: 'Lazy', gender: 'male' },
  { name: 'Bob', species: 'Cat', personality: 'Lazy', gender: 'male' },
];

export default function DreamieVisual() {
  const [basket, setBasket] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [queue, setQueue] = useState(3);
  const [dodoCode, setDodoCode] = useState(null);

  const toggleBasket = (villager) => {
    if (basket.includes(villager)) {
      setBasket(basket.filter(v => v !== villager));
    } else {
      setBasket([...basket, villager]);
    }
  };

  const joinQueue = () => {
    if (basket.length > 0 && !dodoCode) {
      setQueue(queue + 1);
      setTimeout(() => {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        let code = '';
        for (let i = 0; i < 5; i++) {
          code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setDodoCode(code);
      }, 1500);
    }
  };

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '12px',
      position: 'relative',
    }}>
      {/* Villager Grid - matching real app styling */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
        gap: '16px',
        marginBottom: '12px',
      }}>
        {VILLAGERS.map((villager) => {
          const inBasket = basket.includes(villager.name);
          const isExpanded = expanded === villager.name;
          const speciesIcon = SPECIES_ICONS[villager.species] || '🏘️';
          const personalityIcon = PERSONALITY_ICONS[villager.personality] || '😊';

          return (
            <div
              key={villager.name}
              onClick={(e) => { e.stopPropagation(); setExpanded(isExpanded ? null : villager.name); }}
              style={{
                background: inBasket 
                  ? 'rgba(34, 197, 94, 0.15)'
                  : 'rgba(255, 255, 255, 0.055)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: inBasket 
                  ? '1px solid rgba(34, 197, 94, 0.3)'
                  : '1px solid rgba(255, 255, 255, 0.09)',
                borderRadius: '18px',
                padding: '14px 14px 44px',
                cursor: 'pointer',
                transition: 'transform 0.22s cubic-bezier(0.22,1,0.36,1), background 0.18s, box-shadow 0.22s cubic-bezier(0.22,1,0.36,1), border-color 0.18s',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '100px',
                boxShadow: inBasket ? '0 0 25px rgba(34, 197, 94, 0.2)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (!inBasket) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.09)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.45), 0 2px 8px rgba(0,0,0,0.2)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)';
                }
              }}
              onMouseLeave={(e) => {
                if (!inBasket) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.055)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.09)';
                }
              }}
            >
              {/* Selected indicator */}
              {inBasket && (
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'rgba(34, 197, 94, 0.3)',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}>
                  ✓
                </div>
              )}

              {/* Villager icon wrap */}
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '26px',
                flexShrink: 0,
                transition: 'transform 0.2s ease',
                position: 'relative',
                background: villager.gender === 'female' 
                  ? 'rgba(240, 0, 200, 0.18)'
                  : 'rgba(60, 130, 255, 0.2)',
                border: villager.gender === 'female' 
                  ? '2px solid #f000c8'
                  : '1.5px solid rgba(60, 130, 255, 0.5)',
                boxShadow: villager.gender === 'female' 
                  ? '0 0 14px rgba(240, 0, 200, 0.45)'
                  : '0 0 18px rgba(60, 130, 255, 0.35)',
              }}>
                <span style={{ filter: 'brightness(0)', fontSize: '26px' }}>{speciesIcon}</span>
                
                {/* Personality badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '-4px',
                  right: '-4px',
                  fontSize: '11px',
                  background: 'rgba(0,0,0,0.45)',
                  backdropFilter: 'blur(6px)',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: '1',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}>
                  {personalityIcon}
                </div>
              </div>

              {/* Villager name */}
              <div style={{
                color: 'rgba(255,255,255,0.95)',
                fontSize: '12px',
                fontWeight: 700,
                margin: '0',
                lineHeight: '1.3',
                letterSpacing: '-0.1px',
                whiteSpace: 'normal',
                wordBreak: 'break-word',
                maxWidth: '100%',
              }}>
                {villager.name}
              </div>

              {/* Expanded details */}
              {isExpanded && (
                <div style={{
                  marginTop: '8px',
                  paddingTop: '8px',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.7)',
                }}>
                  <div style={{ marginBottom: '4px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)' }}>Species:</span> {villager.species}
                  </div>
                  <div style={{ marginBottom: '4px' }}>
                    <span style={{ color: 'rgba(255,255,255,0.5)' }}>Personality:</span> {villager.personality}
                  </div>
                  <div>
                    <span style={{ color: 'rgba(255,255,255,0.5)' }}>Gender:</span> {villager.gender === 'female' ? '♀ Female' : '♂ Male'}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>


      {/* Dodo Code Display */}
      {dodoCode && (
        <div style={{
          position: 'absolute',
          bottom: '80px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(160deg, rgba(10,20,8,0.75) 0%, rgba(6,14,6,0.70) 100%)',
          backdropFilter: 'blur(52px) saturate(200%)',
          WebkitBackdropFilter: 'blur(52px) saturate(200%)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderTop: '1px solid rgba(255,255,255,0.22)',
          borderLeft: '1px solid rgba(255,255,255,0.16)',
          borderRadius: '22px',
          padding: '18px 16px 16px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)',
          animation: 'slideUp 0.18s cubic-bezier(0.22,1,0.36,1)',
          textAlign: 'center',
          minWidth: '200px',
        }}>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.8)', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>Dodo Code</div>
          <div style={{ fontSize: '22px', fontWeight: 800, color: '#fff', letterSpacing: '3px' }}>{dodoCode}</div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>Island visit ready!</div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
