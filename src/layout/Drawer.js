import React from 'react'
import { StyleSheet, View, Text, Image, StatusBar, ActivityIndicator, ScrollView, SafeAreaView, TouchableOpacity, AsyncStorage, Button } from 'react-native'

class Drawer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  async componentWillMount() {
    try {
      let currentUser = JSON.parse(await AsyncStorage.getItem('currentUser'))
      delete currentUser.mnemonic
      delete currentUser.__v
      delete currentUser.userWallets
      delete currentUser.clients
      this.setState({ currentUser })
    } catch(e) {}
  }

  render() {
    let { currentUser } = this.state
    if (currentUser) {
      console.log(currentUser)
    }
    return (
      <ScrollView>
        <SafeAreaView style={{ paddingHorizontal: 10 }} forceInset={{ top: 'always', horizontal: 'never' }}>
          {
            currentUser && (
              <React.Fragment>
                <Text><Text style={{ fontWeight: '900', marginTop: 40}}>Email: </Text>{currentUser.email} </Text>
                <Text><Text style={{ fontWeight: '900'}}>Partner: </Text>{currentUser.partner.name} </Text>
                <Text><Text style={{ fontWeight: '900'}}>Role: </Text>{currentUser.role.name} </Text>
                <Button title="Log Out" onPress={() => { this.props.navigation.navigate('Auth') }} />
              </React.Fragment>
            )
          }
        </SafeAreaView>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

})

export default Drawer