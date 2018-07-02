import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default class App extends Component {
  render() {
    return(
        <View style={styles.container}>      
            <Text> TODO </Text>
        </View>
    );
  }
}

const styles =stylesheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center'
    }
});
           
      

  
