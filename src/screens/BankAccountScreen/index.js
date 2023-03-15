import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import CustomButton from "../../components/CustomButton";
import { Actions } from "react-native-router-flux";
import PaymentDetailsBox from "../../components/PaymentDetailsBox";
import AccountSettingsHeader from "../../components/AccountsSettingsHeader";

export default function BankAccountScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* ----------------------header navigation container -------------*/}
      <AccountSettingsHeader
        headerTitle="BANK ACCOUNT"
        backAction={Actions.debitCardScreen}
      />

      {/* ----------------------Payment detatils box container----------------- */}
      <View style={styles.debitCardContainer}>
        <Text style={styles.infoTitle}>Bank Accounts</Text>
        <View style={styles.debitCardContent}>
          <View>
            <PaymentDetailsBox
              paymentType="ECOBANK"
              lastDigits="........7372"
              primaryStatus="Primary Bank Account"
              validationStatus="Valid"
              imageType="bankAccount"
            />
            <PaymentDetailsBox
              paymentType="UBA BANK"
              lastDigits="........7272"
              primaryStatus=""
              validationStatus="Invalid"
              imageType="bankAccount"
            />
            <PaymentDetailsBox
              paymentType="NFC BANK"
              lastDigits="........2892"
              primaryStatus=""
              validationStatus="Valid"
              imageType="bankAccount"
            />
          </View>
        </View>
      </View>

      {/* -----------------add payment details button container---------------- */}
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Add a new Bank Account"
          color="white"
          backgroundColor="#063B87"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    margin: 20,
  },
  debitCardContent: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  infoTitle: {
    fontWeight: 600,
    fontSize: 23,
  },
});
