import {API_END_POINT} from '../../_utils';
import {apiSlice} from '../Api';

export const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMoviesByGenre: builder.query<any, {genre: string}>({
      query: ({genre}) => API_END_POINT.discoverMovie(genre),
    }),
  }),
});

export const {useGetMoviesByGenreQuery} = moviesApiSlice;
