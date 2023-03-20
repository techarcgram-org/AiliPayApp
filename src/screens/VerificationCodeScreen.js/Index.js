import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../../components/Logo';
import CustomRadioButton from '../../components/CustomRadioButton';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function VerificationCodeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo color="#063B87" />
      </View>
      <View style={styles.info}>
        <Text style={styles.infoHeader}>Verification code sent!</Text>
        <View>
          <Text>A text message with your verification code was sent to xxxx-xxxx-343</Text>
          <View style={styles.confirmCode}>
            <CustomInput placeholder="Enter verification code" />
            <CustomButton title="Confirm Code" backgroundColor="#063B87" color="white" onPress={() => navigation.navigate("PasswordSetupScreen")} />
            <Text style={styles.text}>Didn't get verification code?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("VerificationCodeEmailScreen")}><Text style={[styles.text,{color: "#063B87"}]}>Send code to xxxstaing@airlipay.com</Text></TouchableOpacity>
            <Text style={styles.noAccess}>I don't have access to the listed accounts</Text>
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
    marginTop: 20,
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