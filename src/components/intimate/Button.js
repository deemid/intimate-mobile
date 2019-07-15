import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import theme from '../../styles/theme'
import _styles from '../../styles'

const Button = props => {

  let isOutlineButton = props.hasOwnProperty('outline')

  let { buttonStyle, textStyle, containerStyle, color = 'primary', textColor, activeOpacity = 0.7, isLoading = false } = props

  delete props.containerStyle
  delete props.buttonStyle
  delete props.textStyle

  let buttonColorStyle = styles.primaryButtonStyle
  let textColorStyle = styles.primaryTextStyle

  if (color === 'secondary') {
    buttonColorStyle = styles.secondaryButtonStyle
  } else if (color && color !== 'primary') {
    buttonColorStyle = { backgroundColor: color }
  }

  if (color === 'white' || color === '#fff' || color === '#ffffff') {
    textColorStyle = textColor ? textColor : '#333'
  }

  return <TouchableOpacity
    style={[styles.containerStyle, containerStyle]} 
    activeOpacity={activeOpacity}
    disabled={isLoading}
    {...props} 
  >
    <View style={[
      styles.buttonStyle,
      isOutlineButton ? styles.outlineButtonStyle : buttonColorStyle,
      buttonStyle
    ]}>
      {
        isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={[
            styles.textStyle,
            isOutlineButton ? styles.outlineTextStyle : textColorStyle,
          textStyle]}>{props.text}</Text>
        )
      }
      
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%'
  },
  buttonStyle: {
    height: 46,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: _styles.text.size.large,
    fontFamily: _styles.text.font.regular
  },
  primaryButtonStyle: {
    backgroundColor: theme.PRIMARY_COLOR,
  },
  secondaryButtonStyle: {
    backgroundColor: theme.SECONDARY_COLOR,
  },
  outlineButtonStyle: {
    borderColor: theme.PRIMARY_COLOR,
    borderWidth: 2,
    backgroundColor: '#fff',
  },
  primaryTextStyle: {
    color: '#fff'
  },
  secondaryTextStyle: {
    color: theme.SECONDARY_COLOR
  },
  outlineTextStyle: {
    color: theme.PRIMARY_COLOR
  },
})

export default Button