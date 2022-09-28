import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MovieStackParam = {
  Home: undefined;
  Movie: undefined;
};

export type MovieProps = NativeStackScreenProps<MovieStackParam, 'Movie'>;
export type HomeProps = NativeStackScreenProps<MovieStackParam, 'Home'>;
