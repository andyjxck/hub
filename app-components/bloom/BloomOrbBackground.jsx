import React, { useEffect, useRef } from "react";

export default function BloomOrbBackground({ children }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "#0d1117", overflow: "hidden" }}>
      <style>{`
        @keyframes bloomOrb1 {
          0%, 100% { transform: scale(1); opacity: 0.22; }
          50% { transform: scale(1.08); opacity: 0.32; }
        }
        @keyframes bloomOrb2 {
          0%, 100% { transform: scale(1); opacity: 0.14; }
          50% { transform: scale(1.06); opacity: 0.20; }
        }
        @keyframes bloomOrb3 {
          0%, 100% { transform: scale(1); opacity: 0.10; }
          50% { transform: scale(1.04); opacity: 0.14; }
        }
        .bloom-orb1 {
          position: absolute;
          top: -20%;
          right: -15%;
          width: 70%;
          padding-bottom: 70%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(93,138,168,0.35) 0%, rgba(93,138,168,0) 70%);
          animation: bloomOrb1 8s ease-in-out infinite;
        }
        .bloom-orb2 {
          position: absolute;
          bottom: -25%;
          left: -20%;
          width: 60%;
          padding-bottom: 60%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(127,176,105,0.28) 0%, rgba(127,176,105,0) 70%);
          animation: bloomOrb2 10s ease-in-out infinite;
          animation-delay: -3s;
        }
        .bloom-orb3 {
          position: absolute;
          top: 40%;
          right: -15%;
          width: 50%;
          padding-bottom: 50%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(74,124,140,0.20) 0%, rgba(74,124,140,0) 70%);
          animation: bloomOrb3 12s ease-in-out infinite;
          animation-delay: -6s;
        }
      `}</style>
      <div className="bloom-orb1" />
      <div className="bloom-orb2" />
      <div className="bloom-orb3" />
      <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100%" }}>
        {children}
      </div>
    </div>
  );
}
