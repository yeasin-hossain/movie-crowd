import {createSlice, PayloadAction} from '@reduxjs/toolkit';
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

const MovieSlice = createSlice({
  name: 'Movies',
  initialState,
  reducers: {
    updatePageNumber(state: moviesInterface, action: PayloadAction<any>) {
      const {payload} = action;
      state.page = payload;
    },
    addToRecentlyVisit(
      state: moviesInterface,
      action: PayloadAction<movieInterface>,
    ) {
      const {payload} = action;
      const data = state.recentlyVisitedMovies.filter(m => m.id !== payload.id);

      state.recentlyVisitedMovies = [payload, ...data];
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

export const {updatePageNumber, pushRandomMovies} = MovieSlice.actions;
export default MovieSlice.reducer;
