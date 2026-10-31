import React, { useState, useEffect, useRef } from 'react';

// Adapted from actual Zen Void apps/mobile/src/app/(tabs)/breathing/index.jsx
// Key elements: 200px colored orb with Wind icon, outer ring, phase text, countdown

export default function ZenVoidBreathingVisual() {
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathPhase, setBreathPhase] = useState('ready');
  const [cycleCount, setCycleCount] = useState(0);
  const [selectedPattern] = useState({
    id: 1,
    name: 'Stress Relief',
    description: '4-7-8 calming rhythm',
    inhale: 4,
    hold: 7,
    exhale: 8,
    color: '#c4b5fd',
  });
  
  const breathScale = useRef(0.7);
  const breathOpacity = useRef(0.3);
  const ringScale = useRef(1);
  

  useEffect(() => {
    // Breathing cycle animation - from lines 93-131
    let phaseIndex = 0;
    const phases = ['inhale', 'hold', 'exhale'];
    const durations = [4000, 7000, 8000];
    const scales = [1.3, 1.3, 0.7];
    const opacities = [0.85, 0.85, 0.3];

    const runCycle = async () => {
      while (true) {
        const phase = phases[phaseIndex];
        setBreathPhase(phase);
        breathScale.current = scales[phaseIndex];
        breathOpacity.current = opacities[phaseIndex];
        await new Promise(r => setTimeout(r, durations[phaseIndex]));
        phaseIndex = (phaseIndex + 1) % phases.length;
        if (phaseIndex === 0) {
          setCycleCount(c => c + 1);
        }
      }
    };

    runCycle();
  }, []);

  useEffect(() => {
    // Ring pulse animation - from lines 123-128
    let pulse = 1;
    let direction = 1;
    const interval = setInterval(() => {
      pulse += direction * 0.01;
      if (pulse >= 1.05) direction = -1;
      if (pulse <= 1) direction = 1;
      ringScale.current = pulse;
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const getPhaseText = () =>
    breathPhase === 'inhale'
      ? 'Breathe In'
      : breathPhase === 'hold'
      ? 'Hold'
      : breathPhase === 'exhale'
      ? 'Breathe Out'
      : 'Tap to Begin';

  const getPhaseSubtext = () =>
    breathPhase === 'inhale'
      ? `${selectedPattern.inhale}s`
      : breathPhase === 'hold'
      ? `${selectedPattern.hold}s`
      : breathPhase === 'exhale'
      ? `${selectedPattern.exhale}s`
      : selectedPattern.name;

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(180deg, #0F0A1F 0%, #1a1033 50%, #0F0A1F 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '100px',
      paddingBottom: '40px',
    }}>
      {/* Settings button - from lines 211-216 */}
      <div style={{
        position: 'absolute',
        top: '60px',
        right: '24px',
        width: '48px',
        height: '48px',
        borderRadius: '24px',
        backgroundColor: 'rgba(255,255,255,0.08)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: '1px',
        borderColor: 'rgba(255,255,255,0.1)',
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f8fafc" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m11-11h-6m-6 0H1m15.5-4.5l-4.2 4.2m-8.4 0l-4.2-4.2m0 10.6l4.2 4.2m8.4 0l4.2 4.2" />
        </svg>
      </div>

      {/* Outer ring - from lines 220-228 */}
      <div style={{
        position: 'absolute',
        width: '140px',
        height: '140px',
        borderRadius: '70px',
        borderWidth: '1px',
        borderColor: `${selectedPattern.color}30`,
        transform: `scale(${ringScale.current})`,
        transition: 'transform 0.05s ease-out',
      }} />

      {/* Breathing orb with Wind icon - from lines 230-242 */}
      <div style={{
        width: '100px',
        height: '100px',
        borderRadius: '50px',
        backgroundColor: selectedPattern.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: `scale(${breathScale.current})`,
        opacity: breathOpacity.current,
        boxShadow: `0 0 40px ${selectedPattern.color}`,
        transition: 'transform 0.05s ease-out, opacity 0.05s ease-out',
      }}>
        {/* Wind icon from lucide-react-native */}
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
          <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
          <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
        </svg>
      </div>

      {/* Phase text - from lines 244-246 */}
      <div style={{
        fontSize: '20px',
        fontWeight: '200',
        color: '#f8fafc',
        marginTop: '30px',
        letterSpacing: '1px',
      }}>
        {getPhaseText()}
      </div>

      {/* Subtext - from lines 248-250 */}
      <div style={{
        fontSize: '12px',
        fontWeight: '400',
        marginTop: '6px',
        fontStyle: 'italic',
        color: selectedPattern.color,
      }}>
        {getPhaseSubtext()}
      </div>

      {/* Cycle count - from lines 252-256 */}
      {cycleCount > 0 && (
        <div style={{
          marginTop: '20px',
          backgroundColor: 'rgba(255,255,255,0.06)',
          paddingHorizontal: '16px',
          paddingVertical: '6px',
          borderRadius: '16px',
        }}>
          <span style={{ color: '#94a3b8', fontSize: '11px' }}>
            Cycle {cycleCount}
          </span>
        </div>
      )}

      {/* Hint text - from lines 258-265 */}
      {breathPhase === 'ready' && (
        <div style={{
          position: 'absolute',
          bottom: '60px',
          alignItems: 'center',
        }}>
          <span style={{ color: '#64748b', fontSize: '12px', marginBottom: '6px', display: 'block' }}>
            Tap anywhere to begin
          </span>
          <span style={{ color: '#475569', fontSize: '11px' }}>
            {selectedPattern.inhale}-{selectedPattern.hold}-{selectedPattern.exhale} rhythm
          </span>
        </div>
      )}
    </div>
  );
}
