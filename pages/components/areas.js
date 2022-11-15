import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {useState} from 'react/cjs/react.development';
import {useStoreActions, useStoreState} from 'easy-peasy';

const Areas = () => {
  const [selectArea, setSelectArea] = useState([]);
  const area = useStoreState(state => state.area);
  const setArea = useStoreActions(actions => actions.setArea);
  const areas = [
    'Abhayagiri',
    'Adivaram Pudupadi',
    'Adukkath',
    'Akkal',
    'Alli',
    'Anakampoyil',
    'Annasseri',
    'Arakinar',
    'Arikulam',
    'Arur',
    'Athiyodi',
    'Atholi',
    'Avadukka',
    'Avala',
    'Avilora',
    'Avitanallur',
    'Ayancheri',
    'Ayanikkad',
    'Azhiyur',
    'Balusseri',
    'Balussery',
    'Beypore',
    'Calicut',
    'Calicut Arts & science college',
    'Calicut Beach',
    'Calicut Civil station',
    'Calicut Medical college',
    'Chakkittapara',
    'Chalapuram',
    'Chaliyam',
    'Chamal',
    'Chaniyankadavu',
    'Chathamangalam',
    'Cheekkonnummal',
    'Chekkiyad',
    'Chelakkad',
    'Chelannur',
    'Chelavur',
    'Cheliya',
    'Chemancheri',
    'Chembra',
    'Chembu Kadav',
    'Chemmarathur',
    'Chenoli',
    'Cherapuram',
    'Cherooppa',
    'Cheruvadi',
    'Cheruvannur',
    'Chevarambalam',
    'Chevayur',
    'Chingapuram',
    'Chombala',
    'Chorode',
    'Chungam',
    'East Hill',
    'Edacheri',
    'Edacheri North',
    'Ekarool',
    'Elathur',
    'Engapuzha',
    'Eramala',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Areas</Text>
      <View>
        {areas.map((area, index) => {
          return (
            <Pressable
              onPress={() => {
                setSelectArea(area);
                setArea(area);
              }}>
              <View style={styles.checkboxContainer}>
                <View style={styles.checkbox}>
                  <View
                    style={
                      selectArea === area ? styles.checkboxInside : ''
                    }></View>
                </View>
                <Text style={styles.areaText}> {area}</Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default Areas;

const styles = StyleSheet.create({
  container: {},
  mainText: {
    fontSize: 20,
    fontWeight: '600',
  },
  checkboxContainer: {
    flexDirection: 'row',
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
});
