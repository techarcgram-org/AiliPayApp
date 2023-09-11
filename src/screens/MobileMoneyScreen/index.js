import { View, StyleSheet, Text } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import PaymentDetailsBox from '../../components/PaymentDetailsBox';
import AccountSettingsHeader from '../../components/AccountsSettingsHeader';
import MobileMoneyModal from './MobileMoneyModal';
import Toast from 'react-native-toast-message';
import { addMomoAccount, getMomoAccounts } from '../../services';
import { ScrollView } from 'react-native-gesture-handler';

export default function MobileMoneyScreen({ navigation }) {
  const [momoAccounts, setMomoAccounts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const onAddMomoAccount = async (values) => {
    setLoading(true);
    const response = await addMomoAccount({
      phone_number: values.phone_number
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

  const getAllMomoAccounts = useCallback(async () => {
    const allMomoAccounts = await getMomoAccounts();
    setMomoAccounts(allMomoAccounts.data.data);
  }, []);
  useEffect(() => {
    getAllMomoAccounts();
  }, [getAllMomoAccounts]);
  return (
    <View style={styles.container}>
      <AccountSettingsHeader headerTitle="MOBILE MONEY" navigation={navigation} />
      <View style={styles.debitCardContainer}>
        <Text style={styles.infoTitle}>Mobile Money Accounts</Text>
        <View style={styles.debitCardContent}>
          <ScrollView>
            {momoAccounts
              ? momoAccounts.map((momoAccount) => (
                  <PaymentDetailsBox
                    paymentType={momoAccount.operator}
                    lastDigits="XXX8"
                    primaryStatus="Primary Mobile Money"
                    validationStatus="Valid"
                    key={momoAccount.id}
                  />
                ))
              : null}
          </ScrollView>
        </View>
      </View>

      <MobileMoneyModal
        handleSubmit={onAddMomoAccount}
        loading={loading}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  buttonContainer: {
    padding: 20,
    width: '100%'
  },
  cardBox: {
    marginTop: 20
  },
  debitCardContainer: {
    alignItems: 'center',
    marginTop: 30
  },
  debitCardContent: {
    marginTop: 30,
    alignItems: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'column',
    width: '100%'
  },
  infoTitle: {
    fontWeight: 600,
    fontSize: 23,
    textAlign: 'center',
    marginTop: 40
  }
});
