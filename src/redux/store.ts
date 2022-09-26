import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {apiSlice} from './Api';
import errorSlice from './Error/error-slice';

import userSlice from './User/user-slice';

const rootReducer = combineReducers({
  error: errorSlice,
  user: userSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
