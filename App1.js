/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

const sampleData = [
  {
    title: "Todo Title here",
    message: "Todo Body here"
  },
  {
    title: "Todo Title here",
    message: "Todo Body here"
  },
  {
    title: "Todo Title here",
    message: "Todo Body here"
  },
  {
    title: "Todo Title here",
    message: "Todo Body here"
  },
  {
    title: "Todo Title here",
    message: "Todo Body here"
  },
  {
    title: "Todo Title here",
    message: "Todo Body here"
  },
  {
    title: "Todo Title here",
    message: "Todo Body here"
  },
  {
    title: "Todo Title here",
    message: "Todo Body here"
  },
  {
    title: "Todo Title here",
    message: "Todo Body here"
  },
  {
    title: "Todo Title here",
    message: "Todo Body here"
  },
  {
    title: "Todo Title here",
    message: "Todo Body here"
  },
  {
    title: "Todo Title here",
    message: "Todo Body here"
  },
  {
    title: "Todo Title here",
    message: "Todo Body here"
  }
]

export default class App1 extends Component {
  render() {
    sampleData.push(
      {
        title: '',
        message: ''
      }
    )
    return (
      <ScrollView style={{flex:1}}>
        {
            <TouchableOpacity>
                sampleData.map((item, key) => {
                      return (this.todoItem(item.title, item.message))
                }
            </TouchableOpacity>
        }
      </ScrollView>
    );
  }

  todoItem = (title, body) => {
    return (
      <View style={{width: Dimensions.get('window').width, height: 50, backgroundColor:'white', marginTop: 10}}>
        <Text>{title}</Text>
        <Text>{body}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: 'grey',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 70,
  }
});