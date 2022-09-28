import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MovieProps} from '../navigationTypes';
import {ImageEndPoint} from '../../../_utils';
import {colors, HORIZONTAL_SPACE} from '../../../_utils/Theme';
import {PrimaryButton} from '../../../components/button';
import {useGetCastAndCrewQuery} from '../../../redux';
import {CastAndCrew} from './CastAndCrew';

const WIDTH = Dimensions.get('screen').width;

const MovieScreen = ({route}: MovieProps) => {
  const {movie} = route.params;
  const {data: castAndCrews, isSuccess: castEndCrewSuccess} =
    useGetCastAndCrewQuery({movieId: movie.id});
  console.log(castAndCrews);
  return (
    <ScrollView>
      <View style={styles.posterContainer}>
        <Image
          source={{uri: ImageEndPoint(movie.poster_path)}}
          style={styles.poster}
        />
      </View>
      <Text style={styles?.title}>{movie.title}</Text>
      <Text style={styles?.overview}>{movie.overview}</Text>
      {castEndCrewSuccess && (
        <CastAndCrew cast={castAndCrews?.cast} crew={castAndCrews?.crew} />
      )}
      <PrimaryButton buttonText="Add To Favorite" />
    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  posterContainer: {
    backgroundColor: '#8B0000',
    padding: 6,
  },
  poster: {
    height: 300,
    resizeMode: 'contain',
    shadowColor: colors.blueGray(200),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  title: {
    fontSize: 19,
    textAlign: 'center',
    padding: 6,
    fontWeight: 'bold',
  },
  overview: {
    padding: HORIZONTAL_SPACE / 2,
    textAlign: 'center',
    color: colors.blueGray(700),
    fontSize: 15,
  },
});
