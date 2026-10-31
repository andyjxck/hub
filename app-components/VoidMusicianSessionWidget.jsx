import React, { useState } from 'react';

const GENRES = ['Pop', 'Rock', 'Hip-Hop', 'R&B', 'Electronic', 'Indie', 'Jazz', 'Country', 'Classical', 'Metal'];
const FEATURES = ['DJ Shadow', 'Luna Ray', 'Neon Pulse', 'Echo Valley', 'Crystal Waves', 'Midnight Sky'];

const producers = [
  { name: 'Self', cost: 0, qualityBoost: 50 },
  { name: 'Beat Master', cost: 5000, qualityBoost: 70 },
  { name: 'Sonic Wizard', cost: 15000, qualityBoost: 85 },
  { name: 'Legend Producer', cost: 50000, qualityBoost: 95 },
];
const writers = [
  { name: 'Self', cost: 0, lyricBoost: 50 },
  { name: 'Word Smith', cost: 3000, lyricBoost: 65 },
  { name: 'Poet Soul', cost: 10000, lyricBoost: 80 },
  { name: 'Hit Writer', cost: 35000, lyricBoost: 92 },
];
const studios = [
  { name: 'Your Studio', cost: 0, studioBoost: 40 },
  { name: 'Local Studio', cost: 2000, studioBoost: 60 },
  { name: 'Pro Studio', cost: 8000, studioBoost: 75 },
  { name: 'Platinum Studio', cost: 25000, studioBoost: 90 },
];

const muted = 'rgba(255,255,255,0.4)';
const text = '#ffffff';
const pink = '#ff2d95';
const cyan = '#00e8ff';
const lime = '#a3e635';
const amber = '#ffb347';
const cell = 'rgba(255,255,255,0.06)';
const cellHover = 'rgba(255,255,255,0.11)';

function Cell({ label, value, subvalue, subcolor, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? cellHover : cell,
        borderRadius: 14,
        padding: '14px 16px',
        flex: '1 1 calc(50% - 6px)',
        minWidth: 140,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background 0.15s',
      }}
    >
      <span style={{ color: muted, fontSize: 10, letterSpacing: '1.5px', fontWeight: 700, display: 'block', marginBottom: 4 }}>
        {label}
      </span>
      <span style={{ color: text, fontSize: 14, fontWeight: 700, display: 'block' }}>{value}</span>
      {subvalue && (
        <span style={{ color: subcolor || muted, fontSize: 11, display: 'block', marginTop: 3 }}>{subvalue}</span>
      )}
    </div>
  );
}

