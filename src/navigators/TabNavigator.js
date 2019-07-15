import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { View, Text } from 'react-native'
import TransactionsHome from '../screens/home/transactions/TransactionsHome'
import MyAccount from '../screens/home/myAccount/MyAccount'
import ReputationHome from '../screens/home/reputation/ReputationHome'
import DirectoryTab from '../screens/home/directory/DirectoryTab'

const TransactionsStack = createStackNavigator({
  TransactionsStackHome: TransactionsHome
})

const MyAccountStack = createStackNavigator({
  MyAccount: MyAccount
})

const ReputationStack = createStackNavigator({
  ReputationHome: ReputationHome
})

const DirectoryStack = createStackNavigator({
  DirectoryHome: DirectoryTab
})

const TabNavigator = createBottomTabNavigator({
  Transactions: TransactionsStack,
  Reputation: ReputationStack,
  Directory: DirectoryStack,
  MyAccount: MyAccountStack
}, {
  initialRouteName: 'Transactions',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      
      switch(routeName) {
        case 'Transactions': {
          return <Ionicons name="ios-swap" size={28} color={tintColor} />
        }
        case 'Reputation': {
          return <Ionicons name="ios-checkmark-circle-outline" size={28} color={tintColor} />
        }
        case 'Directory': {
          return <Ionicons name="ios-book" size={28} color={tintColor} />
        }
        case 'MyAccount': {
          return <Ionicons name="ios-card" size={28} color={tintColor} />
        }
      }
    },
  }),
  tabBarOptions: {
    activeTintColor: '#345d9d',
    inactiveTintColor: '#859ec4',
    tabStyle: {
      backgroundColor: '#fff',
      top: -17,
      height: 66,
      shadowColor: "#000",
      shadowOffset: {
        width: 5,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    labelStyle: {
      fontSize: 12,
      position: 'relative',
      top: -8
    },
  },
})

export default TabNavigator