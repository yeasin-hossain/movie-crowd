import {apiSlice} from '../Api';
import {ResponseParams} from './AuthApiType';
interface SigninVerifyWithOtpProps {
  mobile_number: string;
  password: string;
  otp: string;
}
export const loginApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<unknown, {phone: string; password: string}>({
      query: ({phone, password}) => ({
        url: '/sign-in/',
        method: 'POST',
        body: {mobile_number: phone, password: password},
      }),
    }),
    signinVerifyWithOtp: builder.mutation<
      ResponseParams,
      SigninVerifyWithOtpProps
    >({
      query: body => ({
        url: '/sign-in/verify-otp/',
        method: 'POST',
        body: body,
      }),
    }),
    getAccessToken: builder.mutation<ResponseParams, {refreshToken: string}>({
      query: refreshToken => ({
        url: '/token/refresh/',
        method: 'POST',
        body: {
          refresh: refreshToken.refreshToken,
        },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSigninVerifyWithOtpMutation,
  useGetAccessTokenMutation,
} = loginApiSlice;
