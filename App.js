import { useEffect, useCallback, useContext } from 'react';
import Toast from 'react-native-toast-message';
import Routes from './src/routes';
import { StateProvider, store } from './store';
import { getUserAccountSettings } from './src/services';
import i18next from './src/services/i18next';

export default function App() {
  return (
    <StateProvider>
      <Routes />
      <Toast visibilityTime={9000} />
    </StateProvider>
  );
}
