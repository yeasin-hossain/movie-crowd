import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppSelector, useGetMoviesByGenreMutation} from '../../redux';
import {Loading} from '../../components/view';
import MovieItem from './MovieItem';

const MoviesByGenre = () => {
  const {name} = useAppSelector(state => state.genre);

  const [getMovies, {data, isLoading}] = useGetMoviesByGenreMutation();
  useEffect(() => {
    (async () => {
      await getMovies({
        genre: name,
      });
    })();
  }, [name, getMovies]);
  return (
    <View>
      {isLoading && <Loading />}
      <FlatList
        data={data?.results}
        renderItem={({item}) => <MovieItem movie={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MoviesByGenre;

const styles = StyleSheet.create({});
