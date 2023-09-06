import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Modal,
  Pressable
} from 'react-native';
import { RadioButton, TouchableRipple } from 'react-native-paper';
import CustomButton from './CustomButton';
import LineSeparator from './LineSeparator';
import CustomInput from './CustomInput';
import { ErrorMessage, Field, Formik } from 'formik';
import { createPasswordValidationSchema } from '../validationSchemas/verificationSchema';
import InputErrorMessage from '../components/InputErrorMessage';
import { nameValidationSchema, emailValidationSchema, phoneValidationSchema, bankValidationSchema, cardValidationSchema } from '../validationSchemas/modalInputSchemas';
import CustomHr from './CustomHr';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ChangePassword, ChangeName, ChangeEmail, ChangeNumber, ChangeLanguage } from '../screens/AccountInformation/index.js';

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
          // Alert.alert('Modal has been closed');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalBox}>
          <View style={styles.popup}>
            <Pressable
              style={styles.close}
              onPress={() => setModalVisible((prevModalVisible) => !prevModalVisible)}>
              <Ionicons name="close" size={20} color="black" />
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
              <Formik
                // validationSchema={}
                initialValues={{ language: selectedValue }}
                onSubmit={ async (values) => {
                  try {
                    const response = await ChangeLanguage(values);
                    console.log(response);
                  } catch (error) {
                    console.error(error.message);
                  }
                }}>

                {({ handleSubmit, isValid }) => (
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
                    <CustomButton
                      style={{ marginTop: 10 }}
                      title={'Change Language'}
                      backgroundColor="#063B87"
                      color="white"
                      onPress={handleSubmit}
                      disabled={!isValid}
                      type='submit'
                    />
                  </View>
                )}
              </Formik>
            ) : editValue == 'Card' ? (

              <Formik
                validationSchema={cardValidationSchema}
                initialValues={{ holderName: '', cardNumber: '', cvv: '', expirationDate: '' }}
                onSubmit={(values) => {

                  // handle submission code goes here 

                  console.log(`card details are ${values}`);
                }}>
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name="holderName"
                      placeholder="Card Holder Name"
                    />
                    <ErrorMessage component={InputErrorMessage} name="holderName" />
                    <Field
                      component={CustomInput}
                      name="cardNumber"
                      placeholder="Card Number"
                    />
                    <ErrorMessage component={InputErrorMessage} name="cardNumber" />
                    <Field
                      component={CustomInput}
                      name="cvv"
                      placeholder="CVV/CVC"
                    />
                    <ErrorMessage component={InputErrorMessage} name="cvv" />
                    <Field
                      component={CustomInput}
                      name="expirationDate"
                      placeholder="Expiration Date (MM/YY)"
                    />
                    <ErrorMessage component={InputErrorMessage} name="expirationDate" />
                    <CustomButton
                      style={{ marginTop: 10 }}
                      title={'Add Debit Card'}
                      backgroundColor="#063B87"
                      color="white"
                      onPress={handleSubmit}
                      disabled={!isValid}
                      type='submit'
                    />
                  </>
                )}
              </Formik>

            ) : editValue == 'Password' ? (
              <Formik
                validationSchema={createPasswordValidationSchema}
                initialValues={{ oldPassword: '', password: '', confirmPassword: '', }}
                onSubmit={async (values) => {

                  try {
                    const response = await ChangePassword(values);
                    console.log(response);
                  } catch (error) {
                    console.error(error.message);
                  }
                }}>
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name="oldPassword"
                      placeholder="Old Password"
                    />
                    <ErrorMessage component={InputErrorMessage} name="oldPassword" style={{ textAlign: 'left' }} />
                    <Field
                      component={CustomInput}
                      name="password"
                      placeholder="New Password"
                    />
                    <ErrorMessage component={InputErrorMessage} name="password" />
                    <Field
                      component={CustomInput}
                      name="confirmPassword"
                      placeholder="Confirm New Password"
                    />
                    <ErrorMessage component={InputErrorMessage} name="confirmPassword" />
                    <CustomButton
                      style={{ marginTop: 10 }}
                      title={'Change Password'}
                      backgroundColor="#063B87"
                      color="white"
                      onPress={handleSubmit}
                      disabled={!isValid}
                      type='submit'
                    />
                  </>
                )}
              </Formik>

            ) : editValue == 'Bank' ? (
              <Formik
                validationSchema={bankValidationSchema}
                initialValues={{ accountName: '', accountNumber: '', routingNumber: '', bankName: '', bankAddress: '', swiftCode: '' }}
                onSubmit={(values) => {
                  //handle submission code goes here

                  console.log(`bank details are  ${values}`);
                }}>
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name="accountName"
                      placeholder="Account Holder Name"
                    />
                    <ErrorMessage component={InputErrorMessage} name="accountName" />
                    <Field
                      component={CustomInput}
                      name="accountNumber"
                      placeholder="Account Number"
                    />
                    <ErrorMessage component={InputErrorMessage} name="accountNumber" />
                    <Field
                      component={CustomInput}
                      name="routingNumber"
                      placeholder="Routing Number"
                    />
                    <ErrorMessage component={InputErrorMessage} name="routingNumber" />
                    <Field
                      component={CustomInput}
                      name="bankName"
                      placeholder="Bank Name"
                    />
                    <ErrorMessage component={InputErrorMessage} name="bankName" />
                    <Field
                      component={CustomInput}
                      name="bankAddress"
                      placeholder="Bank Address"
                    />
                    <ErrorMessage component={InputErrorMessage} name="bankAddress" />
                    <Field
                      component={CustomInput}
                      name="swiftCode"
                      placeholder="SWIFT/BIC Code"
                    />
                    <ErrorMessage component={InputErrorMessage} name="swiftCode" />
                    <CustomButton
                      style={{ marginTop: 10 }}
                      title={'Add Bank Account'}
                      backgroundColor="#063B87"
                      color="white"
                      onPress={handleSubmit}
                      disabled={!isValid}
                      type='submit'
                    />
                  </>
                )}
              </Formik>

            ) : editValue == 'Name' ? (
              <Formik
                validationSchema={nameValidationSchema}
                initialValues={{ name: '' }}
                onSubmit={ async (values) => {
                  try {
                    const response = await ChangeName(values);
                    console.log('api respnse', response);
                  } catch (error) {
                    console.error('api error', error.message);
                  }
                }}>
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name="name"
                      placeholder="Enter Name"
                    />
                    <ErrorMessage component={InputErrorMessage} name="name" />
                    <Text style={styles.description}>For confirmation, an OTP(One Time Password) will be sent to the phone number we have on file via SMS.</Text>
                    <CustomButton
                      style={{ marginTop: 10 }}
                      title={'Update Name'}
                      backgroundColor="#063B87"
                      color="white"
                      onPress={handleSubmit}
                      disabled={!isValid}
                      type='submit'
                    />
                  </>
                )}
              </Formik>

            ) : editValue == 'Email' ? (
              <Formik
                validationSchema={emailValidationSchema}
                initialValues={{ email: '' }}
                onSubmit={ async (values) => {
                  try {
                    const response = await ChangeEmail(values);
                    console.log('api respnse', response);
                  } catch (error) {
                    console.error('api error', error.message);
                  }
                }}>
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name="email"
                      placeholder="Enter Email Address"
                      type='email'
                    />
                    <ErrorMessage component={InputErrorMessage} name="email" />
                    <Text style={styles.description}>For confirmation, an OTP(One Time Password) will be sent to the phone number we have on file via SMS.</Text>
                    <CustomButton
                      style={{ marginTop: 10 }}
                      title={'Update Email'}
                      backgroundColor="#063B87"
                      color="white"
                      onPress={handleSubmit}
                      disabled={!isValid}
                      type='submit'
                    />
                  </>
                )}
              </Formik>

            ) : editValue == 'Phone' ? (
              <Formik
                validationSchema={phoneValidationSchema}
                initialValues={{ phone: '' }}
                onSubmit={async (values) => {
                  try {
                    const response = await ChangeNumber (values);
                    console.log('api respnse', response);
                  } catch (error) {
                    console.error('api error', error.message);
                  }
                }}>
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name="phone"
                      placeholder="Enter Phone Number"
                      type='tel'
                    />
                    <ErrorMessage component={InputErrorMessage} name="phone" />
                    <Text style={styles.description}>For confirmation, an OTP(One Time Password) will be sent to the Email Address we have on file.</Text>
                    <CustomButton
                      style={{ marginTop: 10 }}
                      title={'Update Number'}
                      backgroundColor="#063B87"
                      color="white"
                      onPress={handleSubmit}
                      disabled={!isValid}
                      type='submit'
                    />
                  </>
                )}
              </Formik>
            ) : editValue == 'Momo' ? (
              <Formik
                validationSchema={phoneValidationSchema}
                initialValues={{ phone: '' }}
                onSubmit={(values) => onBankSubmitEvent(values)}>
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name="phone"
                      placeholder="Enter Phone Number"
                      type='tel'
                    />
                    <ErrorMessage component={InputErrorMessage} name="phone" />
                    <Text style={styles.description}>For confirmation, an OTP(One Time Password) will be sent to the phone number we have on file via SMS.</Text>
                    <CustomButton
                      style={{ marginTop: 10 }}
                      title={'Update Number'}
                      backgroundColor="#063B87"
                      color="white"
                      onPress={handleSubmit}
                      disabled={!isValid}
                      type='submit'
                    />
                  </>
                )}
              </Formik>
            ) : (
              <Formik
                // validationSchema={}
                initialValues={{ phone: '' }}
                onSubmit={(values) => onBankSubmitEvent(values)}>
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name="phone"
                      placeholder="Enter"
                      type='tel'
                    />
                    <ErrorMessage component={InputErrorMessage} name="oldPassword" />
                  </>
                )}
              </Formik>
            )
            }

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
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
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
