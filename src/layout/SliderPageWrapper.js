import React from 'react'
import { StyleSheet, View } from 'react-native'

const SliderPageWrapper = props => {
  return (
    <View style={styles.sliderPage}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  sliderPage: {
    marginHorizontal: 36,
    backgroundColor: '#eceff6',
    position: 'relative',
    height: '100%'
  },
})

export default SliderPageWrapper