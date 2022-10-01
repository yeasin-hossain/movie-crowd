import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, Movie, Genre, WatchList} from './Screens';
import {useColorScheme} from 'react-native';
import {Theme} from '../_utils';
import {CustomBottomTabBar} from '../components/view';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParam, AppTabParam} from './navigationTypes';
import {colors} from '../_utils/Theme';

const Tab = createBottomTabNavigator<AppTabParam>();
const StackApp = createNativeStackNavigator<AppStackParam>();

const HomeTab = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomBottomTabBar {...props} />}
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={Genre} />
      <Tab.Screen name="WatchList" component={WatchList} />
    </Tab.Navigator>
  );
};

const AppStack = () => {
  return (
    <StackApp.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="AppTab">
      <StackApp.Screen name="AppTab" component={HomeTab} />
      <StackApp.Screen
        name="Movie"
        component={Movie}
        options={{headerShown: true, headerTintColor: colors.primary}}
      />
    </StackApp.Navigator>
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
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
