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
import inIcon from '../../../../../assets/images/in-icon.png'
import brandIcon from '../../../../../assets/images/brand-icon.png'
import tokenBinance from '../../../../../assets/images/token-binance.png'
import tokenBitcoin from '../../../../../assets/images/token-bitcoin.png'
import tokenEthereum from '../../../../../assets/images/token-ethereum.png'
import tokenItm from '../../../../../assets/images/token-itm.png'
import tokenSynthetix from '../../../../../assets/images/token-synthetix.png'
import backIcon from '../../../../../assets/images/back-icon.png'

const transactions = [
  {
    id: 1,
    logo: tokenItm,
    tokenName: 'intimate.io',
    tokenSymbol: 'ITM',
    fiatAmount: 0,
    amount: 0
  },
  {
    id: 2,
    logo: tokenEthereum,
    tokenName: 'Ethereum',
    tokenSymbol: 'ETH',
    fiatAmount: 20964.52,
    amount: 134.13
  },
  {
    id: 3,
    logo: tokenBitcoin,
    tokenName: 'Bitcoin',
    tokenSymbol: 'BTC',
    fiatAmount: 16861.8,
    amount: 4.13
  },
  {
    id: 4,
    logo: tokenBinance,
    tokenName: 'Binance',
    tokenSymbol: 'BNC',
    fiatAmount: 8604.25,
    amount: 1355
  },
  {
    id: 5,
    logo: tokenSynthetix,
    tokenName: 'Synthetix',
    tokenSymbol: 'SYN',
    fiatAmount: 6.09,
    amount: 23431
  }
]

export default class TransactionsScreen extends React.Component {
  static navigationOptions = {
    title: 'intimate.io ',
    headerStyle: { backgroundColor: '#345d9d' },
    headerTitleStyle: { color: '#eceff6' }
  }

  renderTransactions() {
    return transactions.map((t, index) => {
      return (
        <View key={index}
          style={{ flexDirection: 'row', paddingHorizontal: 18, paddingVertical: 10, justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: '#eceff6' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 40, alignItems: 'center', marginRight: 10 }}>
              <Image source={t.logo} />
            </View>
            <View>
              <Text style={{ fontWeight: '900' }}>{t.tokenName}</Text>
              <Text style={{ color: '#333' }}>N/A</Text>
            </View>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={{ fontWeight: '900' }}>{t.amount.toFixed(2)} {t.tokenSymbol}</Text>
            <Text style={{ color: '#737474' }}>${t.fiatAmount.toFixed(2)}</Text>
          </View>
        </View>
      )
    })
  }

  render() {
    return (
      <SliderPageWrapper>
        <CardFlip style={{ height: '100%' }} ref={card => this.card = card}>
          <SliderPage>
            <SliderPageHeader
              leftIcon={homeIcon}
              rightIcon={addWalletIcon}
              hasSecondaryHeader={true}
              title="Accounts"
            />
            <SliderContent hasSecondaryHeader={true}>
              {/* This view is for position:relative and z index for HeaderOverlay */}
              <SliderPageSecondaryHeader>
                <View>
                  <Text style={{ fontWeight: '500', color: '#fff' }}>CONSOLIDATED BALANCE</Text>
                  <Text style={{ fontWeight: '900', color: '#fff', fontSize: 18 }}>$123, 123, 123.45 USD</Text>
                </View>
              </SliderPageSecondaryHeader>

              <PaddedView>
                <View style={styles.panelPrimary}>
                  <View style={styles.panelPrimaryHeader}>
                    <Text style={{ fontSize: 14, color: '#fff', fontWeight: '500' }}>LAST TRANSACTION</Text>
                  </View>
                  <View style={styles.panelPrimaryContent}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text>DD.MM.YY</Text>
                      <Text>+ $12,421.28</Text>
                      <Text>+ 235,432 ITM</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={inIcon} style={{ marginRight: 10 }} />
                        <Text>012Y....22343</Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <Image source={brandIcon} style={{ marginRight: 10 }} />
                        <Text>Details</Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 22 }}>
                  <TouchableOpacity activeOpacity={0.7} onPress={() => { }} style={[styles.buttonPrimary, { marginBottom: 17 }]}>
                    <View>
                      <Text style={styles.buttonText}>Receive</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.7} onPress={() => { this.card.flip() }} style={styles.buttonOutline}>
                    <View>
                      <Text style={styles.buttonOutlineText}>Send</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </PaddedView>

              {/* Divider */}
              <View style={{ backgroundColor: '#fafafd', height: 5 }} />

              <View>
                {this.renderTransactions()}
              </View>

            </SliderContent>
            <SliderPageBottomPadder />
          </SliderPage>
          <SliderPage>

            <SliderPageHeader
              leftIcon={backIcon}
              title="Details"
              leftIconPress={() => this.card.flip()}
            />

            <SliderContent>
              <PaddedView>
                <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 10 }}>Sample Details</Text>
                <Text style={{ marginBottom: 10 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ullam sapiente minus cum dolore illo quia vitae maxime reiciendis optio, architecto veritatis ex omnis nulla esse odio quam provident alias!
                </Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsa tenetur distinctio. Cumque, eaque! Mollitia nulla ea dolorem eos eveniet? Dicta repudiandae delectus autem quasi vel culpa suscipit ullam doloremque dignissimos sint, pariatur ratione commodi itaque labore quidem dolores necessitatibus tempora placeat magnam non ea tenetur reprehenderit veniam obcaecati. Dolorem, eum. Eum vel eius laborum eos libero dolores iste repudiandae.</Text>
              </PaddedView>

            </SliderContent>
          </SliderPage>
        </CardFlip>
      </SliderPageWrapper>
    )
  }
}

const styles = StyleSheet.create({
  panelPrimary: {
    borderWidth: 2,
    borderColor: '#63b5e5',
    marginBottom: 10
  },
  panelPrimaryHeader: {
    height: 45,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#63b5e5'
  },
  panelPrimaryContent: {
    paddingHorizontal: 10,
    paddingVertical: 28
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
