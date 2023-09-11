import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';
import Logo from '../../components/Logo';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import InputErrorMessage from '../../components/InputErrorMessage';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import IconMaterial from 'react-native-vector-icons/FontAwesome';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik, Field, ErrorMessage } from 'formik';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { store } from '../../../store';

export default function MainActivityScreen({ navigation }) {
  const { state, dispatch } = useContext(store);

  const handleSubmit = (values) => {
    //handle submission of amount for transfer of save

    console.log('Selected Value', values.selectedOption);
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Header text="AiliPay Balance" />
      <ScrollView>
        <View style={styles.sumary}>
          <Text style={{ fontSize: 35, fontWeight: 700 }}>XAF 100,000</Text>
          <View style={styles.updateSection}>
            <IconMaterial name="refresh" size={10} color="black" />
            <Text style={{ fontWeight: 'bold', fontSize: 12, margin: 5 }}>
              last updated 15 Feb 2023
            </Text>
            <IconFoundation name="info" sie={10} color="black" />
          </View>
          <Text
            style={{
              fontSize: 13,
              color: '#3F5F90',
              fontWeight: 700,
              marginTop: 20
            }}
            onPress={() => navigation.navigate('BalanceSummary')}>
            VIEW BALANCE SUMMARY
            <IconCommunity name="greater-than" size={10} color="#3F5F90" />
          </Text>
        </View>
        <View style={styles.transferSection}>
          <Logo color="#063B87" style={{ alignSelf: 'center' }} />
          <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>
            Choose an amount
          </Text>

          <Formik
            initialValues={{ selectedOptions: '' }}
            onSubmit={handleSubmit}
          >

            {({ values, setFieldValue, handleSubmit }) => (
              <View style={styles.transacButtons}>
                <View style={styles.row}>
                  <TouchableOpacity
                    style={{ backgroundColor: values.selectedOption === 'XAF 5000' ? '#063B87' : '#979EBA', padding: 10, borderRadius: 25, flex: 1 }}
                    onPress={() => setFieldValue('selectedOption', 'XAF 5000')}
                  >
                    <Text style={{ color: 'black', fontWeight: 700, fontSize: 18, textAlign: 'center' }}>XAF 5000</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ backgroundColor: values.selectedOption === 'XAF 10000' ? '#063B87' : '#979EBA', padding: 10, borderRadius: 25, flex: 1 }}
                    onPress={() => setFieldValue('selectedOption', 'XAF 10000')}
                  >
                    <Text style={{ color: 'black', fontWeight: 700, fontSize: 18, textAlign: 'center' }}>XAF 10000</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity
                    style={{ backgroundColor: values.selectedOption === 'XAF 20000' ? '#063B87' : '#979EBA', padding: 10, borderRadius: 25, flex: 1 }}
                    onPress={() => setFieldValue('selectedOption', 'XAF 20000')}
                  >
                    <Text style={{ color: 'black', fontWeight: 700, fontSize: 18, textAlign: 'center' }}>XAF 20000</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ backgroundColor: values.selectedOption === 'XAF 50000' ? '#063B87' : '#979EBA', padding: 10, borderRadius: 25, flex: 1 }}
                    onPress={() => setFieldValue('selectedOption', 'XAF 50000')}
                  >
                    <Text style={{ color: 'black', fontWeight: 700, fontSize: 18, textAlign: 'center' }}>XAF 50000</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.row}>
                  <TouchableOpacity
                    style={{ backgroundColor: values.selectedOption === 'XAF 100000' ? '#063B87' : '#979EBA', padding: 10, borderRadius: 25, flex: 1 }}
                    onPress={() => setFieldValue('selectedOption', 'XAF 100000')}
                  >
                    <Text style={{ color: 'black', fontWeight: 700, fontSize: 18, textAlign: 'center' }}>XAF 100000</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ backgroundColor: values.selectedOption === 'Others' ? '#063B87' : '#979EBA', padding: 10, borderRadius: 25, flex: 1 }}
                    onPress={() => {
                      setFieldValue('selectedOption', 'Others')
                      setIsModalVisible(true)
                    }}
                  >
                    <Text style={{ color: 'black', fontWeight: 700, fontSize: 18, textAlign: 'center' }}>Others</Text>
                  </TouchableOpacity>
                </View>

                <Modal
                  visible={isModalVisible}
                  animationType='slide'
                  transparent={true}
                  onRequestClose={() => setIsModalVisible(false)}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <Pressable
                        style={styles.close}
                        onPress={() => setIsModalVisible(false)}>
                        <Ionicons name="close" size={20} color="black" />
                      </Pressable>
                      <Formik
                        initialValues={{ amount: '' }}
                        onSubmit={(values) => {
                          //handle withdraw request
                          
                          console.log('the amount is:', values )
                        }}>
                        {({ submitAmount }) => (
                          <>
                            <Field
                              //add validation so that amount is always less than or equal to balance
                              component={CustomInput}
                              name="amount"
                              placeholder="Enter Amount"
                              type='number'
                            />
                            <ErrorMessage component={InputErrorMessage} name="amount" />
                            <Text style={styles.description}>Enter the amount you will like to withdraw.</Text>
                            <CustomButton
                              style={{ marginTop: 40 }}
                              title={'Withdraw'}
                              backgroundColor="#063B87"
                              color="white"
                              onPress={submitAmount}
                              type='submit'
                            />
                          </>
                        )}
                      </Formik>
                    </View>
                  </View>
                </Modal>

                <TouchableOpacity
                  style={{ backgroundColor: values.selectedOption === 'Entire Balance' ? '#063B87' : '#979EBA', padding: 10, borderRadius: 25, flex: 1 }}
                  onPress={() => setFieldValue('selectedOption', 'Entire Balance')}
                >
                  <Text style={{ color: 'black', fontWeight: 700, fontSize: 18, textAlign: 'center' }}>Entire Balance</Text>
                </TouchableOpacity>

                <CustomButton
                  backgroundColor="#063B87"
                  style={{ marginTop: 25 }}
                  color="white"
                  title="Start Transfer"
                  textStyle={{ fontWeight: 700, fontSize: 18 }}
                  onPress={() => navigation.navigate('TransferScreen')}
                  type='submit'
                />
                <CustomButton
                  backgroundColor="#063B87"
                  style={{ marginTop: -10 }}
                  color="white"
                  title="Save"
                  textStyle={{ fontWeight: 700, fontSize: 18 }}
                  onPress={() => navigation.navigate('SavingsScreen')}
                  type='submit'
                />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: 'white',
    padding: 40,
    flexDirection: 'column'
  },
  header: {},
  sumary: {
    alignItems: 'center',
    marginTop: 40
  },
  updateSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  transferSection: {
    marginTop: 20
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7
  },
  transacButtons: {
    marginTop: 20,
    gap: 10
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(63, 95, 144, 0.2)',
    bottom: 0
  },
  modalContent: {
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
  close: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: '10%'
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 23
  },
  footer: {}
});
