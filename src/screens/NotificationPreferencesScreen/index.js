import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import AccountSettingsHeader from "../../components/AccountsSettingsHeader";
import LineSeparator from "../../components/LineSeparator";
import FrontArrowIcon from "../../components/FrontArrowIcon";

export default function NotificationPreferencesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AccountSettingsHeader
          backAction={Actions.loginAndSecurityScreen}
          headerTitle="NOTIFICATION PREFERENCES "
        />
      </View>
      <View style={styles.preferencesContainer}>
        <LineSeparator />
        <View style={styles.notificationSettings}>
          <Text>Push Notifications</Text>
          <FrontArrowIcon />
        </View>
        <LineSeparator />
        <View style={styles.notificationSettings}>
          <Text>SMS Notifications</Text>
          <FrontArrowIcon />
        </View>
        <LineSeparator />
        <View style={styles.notificationSettings}>
          <Text>Email Notifications</Text>
          <FrontArrowIcon />
        </View>
        <LineSeparator />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    padding: 20,
  },
  headerContainer: {
    justifyContent: "center",
  },
  notificationSettings: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  preferencesContainer: {
    padding: 20,
  },
});
