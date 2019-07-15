import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native'

import backIcon from '../../../../../assets/images/back-icon.png'
import sendIcon from '../../../../../assets/images/send-icon.png'

export default class TransactionIntimate extends React.Component {
  static navigationOptions = {
    title: 'intimate.io ',
    headerStyle: { backgroundColor: '#345d9d' },
    headerTitleStyle: { color: '#eceff6' }
  }

  render() {
    return (
      <React.Fragment>
        <View style={{ backgroundColor: '#fafafd', height: 5 }} />

        <View style={styles.table}>
          <View style={[styles.tableHeader, { paddingHorizontal: 30 }]}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>DATE</Text>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>DETAILS</Text>
          </View>

          <View style={[styles.tableRow, { paddingHorizontal: 30 }]}>
            <View>
              <Text style={{ fontWeight: '900' }}>DD.MM.YY</Text>
              <Text>HH:MM:SS</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image source={sendIcon} />
                <Text style={{ fontWeight: '900' }}>Nickname</Text>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>TO:</Text>
                <Text>1242....24124</Text>
              </View>
              <View style={{ marginTop: 10 }}>
                <TouchableOpacity style={{ height: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: '#63b5e5', paddingHorizontal: 8 }}>
                  <Text style={{ color: '#fff' }}>Add to favorites</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ backgroundColor: '#eff8fd', paddingHorizontal: 30, paddingVertical: 18 }}>
            <Text style={{ color: '#63b5e5', fontSize: 14, fontWeight: '900', marginBottom: 18 }}>DETAILS</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: '900' }}>AMOUNT</Text>
              <Text style={{ fontWeight: '900' }}>145,135 ITM</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 18 }}>
              <Text>USD Amount</Text>
              <Text>$100,000,000</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Exchange Ratte</Text>
              <Text>1.142 USD/ITM</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Their Balance</Text>
              <Text>1,354,135 ITM</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Fee (Gas)</Text>
              <Text>23 Gwei / $0.20 USD</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Max (Gas Limit)</Text>
              <Text>23 Gwei / $0.20 USD</Text>
            </View>
          </View>
        </View>
      </React.Fragment>
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
    height: 100,
    justifyContent: 'center',
    top: 20,
  },
  sliderContent: {
    height: '100%',
    backgroundColor: '#fff',
    position: 'relative',
    marginTop: 80,
  },
  sliderPaddedSection: {
    paddingHorizontal: 18,
  },

  tableHeader: {
    backgroundColor: '#63b5e5',
    paddingVertical: 14,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#d0e8f6',
    paddingHorizontal: 6,
    paddingVertical: 14,
    justifyContent: 'space-between'
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






