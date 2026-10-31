import React, { useState } from 'react';

export default function FootballLifeVisual() {
  const [selectedSection, setSelectedSection] = useState(null);

  const navItems = [
    { section: 'Football', accent: '#1e8a3c', items: [
      { key: 'matches', label: 'Matches', sub: 'Results & performance', icon: '⚽' },
      { key: 'training', label: 'Training', sub: 'Improve your skills', icon: '💪' },
      { key: 'teams', label: 'Teams', sub: 'Clubs & contracts', icon: '👥' },
      { key: 'leagues', label: 'Leagues', sub: 'Standings & fixtures', icon: '🏆' },
      { key: 'career', label: 'Career', sub: 'History & milestones', icon: '🎖️' },
    ]},
    { section: 'Business', accent: '#c88020', items: [
      { key: 'endorsements', label: 'Endorsements', sub: 'Sponsorship deals', icon: '🤝' },
      { key: 'social', label: 'Social Media', sub: 'Build your fanbase', icon: '📱' },
      { key: 'stadium', label: 'Stadium', sub: 'Upgrade your ground', icon: '🏟️' },
    ]},
  ];

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#060a0f',
      borderRadius: '16px',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      border: '1px solid rgba(255,255,255,0.07)',
      overflow: 'hidden',
    }}>
      {/* Hero Card */}
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '14px',
        border: '1px solid ' + 'rgba(255,255,255,0.07)',
        padding: '16px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', letterSpacing: '1.5px', fontWeight: '700', marginBottom: '4px' }}>
              WEEK 12 · SEASON 3
            </div>
            <div style={{ color: '#f0f0f5', fontSize: '22px', fontWeight: '800', letterSpacing: '-0.5px' }}>Marcus Silva</div>
            <div style={{ color: '#72aa20', fontSize: '12px', fontWeight: '700', marginTop: '2px' }}>Manchester City</div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', marginTop: '2px' }}>
              ST · Age 21
            </div>
          </div>
          <div style={{
            borderRadius: '10px',
            background: '#1e8a3c',
            border: '1px solid ' + 'rgba(30,138,60,0.5)',
            padding: '8px 14px',
            minWidth: '60px',
            textAlign: 'center',
          }}>
            <div style={{ color: '#fff', fontSize: '9px', fontWeight: '800', letterSpacing: '1px', lineHeight: 1.2 }}>END<br/>WEEK</div>
          </div>
        </div>

        {/* Stats Strip */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingTop: '12px',
          borderTop: '1px solid ' + 'rgba(255,255,255,0.07)',
        }}>
          {[
            { label: 'CASH', value: '£2.4M', color: '#72aa20' },
            { label: 'ENERGY', value: '85/100', color: '#00a8be' },
            { label: 'OVR', value: '78', color: '#1e8a3c' },
            { label: 'REP', value: '45', color: '#c88020' },
            { label: 'FANS', value: '1.2M', color: '#c8246e' },
          ].map((stat, i, arr) => (
            <React.Fragment key={stat.label}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: stat.color, fontSize: '14px', fontWeight: '800' }}>{stat.value}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '8px', letterSpacing: '1px', fontWeight: '700', marginTop: '2px' }}>{stat.label}</div>
              </div>
              {i < arr.length - 1 && <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.07)' }} />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Last Match */}
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        borderRadius: '12px',
        border: '1px solid ' + 'rgba(255,255,255,0.07)',
        padding: '12px',
      }}>
        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px', letterSpacing: '1px', fontWeight: '700', marginBottom: '8px' }}>LAST MATCH</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: 1 }}>
            <div style={{ color: '#f0f0f5', fontSize: '12px', fontWeight: '700' }}>
              Man City <span style={{ color: 'rgba(255,255,255,0.4)' }}>vs</span> Liverpool
            </div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', marginTop: '2px' }}>
              Rating: <span style={{ color: '#72aa20', fontWeight: '700' }}>8.2</span> · <span style={{ color: '#72aa20' }}>2G</span> · <span style={{ color: '#00a8be' }}>1A</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ color: '#f0f0f5', fontSize: '18px', fontWeight: '800' }}>3–1</div>
            <div style={{
              background: 'rgba(114,170,32,0.15)',
              borderRadius: '4px',
              padding: '2px 6px',
              border: '1px solid ' + 'rgba(114,170,32,0.3)',
            }}>
              <div style={{ color: '#72aa20', fontSize: '9px', fontWeight: '800' }}>W</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sections */}
      {navItems.map((section) => (
        <div key={section.section} style={{ marginTop: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
            <div style={{ width: '3px', height: '10px', borderRadius: '1px', background: section.accent }} />
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '8px', letterSpacing: '1.5px', fontWeight: '700' }}>
              {section.section.toUpperCase()}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {section.items.map((item) => (
              <div
                key={item.key}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  borderRadius: '10px',
                  padding: '10px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: '1px solid ' + 'rgba(255,255,255,0.07)',
                  cursor: 'pointer',
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid ' + 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: '#f0f0f5', fontSize: '12px', fontWeight: '600' }}>{item.label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '9px', marginTop: '1px' }}>{item.sub}</div>
                </div>
                <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '12px' }}>›</div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Training Preview */}
      <div style={{ marginTop: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
          <div style={{ width: '3px', height: '10px', borderRadius: '1px', background: '#72aa20' }} />
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '8px', letterSpacing: '1.5px', fontWeight: '700' }}>
            TRAINING
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {[
            { label: 'Shooting Practice', energy: 15, gains: '+3 Shooting, +1 Pace' },
            { label: 'Passing Drills', energy: 12, gains: '+3 Passing, +2 Vision' },
            { label: 'Dribbling Course', energy: 14, gains: '+3 Dribbling, +2 Pace' },
          ].map((drill) => (
            <div
              key={drill.label}
              style={{
                background: 'rgba(30,138,60,0.06)',
                borderRadius: '10px',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid ' + 'rgba(30,138,60,0.25)',
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ color: '#f0f0f5', fontSize: '11px', fontWeight: '700' }}>{drill.label}</div>
                <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '9px', marginTop: '2px' }}>{drill.gains}</div>
              </div>
              <div style={{
                background: 'rgba(0,168,190,0.12)',
                borderRadius: '8px',
                padding: '4px 10px',
                border: '1px solid ' + 'rgba(0,168,190,0.25)',
                textAlign: 'center',
                minWidth: '40px',
              }}>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '7px', fontWeight: '700', letterSpacing: '0.5px' }}>ENERGY</div>
                <div style={{ color: '#00a8be', fontSize: '13px', fontWeight: '800' }}>{drill.energy}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
