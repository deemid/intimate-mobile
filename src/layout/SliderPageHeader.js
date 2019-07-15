import React from 'react'

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const SliderPageHeader = props => {
  let { leftIcon, rightIcon, leftIconPress = () => {}, rightIconPress = () => {}, hasSecondaryHeader = false, title = '' } = props
  return (
    <View style={{ position: 'relative' }}>

      <View style={styles.sliderPageHeader}>
        {
          leftIcon ? (
            <TouchableOpacity onPress={leftIconPress} >
              <Image source={props.leftIcon} />
            </TouchableOpacity>
          ) : <View />
        }
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>{ title }</Text>
        {
          rightIcon ? (
            <TouchableOpacity onPress={rightIconPress} >
              <Image source={props.rightIcon} />
            </TouchableOpacity>
          ) : <View />
        }
      </View>

      { hasSecondaryHeader && (
        <View style={{ height: 20, backgroundColor: '#345d9d' }} />
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  sliderPageHeader: {
    height: 56,
    backgroundColor: '#345d9d',
    position: 'relative',
    paddingHorizontal: 18,
    justifyContent: 'center',
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
})

export default SliderPageHeader