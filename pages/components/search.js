import {Image, TextInput, View, StyleSheet, Text, FlatList} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react/cjs/react.development';
import isEmpty from './utils/isempty';
import {useStoreActions} from 'easy-peasy';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import axios from 'react-native-axios';

const Search = ({cityProps, navigation, props}) => {
  const [searchInputValue, setSearchInputValue] = useState();
  const [search, setSearch] = useState('');
  const setSelectQuery = useStoreActions(actions => actions.setSelectQuery);
  const [cities, setCities] = useState();

  const setCity = useStoreActions(actions => actions.setCity);

  const onChangeHandler = text => {
    setSearchInputValue(text);
    // console.log(searchInputValue, 'value');

    if (!isEmpty(searchInputValue)) {
      setSelectQuery(text);
    }
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
          onChangeText={text => setSearch(text)}
        />

        <Pressable onPress={() => onChangeHandler(search)}>
          <Image
            style={styles.searchIcon}
            source={require('../../styles/icons/search-icon.png')}
          />
        </Pressable>
      </View>

      {/* {cityProps && !isEmpty(filteredCities) && (
        <View style={styles.absoluteCities}>
          {filteredCities?.map((data, index) => {
            return (
              <Text
                style={{padding: 10}}
                key={index}
                onPress={() => {
                  setCity(data?.name);
                  navigation.navigate('Search');
                }}>
                {data?.name}
              </Text>
            );
          })}
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
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
  absoluteCities: {
    position: 'absolute',
    top: 80,
    borderRadius: 10,
    flex: 1,
    padding: 25,
    paddingTop: 15,
    paddingBottom: 15,
    width: '98%',
    alignSelf: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    backgroundColor: 'black',
  },
});

export default Search;
