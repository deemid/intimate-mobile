import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, Button } from 'react-native'


export default class ScreenList extends React.Component {

  render() {
    return (
      <View>
        <StatusBar
          barStyle="light-content"
        />
        <Button
          onPress={() => { this.props.navigation.navigate('Login') }}
          title="Login Page"
        />
        <Button
          onPress={() => { this.props.navigation.navigate('Register') }}
          title="Register Page"
        />
      </View>
    )
  } 
}