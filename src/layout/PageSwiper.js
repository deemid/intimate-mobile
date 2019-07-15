import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Animated, PanResponder, Dimensions } from 'react-native'
import Swiper from '../components/Swiper'

import DefaultStackHeader from '../navigators/components/DefaultStackHeader'

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('screen')
const SWIPE_TRESHOLD = SCREEN_WIDTH * 0.25
const SWIPE_OUT_DURATION = 350

export default class PageSwiper extends React.Component {
  static navigationOptions = DefaultStackHeader

  static defaultProps = {
    pages: ['Accounts', 'intimate.io']
  }

  constructor(props) {
    super(props)

    const position = new Animated.Value(0)
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => {
        return true
      },
      onPanResponderMove: (event, gesture) => {
        // gesture.dx = how far the finger moved from the left or right
        position.setValue(gesture.dx)
      },
      onPanResponderRelease: (event, gesture) => {
        Animated.spring(position, {
          toValue: 0
        }).start()
      }
    })

    this._panResponder = panResponder
    this._position = position

    // state
    this.state = {
      pages: [...this.props.pages],
      currentIndex: 0
    }
  }

  render() {
    let { pages, currentIndex } = this.state

    let opacity = this._position.interpolate({
      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      outputRange: [0, 1, 0]
    })

    let buttonOpacity = this._position.interpolate({
      inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
      outputRange: [0.5, 1, 0.5]
    })

    let nextPage, prevPage
    if (pages.length <= 1) {
      nextPage = 'NEXT',
        prevPage = 'PREVIOUS'
    } else {
      nextPage = currentIndex + 1 >= pages.length ? pages[0] : pages[currentIndex + 1]
      prevPage = currentIndex - 1 < 0 ? pages[pages.length - 1] : pages[currentIndex - 1]
    }

    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />

        <Swiper
          containerStyle={styles.slider}
          showsPagination={false}
          ref={component => this.swiper = component}
          {...this._panResponder.panHandlers}
          onIndexChanged={(currentIndex) => {
            this.setState({ currentIndex })
          }}
          loop={true}
        >
          {this.props.children}
        </Swiper>

        {/* Render left and right */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.leftPageSwiperButton}
          disabled={this.props.children.length === 0}
          onPress={() => {
            this.swiper.scrollBy(-1);
          }}>
          <Animated.View style={[styles.pageSwiperButtonInner, { opacity: buttonOpacity }]}>
            <Animated.Text style={{
              transform: [
                { rotate: '-90deg' },
                { translateX: -22 },
                { translateY: -22 }
              ],
              width: 70,
              height: 26,
              fontSize: 14,
              lineHeight: 26,
              color: '#c2cee1',
              fontWeight: '500',
              opacity
            }}>{prevPage}</Animated.Text>
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rightPageSwiperButton}
          activeOpacity={0.8}
          disabled={this.props.children.length === 0}
          onPress={() => {
            this.swiper.scrollBy(1);
          }}
        >
          <Animated.View style={[styles.pageSwiperButtonInner, { opacity: buttonOpacity }]}>
            <Animated.Text style={{
              transform: [
                { rotate: '-90deg' },
                { translateX: -22 },
                { translateY: -22 }
              ],
              width: 70,
              height: 26,
              fontSize: 14,
              lineHeight: 26,
              color: '#c2cee1',
              fontWeight: '500',
              opacity
            }}>{nextPage}</Animated.Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceff6',
    height: '100%',
    position: 'relative'
  },
  slider: {
    height: '100%',
    backgroundColor: '#eceff6',
  },
  leftPageSwiperButton: {
    height: '100%',
    width: 26,
    position: 'absolute',
    marginTop: 45
  },
  rightPageSwiperButton: {
    height: '100%',
    width: 26,
    position: 'absolute',
    marginTop: 45,
    right: 0
  },
  pageSwiperButtonInner: {
    width: 26,
    height: 70,
    backgroundColor: '#fff',
    paddingTop: 10,
    height: '100%'
  }
})