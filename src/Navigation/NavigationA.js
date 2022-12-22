import React from 'react';
import { Text } from 'react-native'; // must included the {} even only one class need to be imported


const NavigationA = ({ navigation, route }) => {
  return <Text>The text passed to the page: {route.params.text}</Text>;
};

export default NavigationA;