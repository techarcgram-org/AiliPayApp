import React, { useContext, useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';

import { getUserAccountSettings, validateAccessToken } from '../../services';

import { store } from '../../../store';
import Logo from '../../components/Logo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from '../../services/i18next';
import { useTranslation } from 'react-i18next';
import { getUserBalance } from '../../services/airlipayBalance';
export default function LandingScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [languageLoading, setLanguageLoading] = useState(false);
  const { state, dispatch } = useContext(store);
  const { t } = useTranslation();

  const onSubmitEvent = useCallback(async () => {
    setLoading(true);
    const token = await AsyncStorage.getItem('access_token');
    if (!token) {
      setLoading(false);
      return;
    }
    const response = await validateAccessToken(token);
    if (response.status == 200) {
      await dispatch({
        type: 'SET_USER',
        payload: { data: response.data.data, accessToken: token }
      });
      const accountSettings = await getUserAccountSettings();
      if (accountSettings.data.data?.language) {
        i18next.changeLanguage(accountSettings.data.data.language);
      }
      await dispatch({
        type: 'SET_ACCOUNT_SETTINGS',
        payload: { data: accountSettings.data.data }
      });
      navigation.navigate('DrawerScreens');
      setLoading(false);
    } else {
      await AsyncStorage.removeItem('access_token');
    }

    return;
  }, []);

  const getBalance = useCallback(async () => {
    const balance = await getUserBalance();
    await dispatch({
      type: 'SET_BALANCE',
      payload: { data: balance.data }
    });
  }, []);

  useEffect(() => {
    onSubmitEvent();
    getBalance();
  }, [onSubmitEvent, getBalance]);

  const goToLandingPage2 = () => {
    navigation.navigate('LandingScreen2');
  };

  return (
    <View style={styles.container}>
      <Logo />
      <TouchableOpacity style={{ width: '50%' }} onPress={goToLandingPage2}>
        <Text style={styles.seconderyText}>{t('landing1.welcome')}</Text>
        <ActivityIndicator size="large" color="#00ff00" animating={loading} hidesWhenStopped />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#063B87',
    alignItems: 'center',
    justifyContent: 'center'
  },
  seconderyText: {
    fontWeight: 700,
    color: '#979EBA',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20
  }
});
