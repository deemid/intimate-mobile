import React from 'react'

import AppSettings from './appSettings/AppSettings'
import AccountSettings from './accountSettings/AccountSettings'
import CryptoSettings from './cryptoSettings/CryptoSettings'

import PageSwiper from '../../../layout/PageSwiper'
import DefaultStackHeader from '../../../navigators/components/DefaultStackHeader'

export default class MyAccount extends React.Component {
  static navigationOptions = DefaultStackHeader

  render() {
    return (
      <PageSwiper>
        <AppSettings />
        <AccountSettings />
        <CryptoSettings />
      </PageSwiper>
    )
  }
}
