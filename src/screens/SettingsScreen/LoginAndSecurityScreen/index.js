import { StyleSheet, Text, View } from 'react-native';
import AccountSettingsHeader from '../../../components/AccountsSettingsHeader';
import LineSeparator from '../../../components/LineSeparator';
import ToggleButton from '../../../components/ToggleButton';
import { useTranslation } from 'react-i18next';

export default function LoginAndSecurityScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AccountSettingsHeader navigation={navigation} headerTitle={t('loginAndSecurity.title')} />
      </View>
      <View style={styles.configurationContainer}>
        <LineSeparator />
        <View style={styles.configurationOptions}>
          <Text style={styles.textStyle}>{t('loginAndSecurity.text1')}</Text>
          <ToggleButton />
        </View>
        <LineSeparator />
        <View style={styles.configurationOptions}>
          <Text style={styles.textStyle}>{t('loginAndSecurity.text2')}</Text>
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
