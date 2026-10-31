import React from "react";

const moodOptions = [
  { value: 1, color: '#ef4444', emoji: '😔', label: 'Rough' },
  { value: 2, color: '#f59e0b', emoji: '😐', label: 'Okay' },
  { value: 3, color: '#6366f1', emoji: '🙂', label: 'Good' },
  { value: 4, color: '#8b5cf6', emoji: '😊', label: 'Great' },
  { value: 5, color: '#ec4899', emoji: '😄', label: 'Amazing' },
];

export default function MoodSelector({
  selectedMood,
  handleMoodSelect,
  moodGlowAnimation,
}) {
  return (
    <div style={{ padding: '20px 16px', marginBottom: '20px' }}>
      {/* Mood Buttons Row */}
      <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginBottom: '0' }}>
        {moodOptions.map((mood) => {
          const isSelected = selectedMood === mood.value;
          return (
            <button
              key={mood.value}
              onClick={() => handleMoodSelect(mood.value)}
              style={{
                width: '48px',
                height: '48px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transform: isSelected ? 'scale(1.1)' : 'scale(1)',
                transition: 'transform 0.2s ease',
              }}
            >
              <span style={{ fontSize: '26px', opacity: isSelected ? 1 : 0.8 }}>
                {mood.emoji}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mood Label */}
      {selectedMood && (
        <div style={{ marginTop: '12px' }}>
          <span style={{ fontSize: '16px', color: moodOptions.find((m) => m.value === selectedMood)?.color, textAlign: 'center', textTransform: 'capitalize', display: 'block' }}>
            {moodOptions.find((m) => m.value === selectedMood)?.label || "Feeling"}
          </span>
        </div>
      )}
    </div>
  );
}