export default function VoidMusicianSessionWidget() {
  const [title, setTitle] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Pop');
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [albumTitle, setAlbumTitle] = useState('');
  const [producerIndex, setProducerIndex] = useState(0);
  const [writerIndex, setWriterIndex] = useState(0);
  const [studioIndex, setStudioIndex] = useState(0);
  const [showFeatureModal, setShowFeatureModal] = useState(false);
  const [showAlbumModal, setShowAlbumModal] = useState(false);
  const [newAlbumName, setNewAlbumName] = useState('');
  const [created, setCreated] = useState(null);

  const producer = producers[producerIndex];
  const writer = writers[writerIndex];
  const studio = studios[studioIndex];
  const totalCost = producer.cost + writer.cost + studio.cost;

  const cycle = (cur, len) => (cur + 1) % len;

  const toggleFeature = (f) => {
    setSelectedFeatures(prev =>
      prev.includes(f) ? prev.filter(x => x !== f) : prev.length >= 6 ? prev : [...prev, f]
    );
  };

  const handleCreate = () => {
    if (!title.trim()) return;
    setCreated({ title, genre: selectedGenre });
    setTitle('');
    setTimeout(() => setCreated(null), 2800);
  };

  return (
    <div style={{ width: '100%', maxWidth: 700, margin: '0 auto', padding: '0 4px' }}>
      {/* Section heading */}
      <p style={{ margin: '0 0 18px', fontSize: 20, fontWeight: 800, color: text }}>New Session</p>

      {/* Song icon + title input */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <div style={{
          width: 52, height: 52, borderRadius: 14, flexShrink: 0,
          background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26,
        }}>
          🎵
        </div>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Song title..."
          style={{
            flex: 1, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 14, color: text, padding: '14px 18px', fontSize: 15,
            outline: 'none', caretColor: pink,
          }}
        />
      </div>

      {/* 2×3 grid of cells */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
        <Cell
          label="GENRE"
          value={selectedGenre}
          onClick={() => setSelectedGenre(GENRES[cycle(GENRES.indexOf(selectedGenre), GENRES.length)])}
        />
        <Cell
          label="FEATURES"
          value={selectedFeatures.length === 0 ? 'None' : `${selectedFeatures.length} selected`}
          onClick={() => setShowFeatureModal(true)}
        />
        <Cell
          label="ALBUM"
          value={albumTitle || 'None (single)'}
          onClick={() => setShowAlbumModal(true)}
        />
        <Cell
          label="PRODUCER"
          value={producer.name}
          subvalue={`${producer.qualityBoost}/100 · £${producer.cost.toLocaleString()}`}
          subcolor={cyan}
          onClick={() => setProducerIndex(cycle(producerIndex, producers.length))}
        />
        <Cell
          label="WRITER"
          value={writer.name}
          subvalue={`${writer.lyricBoost}/100 · £${writer.cost.toLocaleString()}`}
          subcolor={lime}
          onClick={() => setWriterIndex(cycle(writerIndex, writers.length))}
        />
        <Cell
          label="STUDIO"
          value={studio.name}
          subvalue={`${studio.studioBoost}/100 · £${studio.cost.toLocaleString()}`}
          subcolor={cyan}
          onClick={() => setStudioIndex(cycle(studioIndex, studios.length))}
        />
      </div>

      {/* Cost + Create row */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 14,
      }}>
        <div>
          <span style={{ color: muted, fontSize: 10, letterSpacing: '1.5px', fontWeight: 700, display: 'block', marginBottom: 5 }}>
            TOTAL COST
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <img src="/app-assets/voidmusician-cash.png" alt="cash" style={{ width: 14, height: 14 }} />
              <span style={{ color: text, fontSize: 13 }}>{totalCost.toLocaleString()}</span>
            </div>
            <span style={{ color: muted, fontSize: 13 }}>·</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <img src="/app-assets/voidmusician-energy.png" alt="energy" style={{ width: 14, height: 14 }} />
              <span style={{ color: text, fontSize: 13 }}>25</span>
            </div>
          </div>
        </div>
        <div
          onClick={handleCreate}
          style={{
            background: pink, padding: '14px 32px', borderRadius: 16,
            cursor: 'pointer', boxShadow: '0 4px 20px rgba(255,45,149,0.5)',
            fontWeight: 800, fontSize: 14, color: '#fff', letterSpacing: '1.5px',
            textTransform: 'uppercase', transition: 'all 0.15s',
            opacity: title.trim() ? 1 : 0.45,
          }}
          onMouseEnter={e => { if (title.trim()) { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(255,45,149,0.65)'; }}}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,45,149,0.5)'; }}
        >
          CREATE
        </div>
      </div>

      {/* Created toast */}
      {created && (
        <div style={{
          marginTop: 14, padding: '12px 18px', borderRadius: 12,
          background: 'rgba(255,45,149,0.12)', border: '1px solid rgba(255,45,149,0.3)',
          color: pink, fontSize: 13, fontWeight: 600,
        }}>
          🎵 &ldquo;{created.title}&rdquo; created as a {created.genre} single!
        </div>
      )}

      {/* Feature modal */}
      {showFeatureModal && (
        <div onClick={() => setShowFeatureModal(false)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: '#1a0f2e', borderRadius: 20, padding: 24,
            border: '1px solid rgba(255,255,255,0.1)', width: '90%', maxWidth: 380,
          }}>
            <p style={{ margin: '0 0 16px', color: text, fontSize: 17, fontWeight: 700 }}>Select Features</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {FEATURES.map(f => (
                <div key={f} onClick={() => toggleFeature(f)} style={{
                  padding: '12px 14px', borderRadius: 12, cursor: 'pointer',
                  background: selectedFeatures.includes(f) ? 'rgba(255,45,149,0.18)' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${selectedFeatures.includes(f) ? 'rgba(255,45,149,0.45)' : 'rgba(255,255,255,0.1)'}`,
                  color: text, fontSize: 14, fontWeight: 500, transition: 'all 0.15s',
                }}>
                  {selectedFeatures.includes(f) ? '✓ ' : ''}{f}
                </div>
              ))}
            </div>
            <button onClick={() => setShowFeatureModal(false)} style={{
              marginTop: 16, width: '100%', padding: 13, borderRadius: 12,
              background: pink, border: 'none', color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer',
            }}>Done</button>
          </div>
        </div>
      )}

      {/* Album modal */}
      {showAlbumModal && (
        <div onClick={() => setShowAlbumModal(false)} style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 200,
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: '#1a0f2e', borderRadius: 20, padding: 24,
            border: '1px solid rgba(255,255,255,0.1)', width: '90%', maxWidth: 380,
          }}>
            <p style={{ margin: '0 0 16px', color: text, fontSize: 17, fontWeight: 700 }}>Album Name</p>
            <input
              type="text"
              value={newAlbumName}
              onChange={e => setNewAlbumName(e.target.value)}
              placeholder="Enter album name..."
              style={{
                width: '100%', padding: '13px 14px', borderRadius: 12, boxSizing: 'border-box',
                background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)',
                color: text, fontSize: 14, outline: 'none',
              }}
            />
            <button onClick={() => { setAlbumTitle(newAlbumName); setNewAlbumName(''); setShowAlbumModal(false); }} style={{
              marginTop: 14, width: '100%', padding: 13, borderRadius: 12,
              background: pink, border: 'none', color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer',
            }}>Set Album</button>
          </div>
        </div>
      )}
    </div>
  );
}
