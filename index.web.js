import {AppRegistry} from 'react-native';
import expo from './app.json';
import App from './App';
if (module.hot) {
  module.hot.accept();
}
AppRegistry.registerComponent(expo.name, () => App);
AppRegistry.runApplication(expo.name, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});