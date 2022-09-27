import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {movieInterface} from '../../redux';
import {ImageEndPoint} from '../../_utils';
import {colors, HORIZONTAL_SPACE} from '../../_utils/Theme';

interface movieProps {
  movie: movieInterface;
  onPress?: () => void;
}
const MovieItem = ({movie}: movieProps) => {
  return (
    <TouchableOpacity style={styles.container}>
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
    margin: HORIZONTAL_SPACE / 2,
    backgroundColor: colors.background,
    padding: HORIZONTAL_SPACE / 2,
    borderRadius: HORIZONTAL_SPACE / 2,
    width: 160,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.blueGray(300),
    borderWidth: 1,
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
