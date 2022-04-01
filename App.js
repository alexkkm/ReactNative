/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

// naviga
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Blog from './screens/Blog';
import BlogDetails from './screens/BlogDetails';
//

const Stack = createStackNavigator();

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

function NavStack() {
  return (
     <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Home' }}
      />
      <Stack.Screen 
        name="Blog" 
        component={Blog} 
        options={{ title: 'Blog' }}
      />
      <Stack.Screen 
       name="BlogDetails" 
       component={BlogDetails} 
       options={{ title: 'Blog Detail' }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}

/*
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text>Title of Home Page</Text>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            Double tap <Text style={styles.highlight}>R</Text> on your keyboard to reload your app's code.
          </Section>
          <Section title="Debug">
            Press <Text style={styles.highlight}>Cmd or Ctrl + M</Text> or <Text style={styles.highlight}>Shake</Text> your device to open the React Native debug menu.
          </Section>

          <Section title="Working Area">
            <TestingPage name="A"></TestingPage>
          </Section>

          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

class TestingPage extends Component{
  constructor(props){
    super(props);
    this.name="";
  }

  state={blubState:"On"}

  render(){
    return(
    <View>
      <Text>
        it is {this.props.name}
      </Text>
      <Text>
        Light Bulb is {this.state.blubState}
      </Text>
      <Button
        onPress={()=>{
          (this.state.blubState==="On")?this.setState({blubState:"Off"}):this.setState({blubState:"On"})
        }}
        title={
          (this.state.blubState==="On")?"Turn Off":"Turn On"
        }
      />
    </View>
    );
  }
}

export default App;
*/