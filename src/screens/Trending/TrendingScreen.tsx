import {FlatList, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {colors, HORIZONTAL_SPACE} from '../../_utils/Theme';
import {
  movieInterface,
  pushTrendingMovies,
  updatePageNumber,
  useAppDispatch,
  useAppSelector,
  useGetTrendingMoviesMutation,
} from '../../redux';
import {MovieItem} from '../../components/view';

const TrendingScreen = () => {
  const dispatch = useAppDispatch();

  const {page, TrendingMovies} = useAppSelector(state => state.movies);
  const [getTrendingMovies] = useGetTrendingMoviesMutation();

  useEffect(() => {
    (async () => {
      const {data} = await getTrendingMovies({
        page,
      });
      dispatch(pushTrendingMovies(data?.results));
    })();
  }, [getTrendingMovies, dispatch, page]);
  return (
    <>
      <FlatList
        data={TrendingMovies}
        renderItem={({item}) => <MovieItem movie={item} landscapeAble={true} />}
        columnWrapperStyle={styles.wrapStyle}
        showsHorizontalScrollIndicator={false}
        onEndReached={() => dispatch(updatePageNumber(page + 1))}
        onEndReachedThreshold={0}
        keyExtractor={(kye: movieInterface, index) => `${kye.title}${index}`}
        showsVerticalScrollIndicator={false}
        numColumns={10000}
      />
    </>
  );
};

export default TrendingScreen;

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
