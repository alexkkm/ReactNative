import React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';


const NavigationScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Text>
          Prerequisite of using React Native Navigation:{"\n"}
          {"Install the needed npm package:\n"}
          {"    npm install @react-navigation/native react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/stack\n"}
          {"\n"}
          {"Add these 2 line in App.js:\n"}
          {importPackageText}{"\n"}
          {"Add const Stack = createStackNavigator(); in App.js\n"}
          {"Add " + navigatorStackText}
          {"Add \n" + AppContent + "into function App()\n"}
        </Text>
        <Text style={{ fontSize: 30 }}>
          Navigation Function:
        </Text>
        <Button
          title="Navigation with parameter passing"
          onPress={() =>
            navigation.navigate('NavigationA', { text: 'Welcome' })
          }
        />
      </View>
    </ScrollView>
  );
};


const importPackageText = " import {NavigationContainer} from '@react-navigation/native';\n import { createStackNavigator } from '@react-navigation/stack';"
const navigatorStackText = "const NavigatorStack=()=>{\n" +
  " return (\n" +
  "   <Stack.Navigator>\n" +
  "   <Stack.Screen\n" +
  "     name=\"NameOfScreen\"\n" +
  "     component={ComponentOfScreen}\n" +
  "     options={{ title: 'TitleOfScreen' }}\n" +
  "   />\n" +
  "   </Stack.Navigator>\n" +
  " );\n" +
  "}\n";
const AppContent = "<NavigationContainer>\n" +
  " <NavigatorStack />\n" +
  "</NavigationContainer>\n";

export default NavigationScreen;