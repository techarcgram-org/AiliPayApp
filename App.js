import Toast from 'react-native-toast-message';
import Routes from './src/routes';
import { StateProvider } from './store';

export default function App() {
  return (
    <StateProvider>
      <Routes />
      <Toast visibilityTime={9000} />
    </StateProvider>
  );
}
