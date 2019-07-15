import React from 'react'

import ReputationScreen from './reputation/ReputationScreen'

import PageSwiper from '../../../layout/PageSwiper'
import DefaultStackHeader from '../../../navigators/components/DefaultStackHeader'

export default class ReputationHome extends React.Component {
  static navigationOptions = DefaultStackHeader

  render() {
    return (
      <PageSwiper>
        <ReputationScreen />
      </PageSwiper>
    )
  }
}
