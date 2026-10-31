import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSobrietyTimer } from '../../hooks/useSobrietyTimer'
import { useSettingsStore } from '../../stores/settingsStore'
import { useTheme } from '../../hooks/useTheme'
import { GlassCard } from './GlassCard'
import { SPACING } from '../../constants/spacing'

export const SobrietyTimer: React.FC = () => {
  const { days, hours, minutes, seconds } = useSobrietyTimer()
  const { addictionLabel } = useSettingsStore()
  const { colours } = useTheme()

  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: colours.textSecondary }]}>
        {addictionLabel}-free
      </Text>
      <View style={styles.timeRow}>
        <View style={styles.timeBlock}>
          <Text style={[styles.timeValue, { color: colours.textPrimary }]}>{days}</Text>
          <Text style={[styles.timeUnit, { color: colours.textSecondary }]}>d</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={[styles.timeValue, { color: colours.textPrimary }]}>{hours.toString().padStart(2, '0')}</Text>
          <Text style={[styles.timeUnit, { color: colours.textSecondary }]}>h</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={[styles.timeValue, { color: colours.textPrimary }]}>{minutes.toString().padStart(2, '0')}</Text>
          <Text style={[styles.timeUnit, { color: colours.textSecondary }]}>m</Text>
        </View>
        <View style={styles.timeBlock}>
          <Text style={[styles.timeValue, { color: colours.textPrimary }]}>{seconds.toString().padStart(2, '0')}</Text>
          <Text style={[styles.timeUnit, { color: colours.textSecondary }]}>s</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 8,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    marginBottom: 8,
    opacity: 0.5,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },
  timeBlock: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  timeValue: {
    fontSize: 40,
    fontFamily: 'Inter_800ExtraBold',
    letterSpacing: -1,
  },
  timeUnit: {
    fontSize: 20,
    fontFamily: 'Inter_500Medium',
    opacity: 0.4,
    marginLeft: 2,
  },
})
