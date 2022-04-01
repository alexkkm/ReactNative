/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

// naviga
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import NavigationA from './screens/Navigation/NavigationA';
import NavigationScreen from './screens/Navigation/NavigationScreen';
//

const Stack = createStackNavigator();

const NavigatorStack=()=>{
  return (
     <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#007fff', // Azure Blue
          },
          headerTintColor: '#fff',  // white
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Home' }}
      />
      <Stack.Screen 
        name="NavigationScreen" 
        component={NavigationScreen} 
        options={{ title: 'NavigationScreen' }}
      />
      <Stack.Screen 
        name="NavigationA" 
        component={NavigationA} 
        options={{ title: 'Screen A' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavigatorStack />
    </NavigationContainer>
  );
}
