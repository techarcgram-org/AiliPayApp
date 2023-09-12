import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addNewBankAccount } from '../../../services';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default function addBankAccount(navigation) {
  const [loading, setLoading] = useState(false);

  const onAddBankAccount = async (values) => {
    setLoading(true);
    const response = await addNewBankAccount({
      account_number: values.account_number,
      bank_id: values.bank_id
    });
    if (response.status === 201) {
      Toast.show({
        type: 'info',
        text1: 'sucess',
        text2: 'You have successfully added a bank account'
      });
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MainActivityScreen')}>
        <Ionicons name="md-arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <ScrollView>
        <Text style={styles.infoText}>Add Bank Account</Text>
        <TextInput style={styles.inputField} placeholder="Account Holder Name"></TextInput>
        <TextInput style={styles.inputField} placeholder="Account Number"></TextInput>
        <TextInput style={styles.inputField} placeholder="Routing Number"></TextInput>
        <TextInput style={styles.inputField} placeholder="Bank Name"></TextInput>
        <TextInput style={styles.inputField} placeholder="Bank Address"></TextInput>
        <TextInput style={styles.inputField} placeholder="SWIFT/BIC Code"></TextInput>
        <Text style={styles.description}>Some text goes here</Text>
        <CustomButton
          style={styles.btnSpace}
          title="Add"
          backgroundColor="#063B87"
          color="#063B87"
          onPress={() => navigation.navigate('MainActivityScreen')}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: 'white',
    paddingTop: 40,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  infoText: {
    fontSize: 27,
    fontWeight: 700,
    marginBottom: 40,
    alignSelf: 'center',
    marginTop: 20
  },
  inputField: {
    borderRadius: 10,
    // maxWidth: 300,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#D9D9D9',
    color: 'white',
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
  btnSpace: {
    marginTop: 110
  }
});
