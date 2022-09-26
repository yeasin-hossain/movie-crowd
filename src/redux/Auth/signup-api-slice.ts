import {apiSlice} from '../Api';
import {
  ResponseParams,
  verifyPhoneNumberParams,
  verifyPhoneNumberResponse,
} from './AuthApiType';

interface SignupVerifyWithOtpProps {
  mobile_number: string;
  country_code: string;
  otp: string;
}

interface SetPasswordProps {
  mobile_number: string;
  password: string;
  token: string;
}

export const signupApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    signup: builder.mutation<
      verifyPhoneNumberResponse,
      verifyPhoneNumberParams
    >({
      query: ({mobile_number, country_code}) => ({
        url: '/verify',
        method: 'GET',
        params: {mobile_number, country_code},
      }),
    }),
    signupVerifyWithOtp: builder.mutation<
      ResponseParams,
      SignupVerifyWithOtpProps
    >({
      query: body => ({
        url: '/verify/',
        method: 'POST',
        body: body,
      }),
    }),
    setPassword: builder.mutation<ResponseParams, SetPasswordProps>({
      query: body => ({
        url: '/set-password/',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useSignupVerifyWithOtpMutation,
  useSetPasswordMutation,
} = signupApiSlice;
