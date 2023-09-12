import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import { Actions } from 'react-native-router-flux';
import AccountSettingsHeader from '../../../components/AccountsSettingsHeader';
import PaymentDetailsBox from '../../../components/PaymentDetailsBox';
import UpdateInformation from '../../../components/UpdateInformation';

export default function DebitCardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* ----------------------header navigation container -------------*/}
      <AccountSettingsHeader headerTitle="DEBIT CARD" navigation={navigation} />

      {/* ----------------------Payment detatils box container----------------- */}
      <View style={styles.debitCardContainer}>
        <Text style={styles.infoTitle}>Debit Cards</Text>
        <View style={styles.debitCardContent}>
          <View>
            <PaymentDetailsBox
              paymentType="VISA"
              lastDigits="1234"
              primaryStatus="Primary Debit Card"
              validationStatus="Valid"
              validationImage="check-circle"
              imageName="cc-visa"
            />
            <PaymentDetailsBox
              paymentType="MASTERCARD"
              lastDigits="4567"
              primaryStatus="Debit Card"
              validationStatus="Invalid"
            />
            <PaymentDetailsBox
              paymentType="VISA"
              lastDigits="4567"
              primaryStatus="Debit Card"
              validationStatus="Valid"
            />
          </View>
        </View>
      </View>

      {/* -----------------add payment details button container---------------- */}
      <UpdateInformation editValue="Card" />
      {/* <View style={styles.buttonContainer}>
        <CustomButton
          title="Add a new Debit Card"
          color="white"
          backgroundColor="#063B87"
        />
      </View> */}
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
    // flex: 2,
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
    // marginLeft: 20,
    // marginRight: 20,
    alignItems: 'center',
    // flexDirection: "column",
    marginTop: 30
  },
  debitCardContent: {
    // marginTop: 30,
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
    // marginLeft: 20,
    // marginRight: 20,
    alignItems: 'center',
    // flexDirection: "column",
    marginTop: 30
  },
  debitCardContent: {
    // marginTop: 30,
    flexDirection: 'column',
    width: '100%'
  },
  infoTitle: {
    fontWeight: 600,
    fontSize: 23,
    textAlign: 'center',
    marginTop: 40,
    textAlign: 'center',
    marginTop: 40
  }
});
