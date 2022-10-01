import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors, HORIZONTAL_SPACE} from '../../_utils/Theme';
import {
  pushRandomMovies,
  updatePageNumber,
  useAppDispatch,
  useAppSelector,
  useGetTrendingMoviesMutation,
} from '../../redux';
import {MovieItem} from '../../components/view';

const SearchScreen = () => {
  const dispatch = useAppDispatch();

  const {page, randomMovies} = useAppSelector(state => state.movies);
  const [getTrendingMovies, {isLoading}] = useGetTrendingMoviesMutation();

  useEffect(() => {
    (async () => {
      const {data} = await getTrendingMovies({
        page,
      });
      dispatch(pushRandomMovies(data?.results));
    })();
  }, [page, getTrendingMovies, dispatch]);
  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.title}>Trending movies...</Text>
          </>
        }
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
    </View>
  );
};

export default SearchScreen;

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
