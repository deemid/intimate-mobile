import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, Button } from 'react-native'

import registerIllustration from '../../../assets/images/register-illustration.png'

export default class Login extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        
        <View style={{ marginTop: 32, marginBottom: 46, alignItems: 'center' }}>
          <Image source={registerIllustration} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
