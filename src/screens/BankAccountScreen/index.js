import { View, StyleSheet, Text } from 'react-native';
import React, { useEffect, useCallback } from 'react';
import PaymentDetailsBox from '../../components/PaymentDetailsBox';
import AccountSettingsHeader from '../../components/AccountsSettingsHeader';
import { useState } from 'react';
import { addNewBankAccount } from '../../services';
import Toast from 'react-native-toast-message';
import UpdateModal from './UpdateModal';
import { getBanks, getUserBanks } from '../../services/userSettingsService';
import { ScrollView } from 'react-native-gesture-handler';

export default function BankAccountScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [banks, setBanks] = useState([]);
  const [userBanks, setUserBanks] = useState([]);

  const onAddBankAccount = async (values) => {
    setLoading(true);
    const response = await addNewBankAccount({
      account_number: values.account_number,
      bank_id: parseInt(values.bank_id)
    });
    setLoading(false);
    if (response.status == 200) {
      Toast.show({
        type: 'success',
        text1: 'Congratulation',
        text2: 'Successfully added a bank account'
      });
      setModalVisible(false);
    } else {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Something went wrong please try again later 🥲'
      });
    }
  };
  const getAllUserBanks = useCallback(async () => {
    const userBanks = await getUserBanks();
    setUserBanks(userBanks.data);
  }, []);
  const getAllBanks = useCallback(async () => {
    const banks = await getBanks();
    setBanks(banks.data);
  }, []);
  useEffect(() => {
    getAllBanks();
    getAllUserBanks();
  }, [getAllBanks, getAllUserBanks]);

  return (
    <View style={styles.container}>
      {/* ----------------------header navigation container -------------*/}
      <AccountSettingsHeader headerTitle="BANK ACCOUNT" navigation={navigation} />

      {/* ----------------------Payment detatils box container----------------- */}
      <View style={styles.debitCardContainer}>
        <Text style={styles.infoTitle}>Bank Accounts</Text>
        <View style={styles.debitCardContent}>
          <ScrollView>
            {userBanks.map((userBank) => (
              <PaymentDetailsBox
                paymentType={userBank.banks.name}
                lastDigits="........7372"
                primaryStatus="Primary Bank Account"
                validationStatus={userBank.banks.is_partner ? 'Valid' : 'inValid'}
                validationImage="check-circle"
                imageName="bank"
                key={userBank.id}
              />
            ))}
          </ScrollView>
        </View>
      </View>
      <UpdateModal
        handleSubmit={onAddBankAccount}
        loading={loading}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        banks={banks}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    PaddingBottom: 40,
    // paddingRight: 10,
    // paddingLeft: 10,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  buttonContainer: {
    flex: 2,
    padding: 20,
    width: '100%'
  },
  cardBox: {
    marginTop: 20
  },
  debitCardContainer: {
    // flex: 6,
    // flexDirection: "column",
    // alignItems: "center",
    // margin: 20,
    marginTop: 30
  },
  debitCardContent: {
    marginTop: 30,
    alignItems: 'stretch',
    alignItems: 'center',
    // margin: 10,
    marginTop: 50
  },
  debitCardContent: {
    // marginTop: 10,
    flexDirection: 'column',
    width: '100%',
    // flexDirection: "column",
    // alignItems: "center",
    // margin: 20,
    marginTop: 30
  },
  debitCardContent: {
    marginTop: 30,
    alignItems: 'stretch',
    alignItems: 'center',
    // margin: 10,
    marginTop: 50
  },
  debitCardContent: {
    // marginTop: 10,
    flexDirection: 'column',
    width: '100%'
    // marginLeft: 20,
    // marginRight: 20,
  },
  infoTitle: {
    fontWeight: 600,
    fontSize: 23,
    textAlign: 'center',
    marginTop: 40
  }
});
