import React from 'react';
import {HomeWrapper} from '../components/view';
import {HomeDashboard} from '../screens/Home';
import {MovieScreen} from '../screens/MovieScreen';
import {GenreScreen} from '../screens/Genre';
import WatchListScreen from '../screens/WatchList/WatchListScreen';
import {HomeDashboardProps, MovieProps} from './navigationTypes';
import {TrendingScreen} from '../screens/Trending';

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

export const Genre = () => {
  return (
    <HomeWrapper>
      <GenreScreen />
    </HomeWrapper>
  );
};

export const Trending = () => {
  return (
    <HomeWrapper>
      <TrendingScreen />
    </HomeWrapper>
  );
};

export const Movie = ({navigation, route}: MovieProps) => {
  return <MovieScreen navigation={navigation} route={route} />;
};
