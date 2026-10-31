import React from 'react'
import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { useTheme } from '../../hooks/useTheme'
import { SPACING, BORDER_RADIUS, TOUCH_TARGET } from '../../constants/spacing'

interface GlassButtonProps {
  onPress: () => void
  title: string
  style?: ViewStyle
  textStyle?: TextStyle
  variant?: 'primary' | 'secondary' | 'danger'
}

export const GlassButton: React.FC<GlassButtonProps> = ({ 
  onPress, 
  title, 
  style, 
  textStyle,
  variant = 'primary' 
}) => {
  const { colours } = useTheme()
  
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        { 
          backgroundColor: variant === 'primary' ? 'rgba(255, 255, 255, 0.15)' 
            : variant === 'danger' ? 'rgba(255, 59, 48, 0.2)'
            : 'rgba(255, 255, 255, 0.1)',
          borderWidth: 1,
          borderColor: variant === 'primary' ? 'rgba(255, 255, 255, 0.3)'
            : variant === 'danger' ? 'rgba(255, 59, 48, 0.3)'
            : 'rgba(255, 255, 255, 0.2)',
        },
        style,
      ]}>
      <Text style={[styles.buttonText, { color: colours.textPrimary }, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    fontSize: 17,
    fontFamily: 'Inter_600SemiBold',
    letterSpacing: 0.3,
  },
})
