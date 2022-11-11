/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import HaavooHome from './pages/landing_page';
import MainPage from './pages/main_page';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Search" component={MainPage} />
        <Stack.Screen
          name="Search Your City or Location"
          component={HaavooHome}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#4F0D04',
    flex: 1,
  },
});
