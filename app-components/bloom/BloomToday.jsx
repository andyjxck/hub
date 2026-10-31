import React, { useState, useEffect, useMemo } from "react";

export default function BloomToday() {
  const [petScale, setPetScale] = useState(1);
  const [petType, setPetType] = useState("dog");
  const [speechMsg, setSpeechMsg] = useState(null);
  const [days, setDays] = useState(47);
  const [hours, setHours] = useState(12);
  const [minutes, setMinutes] = useState(34);
  const [seconds, setSeconds] = useState(56);
  const [journalExpanded, setJournalExpanded] = useState(false);
  const [mood, setMood] = useState(null);
  const [journalText, setJournalText] = useState("");

  const petImages = { dog: "/app-assets/bloom-dog-happy.png" };
  const petEmojis = { cat: "🐱", raccoon: "🦝" };
  const encouragements = [
    "You're doing great!", "Keep going!", "I'm proud of you",
    "One day at a time", "You've got this", "Stay strong",
  ];

  const greeting = useMemo(() => {
    const h = new Date().getHours();
    if (h < 5) return "Goodnight";
    if (h < 12) return "Good morning";
    if (h < 17) return "Good afternoon";
    if (h < 21) return "Good evening";
    return "Goodnight";
  }, []);

  // Pet breathing
  useEffect(() => {
    let scale = 1, dir = 1;
    const id = setInterval(() => {
      scale += dir * 0.012;
      if (scale >= 1.04) dir = -1;
      if (scale <= 1.0) dir = 1;
      setPetScale(scale);
    }, 50);
    return () => clearInterval(id);
  }, []);

  // Countdown timer
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(s => {
        if (s > 0) return s - 1;
        setMinutes(m => {
          if (m > 0) return m - 1;
          setHours(h => {
            if (h > 0) return h - 1;
            setDays(d => d - 1);
            return 23;
          });
          return 59;
        });
        return 59;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const handlePetTap = () => {
    const msg = encouragements[Math.floor(Math.random() * encouragements.length)];
    setSpeechMsg(msg);
    setTimeout(() => setSpeechMsg(null), 2500);
    const pets = ["dog", "cat", "raccoon"];
    setPetType(pets[(pets.indexOf(petType) + 1) % pets.length]);
  };

  const milestoneProgress = Math.round((days / 50) * 100);

  return (
    <div style={{ width: "100%", height: "100%", background: "transparent" }}>
      <div style={{ padding: "52px 20px 40px", overflowY: "auto", height: "100%" }}>

        {/* Greeting */}
        <div style={{ marginBottom: "20px" }}>
          <p style={{ fontSize: "28px", fontWeight: "800", color: "#f8fafc", margin: 0, lineHeight: 1.2 }}>
            {greeting}
          </p>
        </div>

        {/* Pet + speech bubble */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px", position: "relative" }}>
          {speechMsg && (
            <div style={{
              position: "absolute", top: "-8px",
              background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)",
              border: "1.5px solid rgba(255,255,255,0.2)",
              borderRadius: "14px", padding: "10px 16px",
              fontSize: "14px", fontWeight: "600", color: "#f8fafc",
              zIndex: 10, whiteSpace: "nowrap",
            }}>
              {speechMsg}
            </div>
          )}
          <div
            onClick={handlePetTap}
            style={{
              width: "130px", height: "130px", marginTop: "32px",
              transform: `scale(${petScale})`,
              transition: "transform 0.05s ease-out",
              cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            {petImages[petType] ? (
              <img
                src={petImages[petType]}
                alt={petType}
                style={{ width: "130px", height: "130px", objectFit: "contain", userSelect: "none" }}
              />
            ) : (
              <div style={{
                width: "130px", height: "130px",
                borderRadius: "50%",
                background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12) 0%, transparent 70%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "64px",
              }}>
                {petEmojis[petType]}
              </div>
            )}
          </div>
        </div>

        {/* Sobriety timer glass card */}
        <div style={{
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: "20px", padding: "18px 20px", marginBottom: "16px",
          textAlign: "center",
        }}>
          <p style={{ fontSize: "11px", fontWeight: "600", color: "rgba(255,255,255,0.5)", letterSpacing: "1.5px", textTransform: "uppercase", margin: "0 0 10px" }}>
            Alcohol-free
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "6px" }}>
            {[{ v: days, u: "d" }, { v: hours, u: "h" }, { v: minutes, u: "m" }, { v: seconds, u: "s" }].map(({ v, u }) => (
              <div key={u} style={{ display: "flex", alignItems: "baseline" }}>
                <span style={{ fontSize: "36px", fontWeight: "800", color: "#fff", letterSpacing: "-1px" }}>
                  {String(v).padStart(2, "0")}
                </span>
                <span style={{ fontSize: "16px", fontWeight: "500", color: "rgba(255,255,255,0.4)", marginLeft: "2px" }}>
                  {u}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick journal glass card */}
        <div style={{
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "20px", marginBottom: "16px", overflow: "hidden",
        }}>
          {!journalExpanded ? (
            <button
              onClick={() => setJournalExpanded(true)}
              style={{ width: "100%", padding: "18px 20px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", display: "flex", alignItems: "center", gap: "10px" }}
            >
              <span style={{ fontSize: "16px" }}>✏️</span>
              <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)" }}>How are you feeling today?</span>
            </button>
          ) : (
            <div style={{ padding: "16px 20px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "600", color: "rgba(255,255,255,0.4)", letterSpacing: "1px", textTransform: "uppercase", margin: 0 }}>Mood</p>
                <button onClick={() => { setJournalExpanded(false); setMood(null); setJournalText(""); }} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: "20px", padding: 0 }}>×</button>
              </div>
              <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
                {[1, 2, 3, 4, 5].map(m => (
                  <button key={m} onClick={() => setMood(m)} style={{
                    flex: 1, padding: "12px 0", borderRadius: "10px", border: "1px solid",
                    borderColor: mood === m ? "#34d399" : "rgba(255,255,255,0.1)",
                    background: mood === m ? "rgba(52,211,153,0.2)" : "rgba(255,255,255,0.03)",
                    color: mood === m ? "#fff" : "rgba(255,255,255,0.5)",
                    fontSize: "17px", fontWeight: "800", cursor: "pointer",
                  }}>{m}</button>
                ))}
              </div>
              <textarea
                value={journalText}
                onChange={e => setJournalText(e.target.value)}
                placeholder="What's on your mind?"
                rows={3}
                style={{
                  width: "100%", padding: "12px", borderRadius: "12px", fontSize: "14px",
                  color: "#f8fafc", background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)", resize: "none",
                }}
              />
              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
                <button onClick={() => { setJournalExpanded(false); setMood(null); setJournalText(""); }} style={{
                  padding: "8px 20px", borderRadius: "10px", background: "#34d399",
                  color: "#051a12", fontWeight: "700", fontSize: "14px", border: "none", cursor: "pointer",
                }}>Save</button>
              </div>
            </div>
          )}
        </div>

        {/* Milestone progress */}
        <div style={{
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "20px", padding: "16px 20px", marginBottom: "16px",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Progress to 50 days</span>
            <span style={{ fontSize: "16px", fontWeight: "700", color: "#34d399" }}>{milestoneProgress}%</span>
          </div>
          <div style={{ height: "7px", background: "rgba(255,255,255,0.08)", borderRadius: "4px", overflow: "hidden" }}>
            <div style={{ width: `${milestoneProgress}%`, height: "100%", background: "linear-gradient(90deg, #34d399, #6ee7b7)", borderRadius: "4px" }} />
          </div>
        </div>

        {/* Quick actions */}
        <div style={{ display: "flex", gap: "12px" }}>
          {[{ icon: "💨", label: "Breathing" }, { icon: "💚", label: "Remember Why" }, { icon: "📖", label: "Journal" }].map(({ icon, label }) => (
            <div key={label} style={{
              flex: 1, padding: "18px 8px", borderRadius: "18px", textAlign: "center",
              background: "rgba(255,255,255,0.07)", border: "1.5px solid rgba(255,255,255,0.13)",
            }}>
              <div style={{ fontSize: "26px", marginBottom: "10px" }}>{icon}</div>
              <p style={{ fontSize: "12px", fontWeight: "700", color: "#f8fafc", margin: 0 }}>{label}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
