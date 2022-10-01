import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {movieInterface} from '../redux';

export type AppTabParam = {
  Home: undefined;
  Search: undefined;
  Trending: undefined;
  WatchList: undefined;
};

export type AppStackParam = {
  AppTab: undefined;
  Movie: {
    movie: movieInterface;
  };
};

export type HomeDashboardProps = NativeStackScreenProps<AppTabParam, 'Home'>;
export type MovieProps = NativeStackScreenProps<AppStackParam, 'Movie'>;
