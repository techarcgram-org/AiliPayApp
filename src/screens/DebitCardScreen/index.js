import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import CustomButton from "../../components/CustomButton";
import { Actions } from "react-native-router-flux";
import BackIcon from "../../components/BackIcon";
import NotificationIcon from "../../components/NotificationIcon";
import PaymentDetailsBox from "../../components/PaymentDetailsBox";

export default function DebitCardScreen() {
  
  return (

    <SafeAreaView style={styles.container}>
      
      {/* ----------------------header navigation container -------------*/}
      <View style={styles.headerContainer}>
        <BackIcon onPress={Actions.mobileMoneyScreen} />
        <Text style={styles.infoHeader}>DEBIT CARD</Text>
        <NotificationIcon onPress={Actions.landingScreen} />
      </View>

      {/* ----------------------Payment detatils box container----------------- */}
      <View style={styles.debitCardContainer}>
        <Text style={styles.infoTitle}>Debit Card</Text>
        <View style={styles.debitCardContent}>
          <View>
            <PaymentDetailsBox
              paymentType="VISA"
              lastDigits="1234"
              primaryStatus="Primary Debit Card"
              validationStatus="Valid"
              imageType="visaCard"
            />
            <PaymentDetailsBox
              paymentType="MASTER"
              lastDigits="4567"
              primaryStatus=""
              validationStatus="Invalid"
              imageType="masterCard"
            />
            <PaymentDetailsBox
              paymentType="VISA"
              lastDigits="4567"
              primaryStatus=""
              validationStatus="Valid"
              imageType="visaCard"
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
  },
  debitCardContent: {
    marginTop: 30,
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20
  },
  infoHeader: {
    fontWeight: 700,
    fontSize: 25,
    marginBottom: 20,
  },
  infoTitle: {
    fontWeight: 600,
    fontSize: 23,
  },
});
