import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useState} from 'react/cjs/react.development';

const SelectCity = ({navigation, onCityClick}) => {
  const [city, setCity] = useState();
  var mainCities = [
    {
      city: 'Ernakulam',
      img: '../../styles/icons/ernakulam.png',
    },
  ];
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
  // console.log(city, 'city');
  onCityClick(city);
  return (
    <View>
      <Text style={styles.mainText}> Popular Cities </Text>
      <View style={styles.mainCard}>
        <View style={styles.cityCard} onPress={() => setCity('Ernakulam')}>
          <Image
            style={styles.imageCard}
            source={require('../../styles/icons/ernakulam.png')}
          />
          <Text style={styles.blackText}>{mainCities[0].city}</Text>
        </View>
        <View style={styles.cityCard} onPress={() => setCity('Kozhikode')}>
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
        <View style={styles.cityCard} onPress={() => setCity('Malappuram')}>
          <Image
            style={styles.imageCard}
            source={require('../../styles/icons/malappuram.png')}
          />
          <Text style={styles.blackText}>Malappuram</Text>
        </View>
      </View>
      <View style={styles.secondMainCard}>
        <View
          style={styles.cityCard}
          onPress={() => setCity('Thiruvananthpuram')}>
          <Image
            style={styles.imageCard}
            source={require('../../styles/icons/ernakulam.png')}
          />
          <Text style={styles.blackText}>Thiruvananthpuram</Text>
        </View>
        <View style={styles.cityCard} onPress={() => setCity('Thrisur')}>
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
          <Text
            key={key}
            style={styles.TextStyle}
            onPress={() => setCity(item)}>
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
