import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import CardFlip from 'react-native-card-flip'
import SliderPageWrapper from '../../../../layout/SliderPageWrapper'
import SliderPage from '../../../../layout/SliderPage'
import SliderPageHeader from '../../../../layout/SliderPageHeader'
import SliderPageBottomPadder from '../../../../layout/SliderPageBottomPadder'
import SliderContent from '../../../../layout/SliderContent'
import SliderPageSecondaryHeader from '../../../../layout/SliderPageSecondaryHeader'
import PaddedView from '../../../../layout/PaddedView'

import addWalletIcon from '../../../../../assets/images/add-wallet-icon.png'
import homeIcon from '../../../../../assets/images/home-icon.png'

export default class AppSettings extends React.Component {
  static navigationOptions = {
    title: 'intimate.io ',
    headerStyle: { backgroundColor: '#345d9d' },
    headerTitleStyle: { color: '#eceff6' }
  }

  render() {
    return (
      <SliderPageWrapper>
        <CardFlip style={{ height: '100%' }} ref={card => this.card = card}>
          <SliderPage>
            <SliderContent>

              <PaddedView>
                
              </PaddedView>

              {/* Divider */}
              <View style={{ backgroundColor: '#fafafd', height: 5 }} />

            </SliderContent>
            <SliderPageBottomPadder />
          </SliderPage>

          <SliderPage>

            <SliderContent>
             
            </SliderContent>
          </SliderPage>
        </CardFlip>
      </SliderPageWrapper>
    )
  }
}

const styles = StyleSheet.create({
})
