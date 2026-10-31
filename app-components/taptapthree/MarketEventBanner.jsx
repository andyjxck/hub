import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { useGameStore } from "../stores/gameStore";

export default function MarketEventBanner() {
  const activeMarketEvent = useGameStore((s) => s.activeMarketEvent);
  const checkMarketEventExpiry = useGameStore((s) => s.checkMarketEventExpiry);
  const triggerMarketEvent = useGameStore((s) => s.triggerMarketEvent);

  const [timeLeft, setTimeLeft] = useState(0);

  const pulseAnim = useSharedValue(1);
  const slideAnim = useSharedValue(-100);

  useEffect(() => {
    const interval = setInterval(() => {
      checkMarketEventExpiry();
      
      if (activeMarketEvent) {
        const remaining = Math.max(0, activeMarketEvent.endTime - Date.now());
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeMarketEvent]);

  useEffect(() => {
    if (activeMarketEvent) {
      slideAnim.value = withSpring(0, { damping: 15 });
      pulseAnim.value = withRepeat(
        withSequence(
          withTiming(1.02, { duration: 500 }),
          withTiming(1, { duration: 500 })
        ),
        -1,
        true
      );
    } else {
      slideAnim.value = withTiming(-100, { duration: 300 });
    }
  }, [activeMarketEvent]);

  const bannerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: slideAnim.value },
      { scale: pulseAnim.value },
    ],
  }));

  if (!activeMarketEvent) {
    return null;
  }

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <Animated.View style={[{ marginBottom: 16 }, bannerStyle]}>
      <LinearGradient
        colors={[`${activeMarketEvent.color}30`, `${activeMarketEvent.color}10`]}
        style={{
          padding: 16,
          borderRadius: 16,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: `${activeMarketEvent.color}30`,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 14,
          }}
        >
          <Ionicons
            name={activeMarketEvent.icon}
            size={26}
            color={activeMarketEvent.color}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: activeMarketEvent.color,
              fontSize: 16,
              fontWeight: "800",
            }}
          >
            {activeMarketEvent.name}
          </Text>
          <Text
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: 12,
              marginTop: 2,
            }}
          >
            {activeMarketEvent.desc}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: `${activeMarketEvent.color}20`,
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: activeMarketEvent.color,
              fontSize: 14,
              fontWeight: "700",
            }}
          >
            {formatTime(timeLeft)}
          </Text>
        </View>
      </LinearGradient>
    </Animated.View>
  );
}

export function TriggerEventButton() {
  const activeMarketEvent = useGameStore((s) => s.activeMarketEvent);
  const triggerMarketEvent = useGameStore((s) => s.triggerMarketEvent);
  const lastMarketEventTime = useGameStore((s) => s.lastMarketEventTime);

  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeSince = Date.now() - lastMarketEventTime;
      const cooldownTime = 120000; // 2 minutes between events
      const remaining = Math.max(0, cooldownTime - timeSince);
      setCooldown(remaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [lastMarketEventTime]);

  const canTrigger = !activeMarketEvent && cooldown === 0;

  const formatCooldown = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <TouchableOpacity
      onPress={() => canTrigger && triggerMarketEvent()}
      disabled={!canTrigger}
      style={{
        backgroundColor: canTrigger ? "rgba(139,92,246,0.2)" : "rgba(107,114,128,0.1)",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        opacity: canTrigger ? 1 : 0.5,
      }}
    >
      <Ionicons
        name="flash"
        size={18}
        color={canTrigger ? "#8b5cf6" : "#6b7280"}
      />
      <Text
        style={{
          color: canTrigger ? "#8b5cf6" : "#6b7280",
          fontSize: 14,
          fontWeight: "700",
          marginLeft: 8,
        }}
      >
        {activeMarketEvent
          ? "Event Active"
          : cooldown > 0
          ? `Cooldown ${formatCooldown(cooldown)}`
          : "Trigger Event"}
      </Text>
    </TouchableOpacity>
  );
}
