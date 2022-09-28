import React from 'react';
import {HomeWrapper} from '../../components/view';
import {HomeDashboard} from './Home';
import {MovieScreen} from './MovieScreen';
import {HomeProps, MovieProps} from './navigationTypes';

export const Home = ({navigation, route}: HomeProps) => {
  return (
    <HomeWrapper>
      <HomeDashboard navigation={navigation} route={route} />
    </HomeWrapper>
  );
};

export const Movie = ({navigation, route}: MovieProps) => {
  return <MovieScreen navigation={navigation} route={route} />;
};
