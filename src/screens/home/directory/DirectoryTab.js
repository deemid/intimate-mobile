import React from 'react'

import Directory from './directory/Directory'
import IntimatePartners from './intimatePartners/IntimatePartners'

import PageSwiper from '../../../layout/PageSwiper'
import DefaultStackHeader from '../../../navigators/components/DefaultStackHeader'

export default class DirectoryTab extends React.Component {
  static navigationOptions = DefaultStackHeader

  render() {
    return (
      <PageSwiper>
        <Directory />
        <IntimatePartners />
      </PageSwiper>
    )
  }
}
