import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  render(){
    return (
      <View style={styles.container}>
        <Text>Welcome to the Fish Market</Text>
        <Button title = "Fish would like to know your location"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
