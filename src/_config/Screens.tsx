import React from 'react';
import {HomeWrapper} from '../components/view';
import MovieStack from '../screens/MovieStack/navigation';
import WatchListScreen from '../screens/WatchList/WatchListScreen';

export const HomeScreen = () => {
  return <MovieStack />;
};

export const WatchList = () => {
  return (
    <HomeWrapper>
      <WatchListScreen />
    </HomeWrapper>
  );
};
