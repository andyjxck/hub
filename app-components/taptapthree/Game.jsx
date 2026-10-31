import React, { useEffect, useCallback, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { AppState } from "react-native";
import { useGameStore } from "../stores/gameStore";
import { useAchievementStore } from "../stores/achievementStore";
import GameBackground from "./GameBackground";
import GameNavigation from "./GameNavigation";
import { setupNotifications } from "../utils/notifications";

import TapScreen from "../screens/TapScreen";
import UpgradesScreen from "../screens/UpgradesScreen";
import EventsScreen from "../screens/EventsScreen";
import StocksScreen from "../screens/StocksScreen";
import VaultScreen from "../screens/VaultScreen";
import BusinessScreen from "../screens/BusinessScreen";
import PrestigeScreen from "../screens/PrestigeScreen";
import MenuScreen from "../screens/MenuScreen";

import OfflineEarningsModal from "../components/OEarnings";
import AchievementToast from "../components/AchievementToast";
import TutorialOverlay from "../components/TutorialOverlay";

export default function Game() {
  const {
    currentTab,
    balance,
    loadGame,
    initAppStateTracking,
    showOfflineModal,
    checkLoginStreak,
    tutorialComplete,
  } = useGameStore();

  const [toastAchievement, setToastAchievement] = useState(null);

  useEffect(() => {
    loadGame();
    setTimeout(() => checkLoginStreak(), 1500);
    setupNotifications();
  }, []);

  useEffect(() => {
    initAppStateTracking();
  }, []);

  useEffect(() => {
    useAchievementStore.getState().setUnlockCallback((achievement) => {
      setToastAchievement(achievement);
    });
  }, []);

  const renderCurrent = useCallback(() => {
    switch (currentTab) {
      case "tap":
        return <TapScreen />;
      case "upgrades":
        return <UpgradesScreen />;
      case "events":
        return <EventsScreen />;
      case "stocks":
        return <StocksScreen />;
      case "vault":
        return <VaultScreen />;
      case "business":
        return <BusinessScreen />;
      case "prestige":
        return <PrestigeScreen />;
      case "menu":
        return <MenuScreen />;
      default:
        return <TapScreen />;
    }
  }, [currentTab]);

  return (
    <GameBackground wealth={balance}>
      <StatusBar style="light" />
      {renderCurrent()}
      <GameNavigation />
      {showOfflineModal && <OfflineEarningsModal />}
      <AchievementToast
        achievement={toastAchievement}
        onDismiss={() => setToastAchievement(null)}
      />
      {!tutorialComplete && <TutorialOverlay />}
    </GameBackground>
  );
}