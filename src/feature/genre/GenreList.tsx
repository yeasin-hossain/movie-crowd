import {FlatList} from 'react-native';
import React from 'react';
import {
  genreInterface,
  setSelectedGenre,
  useGetGenreQuery,
} from '../../redux/Genre';
import GenreItem from './GenreItem';
import {useAppDispatch} from '../../redux';

const GenreList = () => {
  const dispatch = useAppDispatch();
  const {data} = useGetGenreQuery();

  return (
    <FlatList
      data={data?.genres}
      renderItem={({item}) => (
        <GenreItem
          genre={item}
          onPress={() => dispatch(setSelectedGenre(item))}
        />
      )}
      keyExtractor={(item: genreInterface) => item.name}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default GenreList;
