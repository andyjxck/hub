import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withSequence,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";
import { useGameStore } from "../stores/gameStore";
import { formatNumber } from "../utils/formatNumber";

function LocationCard({ location, owned, canAfford, canUnlock, onPurchase }) {
  const scale = useSharedValue(1);

  const handlePurchase = () => {
    if (!canAfford || !canUnlock || owned) return;
    
    scale.value = withSequence(
      withSpring(1.05),
      withSpring(1)
    );
    
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    onPurchase(location.id);
  };

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[{ marginBottom: 14 }, cardStyle]}>
      <LinearGradient
        colors={
          owned
            ? ["rgba(34,197,94,0.15)", "rgba(34,197,94,0.05)"]
            : [`${location.color}15`, `${location.color}05`]
        }
        style={{
          padding: 16,
          borderRadius: 14,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: owned ? "rgba(34,197,94,0.2)" : `${location.color}20`,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 14,
            }}
          >
            <Ionicons
              name={owned ? "checkmark-circle" : location.icon}
              size={26}
              color={owned ? "#22c55e" : location.color}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>
              {location.name}
            </Text>
            <Text style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, marginTop: 2 }}>
              +{(location.incomeBoost * 100).toFixed(0)}% income boost
            </Text>
          </View>

          {owned ? (
            <View
              style={{
                backgroundColor: "rgba(34,197,94,0.2)",
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "#22c55e", fontWeight: "700", fontSize: 13 }}>
                OWNED
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={handlePurchase}
              disabled={!canAfford || !canUnlock}
              style={{
                backgroundColor: canAfford && canUnlock ? location.color : "rgba(107,114,128,0.2)",
                paddingHorizontal: 14,
                paddingVertical: 8,
                borderRadius: 10,
                opacity: canAfford && canUnlock ? 1 : 0.5,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "700", fontSize: 13 }}>
                {!canUnlock ? "🔒 Locked" : `$${formatNumber(location.cost)}`}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>
    </Animated.View>
  );
}

function PerkCard({ perk, perkData, canAfford, onPurchase }) {
  const scale = useSharedValue(1);

  const handlePurchase = () => {
    if (!canAfford) return;
    
    scale.value = withSequence(
      withSpring(1.05),
      withSpring(1)
    );
    
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onPurchase(perk.id);
  };

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[{ marginBottom: 14 }, cardStyle]}>
      <LinearGradient
        colors={[`${perk.color}15`, `${perk.color}05`]}
        style={{
          padding: 16,
          borderRadius: 14,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: `${perk.color}20`,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 12,
            }}
          >
            <Ionicons name={perk.icon} size={22} color={perk.color} />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={{ color: "#fff", fontSize: 15, fontWeight: "700" }}>
              {perk.name}
            </Text>
            <Text style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginTop: 2 }}>
              {perk.desc}
            </Text>
          </View>

          <View
            style={{
              backgroundColor: `${perk.color}20`,
              paddingHorizontal: 10,
              paddingVertical: 6,
              borderRadius: 8,
            }}
          >
            <Text style={{ color: perk.color, fontWeight: "800", fontSize: 14 }}>
              Lv {perkData.level}
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ color: perk.color, fontSize: 12, fontWeight: "600" }}>
            Current: +{(perkData.level * perkData.effect * 100).toFixed(0)}%
          </Text>

          <TouchableOpacity
            onPress={handlePurchase}
            disabled={!canAfford}
            style={{
              backgroundColor: canAfford ? perk.color : "rgba(107,114,128,0.2)",
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 8,
              opacity: canAfford ? 1 : 0.5,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 12 }}>
              ${formatNumber(perkData.cost)}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Animated.View>
  );
}

