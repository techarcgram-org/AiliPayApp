import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../../components/Logo';
import CustomButton from '../../components/CustomButton';

export default function HelpScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo color="#063B87" />
      </View>
      <View style={styles.info}>
        <Text style={styles.infoHeader}>
          Thank you for your interest in 
          Airlipay, but we can’t find your account
        </Text>
        <View>
          <View style={{alignSelf: "center"}}>
            <Text style={{marginBottom: 5}}>- Confirm that your employer offers Airlipay</Text>
            <Text style={{marginBottom: 5}}>- Check to make sure everything matches the information on file with your employer.</Text>
            <Text style={{marginBottom: 5}}>- We can’t find your account using an email address, cell phone number or employee ID. If you’re having difficulties with one of these methods, try entering a different piece of information.</Text>
            <Text style={{marginBottom: 5}}>- If you’re a new employee, we might not have your information yet, so either contact us or wait a few days and try again.</Text>
            <Text style={{marginBottom: 5}}>- If you’re information is correct contact support at: ***support nubmer*** </Text>
          </View>
          <CustomButton style={{marginTop: 40}} title="Get Started" backgroundColor="#063B87" color="white" onPress={Actions.verificationCodeEmailScreen} />
          <CustomButton style={{marginTop: 10}} title="Ask your employeer about getting AirliPay" backgroundColor="#063B87" color="white" onPress={Actions.verificationCodeEmailScreen} />
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
  image: {
    width: "100%",
    height: 160,
    backgroundColor: "#D9D9D9",
    marginTop: 40,
    borderRadius: 30
  },
  info: {
    flex: 7,
    alignItems: "center"
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