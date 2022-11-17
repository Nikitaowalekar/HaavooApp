import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import {useStoreActions} from 'easy-peasy';
import {useState} from 'react/cjs/react.development';
import axios from 'react-native-axios';

const Cities = props => {
  const setCity = useStoreActions(actions => actions.setCity);
  return (
    <Text
      style={styles.TextStyle}
      onPress={() => {
        setCity(props?.item.name);
        props?.navigation.navigate('Search');
      }}>
      {props?.item.name}
    </Text>
  );
};

const SelectCity = ({navigation}) => {
  const [cities, setCities] = useState();
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

  const city = useStoreActions(actions => actions.city);
  const setCity = useStoreActions(actions => actions.setCity);

  const fetchCity = () => {
    let url = `https://admin.haavoo.com/api/city`;
    axios
      .get(url)
      .then(function (response) {
        setCities(response?.data?.data);
        // console.log(response?.data?.data);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };
  // alert(JSON.stringify(data));

  useEffect(() => {
    fetchCity();
  }, []);

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
        <View>
          {/* <FlatList
            data={cities}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          /> */}

          {cities?.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                setCity(item.name);
                navigation.navigate('Search');
              }}
              key={index}>
              <Text style={styles.TextStyle}>{item?.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
