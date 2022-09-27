import {View} from 'react-native';
import React from 'react';
import {GenreList, MoviesByGenre} from '../../feature';

const HomeDashboard = () => {
  return (
    <View>
      <GenreList />
      <MoviesByGenre />
    </View>
  );
};

export default HomeDashboard;
