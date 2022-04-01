// screens/Home.js
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home screen</Text>
        <Button title='Go to Blog' onPress={()=>{null}}/>
      </View>
    );
  }
}
export default Home;