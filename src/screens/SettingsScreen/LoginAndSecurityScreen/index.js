import { View, StyleSheet, Text, SafeAreaView } from 'react-native';
import ToggleButton from '../../../components/ToggleButton';
import { Actions } from 'react-native-router-flux';
import AccountSettingsHeader from '../../../components/AccountsSettingsHeader';
import LineSeparator from '../../../components/LineSeparator';

export default function LoginAndSecurityScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AccountSettingsHeader navigation={navigation} headerTitle="LOGIN AND SECURITY " />
      </View>
      <View style={styles.configurationContainer}>
        <LineSeparator />
        <View style={styles.configurationOptions}>
          <Text style={styles.textStyle}>Enable Pin</Text>
          <ToggleButton />
        </View>
        <LineSeparator />
        <View style={styles.configurationOptions}>
          <Text style={styles.textStyle}>Enable Fingerprint</Text>
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
    paddingTop: 40,
    paddingBottom: 40
  },
  configurationContainer: {
    flex: 10
    // padding: 10,
  },
  configurationOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 15
  },
  headerContainer: {
    flex: 1
  },
  textStyle: {
    fontSize: 20
  }
});
