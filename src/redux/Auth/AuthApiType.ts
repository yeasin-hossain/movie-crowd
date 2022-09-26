import {SerializedError} from '@reduxjs/toolkit';
import {FetchBaseQueryError} from '@reduxjs/toolkit/dist/query';

export interface verifyPhoneNumberParams {
  mobile_number: string;
  country_code: string;
}
export interface verifyPhoneNumberResponse {
  success: boolean;
  message: string;
  result: any;
}
export interface ResultType {
  data?: verifyPhoneNumberResponse;
  error?: FetchBaseQueryError | SerializedError;
}
export interface RefreshTokenResultType {
  data?: {
    success: boolean;
    message?: string;
    result?: {
      access: string;
    };
    code?: string;
    details?: {
      message: string;
    };
  };
  error?: FetchBaseQueryError | SerializedError | any;
}

export interface ResponseParams {
  success: boolean;
  message: string;
  result: any;
}
