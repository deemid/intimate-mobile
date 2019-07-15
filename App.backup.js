import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import Animated, { Easing } from 'react-native-reanimated';

export default class App extends React.Component {

  state = {
    animation: new Animated.Value(1)
  }

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: -2,
      duration: 1500,
      easing: Easing.ease
    }).start(() => {
      // Animated.timing(this.state.animation, {
      //   toValue: 1,
      //   duration: 350,
      //   easing: Easing.ease
      // }).start()
    })
  }

  render() {
    const animatedStyles = {
      transform: [
        {
          scaleY: this.state.animation,
        }
      ]
    }

    return (
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
})
