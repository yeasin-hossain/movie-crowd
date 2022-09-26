import {SerializedError} from '@reduxjs/toolkit';
import {FetchBaseQueryError} from '@reduxjs/toolkit/dist/query';

export interface ErrorResponse {
  message?: string;
}

export interface ResponseType {
  data?: {
    result?: any;
    success: boolean;
    message?: string;
    code?: string;
  };
  error?: FetchBaseQueryError | SerializedError;
}

export interface ErrorDataType {
  data: {
    code?: string;
    success?: boolean;
    details: any;
  };
}
