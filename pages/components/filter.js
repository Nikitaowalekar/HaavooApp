import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react/cjs/react.development';
import {useStoreActions, useStoreState} from 'easy-peasy';
import Areas from './areas';
import LinearGradient from 'react-native-linear-gradient';
import Categories from './category';
import axios from 'react-native-axios';

const Filter = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [business, setBusiness] = useState();
  const [categoryData, setCategoryData] = useState();
  const [areasData, setAreasData] = useState();
  const city = useStoreState(state => state.city);

  const businessTypes = ['Individual', 'Shop/Office'];
  const setBusinessType = useStoreActions(actions => actions.setBusinessType);

  // const fetchCategory = () => {
  //   let url = `https://admin.haavoo.com/api/category`;
  //   axios
  //     .get(url)
  //     .then(function (response) {
  //       setCategoryData(response?.data?.data);
  //     })
  //     .catch(function (error) {
  //       alert(error.message);
  //     });
  // };

  const fetchAreas = () => {
    let url = `https://admin.haavoo.com/api/area?city=${city}`;
    axios
      .get(url)
      .then(function (response) {
        // alert(JSON.stringify(response?.data?.data));
        setAreasData(response?.data?.data);
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  useEffect(() => {
    fetchAreas();
  }, [city]);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <LinearGradient
          colors={['#4F0D04', '#4F0D04', '#000']}
          style={styles.linearGradient}>
          <View style={[styles.modalView]}>
            <View style={styles.centeredView}>
              <ScrollView style={styles.scrollView}>
                <View style={styles.modalView}>
                  <Pressable
                    style={[styles.button, styles.filterHeader]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Image
                      style={[
                        styles.backArrow,
                        {transform: [{rotate: '90deg'}]},
                      ]}
                      source={require('../../styles/icons/white-arrow-icon.png')}
                    />
                    <View>
                      <Text style={styles.modalText}>Filters</Text>
                    </View>
                    <View></View>
                  </Pressable>
                  <View style={styles.firstCard}>
                    <Text style={styles.bigFont}> Type Business</Text>
                    <View style={styles.types}>
                      {businessTypes.map((type, index) => {
                        return (
                          <View key={index}>
                            <Text
                              style={[
                                styles.businessType,
                                business === index ? styles.businessSelect : '',
                              ]}
                              onPress={() => {
                                setBusiness(index);
                                setBusinessType(type);
                              }}>
                              {type}
                            </Text>
                          </View>
                        );
                      })}
                    </View>
                  </View>
                  <View style={[styles.secondCard, styles.fixedHeight]}>
                    <Categories />
                  </View>
                  <View style={[styles.firstCard, styles.fixedHeight]}>
                    <Areas areasData={areasData} />
                  </View>
                </View>
              </ScrollView>
            </View>
            <View>
              <Button
                style={styles.yellowbtn}
                // onPress={onPressLearnMore}
                title="Apply"
                color="#FAA41A"
              />
            </View>
          </View>
        </LinearGradient>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Image
          style={styles.sortIcon}
          source={require('../../styles/icons/filter.png')}
        />
        <Text style={styles.textStyle}>Filters</Text>
      </Pressable>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  modalView: {
    margin: 0,
    borderRadius: 0,
    shadowColor: '#000',
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 0,
  },
  centeredView: {
    flex: 1,
  },
  button: {
    padding: 15,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOpen: {
    backgroundColor: 'transparent',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 20,
  },
  modalText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  sortIcon: {
    width: 20,
    height: 20,
  },
  backArrow: {
    width: 20,
    height: 30,
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstCard: {
    borderWidth: 1,
    borderColor: '#666666',
    borderRadius: 10,
    margin: 20,
    marginTop: 10,
    padding: 15,
  },
  secondCard: {
    borderWidth: 1,
    borderColor: '#666666',
    borderRadius: 10,
    margin: 20,
    marginTop: 10,
  },
  bigFont: {
    fontSize: 18,
    fontWeight: '600',
  },
  types: {
    flexDirection: 'row',
    marginTop: 10,
  },
  businessType: {
    margin: 5,
    borderWidth: 1,
    borderColor: '#666666',
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  businessSelect: {
    backgroundColor: '#FAA41A',
  },
  fixedHeight: {
    height: 500,
  },
  yellowbtn: {
    fontSize: 20,
    fontWeight: '600',
    padding: 18,
    borderRadius: 28,
  },
});
