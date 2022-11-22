import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useEffect} from 'react';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {useState} from 'react/cjs/react.development';
import axios from 'react-native-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import isEmpty from './utils/isempty';

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

const SelectCity = ({navigation, props}) => {
  const [cities, setCities] = useState();
  const [filteredCities, setFilteredCities] = useState();
  const [mainFilteredCities, setMainFilteredCities] = useState();
  const [search, setSearch] = useState('');

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@storage_Key', value);
      navigation.navigate('Search');
    } catch (e) {
      alert('City is not selected');
    }
  };
  var mainCities = [
    {
      city: 'Ernakulam',
      img: require('../../styles/icons/ernakulam.png'),
    },
    {
      city: 'Kozhikode',
      img: require('../../styles/icons/kozhikode.png'),
    },
    {
      city: 'Malappuram',
      img: require('../../styles/icons/malappuram.png'),
    },
    {
      city: 'Thiruvananthapuram',
      img: require('../../styles/icons/tiruanathpuram.png'),
    },
    {
      city: 'Thrissur',
      img: require('../../styles/icons/thrisur.png'),
    },
  ];

  const city = useStoreState(state => state.city);
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

  const onTextChangeHandler = text => {
    const citiesArray = filterData(text, cities);
    setFilteredCities(citiesArray);
  };

  const filterData = (searchedText, arrayName) => {
    return arrayName.filter(
      item => item.name.toLowerCase().indexOf(searchedText.toLowerCase()) > -1,
    );
  };
  const onTextCityChange = text => {
    const citiesArray = mainCities.filter(
      item => item.city.indexOf(text.toLowerCase()) > -1,
    );
    setMainFilteredCities(citiesArray);
    // console.log(citiesArray, 'mainCities');
  };

  return (
    <View>
      <View style={styles.textInputView}>
        <TextInput
          placeholder={'Search'}
          style={styles.textInput}
          activeUnderlineColor={'transparent'}
          underlineColor="transparent"
          returnKeyType={'done'}
          selectionColor="white"
          placeholderTextColor="#F8F0E3"
          onChangeText={text => {
            setSearch(text);
            onTextChangeHandler(text);
            onTextCityChange(text);
          }}
        />

        <Pressable>
          <Image
            style={styles.searchIcon}
            source={require('../../styles/icons/search-icon.png')}
          />
        </Pressable>
      </View>
      <View>
        <Text style={styles.mainText}>
          {!isEmpty(mainFilteredCities) && !isEmpty(search)
            ? 'Popular Cities'
            : !isEmpty(search)
            ? ' '
            : 'Popular Cities'}
        </Text>
        <View style={styles.mainCard}>
          {(!isEmpty(mainFilteredCities) && !isEmpty(search)
            ? mainFilteredCities
            : !isEmpty(search)
            ? []
            : mainCities
          ).map((mainCity, index) => {
            return (
              <TouchableOpacity
                style={styles.cardmaindiv}
                onPress={() => {
                  setCity(mainCity.city);
                  storeData(mainCity.city);
                  navigation.navigate('Search');
                }}
                key={index}>
                <View
                  style={
                    city === mainCity.city
                      ? styles.yellowCityCard
                      : styles.cityCard
                  }>
                  <Image style={styles.imageCard} source={mainCity?.img} />
                  <Text style={styles.blackText}>{mainCity.city}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.otherCities}>
          <Text style={styles.otherCitiesText}>
            {isEmpty(filteredCities) === true
              ? !isEmpty(search)
                ? ''
                : 'Other Cities'
              : 'Other Cities'}
          </Text>
          <View>
            {(isEmpty(filteredCities) === true
              ? !isEmpty(search)
                ? []
                : cities
              : filteredCities
            )?.map(
              (item, index) =>
                item?.name !== 'Ernakulam' &&
                item?.name !== 'Malappuram' &&
                item?.name !== 'Thrissur' &&
                item?.name !== 'Thiruvananthapuram' &&
                item?.name !== 'Kozhikode' && (
                  <TouchableOpacity
                    onPress={() => {
                      setCity(item.name);
                      storeData(item?.name);
                      navigation.navigate('Search');
                    }}
                    key={index}>
                    <Text
                      style={
                        city === item?.name
                          ? styles.TextYellow
                          : styles.TextStyle
                      }>
                      {item?.name}
                    </Text>
                  </TouchableOpacity>
                ),
            )}
          </View>
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
  yellowCityCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FAA41A',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  imageCard: {
    width: 100,
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
  TextYellow: {
    fontSize: 16,
    padding: 5,
    color: '#FAA41A',
  },
  blackText: {
    color: '#fff',
  },

  cardmaindiv: {
    width: '33%',
  },
  searchIcon: {
    alignSelf: 'center',
    margin: 15,
    marginRight: 20,
    width: 20,
    height: 20,
  },
  textInputView: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 18,
    overflow: 'hidden',
    position: 'relative',
  },
  textInput: {
    flex: 1,
    padding: 5,
    paddingLeft: 20,
    margin: 5,
    fontSize: 20,
    color: '#fff',
  },
});
