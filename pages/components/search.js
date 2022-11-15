import {Image, TextInput, View, StyleSheet} from 'react-native';
import React from 'react';
import {useState} from 'react/cjs/react.development';
import isEmpty from './utils/isempty';
import {useStoreActions} from 'easy-peasy';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState();
  const [FilteredDataSource, setFilteredDataSource] = useState();
  const [search, setSearch] = useState();
  const setSelectQuery = useStoreActions(actions => actions.setSort);

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
    // console.log(searchInputValue, 'value');

    if (!isEmpty(searchInputValue)) {
      setSelectQuery(text);
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
});

export default Search;
