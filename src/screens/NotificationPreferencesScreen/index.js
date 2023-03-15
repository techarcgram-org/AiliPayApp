import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Actions } from "react-native-router-flux";
import AccountSettingsHeader from "../../components/AccountsSettingsHeader";

export default function NotificationPreferencesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <AccountSettingsHeader headerTitle="NOTIFICAITON PREFERENCES" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
