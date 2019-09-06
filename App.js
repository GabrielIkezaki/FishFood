import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.meuIp = this.meuIp.bind(this);

    this.state = {
      data: ""
    };
  }

  
  async meuIp(){
    this.setState({
      data:"Fish is tracking you..."
    });
    const ip = await fetch("http://httpbin.org/ip");
    const novoip = await ip.json();
    this.setState({
      data: novoip.origin
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style = {styles.ip}>{this.state.data}</Text>
        <Button title = "Fish would like to know your location" onPress={this.meuIp}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
