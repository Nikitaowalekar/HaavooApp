import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const HaavooHeader = () => {
  return (
    <View>
      <View style={styles.mainHeader}>
        <Image
          style={[styles.hamburgerIcon, {transform: [{rotate: '180deg'}]}]}
          source={require('../../styles/icons/hamburger.png')}
        />

        <Text style={styles.textHome}> Search </Text>
      </View>
      <View>
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
  },
  city: {
    fontSize: 20,
    fontWeight: '700',
  },
});
