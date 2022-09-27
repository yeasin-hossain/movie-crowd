import {API_END_POINT} from '../../_utils';
import {apiSlice} from '../Api';

export const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMoviesByGenre: builder.mutation<any, {genre: string}>({
      query: ({genre}) => ({
        url: API_END_POINT.discoverMovie(genre),
        method: 'GET',
      }),
    }),
  }),
});

export const {useGetMoviesByGenreMutation} = moviesApiSlice;
