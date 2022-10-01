import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import AppNavigator from './_config/router';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import {NoInternet} from './components/view';

function App() {
  LogBox.ignoreAllLogs();
  const netInfo = useNetInfo();

  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
    });

    // Unsubscribe
    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      {netInfo.isConnected ? <AppNavigator /> : <NoInternet />}
    </Provider>
  );
}
export default App;
