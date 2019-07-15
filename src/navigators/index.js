import { createSwitchNavigator, createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation'
import Loading from '../screens/launch/Loading'
import Drawer from '../layout/Drawer'
import AuthStack from './AuthStack'
import Flex from '../screens/sample/Flex'

import TabNavigator from './TabNavigator'

const DrawerNavigator = createDrawerNavigator({
  Tabs: TabNavigator
}, {
  contentComponent: Drawer
})

const SwitchNavigator = createSwitchNavigator({
  AuthLoading: Loading,
  Auth: AuthStack,
  Drawer: DrawerNavigator,
  Flex: Flex
}, {
  initialRouteName: 'AuthLoading'
})

export default createAppContainer(SwitchNavigator)