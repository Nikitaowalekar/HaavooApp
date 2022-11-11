import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const dealsData = props => {
  var img = `https://staging.admin.haavoo.com/app-images/${props?.item?.thumb_image}`;
  return (
    <View key={props?.item?.id}>
      <View style={styles.cardParent}>
        <View style={styles.flexMain}>
          <View>
            <Image style={styles.image} source={{uri: `${img}`}} />
          </View>
          <View style={styles.textCard}>
            <Text style={styles.whiteText}>
              {' '}
              {props?.item?.business?.businessName}
            </Text>
            <Text style={styles.greenText}>
              Offer Ends on {props?.item?.endDate}
            </Text>
            <Text style={styles.normalText}>
              {' '}
              {props?.item?.business?.businessName}{' '}
            </Text>
            <Text style={styles.normalText}> {props?.item?.title} </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default dealsData;

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
    marginRight: 10,
  },
  textCard: {
    flex: 1,
  },
  whiteText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    height: 40,
  },
  greenText: {
    color: '#7CFC00',
    fontSize: 14,
  },
  normalText: {
    fontSize: 12,
  },
});
