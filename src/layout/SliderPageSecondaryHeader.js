import React from 'react'
import { StyleSheet, View } from 'react-native'
import PaddedView from './PaddedView'

export default props = ({ children }) => (
  <PaddedView>
    <View style={styles.sliderPageHeaderOverlay}>
      {children}
    </View>
  </PaddedView>
)

const styles = StyleSheet.create({
  sliderPageHeaderOverlay: {
    paddingHorizontal: 10,
    paddingVertical: 16,
    backgroundColor: '#4a6da7',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 10
  },
})
