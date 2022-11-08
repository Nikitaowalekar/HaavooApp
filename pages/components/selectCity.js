import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';

const SelectCity = ({navigation}) => {
  var citiesArray = [
    'Alappuzha',
    'Idukki',
    'Kannur',
    'Kasargod',
    'kollam',
    'kattayam',
    'Kannur',
    'Kasargod',
    'kollam',
    'kattayam',
  ];
  return (
    <View>
      <Text style={styles.mainText}> Popular Cities </Text>
      <View style={styles.mainCard}>
        <View style={styles.cityCard}>
          <Image
            style={styles.imageCard}
            source={require('../../styles/icons/ernakulam.png')}
          />
          <Text style={styles.blackText}>Ernakulam</Text>
        </View>
        <View style={styles.cityCard}>
          <Image
            style={styles.imageCard}
            source={require('../../styles/icons/kozhikode.png')}
          />
          <Text
            style={styles.blackText}
            onPress={() => navigation.navigate('Search')}>
            Kozhikode
          </Text>
        </View>
        <View style={styles.cityCard}>
          <Image
            style={styles.imageCard}
            source={require('../../styles/icons/malappuram.png')}
          />
          <Text style={styles.blackText}>Malappuram</Text>
        </View>
      </View>
      <View style={styles.secondMainCard}>
        <View style={styles.cityCard}>
          <Image
            style={styles.imageCard}
            source={require('../../styles/icons/ernakulam.png')}
          />
          <Text style={styles.blackText}>Thiruvananthpuram</Text>
        </View>
        <View style={styles.cityCard}>
          <Image
            style={styles.imageCard}
            source={require('../../styles/icons/kozhikode.png')}
          />
          <Text style={styles.blackText}>Thrisur</Text>
        </View>
      </View>
      <View style={styles.otherCities}>
        <Text style={styles.otherCitiesText}> Other Cities </Text>
        {citiesArray.map((item, key) => (
          <Text key={key} style={styles.TextStyle}>
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default SelectCity;

const styles = StyleSheet.create({
  mainText: {
    fontSize: 22,
    paddingLeft: 10,
    color: '#fff',
  },
  mainCard: {
    flexDirection: 'row',
    padding: 10,
  },
  secondMainCard: {
    padding: 10,
    flexDirection: 'row',
    width: '70%',
  },
  cityCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#666666',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  imageCard: {
    width: 60,
    height: 60,
    resizeMode: 'center',
  },
  otherCities: {
    paddingLeft: 10,
  },
  otherCitiesText: {
    fontSize: 20,
    color: '#fff',
  },
  TextStyle: {
    fontSize: 16,
    padding: 5,
    color: '#fff',
  },
  blackText: {
    color: '#fff',
  },
});
