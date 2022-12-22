Install the needed npm package:  
	npm install @react-navigation/native react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/stack  

Add these 2 line in App.js:  
	import {NavigationContainer} from '@react-navigation/native';  
	import {createStackNavigator} from '@react-navigation/stack';  

Add this constant in App.js:  
	const Stack = createStackNavigator();  
	
Add NavigatorStack component in App.js  
	Example:  
		<Stack.Navigator >  
		      <Stack.Screen  
		        name="Home"  
		        component={HomeScreen}  
		        options={{ title: 'Home' }}  
		      />  
		</Stack.Navigator>  
		
Replace function App() with:  
	<NavigationContainer>  
	  <NavigatorStack />  
	</NavigationContainer>  
