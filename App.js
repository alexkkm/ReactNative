import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages for Navigation
import HomeScreen from './src/Home';
import NavigationA from './src/Navigation/NavigationA';
import NavigationScreen from './src/Navigation/Navigation';

// Pages for Text Input
import TextInputScreen from './src/TextInput/TextInput';

// Pages for React Basic
import PropsScreen from './src/Basic/Props';
import StateScreen from './src/Basic/State';
import PlatformScreen from './src/Platform/Platform';
import StyleScreen from './src/Style/Style';
import StyleSheetScreen from './src/Style/StyleSheet';
import ShareOutwardScreen from './src/ShareOutward/ShareOutward';
import DeviceEventEmitterScreen from './src/DeviceEventEmitter/DeviceEventEmitter';
import DeviceEventEmitterScreen2 from './src/DeviceEventEmitter/DeviceEventEmitter2';

const Stack = createNativeStackNavigator();

const NavigatorStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#007fff', // Azure Blue
        },
        headerTintColor: '#fff',  // Pure White
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >

      <Stack.Screen   // Home
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home' }}
      />


      <Stack.Screen   // Navigation
        name="NavigationScreen"
        component={NavigationScreen}
        options={{ title: 'Navigation Screen' }}
      />
      <Stack.Screen
        name="NavigationA"
        component={NavigationA}
        options={{ title: 'Screen A' }}
      />


      <Stack.Screen   // Text Input
        name="TextInputScreen"
        component={TextInputScreen}
        options={{ title: 'Text Input Screen' }}
      />


      <Stack.Screen   // Props
        name="PropsScreen"
        component={PropsScreen}
        options={{ title: 'Props Screen' }}
      />


      <Stack.Screen   // State
        name="StateScreen"
        component={StateScreen}
        options={{ title: 'State Screen' }}
      />


      <Stack.Screen   // Platform
        name="PlatformScreen"
        component={PlatformScreen}
        options={{ title: 'Platform Screen' }}
      />


      <Stack.Screen   // Style
        name="StyleScreen"
        component={StyleScreen}
        options={{ title: 'Style Screen' }}
      />


      <Stack.Screen   // StyleSheet
        name="StyleSheetScreen"
        component={StyleSheetScreen}
        options={{ title: 'StyleSheet Screen' }}
      />


      <Stack.Screen   // ShareOutward
        name="ShareOutwardScreen"
        component={ShareOutwardScreen}
        options={{ title: 'ShareOutward Screen' }}
      />

      <Stack.Screen   // DeviceEventEmitter
        name="DeviceEventEmitterScreen"
        component={DeviceEventEmitterScreen}
        options={{ title: 'DeviceEventEmitter Screen' }}
      />
      <Stack.Screen
        name="DeviceEventEmitterScreen2"
        component={DeviceEventEmitterScreen2}
        options={{ title: 'DeviceEventEmitter Screen2' }}
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
