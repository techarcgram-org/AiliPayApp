import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
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
import moment from 'moment';

import { store } from '../../../store';
import { getUserBalance } from '../../services/airlipayBalance';
import { CustomModal } from '../../components/CustomModal';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default function MainActivityScreen({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { state, dispatch } = useContext(store);
  const { balance } = state;
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [entireBalance, setEntireBalance] = useState(false);

  const handleSubmit = (values) => {
    // console.log('Selected Value', values.selectedOption);
  };
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Header text="AiliPay Balance" />
      <ScrollView>
        <View style={styles.sumary}>
          <Text style={{ fontSize: 35, fontWeight: 700 }}>XAF {balance.balance}</Text>
          <View style={styles.updateSection}>
            <IconMaterial name="refresh" size={10} color="black" />
            <Text style={{ fontWeight: 'bold', fontSize: 12, margin: 5 }}>
              last updated {moment(balance.last_updated).format('Do MMM YYYY hh:mm a')}
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

          <View style={styles.transacButtons}>
            <View style={styles.row}>
              <TouchableOpacity
                style={{
                  backgroundColor: withdrawAmount === 5000 ? '#063B87' : '#979EBA',
                  padding: 10,
                  borderRadius: 25,
                  flex: 1
                }}
                onPress={() => {
                  setEntireBalance(false);
                  setWithdrawAmount(5000);
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 700,
                    fontSize: 18,
                    textAlign: 'center'
                  }}>
                  XAF 5000
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: withdrawAmount === 10000 ? '#063B87' : '#979EBA',
                  padding: 10,
                  borderRadius: 25,
                  flex: 1
                }}
                onPress={() => {
                  setEntireBalance(false);
                  setWithdrawAmount(10000);
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 700,
                    fontSize: 18,
                    textAlign: 'center'
                  }}>
                  XAF 10000
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={{
                  backgroundColor: withdrawAmount === 20000 ? '#063B87' : '#979EBA',
                  padding: 10,
                  borderRadius: 25,
                  flex: 1
                }}
                onPress={() => {
                  setEntireBalance(false);
                  setWithdrawAmount(20000);
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 700,
                    fontSize: 18,
                    textAlign: 'center'
                  }}>
                  XAF 20000
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: withdrawAmount === 50000 ? '#063B87' : '#979EBA',
                  padding: 10,
                  borderRadius: 25,
                  flex: 1
                }}
                onPress={() => {
                  setEntireBalance(false);
                  setWithdrawAmount(50000);
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 700,
                    fontSize: 18,
                    textAlign: 'center'
                  }}>
                  XAF 50000
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={{
                  backgroundColor: withdrawAmount === 100000 ? '#063B87' : '#979EBA',
                  padding: 10,
                  borderRadius: 25,
                  flex: 1
                }}
                onPress={() => {
                  setEntireBalance(false);
                  setWithdrawAmount(100000);
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 700,
                    fontSize: 18,
                    textAlign: 'center'
                  }}>
                  XAF 100000
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: '#979EBA',
                  padding: 10,
                  borderRadius: 25,
                  flex: 1
                }}
                onPress={() => {
                  setIsModalVisible(true);
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 700,
                    fontSize: 18,
                    textAlign: 'center'
                  }}>
                  Others
                </Text>
              </TouchableOpacity>
            </View>

            <CustomModal setModalVisible={setIsModalVisible} modalVisible={isModalVisible}>
              <Formik
                initialValues={{ amount: '' }}
                onSubmit={(values) => {
                  navigation.navigate('TransferScreen', {
                    withdrawAmount: values.amount,
                    balance: balance.balance
                  });
                  setIsModalVisible(false);
                }}>
                {({ handleSubmit }) => (
                  <>
                    <Field
                      //add validation so that amount is always less than or equal to balance
                      component={CustomInput}
                      name="amount"
                      placeholder="Amount"
                      inputMode="text"
                    />
                    <ErrorMessage component={InputErrorMessage} name="amount" />
                    <Text style={styles.description}>
                      Enter the amount you will like to withdraw.
                    </Text>
                    <CustomButton
                      style={{ marginTop: 40 }}
                      title={'Withdraw'}
                      backgroundColor="#063B87"
                      color="white"
                      onPress={handleSubmit}
                      type="submit"
                    />
                  </>
                )}
              </Formik>
            </CustomModal>

            <TouchableOpacity
              style={{
                backgroundColor: entireBalance ? '#063B87' : '#979EBA',
                padding: 10,
                borderRadius: 25,
                flex: 1
              }}
              onPress={() => {
                setEntireBalance(true);
                setWithdrawAmount(balance.balance);
              }}>
              <Text
                style={{
                  color: entireBalance ? 'white' : 'black',
                  fontWeight: 700,
                  fontSize: 18,
                  textAlign: 'center'
                }}>
                Entire Balance
              </Text>
            </TouchableOpacity>

            <CustomButton
              backgroundColor="#063B87"
              style={{ marginTop: 25 }}
              color="white"
              title="Start Transfer"
              textStyle={{ fontWeight: 700, fontSize: 18 }}
              onPress={() => {
                if (withdrawAmount <= 0) {
                  Toast.show({
                    type: 'error',
                    text1: 'Select amount to withdraw',
                    text2: 'error'
                  });
                  return;
                }
                navigation.navigate('TransferScreen', {
                  withdrawAmount,
                  balance: balance.balance
                });
              }}
              type="submit"
            />
            <CustomButton
              backgroundColor="#063B87"
              style={{ marginTop: -10 }}
              color="white"
              title="Save"
              textStyle={{ fontWeight: 700, fontSize: 18 }}
              onPress={() => navigation.navigate('SavingsScreen')}
              type="submit"
            />
          </View>
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
