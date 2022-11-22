import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import Business from './business';
import Deals from './deals';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useState} from 'react/cjs/react.development';
// import {useEffect} from 'react/cjs/react.production.min';
// import axios from 'axios';

// const Tab = createNativeStackNavigator();

const Tabs = ({navigation}) => {
  const [tabSwitch, setTabSwitch] = useState(true);

  return (
    <View>
      <View style={styles.tabsMain}>
        <Text
          style={tabSwitch === true ? styles.yellowBg : styles.tabSection}
          onPress={() => setTabSwitch(true)}>
          Business
        </Text>
        <Text
          style={tabSwitch === false ? styles.yellowBg : styles.tabSection}
          onPress={() => setTabSwitch(false)}>
          Deals
        </Text>
      </View>

      {tabSwitch && <Business />}
      {tabSwitch === false && <Deals />}
      {/* no details found card */}
      {/* <View style={styles.noDeals}>
        <Text> Sorry , No deals Found </Text>
      </View> */}
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabsMain: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 15,
    marginTop: 0,
  },
  tabSection: {
    borderColor: '#fff',
    borderWidth: 1,
    padding: 8,
    margin: 5,
    color: '#000',
    fontWeight: '600',
    fontSize: 20,
    borderRadius: 50,
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  noDeals: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  yellowBg: {
    backgroundColor: '#FAA41A',
    borderColor: '#FAA41A',
    borderWidth: 1,
    padding: 8,
    margin: 2,
    color: '#fff',
    fontWeight: '600',
    fontSize: 20,
    borderRadius: 50,
    flex: 1,
    textAlign: 'center',
  },
});
