import {Image, TextInput, View, StyleSheet} from 'react-native';
import React from 'react';
import {useState} from 'react/cjs/react.development';
import isEmpty from './utils/isempty';

const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState();
  const [FilteredDataSource, setFilteredDataSource] = useState();
  const [search, setSearch] = useState();

  const cities = [
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

  const onChangeHandler = text => {
    setSearchInputValue(text);
    console.log(searchInputValue, 'value');

    if (!isEmpty(searchInputValue)) {
      const newData = cities.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        console.log(itemData.indexOf(textData) > -1);
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(cities);
      setSearch(text);
    }
  };

  return (
    <View style={styles.textInputView}>
      <TextInput
        placeholder={'Search'}
        style={styles.textInput}
        activeUnderlineColor={'transparent'}
        underlineColor="transparent"
        returnKeyType={'done'}
        selectionColor="black"
        placeholderTextColor="#F8F0E3"
        onChangeText={text => onChangeHandler(text)}
      />
      <Image
        style={styles.searchIcon}
        source={require('../../styles/icons/search-icon.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchIcon: {
    alignSelf: 'center',
    marginRight: 20,
    width: 15,
    height: 15,
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

export default Search;
