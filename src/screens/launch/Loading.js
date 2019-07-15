import React from 'react'
import { StyleSheet, View, Image, StatusBar, ActivityIndicator } from 'react-native'
import { Font } from 'expo'

import intimateLogo from '../../../assets/images/intimate-logo.png'
import theme from '../../styles/theme'

export default class Loading extends React.Component {
  
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    await Promise.all([
      this.loadFonts(),
      this.sleep(10)
    ])

    this.props.navigation.navigate('Auth')
  }

  loadFonts = () => {
    Font.loadAsync({
      FONT_BLACK: theme.FONT_BLACK,
      FONT_BLACK_ITALIC: theme.FONT_BLACK_ITALIC,
      FONT_BOLD: theme.FONT_BOLD,
      FONT_BOLD_ITALIC: theme.FONT_BOLD_ITALIC,
      FONT_EXTRA_BOLD: theme.FONT_EXTRA_BOLD,
      FONT_EXTRA_BOLD_ITALIC: theme.FONT_EXTRA_BOLD_ITALIC,
      FONT_EXTRA_LIGHT: theme.FONT_EXTRA_LIGHT,
      FONT_EXTRA_LIGHT_ITALIC: theme.FONT_EXTRA_LIGHT_ITALIC,
      FONT_ITALIC: theme.FONT_ITALIC,
      FONT_LIGHT: theme.FONT_LIGHT,
      FONT_MEDIUM: theme.FONT_MEDIUM,
      FONT_MEDIUM_ITALIC: theme.FONT_MEDIUM_ITALIC,
      FONT_REGULAR: theme.FONT_REGULAR,
      FONT_SEMI_BOLD: theme.FONT_SEMI_BOLD,
      FONT_SEMI_BOLD_ITALIC: theme.FONT_SEMI_BOLD_ITALIC,
      FONT_THIN: theme.FONT_THIN,
      FONT_THIN_ITALIC: theme.FONT_THIN_ITALIC,
    });
  }

  sleep = ms => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, ms)
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.innerWrapper}>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Image source={intimateLogo} style={{ marginBottom: 20 }} />
            <ActivityIndicator size="small" color="white" />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    backgroundColor: '#345d9d',
    height: '100%'
  },
  innerWrapper: {
    height: '100%',
    justifyContent: 'center',
    marginHorizontal: 32
  },
  buttonPrimary: {
    backgroundColor: '#63b5e5',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOutline: {
    backgroundColor: '#345d9d',
    borderWidth: 2,
    borderColor: '#fff',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
})
