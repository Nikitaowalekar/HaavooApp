import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';

const Business = () => {
  var data = [
    {
      name: 'Anoop',
      img: "require('../../styles/images/3.jpeg')",
      area: 'Nadakavu',
      category: 'Carpenter',
      text: `Installs foundations, walls,floors,ceilings and roofs using materials such as: wood, steel,metal,concrete, plastics and com...`,
    },
    {
      name: 'Fresh & Testy',
      img: "require('../../styles/images/4.jpg')",
      area: 'Nadakavu',
      category: 'Carpenter',
      text: `Installs foundations, walls,floors,ceilings and roofs using materials such as: wood, steel,metal,concrete, plastics and com...`,
    },
    {
      name: 'Anoop',
      img: "require('../../styles/images/3.jpeg')",
      area: 'Nadakavu',
      category: 'Carpenter',
      text: `Installs foundations, walls,floors,ceilings and roofs using materials such as: wood, steel,metal,concrete, plastics and com...`,
    },
    {
      name: 'Fresh & Testy',
      img: "require('../../styles/images/4.jpg')",
      area: 'Nadakavu',
      category: 'Carpenter',
      text: `Installs foundations, walls,floors,ceilings and roofs using materials such as: wood, steel,metal,concrete, plastics and com...`,
    },
  ];
  return (
    <View>
      <View>
        {data?.map((data, index) => {
          console.log(data.img, 'image');
          return (
            <FlatList
              data={data}
              renderItem={index}
              keyExtractor={item => item.index}>
              <View style={styles.cardParent} key={index}>
                <View style={styles.flexMain}>
                  <View>
                    <Image style={styles.image} source={data?.img} />
                  </View>
                  <View style={styles.mainText}>
                    <Text style={styles.whiteText}>{data?.name}</Text>
                    <Text style={styles.normalText}>
                      Category : {data?.category}
                    </Text>
                    <Text style={styles.normalText}>Area : {data?.area}</Text>
                    <Text style={styles.normalText}>{data?.text}</Text>
                  </View>
                </View>
              </View>
            </FlatList>
          );
        })}

        {/* <View style={styles.cardParent}>
          <View style={styles.flexMain}>
            <View>
              <Image
                style={styles.image}
                source={require('../../styles/images/3.jpeg')}
              />
            </View>
            <View style={styles.mainText}>
              <Text style={styles.whiteText}>Anoop</Text>
              <Text style={styles.normalText}>Category : Carpenter</Text>
              <Text style={styles.normalText}>Area : Nadakavu</Text>
              <Text style={styles.normalText}>
                Installs foundations, walls,floors,ceilings and roofs using
                materials such as: wood, steel,metal,concrete, plastics and
                com...{' '}
              </Text>
            </View>
          </View>
        </View> */}
      </View>
    </View>
  );
};

export default Business;

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
