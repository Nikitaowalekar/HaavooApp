import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const HaavooCityPage = ({navigation}) => {
  return (
    <View style={styles.mainHeader}>
      <Pressable onPress={() => navigation.navigate('Search')}>
        <Image
          style={[styles.backArrow, {transform: [{rotate: '90deg'}]}]}
          source={require('../../styles/icons/white-arrow-icon.png')}
        />
      </Pressable>
      <Text style={styles.searchText}>Search Your City or Location</Text>
    </View>
  );
};

export default HaavooCityPage;

const styles = StyleSheet.create({
  mainHeader: {
    padding: 10,
    flexDirection: 'row',
  },
  backArrow: {
    width: 20,
    height: 30,
  },
  searchText: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 40,
    marginRight: 40,
    color: '#fff',
  },
});
