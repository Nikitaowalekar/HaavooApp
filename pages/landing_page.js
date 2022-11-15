import React from 'react';
import {View, ScrollView, StyleSheet, Button} from 'react-native';
import SelectCity from './components/selectCity';
import HaavooCityPage from './components/haavoocitypage';
import Search from './components/search';
import LinearGradient from 'react-native-linear-gradient';

const HaavooHome = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#4F0D04', '#4F0D04', '#000']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <HaavooCityPage navigation={navigation} />
          <Search />
          <SelectCity navigation={navigation} />
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default HaavooHome;

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
    flex: 1,
    height: '100%',
  },
  linearGradient: {
    flex: 1,
    borderRadius: 0,
  },
  scrollView: {
    marginHorizontal: 10,
    backgroundColor: '#4F0D04',
  },
});
