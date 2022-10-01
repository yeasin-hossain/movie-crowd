import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppSelector, useGetMoviesByGenreMutation} from '../../redux';
import {MovieItem} from '../../components/view';
import Skeleton from './Skeleton';

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
      {isLoading && <Skeleton />}
      <FlatList
        data={data?.results.slice(0, 5)}
        renderItem={({item}) => <MovieItem movie={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MoviesByGenre;
