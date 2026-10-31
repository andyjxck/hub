import React, { useState } from 'react';

const GENRES = ['Pop', 'Rock', 'Hip-Hop', 'R&B', 'Electronic', 'Indie', 'Jazz', 'Country', 'Classical', 'Metal'];
const FEATURES = ['DJ Shadow', 'Luna Ray', 'Neon Pulse', 'Echo Valley', 'Crystal Waves', 'Midnight Sky'];

export default function VoidMusicianVisual() {
  const [week, setWeek] = useState(12);
  const [cash, setCash] = useState(847293);
  const [energy, setEnergy] = useState(75);
  const [maxEnergy] = useState(100);
  const [fame, setFame] = useState(45);
  const [fans, setFans] = useState(124789);
  const [title, setTitle] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Pop');
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [albumTitle, setAlbumTitle] = useState('');
  const [producerIndex, setProducerIndex] = useState(0);
  const [writerIndex, setWriterIndex] = useState(0);
  const [studioIndex, setStudioIndex] = useState(0);
  const [showGenreModal, setShowGenreModal] = useState(false);
  const [showFeatureModal, setShowFeatureModal] = useState(false);
  const [showAlbumModal, setShowAlbumModal] = useState(false);
  const [newAlbumName, setNewAlbumName] = useState('');
  const [createdSongs, setCreatedSongs] = useState([]);
  const [weeklySummary, setWeeklySummary] = useState(null);

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

  // Theme colors from DashboardScreen.js
  const theme = {
    text: '#ffffff',
    muted: 'rgba(255,255,255,0.5)',
    pink: '#ff2d95',
    pinkGlow: 'rgba(255,45,149,0.15)',
    cyan: '#00e8ff',
    lime: '#a3e635',
    amber: '#ffb347',
    red: '#ff4757',
    border: 'rgba(255,255,255,0.1)',
    radiusSm: 12,
  };

  const fmtN = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const streamingPlatforms = [
    { code: 'VT', label: 'VoidTube', color: '#ff0033', image: '/app-assets/voidmusician-vtube.png' },
    { code: 'VB', label: 'VoidBeats', color: theme.amber, image: '/app-assets/voidmusician-v100.png' },
    { code: 'OM', label: 'OpenMic', color: '#ff6b35', image: '/app-assets/voidmusician-omusic.png' },
    { code: 'SF', label: 'SoundFlow', color: '#1db954', image: '/app-assets/voidmusician-spotfly.png' },
  ];

  const cycle = (cur, len) => (cur + 1) % len;

  const producer = producers[producerIndex];
  const writer = writers[writerIndex];
  const studio = studios[studioIndex];
  const totalCost = producer.cost + writer.cost + studio.cost;

  const handleCreateSong = () => {
    if (!title.trim()) return;
    if (energy < 25) return;
    if (cash < totalCost) return;

    setEnergy(e => e - 25);
    setCash(c => c - totalCost);
    setFame(f => Math.min(100, f + 2));
    setFans(f => f + Math.floor(Math.random() * 5000) + 1000);

    const newSong = {
      id: createdSongs.length + 1,
      title,
      genre: selectedGenre,
      features: [...selectedFeatures],
      album: albumTitle || 'Single',
      producer: producer.name,
      writer: writer.name,
      studio: studio.name,
      quality: Math.floor((producer.qualityBoost + writer.lyricBoost + studio.studioBoost) / 3),
    };

    setCreatedSongs([newSong, ...createdSongs]);
    setTitle('');
    setSelectedFeatures([]);
    setAlbumTitle('');
  };

  const handleEndWeek = () => {
    const fanGain = Math.floor(Math.random() * 20000) + 5000;
    const cashGain = Math.floor(Math.random() * 50000) + 10000;
    const fameGain = Math.floor(Math.random() * 5) + 1;

    setWeek(w => w + 1);
    setFans(f => f + fanGain);
    setCash(c => c + cashGain);
    setFame(f => Math.min(100, f + fameGain));
    setEnergy(e => Math.min(maxEnergy, e + 50));

    setWeeklySummary({
      fanGain,
      cashGain,
      fameGain,
      songsReleased: createdSongs.length,
    });
  };

  const toggleFeature = (feature) => {
    setSelectedFeatures(prev => {
      if (prev.includes(feature)) return prev.filter(f => f !== feature);
      if (prev.length >= 6) return prev;
      return [...prev, feature];
    });
  };

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(180deg, #0f0a1f 0%, #1a1033 100%)',
      overflowY: 'auto',
      padding: '16px',
      paddingBottom: '80px',
    }}>
      {/* Hero Card - adapted from DashboardScreen.js lines 102-176 */}
      <div style={{
        marginTop: '16px',
        borderRadius: '24px',
        overflow: 'hidden',
        backgroundColor: 'rgba(255,45,149,0.06)',
        borderWidth: '1px',
        borderColor: 'rgba(255,45,149,0.18)',
        padding: '20px',
        boxShadow: '0 0 40px rgba(255,45,149,0.25)',
        position: 'relative',
      }}>
        {/* Glow blobs */}
        <div style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          width: '120px',
          height: '120px',
          borderRadius: '60px',
          backgroundColor: 'rgba(255,45,149,0.12)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          left: '20px',
          width: '80px',
          height: '80px',
          borderRadius: '40px',
          backgroundColor: 'rgba(0,232,255,0.07)',
        }} />

        {/* Header */}
        <div style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '20px',
          display: 'flex',
        }}>
          <div>
            <span style={{
              color: 'rgba(255,255,255,0.35)',
              fontSize: '10px',
              letterSpacing: '3px',
              fontWeight: '600',
            }}>
              WEEK {week} · 2026
            </span>
            <div style={{
              color: theme.text,
              fontSize: '13px',
              marginTop: '6px',
              opacity: 0.6,
            }}>
              Rising Star
            </div>
          </div>
          <div style={{ flexDirection: 'row', gap: '8px', display: 'flex' }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '17px',
              backgroundColor: 'rgba(255,255,255,0.06)',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}>
              <span style={{ color: theme.muted, fontSize: '13px' }}>?</span>
            </div>
            <div
              onClick={handleEndWeek}
              style={{
                height: '36px',
                paddingHorizontal: '20px',
                borderRadius: '18px',
                backgroundColor: theme.pink,
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(255,45,149,0.5)',
                display: 'flex',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(255,45,149,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,45,149,0.5)';
              }}
            >
              <span style={{
                color: '#fff',
                letterSpacing: '1px',
                fontSize: '12px',
                fontWeight: '800',
              }}>
                END WEEK ›
              </span>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          flexDirection: 'row',
          gap: '0',
          display: 'flex',
        }}>
          <div style={{ flex: 1 }}>
            <div style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: '6px',
              display: 'flex',
            }}>
              <img src="/app-assets/voidmusician-cash.png" alt="cash" style={{ width: '12px', height: '12px' }} />
              <span style={{
                color: 'rgba(255,255,255,0.3)',
                fontSize: '9px',
                letterSpacing: '2px',
                fontWeight: '600',
              }}>
                CASH
              </span>
            </div>
            <span style={{
              color: theme.lime,
              fontSize: '18px',
              fontWeight: '800',
              letterSpacing: '-1px',
              marginTop: '3px',
            }}>
              {fmtN(cash)}
            </span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: '6px',
              display: 'flex',
            }}>
              <img src="/app-assets/voidmusician-energy.png" alt="energy" style={{ width: '12px', height: '12px' }} />
              <span style={{
                color: 'rgba(255,255,255,0.3)',
                fontSize: '9px',
                letterSpacing: '2px',
                fontWeight: '600',
              }}>
                ENERGY
              </span>
            </div>
            <span style={{
              color: energy > maxEnergy * 0.5 ? theme.cyan : theme.amber,
              fontSize: '18px',
              fontWeight: '800',
              letterSpacing: '-1px',
              marginTop: '3px',
            }}>
              {energy}<span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>/100</span>
            </span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: '6px',
              display: 'flex',
            }}>
              <img src="/app-assets/voidmusician-fame.png" alt="fame" style={{ width: '12px', height: '12px' }} />
              <span style={{
                color: 'rgba(255,255,255,0.3)',
                fontSize: '9px',
                letterSpacing: '2px',
                fontWeight: '600',
              }}>
                FAME
              </span>
            </div>
            <span style={{
              color: theme.pink,
              fontSize: '18px',
              fontWeight: '800',
              letterSpacing: '-1px',
              marginTop: '3px',
            }}>
              {fame}<span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>/100</span>
            </span>
          </div>
          <div style={{ flex: 1 }}>
            <span style={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: '9px',
              letterSpacing: '2px',
              fontWeight: '600',
            }}>
              FANS
            </span>
            <span style={{
              color: theme.cyan,
              fontSize: '18px',
              fontWeight: '800',
              letterSpacing: '-1px',
              marginTop: '3px',
            }}>
              {fmtN(fans)}
            </span>
          </div>
        </div>

        {/* Fame bar */}
        <div style={{
          marginTop: '14px',
          height: '2px',
          backgroundColor: 'rgba(255,255,255,0.06)',
          borderRadius: '1px',
        }}>
          <div style={{
            height: '100%',
            width: `${fame}%`,
            backgroundColor: theme.pink,
            borderRadius: '1px',
            boxShadow: '0 0 6px rgba(255,45,149,1)',
          }} />
        </div>
      </div>

      {/* Platform Buttons - adapted from DashboardScreen.js lines 178-213 */}
      <div style={{
        flexDirection: 'row',
        gap: '8px',
        marginTop: '20px',
        display: 'flex',
      }}>
        {streamingPlatforms.map((platform) => (
          <div
            key={platform.code}
            style={{
              flex: 1,
              backgroundColor: `${platform.color}10`,
              borderRadius: '18px',
              borderWidth: '1px',
              borderColor: `${platform.color}30`,
              height: '70px',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 0 24px ${platform.color}30`,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <img
              src={platform.image}
              alt={platform.label}
              style={{
                width: '48px',
                height: '48px',
                objectFit: 'contain',
              }}
            />
            <span style={{
              fontSize: '8px',
              color: 'rgba(255,255,255,0.6)',
              marginTop: '4px',
            }}>
              {platform.label}
            </span>
          </div>
        ))}
      </div>

      {/* Song Creation Section - adapted from DashboardScreen.js lines 216-335 */}
      <div style={{ marginTop: '24px' }}>
        <span style={{
          fontSize: '18px',
          color: theme.text,
          marginBottom: '12px',
          display: 'block',
        }}>
          New Session
        </span>
        <div style={{
          backgroundColor: 'rgba(255,45,149,0.06)',
          borderWidth: '1px',
          borderColor: 'rgba(255,45,149,0.15)',
          borderRadius: '16px',
          padding: '16px',
          gap: '14px',
          boxShadow: '0 0 30px rgba(255,45,149,0.15)',
        }}>
          {/* Cover + Title */}
          <div style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: '10px',
            display: 'flex',
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255,255,255,0.06)',
              borderWidth: '1px',
              borderColor: 'rgba(255,255,255,0.12)',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}>
              <span style={{ fontSize: '24px' }}>🎵</span>
            </div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Song title..."
              style={{
                flex: 1,
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '12px',
                color: theme.text,
                padding: '10px 14px',
                fontSize: '14px',
                border: 'none',
                outline: 'none',
              }}
            />
          </div>

          {/* Selectors grid */}
          <div style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '8px',
            display: 'flex',
          }}>
            <div
              onClick={() => setSelectedGenre(GENRES[(GENRES.indexOf(selectedGenre) + 1) % GENRES.length])}
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '12px',
                flex: '1 1 calc(50% - 4px)',
                minWidth: '120px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
              }}
            >
              <span style={{
                color: theme.muted,
                fontSize: '10px',
                letterSpacing: '1px',
                display: 'block',
              }}>
                GENRE
              </span>
              <span style={{
                color: theme.text,
                fontSize: '13px',
                fontWeight: '600',
                display: 'block',
                marginTop: '2px',
              }}>
                {selectedGenre}
              </span>
            </div>
            <div
              onClick={() => setShowFeatureModal(true)}
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '12px',
                flex: '1 1 calc(50% - 4px)',
                minWidth: '120px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
              }}
            >
              <span style={{
                color: theme.muted,
                fontSize: '10px',
                letterSpacing: '1px',
                display: 'block',
              }}>
                FEATURES
              </span>
              <span style={{
                color: theme.text,
                fontSize: '13px',
                fontWeight: '600',
                display: 'block',
                marginTop: '2px',
              }}>
                {selectedFeatures.length === 0 ? 'None' : `${selectedFeatures.length} selected`}
              </span>
            </div>
            <div
              onClick={() => setShowAlbumModal(true)}
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '12px',
                flex: '1 1 calc(50% - 4px)',
                minWidth: '120px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
              }}
            >
              <span style={{
                color: theme.muted,
                fontSize: '10px',
                letterSpacing: '1px',
                display: 'block',
              }}>
                ALBUM
              </span>
              <span style={{
                color: albumTitle ? theme.amber : theme.text,
                fontSize: '13px',
                fontWeight: '600',
                display: 'block',
                marginTop: '2px',
              }}>
                {albumTitle || 'None (single)'}
              </span>
            </div>
            <div
              onClick={() => setProducerIndex(cycle(producerIndex, producers.length))}
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '12px',
                flex: '1 1 calc(50% - 4px)',
                minWidth: '120px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
              }}
            >
              <span style={{
                color: theme.muted,
                fontSize: '10px',
                letterSpacing: '1px',
                display: 'block',
              }}>
                PRODUCER
              </span>
              <span style={{
                color: theme.text,
                fontSize: '13px',
                fontWeight: '600',
                display: 'block',
                marginTop: '2px',
              }}>
                {producer.name}
              </span>
              <span style={{
                color: theme.cyan,
                fontSize: '10px',
                display: 'block',
                marginTop: '2px',
              }}>
                {producer.qualityBoost}/100 · £{producer.cost.toLocaleString()}
              </span>
            </div>
            <div
              onClick={() => setWriterIndex(cycle(writerIndex, writers.length))}
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '12px',
                flex: '1 1 calc(50% - 4px)',
                minWidth: '120px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
              }}
            >
              <span style={{
                color: theme.muted,
                fontSize: '10px',
                letterSpacing: '1px',
                display: 'block',
              }}>
                WRITER
              </span>
              <span style={{
                color: theme.text,
                fontSize: '13px',
                fontWeight: '600',
                display: 'block',
                marginTop: '2px',
              }}>
                {writer.name}
              </span>
              <span style={{
                color: theme.lime,
                fontSize: '10px',
                display: 'block',
                marginTop: '2px',
              }}>
                {writer.lyricBoost}/100 · £{writer.cost.toLocaleString()}
              </span>
            </div>
            <div
              onClick={() => setStudioIndex(cycle(studioIndex, studios.length))}
              style={{
                backgroundColor: 'rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '12px',
                flex: '1 1 calc(50% - 4px)',
                minWidth: '120px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
              }}
            >
              <span style={{
                color: theme.muted,
                fontSize: '10px',
                letterSpacing: '1px',
                display: 'block',
              }}>
                STUDIO
              </span>
              <span style={{
                color: theme.text,
                fontSize: '13px',
                fontWeight: '600',
                display: 'block',
                marginTop: '2px',
              }}>
                {studio.name}
              </span>
              <span style={{
                color: theme.cyan,
                fontSize: '10px',
                display: 'block',
                marginTop: '2px',
              }}>
                {studio.studioBoost}/100 · £{studio.cost.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Cost + Create */}
          <div style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '12px',
            borderTopWidth: '1px',
            borderColor: theme.border,
            display: 'flex',
          }}>
            <div>
              <span style={{
                color: theme.muted,
                fontSize: '10px',
                letterSpacing: '1px',
                display: 'block',
              }}>
                TOTAL COST
              </span>
              <div style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: '8px',
                marginTop: '2px',
                display: 'flex',
              }}>
                <div style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '5px',
                  display: 'flex',
                }}>
                  <img src="/app-assets/voidmusician-cash.png" alt="cash" style={{ width: '12px', height: '12px' }} />
                  <span style={{ color: theme.text, fontSize: '13px' }}> {totalCost.toLocaleString()}</span>
                </div>
                <span style={{ color: theme.muted, fontSize: '13px' }}>·</span>
                <div style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '5px',
                  display: 'flex',
                }}>
                  <img src="/app-assets/voidmusician-energy.png" alt="energy" style={{ width: '12px', height: '12px' }} />
                  <span style={{ color: theme.text, fontSize: '13px' }}> 25</span>
                </div>
              </div>
            </div>
            <div
              onClick={handleCreateSong}
              style={{
                backgroundColor: theme.pink,
                padding: '12px 24px',
                borderRadius: '12px',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(255,45,149,0.5)',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(255,45,149,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,45,149,0.5)';
              }}
            >
              <span style={{
                color: '#fff',
                letterSpacing: '1px',
                fontWeight: '800',
                fontSize: '13px',
              }}>
                CREATE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Selection Modal */}
      {showFeatureModal && (
        <div
          onClick={() => setShowFeatureModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'rgba(26,16,51,0.95)',
              borderRadius: '20px',
              padding: '24px',
              border: '1px solid ' + theme.border,
              width: '90%',
              maxWidth: '400px',
            }}
          >
            <h3 style={{
              color: theme.text,
              fontSize: '18px',
              fontWeight: '700',
              margin: '0 0 16px 0',
            }}>
              Select Features
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              {FEATURES.map((feature) => (
                <div
                  key={feature}
                  onClick={() => toggleFeature(feature)}
                  style={{
                    padding: '12px',
                    borderRadius: '12px',
                    background: selectedFeatures.includes(feature)
                      ? 'rgba(255,45,149,0.2)'
                      : 'rgba(255,255,255,0.05)',
                    border: selectedFeatures.includes(feature)
                      ? '1px solid rgba(255,45,149,0.5)'
                      : '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (!selectedFeatures.includes(feature)) {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!selectedFeatures.includes(feature)) {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    }
                  }}
                >
                  <span style={{
                    color: theme.text,
                    fontSize: '14px',
                    fontWeight: '500',
                  }}>
                    {selectedFeatures.includes(feature) ? '✓ ' : ''}{feature}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowFeatureModal(false)}
              style={{
                marginTop: '16px',
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                background: theme.pink,
                border: 'none',
                color: '#fff',
                fontSize: '14px',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Album Modal */}
      {showAlbumModal && (
        <div
          onClick={() => setShowAlbumModal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'rgba(26,16,51,0.95)',
              borderRadius: '20px',
              padding: '24px',
              border: '1px solid ' + theme.border,
              width: '90%',
              maxWidth: '400px',
            }}
          >
            <h3 style={{
              color: theme.text,
              fontSize: '18px',
              fontWeight: '700',
              margin: '0 0 16px 0',
            }}>
              Album Name
            </h3>
            <input
              type="text"
              value={newAlbumName}
              onChange={(e) => setNewAlbumName(e.target.value)}
              placeholder="Enter album name..."
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: theme.text,
                fontSize: '14px',
                outline: 'none',
                marginBottom: '16px',
              }}
            />
            <div style={{
              display: 'flex',
              gap: '8px',
            }}>
              <button
                onClick={() => {
                  setAlbumTitle(newAlbumName);
                  setNewAlbumName('');
                  setShowAlbumModal(false);
                }}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: '12px',
                  background: theme.pink,
                  border: 'none',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                }}
              >
                Set Album
              </button>
              <button
                onClick={() => {
                  setAlbumTitle('');
                  setNewAlbumName('');
                  setShowAlbumModal(false);
                }}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: theme.text,
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                }}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Weekly Summary Modal */}
      {weeklySummary && (
        <div
          onClick={() => setWeeklySummary(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'rgba(26,16,51,0.95)',
              borderRadius: '20px',
              padding: '24px',
              border: '1px solid ' + theme.border,
              width: '90%',
              maxWidth: '400px',
            }}
          >
            <h3 style={{
              color: theme.text,
              fontSize: '20px',
              fontWeight: '700',
              margin: '0 0 20px 0',
              textAlign: 'center',
            }}>
              Week {week - 1} Complete
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.05)',
              }}>
                <span style={{ color: theme.muted, fontSize: '14px' }}>Fans Gained</span>
                <span style={{ color: theme.cyan, fontSize: '14px', fontWeight: '700' }}>+{fmtN(weeklySummary.fanGain)}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.05)',
              }}>
                <span style={{ color: theme.muted, fontSize: '14px' }}>Cash Earned</span>
                <span style={{ color: theme.lime, fontSize: '14px', fontWeight: '700' }}>+£{fmtN(weeklySummary.cashGain)}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.05)',
              }}>
                <span style={{ color: theme.muted, fontSize: '14px' }}>Fame Gained</span>
                <span style={{ color: theme.pink, fontSize: '14px', fontWeight: '700' }}>+{weeklySummary.fameGain}</span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.05)',
              }}>
                <span style={{ color: theme.muted, fontSize: '14px' }}>Songs Released</span>
                <span style={{ color: theme.text, fontSize: '14px', fontWeight: '700' }}>{weeklySummary.songsReleased}</span>
              </div>
            </div>
            <button
              onClick={() => setWeeklySummary(null)}
              style={{
                marginTop: '20px',
                width: '100%',
                padding: '12px',
                borderRadius: '12px',
                background: theme.pink,
                border: 'none',
                color: '#fff',
                fontSize: '14px',
                fontWeight: '700',
                cursor: 'pointer',
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
