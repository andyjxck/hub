import React, { useState } from "react";
import MoodSelector from "./MoodSelector";
import SleepHours from "./SleepHours";
import ExpandableOptions from "./ExpandableOptions";

const affirmations = [
  "I am exactly where I need to be.",
  "I am worthy of love and belonging.",
  "Today, I choose myself.",
  "My potential is limitless.",
  "I am enough, exactly as I am.",
  "I trust the process of life.",
  "I am resilient and adaptable.",
  "Every challenge is an opportunity.",
  "I release what no longer serves me.",
  "I am becoming who I'm meant to be.",
  "My strength runs deeper than I know.",
  "I deserve compassion and kindness.",
  "I choose peace over worry.",
  "I embrace the journey of becoming.",
  "I am present in this moment.",
];

export default function ZenVoidToday() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [note, setNote] = useState("");
  const [gratitude, setGratitude] = useState("");
  const [energy, setEnergy] = useState(0);
  const [sleep, setSleep] = useState(null);
  const [stressLevel, setStressLevel] = useState(0);
  const [socialEnergy, setSocialEnergy] = useState(0);
  const [productivity, setProductivity] = useState(0);
  const [physicalActivity, setPhysicalActivity] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [affirmationIndex, setAffirmationIndex] = useState(0);
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const getMoodColor = (mood) => {
    const moodOptions = [
      { value: 1, color: "#ef4444" },
      { value: 2, color: "#f59e0b" },
      { value: 3, color: "#6366f1" },
      { value: 4, color: "#8b5cf6" },
      { value: 5, color: "#ec4899" },
    ];
    const option = moodOptions.find((m) => m.value === mood);
    return option ? option.color : "#6366f1";
  };

  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSaveEntry = async () => {
    if (!selectedMood) {
      alert("Please select a mood first!");
      return;
    }
    
    if (saving) return;
    
    setSaving(true);

    // Simulate save delay
    setTimeout(() => {
      setSaving(false);
      setSaved(true);
      
      // Reset form
      setSelectedMood(null);
      setNote("");
      setGratitude("");
      setEnergy(0);
      setSleep(null);
      setStressLevel(0);
      setSocialEnergy(0);
      setProductivity(0);
      setPhysicalActivity(0);
      setSelectedTags([]);
      setIsExpanded(false);

      alert("✨ Saved! Your reflection has been recorded.");
      
      setTimeout(() => setSaved(false), 3000);
    }, 1000);
  };

  const shuffleAffirmation = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * affirmations.length);
    } while (newIndex === affirmationIndex && affirmations.length > 1);
    setAffirmationIndex(newIndex);
  };

  const todayString = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div style={{ width: '100%', height: '100%', background: 'transparent' }}>
        <div
          style={{
            paddingTop: 60,
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 40,
            overflowY: 'auto',
            height: '100%',
          }}
        >
          <div style={{ alignItems: "center", marginBottom: 24, textAlign: 'center' }}>
            <span style={{ 
              fontSize: 16, 
              color: "#cbd5e1", 
              marginBottom: 8,
              display: 'block',
            }}>
              {todayString}
            </span>
            
            <span style={{ 
              fontSize: 24, 
              fontWeight: "300", 
              color: "#f8fafc",
              display: 'block',
            }}>
              How are you feeling today?
            </span>
          </div>

          <MoodSelector
            selectedMood={selectedMood}
            handleMoodSelect={handleMoodSelect}
            moodGlowAnimation={1}
          />

          <div
            style={{
              padding: 20,
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontSize: 18,
                color: "#f8fafc",
                marginBottom: 16,
                textAlign: "center",
                display: 'block',
              }}
            >
              Your Zen Journal
            </span>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="your entry... (optional)"
              style={{
                width: '100%',
                padding: 16,
                minHeight: 80,
                fontSize: 16,
                color: "#f8fafc",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderRadius: 16,
                border: "1px solid rgba(255, 255, 255, 0.1)",
                resize: 'vertical',
              }}
            />
          </div>

          <SleepHours
            sleep={sleep}
            setSleep={setSleep}
          />

          <ExpandableOptions
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            gratitude={gratitude}
            setGratitude={setGratitude}
            energy={energy}
            setEnergy={setEnergy}
            stressLevel={stressLevel}
            setStressLevel={setStressLevel}
            sleep={sleep}
            setSleep={setSleep}
            socialEnergy={socialEnergy}
            setSocialEnergy={setSocialEnergy}
            productivity={productivity}
            setProductivity={setProductivity}
            physicalActivity={physicalActivity}
            setPhysicalActivity={setPhysicalActivity}
            selectedTags={selectedTags}
            handleTagToggle={handleTagToggle}
          />

          {selectedMood && (
            <div>
              <button onClick={handleSaveEntry} disabled={saving} style={{
                padding: '18px 32px',
                alignItems: 'center',
                opacity: saving ? 0.5 : 1,
                background: 'transparent',
                border: 'none',
                cursor: saving ? 'not-allowed' : 'pointer',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}>
                <span style={{ fontSize: 18, color: getMoodColor(selectedMood) }}>
                  {saving ? "Saving..." : saved ? "✓ Saved!" : "Save Reflection"}
                </span>
              </button>
            </div>
          )}

          <div
            style={{
              padding: 16,
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ fontSize: 15, color: "#f472b6", fontWeight: '500' }}>
                Daily Affirmation
              </span>
              <button
                onClick={shuffleAffirmation}
                style={{
                  padding: 8,
                  cursor: 'pointer',
                  background: 'transparent',
                  border: 'none',
                  fontSize: 16,
                }}
              >
                🔀
              </button>
            </div>
            <span style={{ fontSize: 14, color: "#e0e0e0", lineHeight: 20, fontStyle: 'italic', display: 'block' }}>
              {affirmations[affirmationIndex]}
            </span>
          </div>

          <div style={{ alignItems: 'center', marginTop: 30, textAlign: 'center' }}>
            <span
              style={{
                fontSize: 14,
                color: "#94a3b8",
                fontStyle: 'italic',
                display: 'block',
              }}
            >
              "You are exactly where you need to be."
            </span>
          </div>
        </div>
    </div>
  );
}