export default function BusinessExpansion({ visible, onClose }) {
  const balance = useGameStore((s) => s.balance);
  const businessLocations = useGameStore((s) => s.businessLocations);
  const businessPerks = useGameStore((s) => s.businessPerks);
  const getBusinessLocations = useGameStore((s) => s.getBusinessLocations);
  const getBusinessPerks = useGameStore((s) => s.getBusinessPerks);
  const purchaseLocation = useGameStore((s) => s.purchaseLocation);
  const purchaseBusinessPerk = useGameStore((s) => s.purchaseBusinessPerk);
  const getTotalBusinessBoost = useGameStore((s) => s.getTotalBusinessBoost);

  const [tab, setTab] = useState("locations");

  const locations = getBusinessLocations();
  const perks = getBusinessPerks();
  const boosts = getTotalBusinessBoost();

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.95)",
          paddingTop: 60,
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={onClose} style={{ padding: 8 }}>
            <Ionicons name="close" size={28} color="#fff" />
          </TouchableOpacity>

          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: "900",
              flex: 1,
              textAlign: "center",
              marginRight: 36,
            }}
          >
            🏢 Business Empire
          </Text>
        </View>

        {/* Stats Summary */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            marginBottom: 20,
            gap: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(59,130,246,0.15)",
              padding: 14,
              borderRadius: 12,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "rgba(255,255,255,0.6)", fontSize: 11 }}>
              LOCATIONS
            </Text>
            <Text style={{ color: "#3b82f6", fontSize: 20, fontWeight: "800" }}>
              {businessLocations.length}/{locations.length}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(34,197,94,0.15)",
              padding: 14,
              borderRadius: 12,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "rgba(255,255,255,0.6)", fontSize: 11 }}>
              INCOME BOOST
            </Text>
            <Text style={{ color: "#22c55e", fontSize: 20, fontWeight: "800" }}>
              +{(boosts.locationBoost * 100).toFixed(0)}%
            </Text>
          </View>
        </View>

        {/* Tabs */}
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            marginBottom: 16,
            gap: 10,
          }}
        >
          {[
            { id: "locations", label: "Locations", icon: "location" },
            { id: "perks", label: "Perks", icon: "ribbon" },
          ].map((t) => (
            <TouchableOpacity
              key={t.id}
              onPress={() => setTab(t.id)}
              style={{
                flex: 1,
                backgroundColor:
                  tab === t.id ? "rgba(139,92,246,0.2)" : "rgba(255,255,255,0.05)",
                paddingVertical: 12,
                borderRadius: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name={t.icon}
                size={18}
                color={tab === t.id ? "#8b5cf6" : "rgba(255,255,255,0.5)"}
              />
              <Text
                style={{
                  color: tab === t.id ? "#8b5cf6" : "rgba(255,255,255,0.5)",
                  fontSize: 14,
                  fontWeight: "600",
                  marginLeft: 8,
                }}
              >
                {t.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Content */}
        <ScrollView
          style={{ flex: 1, paddingHorizontal: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {tab === "locations" && (
            <>
              <Text
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 13,
                  marginBottom: 14,
                }}
              >
                Expand your empire to new locations for permanent income boosts
              </Text>

              {locations.map((location) => {
                const owned = businessLocations.includes(location.id);
                const canAfford = balance >= location.cost;
                const canUnlock = businessLocations.length >= location.unlockRequirement;

                return (
                  <LocationCard
                    key={location.id}
                    location={location}
                    owned={owned}
                    canAfford={canAfford}
                    canUnlock={canUnlock}
                    onPurchase={purchaseLocation}
                  />
                );
              })}
            </>
          )}

          {tab === "perks" && (
            <>
              <Text
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 13,
                  marginBottom: 14,
                }}
              >
                Upgrade your business operations for lasting advantages
              </Text>

              {perks.map((perk) => {
                const perkData = businessPerks[perk.id];
                const canAfford = balance >= perkData.cost;

                return (
                  <PerkCard
                    key={perk.id}
                    perk={perk}
                    perkData={perkData}
                    canAfford={canAfford}
                    onPurchase={purchaseBusinessPerk}
                  />
                );
              })}
            </>
          )}

          <View style={{ height: 40 }} />
        </ScrollView>
      </View>
    </Modal>
  );
}
