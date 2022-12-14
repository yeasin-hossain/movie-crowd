import {API_END_POINT} from '../../_utils';
import {apiSlice} from '../Api';

export const genreApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getGenre: builder.query<any, void>({
      query: () => API_END_POINT.getGenre,
    }),
  }),
});

export const {useGetGenreQuery} = genreApiSlice;
