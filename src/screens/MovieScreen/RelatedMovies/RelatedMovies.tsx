import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {TitleText} from '../../../components/text';
import {HORIZONTAL_SPACE} from '../../../_utils/Theme';
import {useGetRelatedMovieQuery} from '../../../redux';
import {MovieItem} from '../../../components/view';

interface RelatedMoviesProps {
  movieId: number;
}

const RelatedMovies = ({movieId}: RelatedMoviesProps) => {
  const {data: relatedMovie, isSuccess: relatedMovieSuccess} =
    useGetRelatedMovieQuery({movieId});

  return (
    <>
      <TitleText text="Related Movies..." styleProp={styles.relatedMovie} />
      {relatedMovieSuccess && (
        <FlatList
          data={relatedMovie?.results}
          renderItem={({item}) => <MovieItem movie={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}
    </>
  );
};

export default RelatedMovies;

const styles = StyleSheet.create({
  relatedMovie: {
    textAlign: 'left',
    marginTop: HORIZONTAL_SPACE,
  },
});
