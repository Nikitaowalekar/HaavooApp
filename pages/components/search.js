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
  },
  textInputView: {
    borderWidth: 1,
    borderColor: '#666666',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 18,
    overflow: 'hidden',
    position: 'relative',
  },
  textInput: {flex: 1, padding: 5, paddingLeft: 15, margin: 10, fontSize: 20},
});

export default Search;
