import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const BusinessData = props => {
  console.log(props?.item?.img, 'images');
  return (
    <View style={styles.cardParent} key={props?.index}>
      <View style={styles.flexMain}>
        <View>
          <Image style={styles.image} source={props?.item?.img} />
        </View>
        <View style={styles.mainText}>
          <Text style={styles.whiteText}>{props?.item?.name}</Text>
          <Text style={styles.normalText}>Area : {props?.item?.area}</Text>
          <Text style={styles.normalText}>
            Category : {props?.item?.category}
          </Text>
          <Text style={styles.normalText}>{props?.item?.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default BusinessData;

const styles = StyleSheet.create({
  cardParent: {
    borderWidth: 1,
    borderColor: '#666666',
    borderRadius: 10,
    margin: 15,
    marginBottom: 5,
  },
  flexMain: {
    flexDirection: 'row',
    margin: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20,
  },
  mainText: {
    flex: 1,
  },
  whiteText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    height: 20,
  },
  normalText: {
    fontSize: 12,
  },
});
