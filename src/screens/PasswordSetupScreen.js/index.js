import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../../components/Logo';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import CustomCheckbox from '../../components/CustomCheckbox';

export default function PasswordSetupScreen() {
  const label = <><Text style={{fontSize: 12.5}}>I agree to the Airlipay <Text style={{color: "#2673D3"}}>Terms and Conditions </Text>
  and <Text style={{color: "#48658A"}}>Privacy Policy</Text></Text></>
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo color="#063B87" />
      </View>
      <View style={styles.info}>
        <Text style={styles.infoHeader}>Hello! first_name, last_name</Text>
        <View>
          <Text style={{width: "80%", fontSize: 16}}>
            Choose your password to access your Airlipay  pay benefits.
            Use a mix of different letters, 
            numbers, and symbols
          </Text>
          
          <View style={styles.confirmCode}>
            <View style={{flexDirection: "row", marginBottom: 20}}>
              <Text style={{fontWeight: 700}}>Username:</Text>
              <Text> airlypaystarting@airlipay.com</Text>
            </View>
            <CustomInput placeholder="Create password (Required)" />
            <CustomInput placeholder="Confirm password (Required)" />
            <View>
              <CustomCheckbox label={label} />
            </View>
            <CustomButton style={{marginTop: 40}} title="View your balance" backgroundColor="#063B87" color="white" onPress={Actions.welcomeScreen} />
          </View>
        </View>
      </View>
      <View style={styles.pageFooter}>
        <View style={styles.helpText}>
          <Text style={styles.frontText}>Need Help? </Text>
          <Text>© AirliPay 2023</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    color: "white",
    padding: 40,
    flexDirection: "column"
  },
  header: {
    flexDirection: "row",
    top: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  info: {
    flex: 7,
  },
  infoHeader: {
    fontWeight: 700,
    fontSize: 25,
    marginTop: 40,
    marginBottom: 20
  },
  pageFooter: {
    flex: 1,
    marginTop: 40,
    alignItems: "center"
  },
  helpText: {
    flexDirection: "row"
  },
  frontText: {
    fontWeight: 600,
  },
  noAccess: {
    alignSelf: "center", 
    fontWeight: 700, 
    color: "#3F5F90",
    marginTop: 70,
  },
  confirmCode: {
    marginTop: 20,
  },
  text: {
    alignSelf: "center",
    marginTop: 20
  }
});