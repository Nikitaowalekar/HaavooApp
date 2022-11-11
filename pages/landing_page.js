import React from 'react';
import {View, ScrollView, StyleSheet, Button} from 'react-native';
import SelectCity from './components/selectCity';
import HaavooCityPage from './components/haavoocitypage';
import Search from './components/search';
import {useState} from 'react/cjs/react.development';

const HaavooHome = ({navigation}) => {
  const [city, setCity] = useState();
  console.log(city, 'cityin navigation');
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <HaavooCityPage navigation={navigation} />
        <Search />
        <SelectCity navigation={navigation} onCityClick={setCity} />
      </ScrollView>
    </View>
  );
};

export default HaavooHome;

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
    flex: 1,
    backgroundColor: '#4F0D04',
    height: '100%',
  },
  scrollView: {
    marginHorizontal: 10,
    backgroundColor: '#4F0D04',
  },
});
