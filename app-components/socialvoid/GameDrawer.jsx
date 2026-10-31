import React, { useState, useMemo, useRef, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated, Dimensions, ScrollView, PanResponder } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { RecipeBook } from "./drawer/RecipeBook";
import { GoalsTab } from "./drawer/GoalsTab";
import { Statistics } from "./drawer/Statistics";
import { Settings } from "./drawer/Settings";
import { ProfileTab } from "./drawer/ProfileTab";
import { AlbumsTab } from "./drawer/AlbumsTab";
import { SeasonsTab } from "./drawer/SeasonsTab";
import { PrestigeTab } from "./drawer/PrestigeTab";
import { AnalyticsTab } from "./drawer/AnalyticsTab";
import { StreakCalendarTab } from "./drawer/StreakCalendarTab";
import BannerAd from "../ads/BannerAd";
import { RewardedAdButton } from "../ads/RewardedAdButton";
import { usePurchases } from "../../hooks/usePurchases";
import { supabase } from "../../utils/supabase";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export const GameDrawer = ({
  discoveredItems,
  fontsLoaded,
  onReset,
  toggleDrawer,
  achievements,
  ACHIEVEMENTS,
  statistics,
  dailyChallenges,
  challengesCompleted,
  settings,
  updateSetting,
  currentUser,
  refreshData,
  onSyncStats,
  addItemToBoard,
    showMessage,
    addCoins,
    addCoinsToUser,
      setStatistics,
      gameGrid,
      resetAdCounter,
    isOpen,
    onLogin,
    onLogout,
    dailyBonus,
    onOpenSignInModal,
    // New feature props
    prestige,
    favorites,
    seasons,
    albums,
    sounds,
  }) => {
  const [activeTab, setActiveTab] = useState("recipes");
  const [leaderboard, setLeaderboard] = useState([]);
  const [leaderboardType, setLeaderboardType] = useState("coins");
  const [leaderboardError, setLeaderboardError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const insets = useSafeAreaInsets();
  const slideAnim = useRef(new Animated.Value(0)).current;
  const { hasNoAds } = usePurchases({ userId: currentUser?.id });
  const tabScrollRef = useRef(null);
  const activeTabRef = useRef(activeTab);
  activeTabRef.current = activeTab;

  const tabs = useMemo(() => [
    { id: "recipes", icon: "book", label: "Recipes" },
    { id: "albums", icon: "th-large", label: "Albums" },
    { id: "seasons", icon: "calendar", label: "Seasons" },
    { id: "streak", icon: "fire", label: "Streak" },
    { id: "prestige", icon: "diamond", label: "Prestige" },
    { id: "goals", icon: "trophy", label: "Goals" },
    { id: "analytics", icon: "line-chart", label: "Analytics" },
    { id: "profile", icon: "user", label: "Profile" },
    { id: "settings", icon: "cog", label: "Settings" },
  ], []);

  const panResponder = useMemo(() =>
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        const { dx, dy } = gestureState;
        return Math.abs(dx) > 20 && Math.abs(dx) > Math.abs(dy) * 1.5;
      },
      onPanResponderRelease: (_, gestureState) => {
        const { dx } = gestureState;
        if (Math.abs(dx) < 50) return;
        const currentIdx = tabs.findIndex((t) => t.id === activeTabRef.current);
        const nextIdx = dx < -50 ? currentIdx + 1 : currentIdx - 1;
        if (nextIdx >= 0 && nextIdx < tabs.length) {
          setActiveTab(tabs[nextIdx].id);
          if (settings.hapticFeedback && Haptics.selectionAsync) {
            Haptics.selectionAsync();
          }
        }
      },
    })
  , [tabs]);

  const fetchLeaderboard = async () => {
    try {
      setRefreshing(true);
      setLeaderboardError(null);
      
      const { data, error } = await supabase
          .from("sv_users")
          .select("id, name, profile_icon, total_coins_earned, total_merges, successful_merges, items_discovered, purchased_items")
          .limit(100);

      if (error) throw error;

      let sorted = data || [];
      
      if (leaderboardType === "coins") {
        sorted = sorted.sort((a, b) => (b.total_coins_earned || 0) - (a.total_coins_earned || 0));
      } else if (leaderboardType === "discoveries") {
        sorted = sorted.sort((a, b) => (b.items_discovered || 0) - (a.items_discovered || 0));
      } else if (leaderboardType === "merges") {
        sorted = sorted
          .map((u) => {
            const total = u.total_merges || 0;
            const success = u.successful_merges || 0;
            const ratio = total > 0 ? success / total : 0;
            return { ...u, mergeRatio: ratio };
          })
          .filter((u) => (u.total_merges || 0) >= 10)
          .sort((a, b) => b.mergeRatio - a.mergeRatio);
      }

      const withRank = sorted.slice(0, 50).map((u, idx) => ({
        ...u,
        rank: idx + 1,
      }));
      setLeaderboard(withRank);
    } catch (error) {
      console.error("Failed to fetch leaderboard:", error);
      setLeaderboardError("Unable to load leaderboard");
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (activeTab === "goals") {
      fetchLeaderboard();
    }
  }, [activeTab, leaderboardType]);

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: isOpen ? 1 : 0,
      tension: 65,
      friction: 11,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const HIDE_IN_RECIPE_BOOK = useMemo(() => new Set(["notification"]), []);

  const discoveredForRecipeBook = useMemo(() => {
    if (!discoveredItems) return discoveredItems;
    if (discoveredItems instanceof Set) {
      return new Set([...discoveredItems].filter((id) => !HIDE_IN_RECIPE_BOOK.has(id)));
    }
    if (Array.isArray(discoveredItems)) {
      return discoveredItems.filter((id) => !HIDE_IN_RECIPE_BOOK.has(id));
    }
    if (typeof discoveredItems === "object") {
      const copy = { ...discoveredItems };
      HIDE_IN_RECIPE_BOOK.forEach((id) => delete copy[id]);
      return copy;
    }
    return discoveredItems;
  }, [discoveredItems, HIDE_IN_RECIPE_BOOK]);

  const handleRewardEarned = (coinAmount) => {
    addCoins(coinAmount);
    if (addCoinsToUser) {
      addCoinsToUser(coinAmount);
    }
    setStatistics((prev) => ({
      ...prev,
      totalCoinsEarned: prev.totalCoinsEarned + coinAmount,
    }));
    showMessage(`+${coinAmount} coins earned!`);
  };

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-SCREEN_HEIGHT, 0],
  });

  const backdropOpacity = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const renderContent = () => {
    const contentProps = { fontsLoaded };
    
    switch (activeTab) {
      case "profile":
        return <ProfileTab fontsLoaded={fontsLoaded} />;
      case "recipes":
        return (
          <RecipeBook
            discoveredItems={discoveredForRecipeBook}
            fontsLoaded={fontsLoaded}
            addItemToBoard={addItemToBoard}
          />
        );
      case "albums":
        return (
          <AlbumsTab
            discoveredItems={discoveredItems}
            albums={albums}
            onAlbumPress={(album) => {
              albums?.markAlbumViewed?.(album.id);
            }}
            onClaimReward={(albumId) => {
              albums?.claimAlbumReward?.(albumId);
            }}
            showMessage={showMessage}
          />
        );
      case "seasons":
        return (
          <SeasonsTab
            discoveredItems={discoveredItems}
            seasons={seasons}
            activeSeason={seasons?.activeSeason}
            timeRemaining={seasons?.timeRemaining}
            onSeasonPress={(season) => {
              showMessage(`Viewing ${season.name}`);
            }}
            showMessage={showMessage}
          />
        );
      case "streak":
        return (
          <StreakCalendarTab
            currentStreak={dailyBonus?.effectiveStreak || 0}
            lastClaimDate={dailyBonus?.lastClaimDate}
            canClaim={dailyBonus?.canClaim}
            streakProtectionLastUsed={null}
            prestigeLevel={prestige?.prestigeLevel || currentUser?.prestige_level || 0}
            onClaimDaily={(reward, mysteryReward) => {
              if (dailyBonus?.handleClaimDailyBonus) {
                dailyBonus.handleClaimDailyBonus();
                showMessage(`+${reward?.coins || 15} coins claimed!`);
              }
              if (mysteryReward?.type === "coins") {
                addCoins(mysteryReward.amount);
              }
            }}
            onUseStreakProtection={() => {
              showMessage("Streak protected!");
            }}
            showMessage={showMessage}
          />
        );
      case "prestige":
        return (
          <PrestigeTab
            prestigeLevel={prestige?.prestigeLevel || 0}
            prestigeBadges={prestige?.prestigeBadges || []}
            discoveredCount={discoveredItems instanceof Set ? discoveredItems.size : (Array.isArray(discoveredItems) ? discoveredItems.length : 0)}
            totalCatalogItems={500}
            progress={prestige?.progress}
            bonuses={prestige?.bonuses}
            unlockedRecipes={prestige?.unlockedRecipes}
            prestigeStatus={prestige?.prestigeStatus}
            onPrestige={() => {
              prestige?.doPrestige?.();
            }}
            showMessage={showMessage}
          />
        );
      case "goals":
        return (
          <GoalsTab
            fontsLoaded={fontsLoaded}
            currentUser={currentUser}
            refreshData={refreshData}
            onSyncStats={onSyncStats}
            achievements={achievements}
            ACHIEVEMENTS={ACHIEVEMENTS}
            statistics={statistics}
            discoveredItems={discoveredItems}
            gameGrid={gameGrid}
            dailyChallenges={dailyChallenges}
            challengesCompleted={challengesCompleted}
            leaderboard={leaderboard}
            leaderboardType={leaderboardType}
            setLeaderboardType={setLeaderboardType}
              refreshing={refreshing}
              onRefresh={fetchLeaderboard}
              leaderboardError={leaderboardError}
            />
        );
      case "analytics":
        return (
          <AnalyticsTab
            statistics={statistics}
            discoveredItems={discoveredItems}
            achievements={achievements}
            dailyChallenges={dailyChallenges}
            challengesCompleted={challengesCompleted}
            prestigeLevel={prestige?.prestigeLevel || 0}
          />
        );
      case "settings":
        return (
          <View style={{ flex: 1 }}>
              <View style={{ paddingHorizontal: 16, marginVertical: 8 }}>
                <RewardedAdButton 
                  onRewardEarned={handleRewardEarned} 
                  coinAmount={100} 
                  hasNoAds={hasNoAds}
                  resetAdCounter={resetAdCounter}
                />
              </View>
                <Settings
                    fontsLoaded={fontsLoaded}
                    onReset={onReset}
                    toggleDrawer={toggleDrawer}
                    settings={settings}
                    updateSetting={updateSetting}
                    currentUser={currentUser}
                    onLogin={onLogin}
                    onLogout={onLogout}
                    dailyBonus={dailyBonus}
                    onOpenSignInModal={onOpenSignInModal}
                    sounds={sounds}
                  />
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Animated.View
        pointerEvents={isOpen ? "auto" : "none"}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          opacity: backdropOpacity,
          zIndex: 50,
        }}
      >
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={1}
          onPress={toggleDrawer}
        />
      </Animated.View>

      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: SCREEN_HEIGHT * 0.85,
          zIndex: 51,
          transform: [{ translateY }],
        }}
      >
        <LinearGradient
          colors={["#0F172A", "#1E293B", "#0F172A"]}
          style={{
            flex: 1,
            borderBottomLeftRadius: 28,
            borderBottomRightRadius: 28,
            overflow: "hidden",
            borderWidth: 1,
            borderColor: "rgba(99, 102, 241, 0.2)",
            borderTopWidth: 0,
          }}
        >
          <View style={{ paddingTop: insets.top + 8 }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={toggleDrawer} style={styles.closeBtn}>
                <FontAwesome name="chevron-up" size={18} color="rgba(255,255,255,0.7)" />
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.tabsContainer}
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <TouchableOpacity
                    key={tab.id}
                    onPress={() => {
                      setActiveTab(tab.id);
                      if (settings.hapticFeedback && Haptics.selectionAsync) {
                        Haptics.selectionAsync();
                      }
                    }}
                    style={styles.tabButton}
                  >
                    <LinearGradient
                      colors={
                        isActive
                          ? ["rgba(99, 102, 241, 0.3)", "rgba(139, 92, 246, 0.3)"]
                          : ["transparent", "transparent"]
                      }
                      style={[
                        styles.tabInner,
                        isActive && styles.tabActive,
                      ]}
                    >
                      <FontAwesome
                        name={tab.icon}
                        size={16}
                        color={isActive ? "#fff" : "rgba(255,255,255,0.5)"}
                      />
                      <Text
                        style={[
                          styles.tabLabel,
                          { fontFamily: fontsLoaded ? "Nunito_700Bold" : "System" },
                          isActive && styles.tabLabelActive,
                        ]}
                      >
                        {tab.label}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          <View style={{ flex: 1 }} {...panResponder.panHandlers}>
            <BannerAd size="BANNER" hasNoAds={hasNoAds} user={currentUser} />
            {renderContent()}
          </View>

          <View style={styles.handle}>
            <View style={styles.handleBar} />
          </View>
        </LinearGradient>
      </Animated.View>
    </>
  );
};

const styles = {
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 22,
    color: "#fff",
  },
  closeBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.08)",
    alignItems: "center",
    justifyContent: "center",
  },
  tabsContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  tabButton: {
    marginRight: 8,
  },
  tabInner: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "transparent",
  },
  tabActive: {
    borderColor: "rgba(99, 102, 241, 0.4)",
  },
  tabLabel: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 13,
    marginLeft: 8,
  },
  tabLabelActive: {
    color: "#fff",
  },
  handle: {
    alignItems: "center",
    paddingVertical: 12,
  },
  handleBar: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
};