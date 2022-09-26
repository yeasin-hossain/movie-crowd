/**
 * Auth Types
 */

import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParam = {
  Auth: undefined;
  Login: undefined;
  AuthPhone: undefined;
  VerificationCode: {
    phoneNumber: string;
    countryCode: string;
    navigationFrom?: string;
    password?: string;
  };
  NewPassword: {
    phoneNumber: string;
    countryCode: string;
    passwordToken: string;
  };
  CompleteProfile: {
    phoneNumber: string;
    countryCode: string;
  };
};
export type AuthProps = NativeStackScreenProps<AuthStackParam, 'Auth'>;
export type AuthPhoneProps = NativeStackScreenProps<
  AuthStackParam,
  'AuthPhone'
>;
export type VerificationCodeProps = NativeStackScreenProps<
  AuthStackParam,
  'VerificationCode'
>;
export type NewPasswordProps = NativeStackScreenProps<
  AuthStackParam,
  'NewPassword'
>;
export type CompleteProfileProps = NativeStackScreenProps<
  AuthStackParam,
  'CompleteProfile'
>;
export type LoginProps = NativeStackScreenProps<AuthStackParam, 'Login'>;
