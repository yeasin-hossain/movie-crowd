import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import moment from 'moment';
import {getFromLocalStore, saveToLocalStore} from '../../_utils';
import {movieInterface} from '../Movies';
export const watchListLocalStoreName = 'watchList';

interface moviesInterface {
  watchList: Array<movieInterface>;
}

export const getWatchListLocalInitialData = async () => {
  const data = await getFromLocalStore(watchListLocalStoreName);

  return data ?? [];
};

const initialState: moviesInterface = {
  watchList: [],
};

const WatchListSlice = createSlice({
  name: 'WatchList',
  initialState,
  reducers: {
    setDataFromLocalStore(
      state: moviesInterface,
      action: PayloadAction<Array<movieInterface>>,
    ) {
      const {payload} = action;
      state.watchList = payload;
    },
    addToFavorite(
      state: moviesInterface,
      action: PayloadAction<movieInterface>,
    ) {
      const {payload} = action;
      state.watchList.push({
        ...payload,
        watchListAddedDate: moment().format('YYYY-MM-DD'),
      });
      saveToLocalStore(watchListLocalStoreName, state.watchList);
    },
    removeFromFavorite(
      state: moviesInterface,
      action: PayloadAction<movieInterface>,
    ) {
      const {payload} = action;
      const data = state.watchList.filter(i => i.id !== payload.id);
      state.watchList = data;
      saveToLocalStore(watchListLocalStoreName, data);
    },
  },
});

export const {addToFavorite, removeFromFavorite, setDataFromLocalStore} =
  WatchListSlice.actions;
export default WatchListSlice.reducer;
