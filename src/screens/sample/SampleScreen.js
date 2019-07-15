import React from 'react'
import { View, StyleSheet, Text, Animated, PanResponder } from 'react-native'
import Deck from './Deck'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
]

export default class SampleScreen extends React.Component {
  
  componentWillMount() {

  }

  renderCard = item => {
    return <Card
      title={item.text}
      image={{ uri: item.uri }}
    >
      <Button backgroundColor="#03a9f4" title="View Now" />
    </Card>
  }

  renderNoMoreCards = () => {
    return <Card
      title="No more cards"
    >
    <Button backgroundColor="#03a9f4" title="Get More" />
    </Card>
  }

  render() {
    return (
      <View>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

  }
})