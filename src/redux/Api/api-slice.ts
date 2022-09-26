import {BaseQueryApi} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const baseQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
) => {
  let baseUrl =
    'https://api.themoviedb.org/3/movie/862?api_key=cd890f94a756b1518a2a17617a5b430e';

  const rowQuery = fetchBaseQuery({
    baseUrl: baseUrl,
  });

  return await rowQuery(args, api, extraOptions);
};

const baseQueryWithReAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
) => {
  let result = await baseQuery(args, api, extraOptions);
  const {dispatch, getState} = api;
  const {error} = result;

  /**
   * Error
   */
  if (error) {
    console.log(error);
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: _builder => ({}),
});
