import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  Alert,
  Image,
} from 'react-native';
import React from 'react';
import {useState} from 'react/cjs/react.development';

const Sort = () => {
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
            <Pressable
              style={styles.closebtn}
              onPress={() => setModalVisible(!modalVisible)}>
              <Image
                style={styles.closeIcon}
                source={require('../../styles/icons/closeicon.png')}
              />
            </Pressable>
            <Text style={styles.modalText}> Relevance </Text>
            <Text style={styles.modalText}> Popularity </Text>
            {/* <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> */}
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Image
          style={styles.sortIcon}
          source={require('../../styles/icons/sorticon.png')}
        />
        <Text style={styles.textStyle}>Sort</Text>
      </Pressable>
    </View>
  );
};

export default Sort;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // marginTop: 22,
    margin: 0,
  },
  modalView: {
    margin: 0,
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 35,
    paddingTop: 20,
    // alignItems: 'center',
    shadowColor: '#000',
    top: '73%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    // borderRadius: 10,
    padding: 15,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonOpen: {
    backgroundColor: 'lightgray',
  },
  buttonClose: {
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 20,
  },
  modalText: {
    marginBottom: 15,
    // textAlign: 'center',
    color: 'white',
  },
  sortIcon: {
    width: 20,
    height: 20,
  },
  closeIcon: {
    width: 20,
    height: 20,
    marginBottom: 10,
  },
  closebtn: {
    left: '100%',
  },
});
