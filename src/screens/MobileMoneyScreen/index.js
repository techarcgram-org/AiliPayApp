import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import CustomButton from "../../components/CustomButton";
import { Actions } from "react-native-router-flux";
import PaymentDetailsBox from "../../components/PaymentDetailsBox";
import AccountSettingsHeader from "../../components/AccountsSettingsHeader";

export default function MobileMoneyScreen() {
  return (
      <SafeAreaView style={styles.container}>
        {/* ----------------------header navigation container -------------*/}
        <AccountSettingsHeader headerTitle="MOBILE MONEY" backAction={Actions.bankAccountScreen}/>

        {/* ----------------------Payment detatils box container----------------- */}
        <View style={styles.debitCardContainer}>
          <Text style={styles.infoTitle}>Mobile Money</Text>
          <View style={styles.debitCardContent}>
            <View>
              <PaymentDetailsBox
                paymentType="MTN MoMo"
                lastDigits="XXXXXXX8"
                primaryStatus="Primary Mobile Money"
                validationStatus="Valid"
                imageType="mtnMomo"
              />
              <PaymentDetailsBox
                paymentType="MTN MoMo"
                lastDigits="XXXXXXX9"
                primaryStatus="Primary Mobile Money"
                validationStatus="Invalid"
                imageType="mtnMomo"
              />
            </View>
          </View>
        </View>

        {/* -----------------add payment details button container---------------- */}
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Add Mobile Money Account"
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
    padding: 20
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
