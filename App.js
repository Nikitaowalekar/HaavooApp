/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Home from './pages/landing_page';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  return (
    <View>
      <Home />
    </View>
  );
};

export default App;
