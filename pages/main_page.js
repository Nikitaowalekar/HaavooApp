import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Search from './components/search';
import HaavooHeader from './components/header';
import Tabs from './components/tabs';
import SortAndFilter from './components/sortandfilter';

const MainPage = ({navigation}) => {
  return (
    <View style={styles.mainbgColor}>
      <View style={{flex: 1}}>
        <HaavooHeader navigation={navigation} />
        <Search />
        <Tabs />
      </View>
      <View style={{height: 50}}>
        <SortAndFilter />
      </View>
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  mainbgColor: {
    backgroundColor: '#4F0D04',
    height: '100%',
    flex: 1,
  },
});
