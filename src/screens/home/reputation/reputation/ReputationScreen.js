import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native'

import CardFlip from 'react-native-card-flip'
import SliderPageWrapper from '../../../../layout/SliderPageWrapper'
import SliderPage from '../../../../layout/SliderPage'
import SliderPageHeader from '../../../../layout/SliderPageHeader'
import SliderPageBottomPadder from '../../../../layout/SliderPageBottomPadder'
import SliderContent from '../../../../layout/SliderContent'
import SliderPageSecondaryHeader from '../../../../layout/SliderPageSecondaryHeader'
import PaddedView from '../../../../layout/PaddedView'

import backIcon from '../../../../../assets/images/back-icon.png'
import reputationIcon from '../../../../../assets/images/reputation-icon.png'
import ageIcon from '../../../../../assets/images/age-icon.png'
import safeIcon from '../../../../../assets/images/safe-icon.png'
import tokenITM from '../../../../../assets/images/token-itm.png'
import pendingIcon from '../../../../../assets/images/pending-icon.png'
import completeIcon from '../../../../../assets/images/complete-icon.png'

import ReputationRow from './ReputationRow'

export default class ReputationScreen extends React.Component {
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
              leftIcon={reputationIcon}
              hasSecondaryHeader={true}
              title="Reputation Home"
            />

            <SliderContent hasSecondaryHeader={true}>

              <SliderPageSecondaryHeader>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row'}}>
                  <Text style={{ fontWeight: '900', color: '#fff', fontSize: 18 }}>REPUTATION</Text>
                  <Text style={{ fontWeight: '900', color: '#fff', fontSize: 18 }}>8.29</Text>
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

              {/* TODO - make this a separate component */}
              <View>
                <ReputationRow 
                  leftIcon={tokenITM}
                  title="Requested Data"
                  value="3"
                  valueTextColor="#2aac3c"
                  statusIcon={pendingIcon}
                  status="Pending"
                  statusTextColor="#f3ba82"
                />
                <ReputationRow 
                  leftIcon={tokenITM}
                  title="Received Data"
                  value="243"
                  valueTextColor="#2aac3c"
                  status="@+8.0"
                  statusTextColor="#000"
                />
                <ReputationRow 
                  leftIcon={ageIcon}
                  title="Age"
                  value="Identity 18+"
                  valueTextColor="#de3333"
                />
                <ReputationRow 
                  leftIcon={safeIcon}
                  title="Safe"
                  statusIcon={completeIcon}
                  status="Health"
                  statusTextColor="#2aac3c"
                />
              </View>
              {/* Reputation List end */}

            </SliderContent>
            <SliderPageBottomPadder />
          </SliderPage>

          {/* Flip page */}
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
