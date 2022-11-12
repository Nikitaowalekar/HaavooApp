import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useStoreActions, useStoreState} from 'easy-peasy';

const HaavooHeader = ({navigation}) => {
  const city = useStoreState(state => state.city);
  const setCity = useStoreActions(actions => actions.setCity);
  return (
    <View>
      <View style={styles.mainHeader}>
        <Pressable
          onPress={() => navigation.navigate('Search Your City or Location')}>
          {/* <Image
            style={[styles.backArrow, {transform: [{rotate: '90deg'}]}]}
            source={require('../../styles/icons/white-arrow-icon.png')}
          /> */}
        </Pressable>
        <View style={styles.mainSearch}>
          <Text style={styles.textHome}> Search </Text>
        </View>
      </View>
      <View style={styles.cityMain}>
        <Text
          style={styles.city}
          onPress={() => navigation.navigate('Search Your City or Location')}>
          {city}
          <Image
            style={styles.downArrow}
            source={require('../../styles/icons/downArrow.png')}
          />
        </Text>
      </View>
    </View>
  );
};

export default HaavooHeader;

const styles = StyleSheet.create({
  mainHeader: {
    margin: 10,
    flexDirection: 'row',
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
    fontWeight: '700',
  },
  city: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backArrow: {
    width: 20,
    height: 30,
    marginLeft: 10,
  },
  mainSearch: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  cityMain: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  downArrow: {
    width: 20,
    height: 20,
  },
});
