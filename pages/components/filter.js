import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useState} from 'react/cjs/react.development';
import {useStoreActions} from 'easy-peasy';
import Areas from './areas';

const Filter = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [business, setBusiness] = useState();

  const businessTypes = ['Individual', 'Shop/Office'];
  const setBusinessType = useStoreActions(actions => actions.setBusinessType);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={[styles.modalView, {backgroundColor: 'rgba(0, 0, 0, 0.4)'}]}>
          <View style={styles.centeredView}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.modalView}>
                <Pressable
                  style={[styles.button, styles.filterHeader]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Image
                    style={[styles.backArrow, {transform: [{rotate: '90deg'}]}]}
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
                <View style={styles.firstCard}>
                  <Areas />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
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
    backgroundColor: '#212529',
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
    backgroundColor: 'lightgray',
  },

  textStyle: {
    color: 'black',
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
});
