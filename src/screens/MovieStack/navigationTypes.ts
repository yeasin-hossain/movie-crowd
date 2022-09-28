import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {movieInterface} from '../../redux';

export type MovieStackParam = {
  Home: undefined;
  Movie: {
    movie: movieInterface;
  };
};

export type MovieProps = NativeStackScreenProps<MovieStackParam, 'Movie'>;
export type HomeProps = NativeStackScreenProps<MovieStackParam, 'Home'>;
