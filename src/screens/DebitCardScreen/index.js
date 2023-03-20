import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import CustomButton from "../../components/CustomButton";
import { Actions } from "react-native-router-flux";
import AccountSettingsHeader from "../../components/AccountsSettingsHeader";
import PaymentDetailsBox from "../../components/PaymentDetailsBox";

export default function DebitCardScreen({navigation}) {
  return (
    <View style={styles.container}>
      {/* ----------------------header navigation container -------------*/}
      <AccountSettingsHeader headerTitle="DEBIT CARD" navigation={navigation}/>

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
              paymentType="MASTER"
              lastDigits="4567"
              primaryStatus=""
              validationStatus="Invalid"
              validationImage="times-circle"
              imageName="cc-mastercard"
            />
            <PaymentDetailsBox
              paymentType="VISA"
              lastDigits="4567"
              primaryStatus=""
              validationStatus="Valid"
              validationImage="check-circle"
              imageName="cc-visa"
            />
          </View>
        </View>
      </View>

      {/* -----------------add payment details button container---------------- */}
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Add a new Debit Card"
          color="white"
          backgroundColor="#063B87"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: "white",
    flexDirection: "column",
  },
  buttonContainer: {
    flex: 2,
    padding: 20,
  },
  cardBox: {
    marginTop: 20,
  },
  debitCardContainer: {
    flex: 6,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30
  },
  debitCardContent: {
    marginTop: 30,
  },
  infoTitle: {
    fontWeight: 600,
    fontSize: 23,
  },
});
