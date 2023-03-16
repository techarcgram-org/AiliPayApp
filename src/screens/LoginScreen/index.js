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

export default function LoginScreen({navigation}) {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo color="#063B87" />
      </View>
      <View style={styles.info}>
        <Text style={styles.infoHeader}>Login</Text>
        <View>
          <CustomInput placeholder="Email Address" />
          <CustomInput placeholder="Password" />
          <CustomButton style={{marginTop: 20, mxwarginBottom: 20}} title="login" backgroundColor="#063B87" color="white" onPress={() => navigation.navigate("MainActivityScreen")} />
          <CustomCheckbox label={<Text style={{fontWeight: 700, fontSize: 16}}> Save Email</Text>} />
          <Text style={{marginTop: 20}}>Forgot your password?<Text style={{color: "#3F5F90", fontWeight: 500}}> Reset password</Text></Text>
          <Text style={{marginTop: 10}}>Dont have an account?<Text style={{color: "#3F5F90", fontWeight: 500}} onPress={() => navigation.navigate("GettingStartedEmailScreen")}> Get Started</Text></Text>
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
    flex: 1,
    flexDirection: "row",
    top: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  info: {
    flex: 8,

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