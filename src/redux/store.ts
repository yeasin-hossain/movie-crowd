import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './Api';
import genreSlice from './Genre/genre-slice';
import moviesSlice from './Movies/movies-slice';
import watchListSlice from './WatchList/WatchList-slice';

const rootReducer = combineReducers({
  genre: genreSlice,
  movies: moviesSlice,
  watchList: watchListSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
