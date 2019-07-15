import React from 'react'
import { View, ScrollView } from 'react-native'

export default class SliderPage extends React.Component {

  static defaultProps = {
    isScrolling: true
  }

  render() {
    return (
      <View style={{ flex: 1, flexGrow: 1, paddingBottom: 16 }}>
        {
          this.props.isScrolling ? (
            <ScrollView>{this.props.children}</ScrollView>
          ) : this.props.children
        }
      </View>
    )
  }
}
