import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getFromLocalStore, saveToLocalStore} from '../../_utils';
import {movieInterface} from './movies-interface';

interface moviesInterface {
  moviesByGenre: Array<movieInterface>;
  randomMovies: Array<movieInterface>;
  recentlyVisitedMovies: Array<movieInterface>;
  page: number;
}

const initialState: moviesInterface = {
  recentlyVisitedMovies: [],
  moviesByGenre: [],
  randomMovies: [],
  page: 1,
};
export const recentVisitedMoviesLocalStoreName = 'lastVisited';

export const getRecentVisitInitialData = async () => {
  const data = await getFromLocalStore(recentVisitedMoviesLocalStoreName);

  return data ?? [];
};

const MovieSlice = createSlice({
  name: 'Movies',
  initialState,
  reducers: {
    updatePageNumber(state: moviesInterface, action: PayloadAction<any>) {
      const {payload} = action;
      state.page = payload;
    },
    setDataFromLocalStoreRecentVisit(
      state: moviesInterface,
      action: PayloadAction<Array<movieInterface>>,
    ) {
      const {payload} = action;
      state.recentlyVisitedMovies = payload;
    },
    addToRecentlyVisit(
      state: moviesInterface,
      action: PayloadAction<movieInterface>,
    ) {
      const {payload} = action;

      let data = state.recentlyVisitedMovies.filter(m => m.id !== payload.id);
      if (data.length > 10) {
        data = data.slice(0, 10);
      }

      state.recentlyVisitedMovies = [payload, ...data];
      saveToLocalStore(recentVisitedMoviesLocalStoreName, [payload, ...data]);
    },
    pushRandomMovies(
      state: moviesInterface,
      action: PayloadAction<Array<movieInterface>>,
    ) {
      const {payload} = action;
      state.randomMovies = [...state.randomMovies, ...payload];
    },
  },
});

export const {
  updatePageNumber,
  pushRandomMovies,
  addToRecentlyVisit,
  setDataFromLocalStoreRecentVisit,
} = MovieSlice.actions;
export default MovieSlice.reducer;
