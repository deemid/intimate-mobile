import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, UIManager, LayoutAnimation, ActivityIndicator, Alert, AsyncStorage } from 'react-native'

import intimateLogo from '../../../assets/images/intimate-logo.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import { Login as APILogin } from '../../api'
import axios from 'axios'
import qs from 'qs'

import ITMButton from '../../components/intimate/Button'

export default class Login extends React.Component {
  static navigationOptions = {
    header: null
  }

  state = {
    loggingIn: false,
    email: 'devadmin@intimate.io',
    password: '1nt1m@t3',
    loading: false
  }

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true)

    
  }

  isFormValid() {
    let { email, password } = this.state

    return email.trim() && password
  }

  login = async () => {
    let { email, password } = this.state
    if (this.state.loggingIn) {
      if (this.isFormValid()) {
        this.setState({ loading: true })

        axios.post('https://dev-api.intimate.partners/oauth/token', qs.stringify({
          grant_type: 'password',
          client_id: 'partners',
          client_secret: 'secret',
          username: email,
          password
        }), {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          }
        }).then(res => {          
          axios.get('https://dev-api.intimate.partners/users/me', {
            headers: {
              'Authorization': 'Bearer ' + res.data.access_token
            }
          }).then(async result => {
            this.setState({ loading: false })
            try {
              await AsyncStorage.setItem('currentUser', JSON.stringify(result.data))
              this.props.navigation.navigate('Drawer')
            } catch(e) {}
          }).catch(err => {
            console.log('error /me')
          })
        }).catch(err => {
          this.setState({ loading: false })
          Alert.alert('Error!', 'Invalid credentials')
        })

      } else {
        Alert.alert('Error!', 'Invalid credentials')
      }
    } else {
      LayoutAnimation.spring()
      this.setState({ loggingIn: true })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.innerWrapper}>
          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 54
          }}>
            <Image source={intimateLogo} />
          </View>
          <View>
            {
              this.state.loggingIn && (
                <View style={{ marginTop: 40 }}>
                  <Input
                    placeholder='Username'
                    containerStyle={{
                      backgroundColor: '#fff',
                      marginBottom: 10,
                      borderWidth: 2,
                      borderColor: '#62b5e5'
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                    }}
                    leftIcon={{ type: 'font-awesome', name: 'user', color: '#62b5e5' }}
                    leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                    inputStyle={{ color: '#333' }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    keyboardType="email-address"
                    onEndEditing={() => {
                      this._password.focus()
                    }}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                  />

                  <Input
                    placeholder='Password'
                    secureTextEntry={true}
                    containerStyle={{
                      backgroundColor: '#fff',
                      marginBottom: 17,
                      borderWidth: 2,
                      borderColor: '#62b5e5'
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                    }}
                    leftIcon={{ type: 'font-awesome', name: 'lock', color: '#62b5e5' }}
                    leftIconContainerStyle={{ marginLeft: 0, marginRight: 10 }}
                    inputStyle={{ color: '#333' }}
                    autoCapitalize="none"
                    autoCorrect={false}
                    ref={ref => this._password = ref}
                    returnKeyType="go"
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                  />
                </View>
              )
            }
            <ITMButton
              onPress={this.login}
              containerStyle={{ marginBottom: 17 }}
              isLoading={this.state.loading}
              text="Log In"
              color="secondary"
            />

            <TouchableOpacity activeOpacity={0.7} onPress={() => {
              this.props.navigation.navigate('RegisterScreen')
            }} style={styles.buttonOutline}>
              <View>
                <Text style={styles.buttonText}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    backgroundColor: '#345d9d',
    height: '100%'
  },
  innerWrapper: {
    height: '100%',
    justifyContent: 'center',
    marginHorizontal: 32
  },
  buttonPrimary: {
    backgroundColor: '#63b5e5',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOutline: {
    backgroundColor: '#345d9d',
    borderWidth: 2,
    borderColor: '#fff',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'FONT_REGULAR'
  }
})
