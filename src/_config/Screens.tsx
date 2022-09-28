import React from 'react';
import {HomeWrapper} from '../components/view';
import {HomeDashboard} from '../screens/Home';
import WatchListScreen from '../screens/WatchList/WatchListScreen';

export const HomeScreen = () => {
  return (
    <HomeWrapper>
      <HomeDashboard />
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
