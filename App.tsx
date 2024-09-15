import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import "./global.css"
import { theme } from './theme';
const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    console.log("heyyyy");
  }, []);

  return (<NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen}
        options={{ headerShown: false }} />
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
  );
}
