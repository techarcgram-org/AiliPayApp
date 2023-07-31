import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Modal,
  Pressable
} from 'react-native';
import { RadioButton, TouchableRipple } from 'react-native-paper';
import CustomButton from './CustomButton';
import LineSeparator from './LineSeparator';
import CustomHr from './CustomHr';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function UpdateInformation({ editValue }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('English');

  return (
    <View style={styles.contianer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalBox}>
          <View style={styles.popup}>
            <Pressable
              style={styles.close}
              onPress={() => setModalVisible((prevModalVisible) => !prevModalVisible)}>
              <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>x</Text>
            </Pressable>
            <Text style={styles.heading}>
              {editValue == 'Name'
                ? 'Update Name'
                : editValue == 'Email'
                  ? 'Update Email Address'
                  : editValue == 'Momo'
                    ? 'Add Momo Number'
                    : editValue == 'Phone'
                      ? 'Update Phone Number'
                      : editValue == 'Language'
                        ? 'Change Language'
                        : editValue == 'Password'
                          ? 'Update Password'
                          : editValue == 'Card'
                            ? 'Add Debit Card'
                            : editValue == 'Bank'
                              ? 'Add Bank Account'
                              : 'error!'}
            </Text>

            {/* field input -----------------------------*/}

            {editValue == 'Language' ? (
              <View style={styles.languageOptions}>
                <TouchableRipple onPress={() => setSelectedValue('English')}>
                  <View style={styles.radioButtonContainer}>
                    <Text>English</Text>
                    <RadioButton
                      value="English"
                      status={selectedValue === 'English' ? 'checked' : 'unchecked'}
                      onPress={() => setSelectedValue('English')}
                      color='#063B87'
                    />
                  </View>
                </TouchableRipple>

                <LineSeparator />

                <TouchableRipple onPress={() => setSelectedValue('French')}>
                  <View style={styles.radioButtonContainer}>
                    <Text>French</Text>
                    <RadioButton
                      value="French"
                      status={selectedValue === 'French' ? 'checked' : 'unchecked'}
                      onPress={() => setSelectedValue('French')}
                      color='#063B87'
                    />
                  </View>
                </TouchableRipple>
              </View>
            ) : editValue == 'Card' ? (
              <>
                <TextInput style={styles.inputField} placeholder="Cardholder Name"></TextInput>
                <TextInput style={styles.inputField} placeholder="Card Number"></TextInput>
                <TextInput style={styles.inputField} placeholder="CVV/CVC"></TextInput>
                <TextInput style={styles.inputField} placeholder="Expiration Date"></TextInput>
              </>
            ) : editValue == 'Password' ? (
              <>
                <TextInput style={styles.inputField} placeholder="Enter Old Password"></TextInput>
                <TextInput style={styles.inputField} placeholder="Enter New Password"></TextInput>
                <TextInput style={styles.inputField} placeholder="Confirm New Password"></TextInput>
              </>
            ) : editValue == 'Bank' ? (
              <>
                <TextInput style={styles.inputField} placeholder="Account Holder Name"></TextInput>
                <TextInput style={styles.inputField} placeholder="Account Number"></TextInput>
                <TextInput style={styles.inputField} placeholder="Routing Number"></TextInput>
                <TextInput style={styles.inputField} placeholder="Bank Name"></TextInput>
                <TextInput style={styles.inputField} placeholder="Bank Address"></TextInput>
                <TextInput style={styles.inputField} placeholder="SWIFT/BIC code"></TextInput>
              </>
            ) : (
              <TextInput style={styles.inputField}></TextInput>
            )}

            {/* description of fields -----------------------------*/}

            {editValue == 'Language' ||
              editValue == 'Password' ||
              editValue == 'Card' ||
              editValue == 'Bank' ? (
              ''
            ) : (
              <Text style={styles.description}>
                For confirmation, an OTP(One Time Password) will be sent to the phone number we have
                on file via SMS.'
              </Text>
            )}

            <CustomButton
              onPress={() => setModalVisible((prevModalVisible) => !prevModalVisible)}
              title={
                editValue == 'Name'
                  ? 'Update Name'
                  : editValue == 'Email'
                    ? 'Update'
                    : editValue == 'Momo' || editValue == 'Card' || editValue == 'Bank'
                      ? 'Add'
                      : editValue == 'Phone'
                        ? 'Update'
                        : editValue == 'Language'
                          ? 'Done'
                          : editValue == 'Password'
                            ? 'Update'
                            : 'error!'
              }
              backgroundColor="#063B87"
              color="white"
            />
          </View>
        </View>
      </Modal>
      {editValue == 'Momo' || editValue == 'Card' || editValue == 'Bank' ? (
        <View style={styles.buttonContainer}>
          <CustomButton
            title={
              editValue == 'Momo'
                ? 'Add Mobile Money Account'
                : editValue == 'Card'
                  ? 'Add a new Debit Card'
                  : editValue == 'Bank'
                    ? 'Add a new Bank Account'
                    : 'error!'
            }
            color="white"
            backgroundColor="#063B87"
            onPress={() => setModalVisible(true)}
          />
        </View>
      ) : (
        <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
          <Text style={styles.editText}> Edit</Text>
        </Pressable>
      )}
    </View>

    // <View style={styles.container}>
    //     <View style={styles.popup}>
    //         <Button><Ionicons name='close' size={20} style={styles.close}/></Button>
    //         <Text style={styles.heading}>Update Name</Text>
    //         <TextInput style={styles.inputField}></TextInput>
    //         <Text style={styles.description}>For confirmation, an OTP(One Time Password) will be sent to the phone number we have on file via SMS. </Text>
    //         <CustomButton title='Done' backgroundColor='#063B87' color='white' />
    //     </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
    // marginTop: 22,
    // backgroundColor: 'blue'
  },
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
    width: '100%',
    bottom: 0
  },
  heading: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 20,
    alignItems: 'center',
    marginBottom: 20
  },
  inputField: {
    borderRadius: 4,
    width: '100%',
    maxWidth: 300,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#D9D9D9',
    color: '#1E1E1E',
    marginBottom: 20
  },
  description: {
    width: '90%',
    maxWidth: 300,
    fontSize: 13,
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: 20,
    marginBottom: 15
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 15,
    width: '10%'
  },
  editText: {
    // alignSelf: "center",
    fontSize: 14,
    color: '#3F5F90'
  },
  button: {
    alignItems: 'center',
    paddingTop: 10
    // backgroundColor: 'white'
  },
  languageOptions: {
    justifyContent: 'center',
    padding: 10,
    width: '100%'
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    justifyContent: 'space-between'
  },
  buttonContainer: {
    padding: 20,
    width: '100%'
  }
});
