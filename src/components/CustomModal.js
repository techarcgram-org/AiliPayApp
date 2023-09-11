import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';

export const CustomModal = ({ children, setModalVisible, modalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      avoidKeyboard={true}
      style={{ margin: 0 }}
      onRequestClose={() => {
        Alert.alert('Modal has been closed');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalBox}>
        <View style={styles.popup}>
          <Pressable
            style={styles.close}
            onPress={() => setModalVisible((prevModalVisible) => !prevModalVisible)}>
            <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>
              <Ionicons name="close" size={20} color="black" />
            </Text>
          </Pressable>
          <View style={styles.formikContainer}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(63, 95, 144, 0.2)',
    bottom: 0
  },
  popup: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%'
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 15,
    width: '10%'
  },
  formikContainer: {
    padding: 20,
    width: 400,
    marginBottom: 10
  }
});
