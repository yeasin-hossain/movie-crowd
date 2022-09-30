import {FlatList, StyleSheet, Text} from 'react-native';
import React, {useEffect} from 'react';
import {
  getRecentVisitInitialData,
  getWatchListLocalInitialData,
  pushRandomMovies,
  setDataFromLocalStore,
  setDataFromLocalStoreRecentVisit,
  updatePageNumber,
  useAppDispatch,
  useAppSelector,
  useGetTrendingMoviesMutation,
} from '../../redux';
import {GenreList, MoviesByGenre, RecentlyVisit} from '../../feature';
import {Loading, MovieItem} from '../../components/view';
import {colors, HORIZONTAL_SPACE} from '../../_utils/Theme';
import {HomeDashboardProps} from '../../_config/navigationTypes';
import Skeleton from './Skeleton';

const HomeDashboard = ({}: HomeDashboardProps) => {
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
      const watchList = await getWatchListLocalInitialData();
      const recentVisit = await getRecentVisitInitialData();

      watchList && dispatch(setDataFromLocalStore(watchList));
      recentVisit && dispatch(setDataFromLocalStoreRecentVisit(recentVisit));
    })();
  }, [dispatch]);

  return (
    <>
      <GenreList />
      <FlatList
        ListHeaderComponent={
          <>
            <MoviesByGenre />
            <RecentlyVisit />
            <Text style={styles.title}>Trending movies...</Text>
          </>
        }
        ListFooterComponent={<>{isLoading && <Skeleton />}</>}
        data={randomMovies}
        renderItem={({item}) => <MovieItem movie={item} landscapeAble={true} />}
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
