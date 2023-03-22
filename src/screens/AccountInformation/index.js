import { StyleSheet, Text, View } from "react-native";
import CustomHr from "../../components/CustomHr";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AccountSettingsHeader from "../../components/AccountsSettingsHeader";

export default function AccountInformation({ navigation }) {
  return (
    <View style={styles.container}>

      <AccountSettingsHeader
        headerTitle="ACCOUNT INFORMATION"
        navigation={navigation}
      />

      <View style={styles.avatar}>
        <Ionicons name="person" size={100} color="black" alignSelf="center" />
        <Text style={styles.nameText}>Fname Lname</Text>
        <Text style={styles.editNameText}>Edit</Text>
      </View>
      <View style={styles.securityAlert}>
        <MaterialCommunityIcons
          name="shield-alert-outline"
          size={30}
          color="white"
        />
        <View style={styles.alertText}>
          <Text style={styles.headingText}>Security Alert!</Text>
          <Text>Please update or verify your contact information below.</Text>
        </View>
      </View>
      <View style={styles.userInformation}>
        <CustomHr width={1} />
        <View style={styles.row}>
          <MaterialCommunityIcons name="email" size={20} color="#3F5F90" />
          <View style={styles.innerRow}>
            <View style={styles.textSection}>
              <Text>Email Address</Text>
              <Text>fname.lname@dname.com</Text>
            </View>
            <Text>Verify</Text>
            <Text style={styles.editText}>Edit</Text>
          </View>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name="cellphone" size={20} color="#3F5F90" />
          <View style={styles.innerRow}>
            <View style={styles.textSection}>
              <Text>Phone Number</Text>
              <Text>+237XXXXXXXXX</Text>
            </View>
            <Text style={styles.editText}>Edit</Text>
          </View>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons
            name="form-textbox-password"
            size={20}
            color="#3F5F90"
          />
          <View style={styles.innerRow}>
            <View>
              <Text>Password</Text>
              <Text>*********</Text>
            </View>
            <Text style={styles.editText}>Edit</Text>
          </View>
        </View>
        <View style={styles.row}>
          <MaterialIcons name="language" size={20} color="#3F5F90" />
          <View style={styles.innerRow}>
            <View>
              <Text>Language</Text>
              <Text>English Language</Text>
            </View>
            <Text style={styles.editText}>Edit</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    color: "white",
    paddingTop: 40,
    paddingBottom: 40,
    flexDirection: "column",
  },
  avatar: {
    alignSelf: "center",
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
  },
  nameText: {
    alignSelf: "center",
    fontSize: 15,
    fontWeight: 600,
  },
  editText: {
    // alignSelf: "center",
    fontSize: 12,
    color: "#3F5F90",
  },
  editNameText:{
    alignSelf: "center",
    fontSize: 12,
    color: "#3F5F90",
  },
  securityAlert: {
    backgroundColor: "#063B87",
    flexDirection: "row",
    padding: 20,
  },
  alertText: {
    marginLeft: 10,
  },
  headingText: {
    fontSize: 15,
    fontWeight: 600,
  },
  userInformation: {
    margin: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  innerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    marginLeft: 20,
    alignItems: "flex-start",
  },
  textSection: {
    justifyContent: "flex-start",
  },
});
