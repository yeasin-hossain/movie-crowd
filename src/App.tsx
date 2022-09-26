import React from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import AppNavigator from './_config/router';

function App() {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
export default App;
