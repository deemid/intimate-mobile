import React from 'react'
import Swiper from 'react-native-swiper'

class ComposedSwiper extends Swiper {
  componentWillReceiveProps(nextProps) {
    nextProps.index === this.props.index 
  }
}

export default ComposedSwiper