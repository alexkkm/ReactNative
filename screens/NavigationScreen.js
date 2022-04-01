import React from 'react';
import { Button, View, Text } from 'react-native';


const NavigationScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default NavigationScreen;