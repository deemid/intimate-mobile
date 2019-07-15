import React from 'react'
import { StyleSheet, Animated } from 'react-native'
import CardFlip from 'react-native-card-flip'

class ComposedCardFlip extends CardFlip {
  componentDidMount(){
    this.setState({
      duration: this.props.duration,
      flipZoom: this.props.flipZoom,
      sides: this.props.children
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps)
    if (nextProps.side === this.props.side) {
      return
    }
    
    this.setState({
      duration: nextProps.duration,
      flipZoom: nextProps.flipZoom,
      sides: nextProps.children
    });
  }

  render() {
    const { side, progress, rotateOrientation, zoom, sides } = this.state;
    const { flipZoom } = this.props

    // Handle cardA transformation
    const cardATransform = this.getCardATransformation()

    // Handle cardB transformation
    const cardBTransform = this.getCardBTransformation()

    // Handle cardPopup
    const cardZoom = zoom.interpolate({
      inputRange: [0,100],
      outputRange: [1, (1+flipZoom)],
      extrapolate: 'clamp',
    });

    const scaling = {
      transform: [
        { scale: cardZoom }
      ]
    }
    
    return (
      <Animated.View style={[this.props.style, scaling]}>
        <Animated.View style={[styles.cardContainer, cardATransform]}>{sides[0]}</Animated.View>
        <Animated.View style={[styles.cardContainer, cardBTransform]}>{sides[1]}</Animated.View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    position:'absolute',
    left:0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default ComposedCardFlip