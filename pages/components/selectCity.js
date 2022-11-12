import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useStoreActions} from 'easy-peasy';

const SelectCity = ({navigation}) => {
  var mainCities = [
    {
      city: 'Ernakulam',
      img: '../../styles/icons/ernakulam.png',
    },
    {
      city: 'Kozhikode',
      img: '../../styles/icons/kozhikode.png',
    },
    {
      city: 'Malappuram',
      img: '../../styles/icons/malappuram.png',
    },
    {
      city: 'Thiruvananthpuram',
      img: '../../styles/icons/thiruvananthpuram.png',
    },
    {
      city: 'Thrisur',
      img: '../../styles/icons/thrisur.png',
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
  const city = useStoreActions(actions => actions.city);
  const setCity = useStoreActions(actions => actions.setCity);

  return (
    <View>
      <Text style={styles.mainText}> Popular Cities </Text>
      <View style={styles.mainCard}>
        {mainCities.map((mainCity, index) => {
          return (
            <TouchableOpacity
              style={styles.cardmaindiv}
              onPress={() => {
                setCity(mainCity.city);
                navigation.navigate('Search');
              }}
              key={index}>
              <View style={styles.cityCard}>
                <Image
                  style={styles.imageCard}
                  source={require('../../styles/icons/ernakulam.png')}
                />
                <Text style={styles.blackText}>{mainCity.city}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.otherCities}>
        <Text style={styles.otherCitiesText}> Other Cities </Text>
        {citiesArray.map((item, key) => (
          <Text
            key={key}
            style={styles.TextStyle}
            onPress={() => {
              setCity(item);
              navigation.navigate('Search');
            }}>
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
    flexWrap: 'wrap',
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
  cardmaindiv: {
    width: '33%',
  },
});
