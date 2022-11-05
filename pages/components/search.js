import {Image, TextInput, View, StyleSheet} from 'react-native';
import React from 'react';

const Search = () => {
  return (
    <View style={styles.textInputView}>
      <TextInput
        placeholder={'Search'}
        style={styles.textInput}
        activeUnderlineColor={'transparent'}
        underlineColor="transparent"
        returnKeyType={'done'}
        selectionColor="black"
        // value={searchValue}
        // onChangeText={text => searchFunction(text)}
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
