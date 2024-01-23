import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import AccountSettingsHeader from '../../../components/AccountsSettingsHeader';
import LineSeparator from '../../../components/LineSeparator';
import ToggleButton from '../../../components/ToggleButton';
import { useTranslation } from 'react-i18next';

export default function NotificationPreferencesScreen({ navigation }) {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <AccountSettingsHeader headerTitle={t('notifications.title')} navigation={navigation} />
      </View>
      <View style={styles.preferencesContainer}>
        <LineSeparator />
        <View style={styles.notificationSettings}>
          <Text style={styles.textStyle}>{t('notifications.text1')}</Text>
          {/* <ToggleButton /> */}
        </View>
        <LineSeparator />
        <View style={styles.notificationSettings}>
          <Text style={styles.textStyle}>{t('notifications.text2')}</Text>
          {/* <ToggleButton /> */}
        </View>
        <LineSeparator />
        <View style={styles.notificationSettings}>
          <Text style={styles.textStyle}>{t('notifications.text3')}</Text>
          {/* <ToggleButton /> */}
        </View>
        <LineSeparator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 40,
    paddingBottom: 40
  },
  headerContainer: {
    justifyContent: 'center',
    marginBottom: 10
  },
  notificationSettings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15
  },
  preferencesContainer: {
    // padding: 20,
  },
  textStyle: {
    fontSize: 20
  }
});
