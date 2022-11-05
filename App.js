/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import HaavooHome from './pages/landing_page';
import MainPage from './pages/main_page';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Haavoo App" component={HaavooHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
