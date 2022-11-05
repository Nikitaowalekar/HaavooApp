import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const HaavooCityPage = () => {
  return (
    <View style={styles.mainHeader}>
      <Image
        style={[styles.backArrow, {transform: [{rotate: '90deg'}]}]}
        source={require('../../styles/icons/white-arrow-icon.png')}
      />
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
  },
});
