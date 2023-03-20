import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import CustomHr from "../../components/CustomHr";
import AccountSettingsHeader from "../../components/AccountsSettingsHeader";

export default function AccountCancellation({navigation}) {
  return (
    <View style={styles.container}>
      <AccountSettingsHeader
        headerTitle="ACCOUNT CANCELLATION"
        navigation={navigation}
      />
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("MainActivityScreen")}
      >
        <Ionicons name="md-arrow-back" size={30} color="black" />
      </TouchableOpacity> */}
      <Text style={styles.infoText}>Cancellation Process</Text>
      <Text style={styles.apologyText}>We are sorry to see you go</Text>
      <View style={styles.detailSection}>
        <Text style={styles.companyName}>Company Name</Text>
        <Text style={styles.payperiodHeading}>Previous Payperiod</Text>
        <Text style={styles.payperiodDate}>Nov 29 - Dec 29</Text>
        <CustomHr width={1} />
        <View style={styles.row}>
          <Text style={styles.detailTextHeader}>Transferred Early</Text>
          <Text style={styles.detailTextHeader}>XAF 40 000</Text>
        </View>
        <CustomHr width={1} />
        <View style={styles.row}>
          <Text style={styles.detailTextHeader}>Days until next payday</Text>
          <Text style={styles.detailTextHeader}>12 day</Text>
        </View>
        <CustomHr width={1} />
        <Text style={styles.explanationText}>
          On Mon Dec 31st, AirliPay will send your salary like normal. If your
          salary does not exceed XAF 40 000, AirliPay will debit your account
          with the difference.
        </Text>
      </View>
      <View style={styles.buttonSection}>
        <CustomButton
          title="Keep my account active"
          backgroundColor="#063B87"
          color="white"
          onPress={() => navigation.navigate("")}
        />
        <CustomButton
          title="Cancel my account"
          backgroungColor="transparent"
          color="#063B87"
          onPress={() => navigation.navigate("")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoText: {
    fontSize: 25,
    fontWeight: 700,
    marginBottom: 0,
    marginTop: 40,
    alignSelf: "center",
  },
  apologyText: {
    marginBottom: 20,
    alignSelf: "center",
    fontSize: 12,
  },
  detailSection: {
    marginTop: 20,
  },
  detailTextHeader: {
    fontWeight: 600,
    fontSize: 17,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    color: "white",
    padding: 40,
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 24,
  },
  buttonSection: {
    marginTop: 30,
  },
  explanationText: {
    marginTop: 30,
    fontSize: 14,
    alignSelf: "center",
  },
  companyName: {
    fontSize: 20,
    marginBottom: 20,
    alignSelf: "center",
  },
  payperiodHeading: {
    fontSize: 20,
    fontWeight: 700,
    alignSelf: "center",
  },
  payperiodDate: {
    alignSelf: "center",
  },
});
