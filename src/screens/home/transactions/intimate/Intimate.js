import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native'

import CardFlip from '../../../../components/CardFlip'
import SliderPageWrapper from '../../../../layout/SliderPageWrapper'
import SliderPage from '../../../../layout/SliderPage'
import SliderPageHeader from '../../../../layout/SliderPageHeader'
import SliderPageBottomPadder from '../../../../layout/SliderPageBottomPadder'
import SliderContent from '../../../../layout/SliderContent'
import SliderPageSecondaryHeader from '../../../../layout/SliderPageSecondaryHeader'
import PaddedView from '../../../../layout/PaddedView'

import addWalletIcon from '../../../../../assets/images/add-wallet-icon.png'
import brandIcon from '../../../../../assets/images/brand-icon-white-bg.png'
import backIcon from '../../../../../assets/images/back-icon.png'

import Description from './Description'
import Table from './Table'

export default class TransactionIntimate extends React.Component {
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
            <SliderPageHeader
              leftIcon={brandIcon}
              rightIcon={addWalletIcon}
              hasSecondaryHeader={true}
              title="intimate.io"
            />

            <SliderContent hasSecondaryHeader={true}>

              <SliderPageSecondaryHeader>
                <View>
                  <Text style={{ fontWeight: '500', color: '#fff' }}>WALLET BALANCE</Text>
                  <Text style={{ fontWeight: '900', color: '#fff', fontSize: 18 }}>123,123,123.45 ITM</Text>
                  <Text style={{ fontSize: 12, color: 'white', marginTop: 6 }}>$123,123,123.45 USD</Text>
                </View>
              </SliderPageSecondaryHeader>

              <PaddedView>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity activeOpacity={0.7} onPress={() => { }} style={[styles.buttonPrimary, { marginBottom: 17 }]}>
                    <View>
                      <Text style={styles.buttonText}>Receive</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.7} onPress={() => { }} style={styles.buttonOutline}>
                    <View>
                      <Text style={styles.buttonOutlineText}>Send</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </PaddedView>

              {/* Divider */}
              <View style={{ backgroundColor: '#fafafd', height: 5 }} />

              <View style={[styles.sliderPaddedSection, { marginTop: 17 }]}>
                <Table flip={() => { this.card.flip() }} />
              </View>
            </SliderContent>
            <SliderPageBottomPadder />
          </SliderPage>

          <SliderPage>
            <SliderPageHeader
              leftIcon={backIcon}
              leftIconPress={() => this.card.flip()}
              hasSecondaryHeader={true}
              title="Transaction Details"
            />
            <SliderContent hasSecondaryHeader={true}>

              <SliderPageSecondaryHeader>
                <View>
                  <Text style={{ fontWeight: '500', color: '#fff' }}>BALANCE POST TRANSACTION</Text>
                  <Text style={{ fontWeight: '900', color: '#fff', fontSize: 18, marginBottom: 10 }}>123,123,123.45 ITM</Text>

                  <Text style={{ fontWeight: '500', color: '#fff' }}>TRANSACTION</Text>
                  <Text style={{ fontWeight: '900', color: '#fff', fontSize: 18 }}>-123,123,123.45 ITM</Text>
                </View>
              </SliderPageSecondaryHeader>

              <PaddedView>
                <Description flip={() => { this.card.flip() }} />
              </PaddedView>
            </SliderContent>
            
          </SliderPage>

        </CardFlip>


      </SliderPageWrapper>

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
    paddingTop: 45,
    backgroundColor: '#eceff6',
  },
  sliderPage: {
    marginHorizontal: 36,
    backgroundColor: '#fff',
    position: 'relative',
    height: '100%'
  },
  sliderPageHeader: {
    height: 94,
    backgroundColor: '#345d9d',
    position: 'relative',
    paddingTop: 22,
    paddingHorizontal: 18,
  },
  sliderPageHeaderOverlayContainer: {
    position: 'relative',
    width: '100%'
  },
  sliderPageHeaderOverlay: {
    paddingHorizontal: 10,
    position: 'absolute',
    backgroundColor: '#4a6da7',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    top: 20,
  },
  sliderContent: {
    height: '100%',
    backgroundColor: '#fff',
    position: 'relative',
    marginTop: 50,
  },
  sliderPaddedSection: {
    paddingHorizontal: 18,
  },
  buttonPrimary: {
    backgroundColor: '#63b5e5',
    height: 50,
    width: '49%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOutline: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#63b5e5',
    height: 50,
    width: '49%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  buttonOutlineText: {
    color: '#63b5e5'
  }
})
