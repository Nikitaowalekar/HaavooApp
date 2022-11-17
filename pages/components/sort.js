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
import {useStoreActions, useStoreState} from 'easy-peasy';

const Sort = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [popularity, setPopularity] = useState('relevance');
  const sort = useStoreState(state => state.sort);
  const setSort = useStoreActions(actions => actions.setSort);
  return (
    <View style={styles.centeredView}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View
            style={[styles.modalView, {backgroundColor: 'rgba(0, 0, 0, 0.6)'}]}>
            <View style={styles.background}>
              <Pressable
                style={styles.closebtn}
                onPress={() => setModalVisible(!modalVisible)}>
                <Image
                  style={styles.closeIcon}
                  source={require('../../styles/icons/closeicon.png')}
                />
              </Pressable>
              <Pressable
                onPress={() => {
                  setPopularity('relevance');
                  setSort('relevance');
                  setModalVisible(false);
                }}>
                <View style={styles.checkboxContainer}>
                  <Text style={styles.modalText}> Relevance </Text>
                  <View style={styles.checkbox}>
                    <View
                      style={
                        popularity === 'relevance' ? styles.checkboxInside : ''
                      }></View>
                  </View>
                </View>
              </Pressable>
              <View
                style={{width: '100%', height: 1, backgroundColor: 'white'}}
              />
              <Pressable
                onPress={() => {
                  setPopularity('popularity');
                  setSort('popularity');
                  setModalVisible(false);
                }}>
                <View style={styles.checkboxContainer}>
                  <Text style={styles.modalText}> Popularity </Text>
                  <View style={styles.checkbox}>
                    <View
                      style={
                        popularity === 'popularity' ? styles.checkboxInside : ''
                      }></View>
                  </View>
                </View>
              </Pressable>
            </View>
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
    margin: 0,
  },
  modalView: {
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
  button: {
    padding: 15,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#dad8d8',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    margin: 5,
  },
  buttonOpen: {
    backgroundColor: 'transparent',
  },
  buttonClose: {
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 5,
    paddingRight: 20,
  },
  modalText: {
    marginBottom: 15,
    marginTop: 10,
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
    left: '50%',
  },
  background: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: 20,
    top: '80%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});
