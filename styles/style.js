/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  searchicon: {
    width: '80%',
    height: 150,
    backgroundColor: 'red',
    alignSelf: 'center',
    borderRadius: 9,
  },
  textInputView: {
    borderWidth: 1,
    borderColor: '#666666',
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 18,
    overflow: 'hidden',
    position: 'relative',
  },
  textInput: {height: 40, flex: 1, padding: 5, margin: 10, fontSize: 22},
  icon: {alignSelf: 'center', marginHorizontal: 10},
  search_img: {
    backgroundColor: '#e51c1c',
    width: 60,
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    height: 'auto',
    border: 'none',
    zIndex: 2,
  },
});

export {styles};
