import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../../components/Logo';
import Icon from 'react-native-vector-icons/Entypo';
import CustomButton from '../../components/CustomButton';


export default function VerificationCodeScreen() {
  const [selectedOption, setSelectedOption] = useState('phone')
  const label = <Text>I agree to the Airlipay Terms and Conditions
  and Privacy Policy</Text>
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo color="#063B87" />
      </View>
      <View style={styles.info}>
        <Text style={styles.infoHeader}>Lets verify your contact information!</Text>
        <View>
          <View style={{flexDirection: "row", marginLeft: 5, marginTop: 20, marginBottom: 20}}>
            <Text style={{marginRight: 20}}>*****start@ailipay.com</Text>
            <View style={styles.edit}>
              <Icon name="edit" />
              <Text style={{fontWeight: 700, marginLeft: 5}}>Edit</Text>
            </View>
          </View>
          <CustomButton title="Send verification vode" backgroundColor="#063B87" color="white" onPress={Actions.verificationCodeScreen} />
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
  },
  edit: {
    flexDirection: "row",
    alignItems: "center"
  }
});