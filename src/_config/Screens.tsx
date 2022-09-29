import React from 'react';
import {HomeWrapper} from '../components/view';
import {HomeDashboard} from '../screens/Home';
import WatchListScreen from '../screens/WatchList/WatchListScreen';
import {HomeDashboardProps} from './navigationTypes';

export const HomeScreen = ({navigation, route}: HomeDashboardProps) => {
  return (
    <HomeWrapper>
      <HomeDashboard navigation={navigation} route={route} />
    </HomeWrapper>
  );
};

export const WatchList = () => {
  return (
    <HomeWrapper>
      <WatchListScreen />
    </HomeWrapper>
  );
};
