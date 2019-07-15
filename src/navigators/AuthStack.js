import { createStackNavigator } from 'react-navigation'

// Auth Screens (Launch)
import Login from '../screens/launch/Login'
import Register from '../screens/launch/Register'

const AuthStack = createStackNavigator({
  LoginScreen: {
    screen: Login
  },
  RegisterScreen: {
    screen: Register,
    navigationOptions: () => ({
      title: 'Register',
      headerBackTitle: null,
      headerBackTitleStyle: {
        color: '#fff'
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerStyle: {
        backgroundColor: '#345d9d'
      },
      headerTintColor: 'white',
    })
  }
})

export default AuthStack