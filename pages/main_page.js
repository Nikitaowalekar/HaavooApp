import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Search from './components/search';
import HaavooHeader from './components/header';
import Tabs from './components/tabs';
import SortAndFilter from './components/sortandfilter';

const MainPage = ({navigation}) => {
  return (
    <View style={styles.mainbgColor}>
      <HaavooHeader navigation={navigation} />
      <Search />
      <SortAndFilter />
      <Tabs />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  mainbgColor: {
    backgroundColor: '#4F0D04',
    height: '100%',
  },
});
