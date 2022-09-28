import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppSelector, useGetMoviesByGenreMutation} from '../../redux';
import {Loading} from '../../components/view';
import MovieItem from './MovieItem';

const MoviesByGenre = () => {
  const {id} = useAppSelector(state => state.genre);
  const [getMovies, {data, isLoading}] = useGetMoviesByGenreMutation();

  useEffect(() => {
    (async () => {
      await getMovies({
        genre: id,
      });
    })();
  }, [id, getMovies]);

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