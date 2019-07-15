import React from 'react'
import { View, ScrollView, Text } from 'react-native'

export default ({ title = '' }) => {
  return (
    <View style={{ height: 55, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', marginTop: 45, }}>
      <Text style={{ color: '#63b5e5', fontSize: 16, fontWeight: '900' }}>{title}</Text>
    </View>
  )
}

