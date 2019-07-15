import React from 'react'

import TransactionAccounts from './accounts/Accounts'
import TransactionIntimate from './intimate/Intimate'

import PageSwiper from '../../../layout/PageSwiper'
import DefaultStackHeader from '../../../navigators/components/DefaultStackHeader'

export default class TransactionsScreen extends React.Component {
  static navigationOptions = DefaultStackHeader

  render() {
    return (
      <PageSwiper>
        <TransactionAccounts />
        <TransactionIntimate />
      </PageSwiper>
    )
  }
}
