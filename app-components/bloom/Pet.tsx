import React, { useEffect, useRef } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { usePetStore } from '../../stores/petStore'
import { usePetState } from '../../hooks/usePetState'
import { petAssets } from '../../constants/petAssets'

interface PetProps {
  size?: number
  syncWithBreathing?: boolean
  breathingValue?: Animated.Value
  petType?: string
}

export const Pet: React.FC<PetProps> = ({ 
  size = 200, 
  syncWithBreathing = false, 
  breathingValue,
  petType: overridePetType
}) => {
  const { petType: storePetType } = usePetStore()
  const rawPetType = overridePetType || storePetType || 'dog'
  
  // Extract base pet type and state from formats like 'dog-happy', 'cat-relapse', etc.
  let petType: 'dog' | 'cat' | 'raccoon' = 'dog'
  let petState: 'neutral' | 'excited' | 'worried' | 'relapse' | 'happy' = 'neutral'
  
  if (typeof rawPetType === 'string' && rawPetType.includes('-')) {
    const parts = rawPetType.split('-')
    const basePet = parts[0]
    const state = parts[1]
    
    // Map base pet type
    if (basePet === 'dog' || basePet === 'cat' || basePet === 'raccoon') {
      petType = basePet
    }
    
    // Map state
    if (state === 'relapse' || state === 'worried' || state === 'neutral' || state === 'happy' || state === 'excited') {
      petState = state
    }
  } else {
    // No state specified, use default
    petType = (rawPetType === 'cat' || rawPetType === 'raccoon') ? rawPetType : 'dog'
    const defaultPetState = usePetState()
    petState = defaultPetState || 'neutral'
  }
  
  const scaleAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    if (syncWithBreathing) {
      return
    }

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.03,
          duration: 2000,
          easing: (t) => t * (2 - t),
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1.0,
          duration: 2000,
          easing: (t) => t * (2 - t),
          useNativeDriver: true,
        }),
      ])
    )

    animation.start()

    return () => animation.stop()
  }, [syncWithBreathing, scaleAnim])

  const animatedScale = syncWithBreathing && breathingValue
    ? breathingValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1.0, 1.15],
      })
    : scaleAnim

  const imageSource = petAssets[petType][petState]

  return (
    <Animated.Image
      source={imageSource}
      style={[
        styles.pet,
        {
          width: size,
          height: size,
          transform: [{ scale: animatedScale }],
        },
      ]}
      resizeMode="contain"
    />
  )
}

const styles = StyleSheet.create({
  pet: {
    alignSelf: 'center',
  },
})
