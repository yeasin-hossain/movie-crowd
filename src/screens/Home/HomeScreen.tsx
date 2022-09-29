import {FlatList, StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';
import {
  getWatchListLocalInitialData,
  pushRandomMovies,
  setDataFromLocalStore,
  updatePageNumber,
  useAppDispatch,
  useAppSelector,
  useGetTrendingMoviesMutation,
} from '../../redux';
import {GenreList, MovieItem, MoviesByGenre} from '../../feature';
import {Loading} from '../../components/view';
import {colors, HORIZONTAL_SPACE} from '../../_utils/Theme';
import {HomeDashboardProps} from '../../_config/navigationTypes';

const HomeDashboard = ({navigation}: HomeDashboardProps) => {
  const {page, randomMovies} = useAppSelector(state => state.movies);
  const dispatch = useAppDispatch();

  const [getTrendingMovies, {isLoading}] = useGetTrendingMoviesMutation();

  useEffect(() => {
    (async () => {
      const {data} = await getTrendingMovies({
        page,
      });
      dispatch(pushRandomMovies(data?.results));
    })();
  }, [page, getTrendingMovies, dispatch]);

  useEffect(() => {
    (async () => {
      const data = await getWatchListLocalInitialData();
      if (data) {
        dispatch(setDataFromLocalStore(data));
      }
    })();
  }, [dispatch]);
  return (
    <>
      <GenreList />
      <FlatList
        ListHeaderComponent={
          <>
            <MoviesByGenre />
            <Text style={styles.title}>Trending movies...</Text>
          </>
        }
        ListFooterComponent={<>{isLoading && <Loading />}</>}
        data={randomMovies}
        renderItem={({item}) => (
          <MovieItem
            movie={item}
            onPress={() => navigation.navigate('Movie', {movie: item})}
            landscapeAble={true}
          />
        )}
        columnWrapperStyle={styles.wrapStyle}
        showsHorizontalScrollIndicator={false}
        onEndReached={() => dispatch(updatePageNumber(page + 1))}
        onEndReachedThreshold={0}
        keyExtractor={(kye, index) => `${kye.title}${index}`}
        showsVerticalScrollIndicator={false}
        numColumns={10000}
      />
    </>
  );
};

export default HomeDashboard;
const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: '800',
    color: colors.blueGray(700),
    padding: HORIZONTAL_SPACE,
    paddingBottom: HORIZONTAL_SPACE / 4,
  },
  wrapStyle: {
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
