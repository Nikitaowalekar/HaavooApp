import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Filter from './filter';
import Sort from './sort';

const SortAndFilter = () => {
  return (
    <View style={styles.container}>
      <Sort />
      <Filter />
    </View>
  );
};

export default SortAndFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
