import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import ToggleButton from "../../components/ToggleButton";
import { Actions } from "react-native-router-flux";
import AccountSettingsHeader from "../../components/AccountsSettingsHeader";
import LineSeparator from "../../components/LineSeparator";

export default function LoginAndSecurityScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AccountSettingsHeader
          navigation={navigation}
          headerTitle="LOGIN AND SECURITY "
        />
      </View>
      <View style={styles.configurationContainer}>
        <LineSeparator />
        <View style={styles.configurationOptions}>
          <Text>Enable Pin</Text>
          <ToggleButton />
        </View>
        <LineSeparator />
        <View style={styles.configurationOptions}>
          <Text>Enable Fingerprint</Text>
          <ToggleButton />
        </View>
        <LineSeparator />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  configurationContainer: {
    flex: 10,
    padding: 10,
  },
  configurationOptions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerContainer: {
    flex: 1,
  },
});
