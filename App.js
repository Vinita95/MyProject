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
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput
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

export default class App extends Component {
  render() {
    sampleData.push(
      {
        title: '',
        message: ''
      }
    )
    return (
      /*<View style={styles.Screen2}>
        <TouchableOpacity style={styles.placeButton} onPress={()=>{alert("you clicked me")}}>
          <Image source={require("./assets/back.png")}/>
        </TouchableOpacity>
        <Text style={styles.Screen2}> New Note </Text>
        <TextInput> 
          placeholder= "Note description here..."
        </TextInput>
      </View>*/

      <View style={styles.container}>
        <Text style={styles.placeInput} > TODO </Text>
        <TouchableOpacity style={styles.placeButton} onPress={()=>{alert("you clicked me")}}>
          <Image source={require("./assets/plus.png")}/>
        </TouchableOpacity>        
        <ScrollView style={{flex:1}}>
        {
          sampleData.map((item, key) => {
              return this.todoItem(item.title, item.message)
            })
           
        }
        </ScrollView>
      </View> 
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
    //flex: 1,
    fontSize: 20,
    padding : 20,
    alignItems:"flex-end",
    justifyContent: "flex-start"
  },
  container: {
    flex: 1,
    flexDirection : 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  InputContainer: {
    //flex: 1,
    flexDirection: 'row',
    padding: 20,
    justifyContent : 'center',
    alignItems :"flex-start",
    fontSize: 30
  },
  placeInput: {
    width:"70%"
  },
  placeButton : {
    //flex :1,
    flexDirection :"column",
    justifyContent: "space-between"
  },
  Screen2: {
    fontSize:30,
    padding:20,
    justifyContent:"center"
  }
});