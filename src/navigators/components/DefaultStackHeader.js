import React from 'react'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const DefaultStackHeader = ({ navigation }) => ({
  title: 'intimate.io',
  headerStyle: { backgroundColor: '#345d9d' },
  headerTitleStyle: { color: '#eceff6' },
  headerLeft: () => {
    return <TouchableOpacity style={{ paddingLeft: 10, width: 45, height: '100%', justifyContent: 'center' }} onPress={() => { navigation.toggleDrawer() }}>
      <Ionicons name="ios-menu" size={28} color="#fff" />
    </TouchableOpacity>
  }
})

export default  DefaultStackHeader