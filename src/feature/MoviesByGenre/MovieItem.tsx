/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {movieInterface} from '../../redux';
import {ImageEndPoint} from '../../_utils';
import {colors, HORIZONTAL_SPACE} from '../../_utils/Theme';
import {useNavigation} from '@react-navigation/native';
import {useOrientation} from '../../hooks';

interface movieProps {
  movie: movieInterface;
  onPress?: () => void;
  landscapeAble?: boolean;
}

const WIDTH = Dimensions.get('screen').width;

const MovieItem = ({movie, landscapeAble}: movieProps) => {
  const navigation = useNavigation();
  const orientation = useOrientation();

  const width = orientation === 'PORTRAIT' ? WIDTH / 2.2 : 170;
  return (
    <TouchableOpacity
      style={[styles.container, {width: landscapeAble ? width : 160}]}
      onPress={() => navigation.navigate('Movie', {movie})}>
      <Image
        source={{uri: ImageEndPoint(movie.poster_path)}}
        style={styles.poster}
      />
      <Text style={styles.title}>{movie.title}</Text>
    </TouchableOpacity>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  container: {
    margin: HORIZONTAL_SPACE / 3,
    backgroundColor: colors.blueGray(100),
    padding: HORIZONTAL_SPACE / 2,
    borderRadius: HORIZONTAL_SPACE / 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.primary,
    borderWidth: 0.5,
  },
  poster: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
  },
  title: {
    color: colors.blueGray(800),
    fontSize: 16,
    marginTop: 5,
  },
});
