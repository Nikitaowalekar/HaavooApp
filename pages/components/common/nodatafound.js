import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NoDataFound = ({text}) => {
  return (
    <View style={styles.noDeals}>
      <Text style={styles.dealsText}> {text} </Text>
    </View>
  );
};

export default NoDataFound;

const styles = StyleSheet.create({
  noDeals: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dealsText: {
    fontSize: 14,
    color: '#fff',
  },
});
