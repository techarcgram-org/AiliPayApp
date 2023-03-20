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

export default function VerifyIdentity({navigation}) {
  const [selectedOption, setSelectedOption] = useState('phone')
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo color="#063B87" />
      </View>
      <View style={styles.info}>
        <Text style={styles.infoHeader}>Verify Your Identity</Text>
        <View>
          <Text>Great! we found your account</Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoBoxTitle}>Your Account</Text>
            <View style={styles.infoBoxTextOne}>
              <Text style={{fontWeight: 700}}>Name: </Text>
              <Text>first_name last_name</Text>
            </View>
            <View style={styles.infoBoxTextTwo}>
              <Text style={{fontWeight: 700}}>Employee Id: </Text>
              <Text>******930</Text>
            </View>
          </View>
          <Text>We’ll send a verification code to your phone or email on file</Text>
          <View style={styles.getCode}>
            <View style={styles.options}>
              <CustomRadioButton
                value="phone"
                label="send code to *****-343"
                selectedValue={selectedOption}
                onValueChange={setSelectedOption}
                style={{fontWeight: 700}}
              />
              <CustomRadioButton
                value="email"
                label="send code to *****@ailipay.com"
                selectedValue={selectedOption}
                onValueChange={setSelectedOption}
                style={{fontWeight: 700}}
              />
            </View>
            <CustomButton title="Get Code" backgroundColor="#063B87" color="white" onPress={() => navigation.navigate("VerificationCodeScreen")} />
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
  infoBox: {
    marginTop: 30,
    backgroundColor: "#D9D9D9",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    marginBottom: 30,
  },
  infoBoxTitle: {
    fontWeight: 700,
    fontSize: 30,
    marginBottom: 20
  },
  infoBoxTextOne: {
    flexDirection: "row",
    marginBottom: 20
  },
  infoBoxTextTwo: {
    flexDirection: "row"
  },
  options: {
    marginTop: 30,
    marginBottom: 30,
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
    alignSelf: "center", fontWeight: 700, color: "#3F5F90"
  }
});