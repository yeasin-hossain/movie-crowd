import {BaseQueryApi} from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {base_url} from '../../_utils';

const baseQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
) => {
  let baseUrl = base_url;

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
  const {error} = result;
  /**
   * there is nothing to handle error for now.
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
