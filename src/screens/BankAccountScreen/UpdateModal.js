
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { ErrorMessage, Field, Formik } from 'formik';
import { bankValidationSchema } from '../../validationSchemas/verificationSchema';
import CustomButton from '../../components/CustomButton';
import CustomSelectInput from '../../components/CustomSelectInput';
import InputErrorMessage from '../../components/InputErrorMessage';
import CustomInput from '../../components/CustomInput';

const UpdateModal = ({handleSubmit}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
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
  return (
    <View style={styles.container}>
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
              <Text style={{ color: 'black', fontSize: 20, textAlign: 'center' }}>
                <Ionicons name="close" size={20} color="black" />
              </Text>
            </Pressable>
            {/* <Text style={styles.heading}>Add Bank Account</Text> */}
            <View style={styles.formikContainer}>
              <Formik
                validationSchema={bankValidationSchema}
                initialValues={{ bank_id: '', account_number: '' }}
                onSubmit={handleSubmit}>
                {({ handleSubmit, isValid }) => (
                  <>
                    <Field
                      component={CustomInput}
                      name="account_number"
                      placeholder="Bank Account Number"
                      editable={!loading}
                      inputMode="text"
                    />
                    <ErrorMessage component={InputErrorMessage} name="account_number" />

                    <Field
                      component={CustomSelectInput}
                      name="bank_id"
                      placeholder="Select Your Bank"
                      editable={!loading}
                      inputMode="text"
                      options={cameroonBanks}
                    />
                    <ErrorMessage component={InputErrorMessage} name="bank_id" />
                    <CustomButton
                      style={{ marginTop: 10 }}
                      title={'Add Bank'}
                      backgroundColor="#063B87"
                      color="white"
                      onPress={handleSubmit}
                      disabled={!isValid}
                      type="submit"
                    />
                  </>
                )}
              </Formik>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.buttonContainer}>
        <CustomButton
          title='Add a new bank account'
          color="white"
          backgroundColor="#063B87"
          onPress={() => setModalVisible(true)}
        />
      </View>
    </View>
  );
}

export default UpdateModal

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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