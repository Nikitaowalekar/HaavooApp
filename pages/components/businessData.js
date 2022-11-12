import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const BusinessData = props => {
  const regex = /(<([^>]+)>)/gi;
  const temp = props?.item?.description.replace(regex, '');
  var desc = temp.replace(/&nbsp;/g, '');
  // console.log(props?.item.thumb_image);
  var img = `https://staging.admin.haavoo.com/app-images/${props?.item?.thumb_image}`;

  return (
    <View style={styles.cardParent} key={props?.item?.id}>
      <View style={styles.flexMain}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: `${img}`,
            }}
          />
        </View>
        <View style={styles.mainText}>
          <Text style={styles.whiteText}>{props?.item?.business_name}</Text>
          <Text style={styles.normalText}>
            Category : {props?.item?.categories[0]?.name}
          </Text>
          <Text style={styles.normalText}>
            Area : {props?.item?.areas[0]?.name}
          </Text>
          <Text style={styles.normalText}>{desc}</Text>
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
    color: '#fff',
  },
});
