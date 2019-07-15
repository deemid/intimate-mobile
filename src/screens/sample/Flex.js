import React from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import styles from '../../styles'
import Button from '../../components/intimate/Button'

export default class Flex extends React.Component {
  render() {
    return (
      <View style={[
        styles.layout.fullHeight,
        styles.flex.row.AlignLeft,
        styles.flex.row.VAlignCenter
      ]}>
        <Button style={{ flex: 1, marginHorizontal: 2 }} color="secondary" text="Liyan" onPress={() => {}} />
        <Button style={{ flex: 1, marginHorizontal: 2 }} outline text="Liyan" onPress={() => {}} />
      </View>
    )
  }
}