import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {useAppSelector, useGetMoviesByGenreMutation} from '../../redux';
import {MovieItem} from '../../components/view';
import {MovieSvg} from '../../components/svg';

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
      {isLoading && (
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <MovieSvg />
          <MovieSvg />
        </View>
      )}
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
