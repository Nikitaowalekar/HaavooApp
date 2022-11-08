import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Deals = () => {
  return (
    <View>
      {/* Deals card details */}
      <View>
        <View style={styles.cardParent}>
          <View style={styles.flexMain}>
            <View>
              <Image
                style={styles.image}
                source={require('../../styles/images/4.jpg')}
              />
            </View>
            <View>
              <Text style={styles.whiteText}> Fitness Test</Text>
              <Text style={styles.greenText}> Offer Ends on 13 Oct</Text>
              <Text style={styles.normalText}> POLO </Text>
              <Text style={styles.normalText}> Clothes </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.cardParent}>
          <View style={styles.flexMain}>
            <View>
              <Image
                style={styles.image}
                source={require('../../styles/images/4.jpg')}
              />
            </View>
            <View>
              <Text style={styles.whiteText}> Fitness Test</Text>
              <Text style={styles.greenText}> Offer Ends on 13 Oct</Text>
              <Text style={styles.normalText}> POLO </Text>
              <Text style={styles.normalText}> Clothes </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Deals;

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
