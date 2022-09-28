import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.posterContainer}>
        <Image
          source={{uri: ImageEndPoint(movie?.poster_path)}}
          style={styles.poster}
        />
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.title}>{movie?.title}</Text>
        <Text style={[styles.title, styles.release_date]}>
          {movie?.release_date.toString()}
        </Text>
        <Text style={styles.overview}>{movie.overview}</Text>
        {castEndCrewSuccess && (
          <CastAndCrew cast={castAndCrews?.cast} crew={castAndCrews?.crew} />
        )}
        <PrimaryButton buttonText="Add To Favorite" />
      </View>
    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  posterContainer: {
    backgroundColor: colors.primary,
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
  informationContainer: {
    paddingHorizontal: HORIZONTAL_SPACE,
  },
  title: {
    fontSize: 19,
    textAlign: 'center',
    paddingVertical: HORIZONTAL_SPACE / 2,
    fontWeight: 'bold',
  },
  release_date: {
    fontSize: 15,
    paddingVertical: HORIZONTAL_SPACE / 3,
    paddingTop: 0,
  },
  overview: {
    padding: HORIZONTAL_SPACE / 2,
    textAlign: 'center',
    color: colors.blueGray(700),
    fontSize: 15,
  },
});
