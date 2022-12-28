import React from 'react';
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

import { Colors } from 'react-native/Libraries/NewAppScreen';

// Customize stylesheet for standardlize the style of this page
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


// Customize component for creating a concept area
const Section = ({ children, title }) => {
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


const HomeScreen = ({ navigation }) => {
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
        <Text style={{ fontSize: 30 }}>Title of Home Page</Text>
        <Text style={{ fontSize: 22 }}>Welcome back!!!</Text>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Props">
            <View>
              <Button
                title="Go to Props Screen"
                onPress={() => navigation.navigate('PropsScreen')}
              />
            </View>
          </Section>

          <Section title="State">
            <View>
              <Button
                title="Go to State Screen"
                onPress={() => navigation.navigate('StateScreen')}
              />
            </View>
          </Section>

          <Section title="Navigation">
            <View>
              <Button
                title="Go to Navigation Screen"
                onPress={() => navigation.navigate('NavigationScreen')}
              />
            </View>
          </Section>

          <Section title="Text Input">
            <View>
              <Button
                title="Go to Text Input Screen"
                onPress={() => navigation.navigate('TextInputScreen')}
              />
            </View>
          </Section>

          <Section title="Platfrom">
            <View>
              <Button
                title="Go to Platfrom Screen"
                onPress={() => navigation.navigate('PlatformScreen')}
              />
            </View>
          </Section>

          <Section title="Style">
            <View>
              <Button
                title="Go to Style Screen"
                onPress={() => navigation.navigate('StyleScreen')}
              />
            </View>
          </Section>

          <Section title="Share Outward">
            <View>
              <Button
                title="Go to Share Outward Screen"
                onPress={() => navigation.navigate('ShareOutwardScreen')}
              />
            </View>
          </Section>

          <Section title="Working Area">
            <View>
              <Text>Add dark mode switch button!</Text>
            </View>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
