import React, { useState, useEffect } from 'react';

// Exact recreation from Bloom components/ui/Pet.tsx, SobrietyTimer.tsx, GlassCard.tsx
// Pet with breathing animation, sobriety timer with glass card styling

export default function BloomVisual() {
  const [petScale, setPetScale] = useState(1);
  const [days, setDays] = useState(47);
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(34);
  const [seconds, setSeconds] = useState(56);

  useEffect(() => {
    // Pet breathing animation - from Pet.tsx lines 55-75
    let scale = 1;
    let direction = 1;
    const interval = setInterval(() => {
      scale += direction * 0.015;
      if (scale >= 1.03) direction = -1;
      if (scale <= 1) direction = 1;
      setPetScale(scale);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => {
        if (s <= 0) {
          setMinutes(m => {
            if (m <= 0) {
              setHours(h => {
                if (h <= 0) {
                  setDays(d => d - 1);
                  return 23;
                }
                return h - 1;
              });
              return 59;
            }
            return m - 1;
          });
          return 59;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(160deg, #1a0533 0%, #2d1463 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      {/* Pet with breathing animation - from Pet.tsx lines 86-99 */}
      <div style={{
        width: '140px',
        height: '140px',
        marginBottom: '24px',
        transform: `scale(${petScale})`,
        transition: 'transform 0.05s ease-out',
        alignSelf: 'center',
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15) 0%, transparent 70%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '70px',
        }}>
          🐕
        </div>
      </div>

      {/* Glass card with sobriety timer - from SobrietyTimer.tsx and GlassCard.tsx */}
      <div style={{
        alignItems: 'center',
        marginVertical: '8px',
        padding: '20px',
        borderRadius: '20px',
        borderWidth: '1px',
        borderColor: 'rgba(255,255,255,0.2)',
        backgroundColor: 'rgba(255,255,255,0.12)',
        backdropFilter: 'blur(10px)',
        width: '100%',
        maxWidth: '260px',
      }}>
        {/* Label - from SobrietyTimer.tsx lines 16-18 */}
        <div style={{
          fontSize: '14px',
          fontWeight: '400',
          marginBottom: '8px',
          opacity: 0.5,
          color: 'rgba(255,255,255,0.7)',
        }}>
          Alcohol-free
        </div>

        {/* Time row - from SobrietyTimer.tsx lines 19-36 */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'baseline',
          gap: '8px',
        }}>
          {/* Days */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
            <span style={{
              fontSize: '40px',
              fontWeight: '800',
              letterSpacing: '-1px',
              color: '#fff',
            }}>{days}</span>
            <span style={{
              fontSize: '20px',
              fontWeight: '500',
              opacity: 0.4,
              marginLeft: '2px',
              color: 'rgba(255,255,255,0.7)',
            }}>d</span>
          </div>

          {/* Hours */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
            <span style={{
              fontSize: '40px',
              fontWeight: '800',
              letterSpacing: '-1px',
              color: '#fff',
            }}>{hours.toString().padStart(2, '0')}</span>
            <span style={{
              fontSize: '20px',
              fontWeight: '500',
              opacity: 0.4,
              marginLeft: '2px',
              color: 'rgba(255,255,255,0.7)',
            }}>h</span>
          </div>

          {/* Minutes */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
            <span style={{
              fontSize: '40px',
              fontWeight: '800',
              letterSpacing: '-1px',
              color: '#fff',
            }}>{minutes.toString().padStart(2, '0')}</span>
            <span style={{
              fontSize: '20px',
              fontWeight: '500',
              opacity: 0.4,
              marginLeft: '2px',
              color: 'rgba(255,255,255,0.7)',
            }}>m</span>
          </div>

          {/* Seconds */}
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
            <span style={{
              fontSize: '40px',
              fontWeight: '800',
              letterSpacing: '-1px',
              color: '#fff',
            }}>{seconds.toString().padStart(2, '0')}</span>
            <span style={{
              fontSize: '20px',
              fontWeight: '500',
              opacity: 0.4,
              marginLeft: '2px',
              color: 'rgba(255,255,255,0.7)',
            }}>s</span>
          </div>
        </div>
      </div>
    </div>
  );
}
