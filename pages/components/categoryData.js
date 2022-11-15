import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {useStoreActions} from 'easy-peasy';
import {useState} from 'react/cjs/react.development';

const CategoryData = props => {
  const [selectCategory, setSelectCategory] = useState([]);
  const setCategory = useStoreActions(actions => actions.setCategory);
  return (
    <Pressable
      onPress={() => {
        setSelectCategory(props?.item?.category);
        setCategory(props?.item?.category);
      }}>
      <View style={styles.checkboxContainer}>
        <View style={styles.checkbox}>
          <View
            style={
              selectCategory === props?.item?.category
                ? styles.checkboxInside
                : ''
            }></View>
        </View>
        <Text style={styles.areaText}> {props?.item?.category}</Text>
      </View>
      <View style={styles.subpartMargin}>
        {props?.item?.subpart?.map((item, index) => {
          return (
            <View key={index} style={styles.checkboxContainer}>
              <View style={styles.checkbox}>
                <View></View>
              </View>
              <Text style={styles.areaText}> {item}</Text>
            </View>
          );
        })}
      </View>
    </Pressable>
  );
};

export default CategoryData;

const styles = StyleSheet.create({
  container: {},
  mainText: {
    fontSize: 20,
    fontWeight: '600',
    padding: 15,
    backgroundColor: 'gray',
  },
  checkboxContainer: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
  },
  checkbox: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: 20,
    height: 20,
    marginBottom: 15,
    marginTop: 10,
  },
  checkboxInside: {
    backgroundColor: 'yellow',
    width: 14,
    height: 14,
    margin: 3,
  },
  areaText: {
    paddingLeft: 10,
  },
  subpartMargin: {
    margin: 10,
    marginTop: 0,
  },
});
