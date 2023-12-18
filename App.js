import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, Dimensions } from 'react-native';
import Toast from 'react-native-toast-message';
import Routes from './src/routes';
import { StateProvider, store } from './store';
import { getUserAccountSettings } from './src/services';
import i18n from './src/services/i18next'; // Import the i18n.js file
import { I18nextProvider, useTranslation } from 'react-i18next';

export default function App() {



  return (
    <I18nextProvider i18n={i18n}>
      <StateProvider>
        <Routes />
        <Toast visibilityTime={9000} />


      </StateProvider>
    </I18nextProvider>
  );
}

