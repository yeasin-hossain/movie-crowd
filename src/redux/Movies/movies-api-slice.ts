import {API_END_POINT} from '../../_utils';
import {apiSlice} from '../Api';

export const moviesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getMoviesByGenre: builder.mutation<any, {genre: number}>({
      query: ({genre}) => ({
        url: API_END_POINT.discoverMovie(genre),
        method: 'GET',
      }),
    }),
    getMoviesByGenreAndSort: builder.mutation<
      any,
      {genre: number; sort: string}
    >({
      query: ({genre, sort}) => ({
        url: API_END_POINT.discoverSortedMovie(genre, sort),
        method: 'GET',
      }),
    }),
    getTrendingMovies: builder.mutation<any, {page: number}>({
      query: ({page}) => ({
        url: API_END_POINT.trendingMovie(page),
        method: 'GET',
      }),
    }),
    getCastAndCrew: builder.query<any, {movieId: number}>({
      query: ({movieId}) => ({
        url: API_END_POINT.movieCastAndCrew(movieId),
        method: 'GET',
      }),
    }),
    getMovieDetail: builder.query<any, {movieId: number}>({
      query: ({movieId}) => ({
        url: API_END_POINT.movieDetail(movieId),
        method: 'GET',
      }),
    }),
    getMovieVideos: builder.query<any, {movieId: number}>({
      query: ({movieId}) => ({
        url: API_END_POINT.movieVideos(movieId),
        method: 'GET',
      }),
    }),
    getRelatedMovie: builder.query<any, {movieId: number}>({
      query: ({movieId}) => ({
        url: API_END_POINT.relatedMovie(movieId),
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetMoviesByGenreMutation,
  useGetMoviesByGenreAndSortMutation,
  useGetTrendingMoviesMutation,
  useGetCastAndCrewQuery,
  useGetMovieDetailQuery,
  useGetMovieVideosQuery,
  useGetRelatedMovieQuery,
} = moviesApiSlice;
