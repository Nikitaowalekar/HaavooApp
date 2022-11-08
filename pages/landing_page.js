import React from 'react';
import {View, ScrollView, StyleSheet, Button} from 'react-native';
import SelectCity from './components/selectCity';
import HaavooCityPage from './components/haavoocitypage';
import Search from './components/search';

const HaavooHome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* <HaavooCityPage /> */}
        <Search />
        <SelectCity navigation={navigation} />
      </ScrollView>
    </View>
  );
};

export default HaavooHome;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
    backgroundColor: '#4F0D04',
    height: '100%',
  },
  scrollView: {
    marginHorizontal: 10,
    backgroundColor: '#4F0D04',
  },
});
