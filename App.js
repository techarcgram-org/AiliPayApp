import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Toast from 'react-native-toast-message';
import Routes from './src/routes';
import { StateProvider, store } from './store';
import { getUserAccountSettings } from './src/services';
import i18n from './src/services/i18next'; // Import the i18n.js file
import { I18nextProvider, useTranslation } from 'react-i18next';

export default function App() {
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(true);
  const [showHideButton, setShowHideButton]= useState(true); 

  const handleHideButton = ()=>{
    setShowHideButton(false);
    setShowLanguageSwitcher(false);
  };
  if (!showLanguageSwitcher || !showHideButton){
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <StateProvider>
        <Routes />
        <Toast visibilityTime={9000} />
        
        {/* <Button
          title="Hide Language Switcher"
          onPress={handleHideButton}
        /> */}
        <LanguageSwitcher />
      </StateProvider>
    </I18nextProvider>
  );
}

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <View>
      <Button title={t('switchToEnglish')} onPress={() => changeLanguage('en')}  />
      <Button title={t('switchToFrench')} onPress={() => changeLanguage('fr')} />
    </View>
  );
}