import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from './Screens';
import {useColorScheme} from 'react-native';
import {Theme} from '../_utils';
import {CustomBottomTabBar} from '../components/view';

const Tab = createBottomTabNavigator();

const AppTab = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomTabBar {...props} />}
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Home2" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const appTheme = {
    ...DefaultTheme,
    colors: {
      ...Theme({isDarkMode}),
    },
    dark: isDarkMode,
  };

  return (
    <NavigationContainer theme={appTheme}>
      {/* <StatusBar barStyle={'dark-content'} /> */}

      <AppTab />
    </NavigationContainer>
  );
};

export default AppNavigator;
