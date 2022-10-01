import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getFromLocalStore, saveToLocalStore} from '../../_utils';
import {movieInterface} from './movies-interface';

interface moviesInterface {
  moviesByGenre: Array<movieInterface>;
  TrendingMovies: Array<movieInterface>;
  recentlyVisitedMovies: Array<movieInterface>;
  page: number;
  sort: string;
}

const initialState: moviesInterface = {
  recentlyVisitedMovies: [],
  moviesByGenre: [],
  TrendingMovies: [],
  page: 1,
  sort: 'popularity.asc',
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
    setSort(state: moviesInterface, action: PayloadAction<any>) {
      const {payload} = action;
      state.sort = payload;
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
      if (data.length >= 9) {
        data = data.slice(0, 9);
      }

      state.recentlyVisitedMovies = [payload, ...data];
      saveToLocalStore(recentVisitedMoviesLocalStoreName, [payload, ...data]);
    },
    clearRecentlyVisited(state: moviesInterface) {
      state.recentlyVisitedMovies = [];
      saveToLocalStore(recentVisitedMoviesLocalStoreName, []);
    },
    pushTrendingMovies(
      state: moviesInterface,
      action: PayloadAction<Array<movieInterface>>,
    ) {
      const {payload} = action;
      state.TrendingMovies = [...state.TrendingMovies, ...payload];
    },
  },
});

export const {
  updatePageNumber,
  pushTrendingMovies,
  addToRecentlyVisit,
  setDataFromLocalStoreRecentVisit,
  clearRecentlyVisited,
  setSort,
} = MovieSlice.actions;
export default MovieSlice.reducer;
