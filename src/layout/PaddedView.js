import React from 'react'
import { StyleSheet, View } from 'react-native'

export default props = (props) => (
  <View style={styles.sliderPaddedSection}>
    { props.children }
  </View>
)

const styles = StyleSheet.create({
  sliderPaddedSection: {
    paddingHorizontal: 18,
  },
})
