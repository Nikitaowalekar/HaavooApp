import {StyleSheet, Text, View, Pressable, Modal, Alert} from 'react-native';
import React from 'react';
import {useState} from 'react/cjs/react.development';

const Filter = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Filters</Text>
      </Pressable>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22,
    margin: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#FFF',
  },
  // buttonClose: {
  //   backgroundColor: '#2196F3',
  // },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
