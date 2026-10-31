import React, { useState, useEffect } from "react";
import GratitudeInput from "./GratitudeInput";

export default function ExpandableOptions({
  isExpanded,
  setIsExpanded,
  gratitude,
  setGratitude,
  energy,
  setEnergy,
  stressLevel,
  setStressLevel,
  socialEnergy,
  setSocialEnergy,
  productivity,
  setProductivity,
  physicalActivity,
  setPhysicalActivity,
  selectedTags,
  handleTagToggle,
}) {
  const [pageIndex, setPageIndex] = useState(0);

  const prompts = [
    "Three things I'm grateful for today",
    "Three small wins I noticed",
    "Three moments that gave me peace",
    "Three things that made me smile",
    "Three people or things I appreciate",
  ];

  const [prompt, setPrompt] = useState(prompts[0]);

  useEffect(() => {
    if (isExpanded) {
      setPrompt(prompts[Math.floor(Math.random() * prompts.length)]);
    }
  }, [isExpanded]);

  const MetricSlider = ({ label, value, setValue, color }) => {
    const v = value || 0;

    return (
      <div style={{ marginBottom: '24px', alignItems: 'center', textAlign: 'center' }}>
        <span style={{ 
          color: "#f8fafc", 
          marginBottom: '12px', 
          fontSize: '16px', 
          fontWeight: '500',
          display: 'block',
        }}>
          {label}: {v > 0 ? `${v}/10` : "—"}
        </span>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {[...Array(10)].map((_, i) => {
            const n = i + 1;
            const active = v >= n;
            return (
              <button
                key={n}
                onClick={() => setValue(n)}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '18px',
                  backgroundColor: active ? color : 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: active ? '#ffffff' : '#cbd5e1',
                  fontWeight: '700',
                  fontSize: '16px',
                  cursor: 'pointer',
                  border: 'none',
                  boxShadow: active ? `0 4px 12px ${color}40` : 'none',
                }}
              >
                {n}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const tagGroups = {
    Mood: ["Calm", "Grateful", "Stressed", "Anxious", "Joyful", "Peaceful"],
    Energy: ["Tired", "Energized", "Drained", "Rested", "Balanced"],
    Focus: ["Motivated", "Distracted", "Inspired", "Creative", "Productive"],
    Social: ["Connected", "Lonely", "Supported", "Overwhelmed"],
  };

  const renderTags = () =>
    Object.entries(tagGroups).map(([group, tags]) => (
      <div key={group} style={{ marginBottom: '20px' }}>
        <span style={{ 
          textAlign: 'center', 
          color: '#f8fafc', 
          marginBottom: '12px', 
          fontSize: '16px',
          fontWeight: '600',
          display: 'block',
        }}>
          {group}
        </span>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {tags.map((tag) => {
            const active = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                style={{
                  padding: '10px 16px',
                  borderRadius: '16px',
                  backgroundColor: active ? 'rgba(167, 139, 250, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                  color: active ? '#c4b5fd' : '#94a3b8',
                  fontSize: '14px',
                  fontWeight: active ? '600' : '500',
                  cursor: 'pointer',
                  border: 'none',
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    ));

  const pages = [
    {
      key: 'gratitude',
      render: () => (
        <div style={{ textAlign: 'center', padding: '0 8px' }}>
          <span style={{ color: '#e5e7eb', marginBottom: '16px', fontSize: '15px', fontStyle: 'italic', display: 'block' }}>
            {prompt}
          </span>
          <GratitudeInput gratitude={gratitude} setGratitude={setGratitude} />
        </div>
      ),
    },
    {
      key: 'metrics',
      render: () => (
        <div>
          <MetricSlider label="Energy"            value={energy}           setValue={setEnergy}           color="#a5b4fc" />
          <MetricSlider label="Stress Level"      value={stressLevel}      setValue={setStressLevel}      color="#fbbf24" />
          <MetricSlider label="Social Energy"     value={socialEnergy}     setValue={setSocialEnergy}     color="#f9a8d4" />
          <MetricSlider label="Productivity"      value={productivity}     setValue={setProductivity}     color="#6ee7b7" />
          <MetricSlider label="Physical Activity" value={physicalActivity} setValue={setPhysicalActivity} color="#fdba74" />
        </div>
      ),
    },
    {
      key: 'tags',
      render: () => (
        <div style={{ textAlign: 'center' }}>
          <span style={{ color: '#f8fafc', fontSize: '16px', fontWeight: '600', marginBottom: '16px', display: 'block' }}>How would you describe today?</span>
          {renderTags()}
        </div>
      ),
    },
  ];

  const totalPages = pages.length;

  return (
    <div style={{ marginTop: '10px' }}>
      <button
        onClick={() => { setIsExpanded(!isExpanded); setPageIndex(0); }}
        style={{
          padding: '16px 18px',
          borderRadius: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          width: '100%',
          border: 'none',
          color: '#f8fafc',
          fontSize: '16px',
          fontWeight: '500',
        }}
      >
        <span style={{ color: '#f8fafc', fontSize: '16px', fontWeight: '500' }}>More options</span>
        <span style={{ color: '#a78bfa', fontSize: '18px' }}>
          {isExpanded ? "▲" : "▼"}
        </span>
      </button>

      {isExpanded && (
        <div style={{ marginTop: '20px' }}>
          {/* Page content */}
          <div style={{
            minHeight: '180px',
            padding: '20px 12px',
            backgroundColor: 'rgba(255,255,255,0.04)',
            borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.07)',
          }}>
            {pages[pageIndex].render()}
          </div>

          {/* Navigation row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '14px', padding: '0 4px' }}>
            <button
              onClick={() => setPageIndex(i => Math.max(0, i - 1))}
              disabled={pageIndex === 0}
              style={{
                width: '36px', height: '36px', borderRadius: '18px',
                backgroundColor: pageIndex === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(167,139,250,0.18)',
                border: 'none', cursor: pageIndex === 0 ? 'default' : 'pointer',
                color: pageIndex === 0 ? '#475569' : '#c4b5fd',
                fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >‹</button>

            {/* Dot indicators */}
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              {pages.map((p, i) => (
                <button
                  key={p.key}
                  onClick={() => setPageIndex(i)}
                  style={{
                    width: i === pageIndex ? '18px' : '7px',
                    height: '7px',
                    borderRadius: '4px',
                    backgroundColor: i === pageIndex ? '#a78bfa' : 'rgba(255,255,255,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'width 0.2s ease, background-color 0.2s ease',
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => setPageIndex(i => Math.min(totalPages - 1, i + 1))}
              disabled={pageIndex === totalPages - 1}
              style={{
                width: '36px', height: '36px', borderRadius: '18px',
                backgroundColor: pageIndex === totalPages - 1 ? 'rgba(255,255,255,0.04)' : 'rgba(167,139,250,0.18)',
                border: 'none', cursor: pageIndex === totalPages - 1 ? 'default' : 'pointer',
                color: pageIndex === totalPages - 1 ? '#475569' : '#c4b5fd',
                fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >›</button>
          </div>
        </div>
      )}
    </div>
  );
}
