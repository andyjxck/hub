import React from "react";

export default function SleepHours({ sleep, setSleep, disabled = false }) {
  if (disabled) {
    return (
      <div style={{ marginBottom: '20px' }}>
        <span style={{ fontSize: '16px', color: '#ffffff', textAlign: 'center', display: 'block' }}>
          You've already recorded your sleep today 🌙
        </span>
      </div>
    );
  }

  const row1 = [0, 1, 2, 3, 4, 5, 6];
  const row2 = [7, 8, 9, 10, 11, "12+"];

  const renderRow = (arr) => (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '8px' }}>
      {arr.map((h) => (
        <button
          key={h}
          onClick={() => setSleep(h)}
          disabled={disabled}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: sleep === h ? '#6366f1' : 'rgba(255, 255, 255, 0.15)',
            border: sleep === h ? '1px solid #818cf8' : '1px solid rgba(255,255,255,0.3)',
            color: '#fff',
            fontSize: '14px',
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
        >
          {h}
        </button>
      ))}
    </div>
  );

  return (
    <div style={{ marginBottom: '20px', alignItems: 'center', textAlign: 'center' }}>
      <span style={{ fontSize: '16px', color: '#ffffff', marginBottom: '12px', display: 'block' }}>
        Sleep Hours: {sleep ?? "—"}{sleep == null ? "" : "h"}
      </span>

      {renderRow(row1)}
      {renderRow(row2)}
    </div>
  );
}
