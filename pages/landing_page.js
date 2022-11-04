import React from 'react';
import Search from './components/search';
import {View} from 'react-native';
import SelectCity from './components/selectCity';
import HaavooCityPage from './components/haavoocitypage';

const Home = () => {
  return (
    <View>
      <HaavooCityPage />
      <Search />
      <SelectCity />
    </View>
  );
};

export default Home;
