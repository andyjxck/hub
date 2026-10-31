import React from "react";

export default function GratitudeInput({ gratitude, setGratitude }) {
  return (
    <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
      <textarea
        value={gratitude}
        onChange={(e) => setGratitude(e.target.value)}
        placeholder="Three things I'm grateful for..."
        placeholderTextColor="#94a3b8"
        style={{
          width: "100%",
          minHeight: "80px",
          padding: "16px",
          fontSize: "16px",
          color: "#f8fafc",
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          textAlignVertical: "top",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          resize: "vertical",
        }}
      />
    </div>
  );
}
