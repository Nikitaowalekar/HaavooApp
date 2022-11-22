import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Search from './components/search';
import HaavooHeader from './components/header';
import Tabs from './components/tabs';
import SortAndFilter from './components/sortandfilter';
import LinearGradient from 'react-native-linear-gradient';

const MainPage = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#4F0D04', '#400000', '#000']}
      style={styles.linearGradient}>
      <View style={styles.mainbgColor}>
        <View style={{flex: 1}}>
          <HaavooHeader navigation={navigation} />
          <Search cityProps={false} />
          <Tabs />
        </View>
        <View style={{height: 50}}>
          <SortAndFilter />
        </View>
      </View>
    </LinearGradient>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    borderRadius: 0,
  },
  mainbgColor: {
    // backgroundColor: '#4F0D04',
    height: '100%',
    flex: 1,
  },
});
