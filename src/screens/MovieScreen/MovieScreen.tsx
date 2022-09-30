import {
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {API_END_POINT, ImageEndPoint} from '../../_utils';
import {colors, HORIZONTAL_SPACE} from '../../_utils/Theme';
import {PrimaryButton} from '../../components/button';
import {
  addToFavorite,
  removeFromFavorite,
  useAppDispatch,
  useAppSelector,
  useGetCastAndCrewQuery,
  useGetMovieDetailQuery,
  useGetRelatedMovieQuery,
} from '../../redux';
import {CastAndCrew} from './CastAndCrew';
import {MovieProps} from '../../_config/navigationTypes';
import {TitleText} from '../../components/text';
import {MovieItem} from '../../components/view';

const MovieScreen = ({route}: MovieProps) => {
  const dispatch = useAppDispatch();
  const {watchList} = useAppSelector(state => state.watchList);

  const {movie} = route.params;
  const {data: castAndCrews, isSuccess: castEndCrewSuccess} =
    useGetCastAndCrewQuery({movieId: movie.id});
  const {data: movieDetail, isSuccess: movieDetailSuccess} =
    useGetMovieDetailQuery({movieId: movie.id});
  const {data: relatedMovie, isSuccess: relatedMovieSuccess} =
    useGetRelatedMovieQuery({movieId: movie.id});

  const visitImDB = async (imdbID: number) => {
    try {
      Linking.openURL(API_END_POINT.IMDB(imdbID));
    } catch (error) {
      console.log(error);
    }
  };
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
        <View style={styles.imdbContainer}>
          {movieDetailSuccess && (
            <TouchableOpacity
              style={styles.imdb}
              onPress={() => visitImDB(movieDetail?.imdb_id)}>
              <Text style={[styles.title, styles.release_date]}>
                {movieDetail?.status === 'Released' &&
                  movieDetail?.vote_average.toFixed(2)}{' '}
                / 10 ↗
              </Text>
            </TouchableOpacity>
          )}
          <Text style={[styles.title, styles.release_date]}>
            {movie?.release_date.toString()}
          </Text>
        </View>
        <Text style={styles.overview}>{movie.overview}</Text>
        {castEndCrewSuccess && (
          <CastAndCrew cast={castAndCrews?.cast} crew={castAndCrews?.crew} />
        )}

        <TitleText text="Related Movies..." styleProp={styles.relatedMovie} />
        {relatedMovieSuccess && (
          <FlatList
            data={relatedMovie?.results}
            renderItem={({item}) => <MovieItem movie={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        )}

        {watchList?.find(m => m.id === movie.id) ? (
          <PrimaryButton
            buttonText="Remove From Favorite"
            onPress={() => dispatch(removeFromFavorite(movie))}
          />
        ) : (
          <PrimaryButton
            buttonText="Add To Favorite"
            onPress={() => dispatch(addToFavorite(movie))}
          />
        )}
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
  imdbContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imdb: {
    backgroundColor: colors.yellow,
    padding: HORIZONTAL_SPACE / 3,
    borderRadius: HORIZONTAL_SPACE / 2,
  },
  relatedMovie: {
    textAlign: 'left',
    marginTop: HORIZONTAL_SPACE,
  },
});
