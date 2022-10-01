import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors, HORIZONTAL_SPACE} from '../../_utils/Theme';
import {
  useAppDispatch,
  useAppSelector,
  useGetMoviesByGenreAndSortMutation,
} from '../../redux';
import {MovieItem} from '../../components/view';
import SortMovie from './SortMovie';

const GenreScreen = () => {
  const dispatch = useAppDispatch();

  const {sort} = useAppSelector(state => state.movies);
  const {id} = useAppSelector(state => state.genre);
  const [getSortedMovies] = useGetMoviesByGenreAndSortMutation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const {data} = await getSortedMovies({
        genre: id,
        sort,
      });
      setMovies(data?.results);
    })();
  }, [id, getSortedMovies, dispatch, sort]);
  return (
    <View>
      <SortMovie />
      <FlatList
        data={movies.slice(0, 10)}
        renderItem={({item}) => <MovieItem movie={item} landscapeAble={true} />}
        columnWrapperStyle={styles.wrapStyle}
        showsHorizontalScrollIndicator={false}
        // onEndReached={() => dispatch(updatePageNumber(page + 1))}
        // onEndReachedThreshold={0}
        keyExtractor={(kye, index) => `${kye.title}${index}`}
        showsVerticalScrollIndicator={false}
        numColumns={10000}
      />
    </View>
  );
};

export default GenreScreen;

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
