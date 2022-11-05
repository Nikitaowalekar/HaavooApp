import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import SelectCity from './components/selectCity';
import HaavooCityPage from './components/haavoocitypage';
import Search from './components/search';

const HaavooHome = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HaavooCityPage />
        <Search />
        <SelectCity />
      </ScrollView>
    </View>
  );
};

export default HaavooHome;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 10,
  },
});
