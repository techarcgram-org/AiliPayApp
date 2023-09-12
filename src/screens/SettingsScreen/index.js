import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import LineSeparator from '../../components/LineSeparator';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
// import Footer from '../../components/Footer';
import React from 'react';
import AccountSettingsHeader from '../../components/AccountsSettingsHeader';
import { useTranslation } from 'react-i18next';

export default function SettingsScreen({ navigation }) {
  const {t} = useTranslation()
  return (
    <View style={styles.container}>
      <AccountSettingsHeader headerTitle="Settings" navigation={navigation} />

      <LineSeparator />
      <View style={styles.settingsContainer}>
        <Ionicons name="person" size={20} color="#3F5F90" />
        <TouchableOpacity
          style={styles.innerSettingsContainer}
          onPress={() => navigation.navigate('AccountInformation')}>
          <Text style={{ fontSize: 20 }}>{t('settingScreen.title')}</Text>
          <FontAwesome name="angle-right" size={20} />
        </TouchableOpacity>
      </View>
      <LineSeparator />
      <View style={styles.settingsContainer}>
        <MaterialCommunityIcons name="bank" size={20} color="#3F5F90" />
        <TouchableOpacity
          style={styles.innerSettingsContainer}
          onPress={() => navigation.navigate('BankAccountScreen')}>
          <Text style={{ fontSize: 20 }}>{t('settingScreen.info1')}</Text>
          <FontAwesome name="angle-right" size={20} />
        </TouchableOpacity>
      </View>
      <LineSeparator />
      <View style={styles.settingsContainer}>
        <MaterialIcons name="credit-card" size={20} color="#3F5F90" />
        <TouchableOpacity
          style={styles.innerSettingsContainer}
          onPress={() => navigation.navigate('DebitCardScreen')}>
          <Text style={{ fontSize: 20 }}>{t('settingScreen.info2')}</Text>
          <FontAwesome name="angle-right" size={20} />
        </TouchableOpacity>
      </View>
      <LineSeparator />
      <View style={styles.settingsContainer}>
        <MaterialIcons name="send-to-mobile" size={20} color="#3F5F90" />
        <TouchableOpacity
          style={styles.innerSettingsContainer}
          onPress={() => navigation.navigate('MobileMoneyScreen')}>
          <Text style={{ fontSize: 20 }}>{t('settingScreen.info3')}</Text>
          <FontAwesome name="angle-right" size={20} />
        </TouchableOpacity>
      </View>
      <LineSeparator />
      <View style={styles.settingsContainer}>
        <MaterialCommunityIcons name="content-save-check" size={20} color="#3F5F90" />
        <TouchableOpacity
          style={styles.innerSettingsContainer}
          onPress={() => navigation.navigate('AutomaticSavings')}>
          <Text style={{ fontSize: 20 }}>{t('settingScreen.info4')}</Text>
          <FontAwesome name="angle-right" size={20} />
        </TouchableOpacity>
      </View>
      <LineSeparator />
      <View style={styles.settingsContainer}>
        <MaterialCommunityIcons name="account-cancel" size={20} color="#3F5F90" />
        <TouchableOpacity
          style={styles.innerSettingsContainer}
          onPress={() => navigation.navigate('AccountCancellation')}>
          <Text style={{ fontSize: 20 }}>{t('settingScreen.info5')}</Text>
          <FontAwesome name="angle-right" size={20} />
        </TouchableOpacity>
      </View>
      <LineSeparator />
      <View style={styles.settingsContainer}>
        <MaterialIcons name="notifications-none" size={20} color="#3F5F90" />
        <TouchableOpacity
          style={styles.innerSettingsContainer}
          onPress={() => navigation.navigate('NotificationPreferencesScreen')}>
          <Text style={{ fontSize: 20 }}>{t('settingScreen.info6')}</Text>
          <FontAwesome name="angle-right" size={20} />
        </TouchableOpacity>
      </View>
      <LineSeparator />
      <View style={styles.settingsContainer}>
        <MaterialIcons name="notifications-none" size={20} color="#3F5F90" />
        <TouchableOpacity
          style={styles.innerSettingsContainer}
          onPress={() => navigation.navigate('DefaultLanguageScreen')}>
          <Text style={{ fontSize: 20 }}>Default Language</Text>
          <FontAwesome name="angle-right" size={20} />
        </TouchableOpacity>
      </View>
      <LineSeparator />
      <View style={styles.settingsContainer}>
        <MaterialCommunityIcons name="login" size={20} color="#3F5F90" />
        <TouchableOpacity
          style={styles.innerSettingsContainer}
          onPress={() => navigation.navigate('LoginAndSecurityScreen')}>
          <Text style={{ fontSize: 20 }}>{t('settingScreen.info7')}</Text>
          <FontAwesome name="angle-right" size={20} />
        </TouchableOpacity>
      </View>
      <LineSeparator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 40,
    flexDirection: 'column'
  },
  innerSettingsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  settingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15
  }
});
