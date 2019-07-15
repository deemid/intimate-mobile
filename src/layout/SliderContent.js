import React from 'react'

import { StyleSheet, View } from 'react-native'

export default ({ children, hasSecondaryHeader = false }) => (
  <View style={styles.sliderContent}>
    <View style={hasSecondaryHeader ? { position: 'relative', top: -30, zIndex: 100 } : null }> 
      { children }
    </View>
  </View>
)

const styles = StyleSheet.create({
  sliderContent: {
    height: '100%',
    backgroundColor: '#fff',
    position: 'relative',
    paddingTop: 10,
    zIndex: 100,
  }
})