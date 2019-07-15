import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import SliderPageWrapper from '../../../../layout/SliderPageWrapper'
import SliderPage from '../../../../layout/SliderPage'
import SliderPageBottomPadder from '../../../../layout/SliderPageBottomPadder'
import SliderContent from '../../../../layout/SliderContent'
import PaddedView from '../../../../layout/PaddedView'
import SettingsHeader from '../SettingsHeader'

export default class AppSettings extends React.Component {
  static navigationOptions = {
    title: 'intimate.io ',
    headerStyle: { backgroundColor: '#345d9d' },
    headerTitleStyle: { color: '#eceff6' }
  }

  render() {
    return (
      <SliderPageWrapper>
        <SliderPage>

          <SettingsHeader title="App Settings" />

          <SliderContent>


            <PaddedView>
            </PaddedView>

            {/* Divider */}
            <View style={{ backgroundColor: '#fafafd', height: 5 }} />

          </SliderContent>
          <SliderPageBottomPadder />
        </SliderPage>

      </SliderPageWrapper>
    )
  }
}

const styles = StyleSheet.create({
})
