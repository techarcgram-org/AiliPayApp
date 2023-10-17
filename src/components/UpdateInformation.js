import { ErrorMessage, Field, Formik } from 'formik';
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { RadioButton, TouchableRipple } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InputErrorMessage from '../components/InputErrorMessage';
import {
  bankValidationSchema,
  cardValidationSchema
} from '../validationSchemas/modalInputSchemas';
import { createPasswordValidationSchema } from '../validationSchemas/verificationSchema';
import CustomButton from './CustomButton';
import CustomInput from './CustomInput';
import LineSeparator from './LineSeparator';
// import { ErrorMessage, Field, Formik } from 'formik';
// import { bankValidationSchema } from '../validationSchemas/verificationSchema';
// import CustomInput from './CustomInput';
// import InputErrorMessage from './InputErrorMessage';
import { useTranslation } from 'react-i18next';
import CustomSelectInput from './CustomSelectInput';

export default function UpdateInformation({ editValue, handleSubmit }) {
  const [modalVisible, setModalVisible] = useState(false);

  const [loading, setLoading] = useState(false);
  const {t} = useTranslation()

  const initialValues =
    editValue == 'Bank'
      ? {
          account_number: '',
          bank_id: ''
        }
      : {};

  const cameroonBanks = [
    'Afriland First Bank',
    'Banque Atlantique',
    "Banque Internationale du Cameroun pour l'Epargne et le Crédit (BICEC)",
    "Banque des États de l'Afrique Centrale (BEAC)",
    'Banque Nationale de Développement Agricole (BNDA)',
    "Banque Sahélo-Saharienne pour l'Investissement et le Commerce (BSIC)",
    'Commercial Bank of Cameroon (CBC)',
    'Ecobank Cameroon',
    'International Commercial Bank (ICB)',
    'Société Générale Cameroun',
    'Standard Chartered Bank Cameroon',
    'United Bank for Africa (UBA)'
  ];

  const [selectedValue, setSelectedValue] = useState('English');

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed');
          setModalVisible(!modalVisible);
          modalVisible;
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
            <Text style={styles.heading}>
              {editValue == 'Name'
                ? t('update.updateName')
                : editValue == 'Email'
                ? t('update.updateEmail')
                : editValue == 'Momo'
                ? t('update.addMomo')
                : editValue == 'Phone'
                ? t('update.updatePhone')
                : editValue == 'Language'
                ? t('update.updateLanguage')
                : editValue == 'Password'
                ? t('update.updatePassword')
                : editValue == 'Card'
                ? t('update.addCard')
                : editValue == 'Bank'
                ? t('update.addBankAccount')
                : t('update.error!')}
            </Text>

            {/* field input -----------------------------*/}
            <View style={styles.formikContainer}>
              {/* <Formik
                validationSchema={editValue == 'Bank' ? bankValidationSchema : ''}
                initialValues={initialValues}
                onSubmit={(values) => handleSubmit(values)}>
                <> */}
              {editValue == 'Language' ? (
                <Formik
                  // validationSchema={}
                  initialValues={{ language: selectedValue }}
                  onSubmit={(values) => {
                    //handle submission code goes here
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
                            color="#063B87"
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
                            color="#063B87"
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
                        type="submit"
                      />
                    </View>
                  )}
                </Formik>
              ) : editValue == 'Card' ? (
                <Formik
                  validationSchema={cardValidationSchema}
                  initialValues={{
                    holderName: '',
                    cardNumber: '',
                    cvv: '',
                    expirationDate: ''
                  }}
                  onSubmit={(values) => {
                    // handle submission code goes here
                  }}>
                  {({ handleSubmit, isValid }) => (
                    <>
                      <Field
                        component={CustomInput}
                        name="holderName"
                        placeholder={t('update.holderName')}
                        // inputMode="holderName"
                      />
                      <ErrorMessage component={InputErrorMessage} name="holderName" />
                      <Field
                        component={CustomInput}
                        name="cardNumber"
                        placeholder={t('update.cardNumber')}
                        // inputMode="cardNumber"
                      />
                      <ErrorMessage component={InputErrorMessage} name="cardNumber" />
                      <Field
                        component={CustomInput}
                        name="cvv"
                        placeholder="CVV/CVC"
                        // inputMode="cvv"
                      />
                      <ErrorMessage component={InputErrorMessage} name="cvv" />
                      <Field
                        component={CustomInput}
                        name="expirationDate"
                        placeholder={t('update.expirationDate')}
                        // inputMode="expirationDate"
                      />
                      <ErrorMessage component={InputErrorMessage} name="expirationDate" />
                      <CustomButton
                        style={{ marginTop: 10 }}
                        title={t('update.addCard')}
                        backgroundColor="#063B87"
                        color="white"
                        onPress={handleSubmit}
                        disabled={!isValid}
                        type="submit"
                      />
                    </>
                  )}
                </Formik>
              ) : editValue == 'Password' ? (
                <Formik
                  validationSchema={createPasswordValidationSchema}
                  initialValues={{ oldPassword: '', password: '', confirmPassword: '' }}
                  onSubmit={(values) => {
                    //handle submission code goes here
                  }}>
                  {({ handleSubmit, isValid }) => (
                    <>
                      <Field
                        component={CustomInput}
                        name="oldPassword"
                        placeholder={t('update.oldPassword')}
                        // inputMode="oldPassword"
                      />
                      <ErrorMessage
                        component={InputErrorMessage}
                        name="oldPassword"
                        style={{ textAlign: 'left' }}
                      />
                      <Field
                        component={CustomInput}
                        name="password"
                        placeholder={t('update.newPassword')}
                        // inputMode="Password"
                      />
                      <ErrorMessage component={InputErrorMessage} name="password" />
                      <Field
                        component={CustomInput}
                        name="confirmPassword"
                        placeholder={t('update.confirm')}
                        // inputMode="confirmPassword"
                      />
                      <ErrorMessage component={InputErrorMessage} name="confirmPassword" />
                      <CustomButton
                        style={{ marginTop: 10 }}
                        title={t('update.updatePassword')}
                        backgroundColor="#063B87"
                        color="white"
                        onPress={handleSubmit}
                        disabled={!isValid}
                        type="submit"
                      />
                    </>
                  )}
                </Formik>
              ) : editValue == 'Bank' ? (
                <Formik
                  validationSchema={bankValidationSchema}
                  initialValues={{ bank_id: '', account_number: '' }}
                  onSubmit={handleSubmit}>
                  {({ handleSubmit, isValid }) => (
                    <>
                      <Field
                        component={CustomInput}
                        name="account_number"
                        placeholder={t('update.accountNumber')}
                        editable={!loading}
                        inputMode="text"
                      />
                      <ErrorMessage component={InputErrorMessage} name="account_number" />

                      <Field
                        component={CustomSelectInput}
                        name="bank_id"
                        placeholder={t('update.selectBank')}
                        editable={!loading}
                        inputMode="text"
                        options={cameroonBanks}
                      />
                      <ErrorMessage component={InputErrorMessage} name="bank_id" />
                      <CustomButton
                        style={{ marginTop: 10 }}
                        title={t('update.addBank')}
                        backgroundColor="#063B87"
                        color="white"
                        onPress={handleSubmit}
                        disabled={!isValid}
                        type="submit"
                      />
                    </>
                  )}
                </Formik>
              ) : (
                <TextInput style={styles.inputField}></TextInput>
              )}
              {/* </>
              </Formik> */}
            </View>
          </View>
        </View>
      </Modal>
      {editValue == 'Momo' || editValue == 'Card' || editValue == 'Bank' ? (
        <View style={styles.buttonContainer}>
          <CustomButton
            title={
              editValue == 'Momo'
                ? t('update.addMomo1')
                : editValue == 'Card'
                ? t('update.addDebit')
                : editValue == 'Bank'
                ? t('update.addNewBank')
                : t('update.error!')
            }
            color="white"
            backgroundColor="#063B87"
            onPress={() => setModalVisible(true)}
          />
        </View>
      ) : (
        <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
          <Text style={styles.editText}> {t('update.edit')}</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    // backgroundColor: 'blue',
    width: '100%'
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
    alignItems: 'center'
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
  },
  formikContainer: {
    padding: 20,
    width: 400,
    marginBottom: 10
  }
});
