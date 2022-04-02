import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages for Navigation
import HomeScreen from './screens/Home';
import NavigationA from './screens/Navigation/NavigationA';
import NavigationScreen from './screens/Navigation/NavigationScreen';
import TextInputScreen from './screens/TextInput/TextInput';

const Stack = createNativeStackNavigator();

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
        options={{ title: 'Text InputScreen' }}
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
