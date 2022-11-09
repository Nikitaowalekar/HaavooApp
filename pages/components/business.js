import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import BusinessData from './businessData';

const Business = () => {
  var data = [
    {
      id: 1,
      name: 'Anoop',
      img: require('../../styles/images/3.jpeg'),
      area: 'Nadakavu',
      category: 'Carpenter',
      text: `Installs foundations, walls,floors,ceilings and roofs using materials such as: wood, steel,metal,concrete, plastics and com...`,
    },
    {
      id: 2,
      name: 'Fresh & Testy',
      img: require('../../styles/images/4.jpg'),
      area: 'Nadakavu',
      category: 'Carpenter',
      text: `Installs foundations, walls,floors,ceilings and roofs using materials such as: wood, steel,metal,concrete, plastics and com...`,
    },
    {
      id: 3,
      name: 'Anoop',
      img: require('../../styles/images/3.jpeg'),
      area: 'Nadakavu',
      category: 'Carpenter',
      text: `Installs foundations, walls,floors,ceilings and roofs using materials such as: wood, steel,metal,concrete, plastics and com...`,
    },
    {
      id: 4,
      name: 'Fresh & Testy',
      img: require('../../styles/images/4.jpg'),
      area: 'Nadakavu',
      category: 'Carpenter',
      text: `Installs foundations, walls,floors,ceilings and roofs using materials such as: wood, steel,metal,concrete, plastics and com...`,
    },
    {
      id: 5,
      name: 'Anoop',
      img: require('../../styles/images/3.jpeg'),
      area: 'Nadakavu',
      category: 'Carpenter',
      text: `Installs foundations, walls,floors,ceilings and roofs using materials such as: wood, steel,metal,concrete, plastics and com...`,
    },
    {
      id: 6,
      name: 'Fresh & Testy',
      img: require('../../styles/images/4.jpg'),
      area: 'Nadakavu',
      category: 'Carpenter',
      text: `Installs foundations, walls,floors,ceilings and roofs using materials such as: wood, steel,metal,concrete, plastics and com...`,
    },
  ];
  return (
    <View>
      <View>
        <FlatList
          style={{height: '80%'}}
          data={data}
          renderItem={BusinessData}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Business;
