import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const HaavooHeader = () => {
  return (
    <View>
      <View style={styles.mainHeader}>
        <Image
          style={[styles.backArrow, {transform: [{rotate: '90deg'}]}]}
          source={require('../../styles/icons/white-arrow-icon.png')}
        />

        <View style={styles.mainSearch}>
          <Text style={styles.textHome}> Search </Text>
        </View>
      </View>
      <View style={styles.cityMain}>
        <Text style={styles.city}> Kozhikode</Text>
      </View>
    </View>
  );
};

export default HaavooHeader;

const styles = StyleSheet.create({
  mainHeader: {
    marginTop: 10,
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
  hamburgerIcon: {
    width: 40,
    height: 30,
  },
  textHome: {
    fontSize: 24,
    alignItems: 'center',
    color: '#fff',
  },
  city: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  backArrow: {
    width: 20,
    height: 30,
  },
  mainSearch: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  cityMain: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
