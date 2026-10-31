import React, { useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native'
import { useTheme } from '../../hooks/useTheme'
import { Pet } from './Pet'
import { SPACING, BORDER_RADIUS } from '../../constants/spacing'

const { width, height } = Dimensions.get('window')

interface MilestoneNotificationProps {
  visible: boolean
  milestoneLabel: string
  onClose: () => void
}

interface PartyEmoji {
  emoji: string
  x: number
  translateY: Animated.Value
  rotation: Animated.Value
  opacity: Animated.Value
}

export const MilestoneNotification: React.FC<MilestoneNotificationProps> = ({
  visible,
  milestoneLabel,
  onClose,
}) => {
  const { colours } = useTheme()
  const slideAnim = useRef(new Animated.Value(-200)).current
  const partyEmojis = useRef<PartyEmoji[]>([])

  useEffect(() => {
    if (visible) {
      // Create party emojis
      const emojis = ['🎉', '🎊', '✨', '🎈', '🌟', '💫', '🎆', '🎇']
      partyEmojis.current = Array.from({ length: 20 }, (_, i) => ({
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x: Math.random() * width,
        translateY: new Animated.Value(-50),
        rotation: new Animated.Value(0),
        opacity: new Animated.Value(1),
      }))

      // Slide down notification
      slideAnim.setValue(-200)
      Animated.spring(slideAnim, {
        toValue: 60,
        tension: 50,
        friction: 8,
        useNativeDriver: true,
      }).start()

      // Animate party emojis falling
      partyEmojis.current.forEach((emoji, index) => {
        Animated.parallel([
          Animated.timing(emoji.translateY, {
            toValue: height + 100,
            duration: 3000 + Math.random() * 2000,
            delay: index * 100,
            useNativeDriver: true,
          }),
          Animated.timing(emoji.rotation, {
            toValue: Math.random() > 0.5 ? 360 : -360,
            duration: 2000 + Math.random() * 1000,
            delay: index * 100,
            useNativeDriver: true,
          }),
          Animated.timing(emoji.opacity, {
            toValue: 0,
            duration: 3000,
            delay: index * 100 + 1000,
            useNativeDriver: true,
          }),
        ]).start()
      })

      // Auto dismiss after 4 seconds
      const timer = setTimeout(() => {
        Animated.timing(slideAnim, {
          toValue: -200,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          onClose()
        })
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [visible, slideAnim, onClose])

  if (!visible) return null

  return (
    <>
      {/* Party emojis */}
      <View style={styles.emojiContainer} pointerEvents="none">
        {partyEmojis.current.map((emoji, index) => (
          <Animated.Text
            key={index}
            style={[
              styles.emoji,
              {
                left: emoji.x,
                transform: [
                  { translateY: emoji.translateY },
                  {
                    rotate: emoji.rotation.interpolate({
                      inputRange: [0, 360],
                      outputRange: ['0deg', '360deg'],
                    }),
                  },
                ],
                opacity: emoji.opacity,
              },
            ]}
          >
            {emoji.emoji}
          </Animated.Text>
        ))}
      </View>

      {/* iOS-style notification */}
      <Animated.View
        style={[
          styles.notification,
          {
            backgroundColor: colours.cardBackground,
            borderColor: colours.cardBorder,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.notificationContent}>
          <View style={styles.petContainer}>
            <Pet size={80} />
          </View>
          <View style={styles.textContainer}>
            <Text style={[styles.title, { color: colours.textPrimary }]}>
              Milestone Reached! 🎉
            </Text>
            <Text style={[styles.message, { color: colours.textSecondary }]}>
              {milestoneLabel}
            </Text>
          </View>
        </View>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  emojiContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
  },
  emoji: {
    position: 'absolute',
    fontSize: 32,
    zIndex: 9999,
  },
  notification: {
    position: 'absolute',
    top: 0,
    left: SPACING.sm,
    right: SPACING.sm,
    zIndex: 10000,
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING.md,
  },
  petContainer: {
    marginRight: SPACING.sm,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    marginBottom: 2,
  },
  message: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
  },
})
