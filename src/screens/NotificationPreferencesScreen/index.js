import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import AccountSettingsHeader from "../../components/AccountsSettingsHeader";
import LineSeparator from "../../components/LineSeparator";
import ToggleButton from "../../components/ToggleButton";

export default function NotificationPreferencesScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AccountSettingsHeader
          headerTitle="NOTIFICATION PREFERENCES"
          navigation={navigation}
        />
      </View>
      <View style={styles.preferencesContainer}>
        <LineSeparator />
        <View style={styles.notificationSettings}>
          <Text style={styles.textStyle}>Push Notifications</Text>
          <ToggleButton />
        </View>
        <LineSeparator />
        <View style={styles.notificationSettings}>
          <Text style={styles.textStyle}>SMS Notifications</Text>
          <ToggleButton />
        </View> 
        <LineSeparator />
        <View style={styles.notificationSettings}>
          <Text style={styles.textStyle}>Email Notifications</Text>
          <ToggleButton />
        </View>
        <LineSeparator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    paddingTop: 40,
    paddingBottom: 40,
  },
  headerContainer: {
    justifyContent: "center",
    marginBottom: 10,
  },
  notificationSettings: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
  },
  preferencesContainer: {
    // padding: 20,
  },
  textStyle: {
    fontSize: 20
  }
});
