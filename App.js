import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages for Navigation
import HomeScreen from './screens/Home';
import NavigationA from './screens/Navigation/NavigationA';
import NavigationScreen from './screens/Navigation/NavigationScreen';

// Pages for Text Input
import TextInputScreen from './screens/TextInput/TextInput';

// Pages for React Basic
import PropsScreen from './screens/Basic/Props';
import StateScreen from './screens/Basic/State';

const Stack = createNativeStackNavigator();

const NavigatorStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#007fff', // Azure Blue
        },
        headerTintColor: '#fff',  // white
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
