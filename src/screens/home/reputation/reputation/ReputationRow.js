import React from 'react'
import { View, Text, Image } from 'react-native'

export default props => {

  let { leftIcon, statusIcon, status, statusTextColor = '#000', value, valueTextColor = '#000', title } = props

  return (
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#eceff6', paddingVertical: 15, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 18 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {leftIcon && <Image source={leftIcon} style={{ marginRight: 10 }} />}
        <Text style={{ fontWeight: '900', color: '#000' }}>{title}</Text>
      </View>
      <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
        {value && <Text style={{ color: valueTextColor }}>{value}</Text>}
        {
          status && (
            <View style={{ flexDirection: 'row' }}>
              {statusIcon && <Image source={statusIcon} style={{ marginRight: 4 }} />}
              <Text style={{ color: statusTextColor }}>{status}</Text>
            </View>
          )
        }
      </View>
    </View>
  )
}