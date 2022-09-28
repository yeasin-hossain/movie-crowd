import {FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {
  pushRandomMovies,
  updatePageNumber,
  useAppDispatch,
  useAppSelector,
  useGetTrendingMoviesMutation,
} from '../../redux';
import {Loading} from '../../components/view';
import {GenreList, MovieItem, MoviesByGenre} from '../../feature';

const HomeDashboard = () => {
  const {page, randomMovies} = useAppSelector(state => state.movies);
  const dispatch = useAppDispatch();

  const [getTrendingMovies, {isLoading}] = useGetTrendingMoviesMutation();

  useEffect(() => {
    (async () => {
      const {data} = await getTrendingMovies({
        page,
      });
      console.log(data);
      dispatch(pushRandomMovies(data?.results));
    })();
  }, [page, getTrendingMovies, dispatch]);

  return (
    <>
      <FlatList
        ListHeaderComponent={
          <>
            <GenreList />
            <MoviesByGenre />
          </>
        }
        ListFooterComponent={<>{isLoading && <Loading />}</>}
        data={randomMovies}
        numColumns={2}
        renderItem={({item}) => <MovieItem movie={item} />}
        showsHorizontalScrollIndicator={false}
        onEndReached={() => dispatch(updatePageNumber(page + 1))}
        onEndReachedThreshold={0}
        keyExtractor={(kye, index) => `${kye.title}${index}`}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default HomeDashboard;
