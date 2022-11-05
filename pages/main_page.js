import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Search from './components/search';
import HaavooHeader from './components/header';
import Tabs from './components/tabs';

const MainPage = () => {
  return (
    <View>
      <HaavooHeader />
      <Search />
      <Tabs />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({});
