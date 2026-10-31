import React from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'
import { useTheme } from '../../hooks/useTheme'
import { SPACING, BORDER_RADIUS } from '../../constants/spacing'

interface GlassCardProps {
  children: React.ReactNode
  style?: ViewStyle
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, style }) => {
  const { colours } = useTheme()

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colours.cardBackground + 'CC',
          borderColor: colours.textSecondary + '20',
        },
        style,
      ]}
    >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: SPACING.xl,
    borderRadius: BORDER_RADIUS.xl,
    borderWidth: 1,
  },
})
