import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

import pendingIcon from '../../../../../assets/images/pending-icon.png'
import completeIcon from '../../../../../assets/images/complete-icon.png'
import dropdownIcon from '../../../../../assets/images/dropdown-icon.png'
import sendIcon from '../../../../../assets/images/send-icon.png'

export default class Table extends React.Component {

  render() {
    return (
      <React.Fragment>
        <View style={styles.table}>
          <View style={styles.tableHeader}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>DATE</Text>
            <View style={{ marginRight: 36 }}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>DETAILS</Text>
            </View>

          </View>
        </View>
        <View style={styles.tableBody}>
          <TouchableOpacity activeOpacity={0.8} onPress={this.props.flip} style={styles.tableRow}>
            <View>
              <Text style={{ fontWeight: '900' }}>DD.MM.YY</Text>
              <Text>HH:MM:SS</Text>
            </View>
            <View>
              <Image source={pendingIcon} />
            </View>
            <View>
              <Image source={sendIcon} />
              <Text>TO:</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ fontWeight: '900' }}>~$14,145.00 USD</Text>
              <Text>012Y2...2 2343</Text>
            </View>
            <View style={{ width: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={dropdownIcon} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} onPress={this.props.flip} style={[styles.tableRow, { backgroundColor: 'white' }]}>
            <View>
              <Text style={{ fontWeight: '900' }}>DD.MM.YY</Text>
              <Text>HH:MM:SS</Text>
            </View>
            <View>
              <Image source={completeIcon} />
            </View>
            <View>
              <Image source={sendIcon} />
              <Text>TO:</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ fontWeight: '900' }}>~$14,145.00 USD</Text>
              <Text>012Y2...2 2343</Text>
            </View>
            <View style={{ width: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={dropdownIcon} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} onPress={this.props.flip} style={styles.tableRow}>
            <View>
              <Text style={{ fontWeight: '900' }}>DD.MM.YY</Text>
              <Text>HH:MM:SS</Text>
            </View>
            <View>
              <Image source={pendingIcon} />
            </View>
            <View>
              <Image source={sendIcon} />
              <Text>TO:</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ fontWeight: '900' }}>~$14,145.00 USD</Text>
              <Text>012Y2...2 2343</Text>
            </View>
            <View style={{ width: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={dropdownIcon} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} onPress={this.props.flip} style={[styles.tableRow, { backgroundColor: 'white' }]}>
            <View>
              <Text style={{ fontWeight: '900' }}>DD.MM.YY</Text>
              <Text>HH:MM:SS</Text>
            </View>
            <View>
              <Image source={completeIcon} />
            </View>
            <View>
              <Image source={sendIcon} />
              <Text>TO:</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ fontWeight: '900' }}>~$14,145.00 USD</Text>
              <Text>012Y2...2 2343</Text>
            </View>
            <View style={{ width: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Image source={dropdownIcon} />
            </View>
          </TouchableOpacity>

        </View>

      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  tableHeader: {
    backgroundColor: '#63b5e5',
    paddingVertical: 14,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#eff8fd',
    paddingHorizontal: 6,
    paddingVertical: 14,
    justifyContent: 'space-between'
  },
})


