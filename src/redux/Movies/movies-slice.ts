import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {movieInterface} from './movies-interface';

interface moviesInterface {
  moviesByGenre: Array<movieInterface>;
  randomMovies: Array<movieInterface>;
  page: number;
}

const initialState: moviesInterface = {
  moviesByGenre: [],
  randomMovies: [],
  page: 1,
};

const GenreSlice = createSlice({
  name: 'Movies',
  initialState,
  reducers: {
    updatePageNumber(state: moviesInterface, action: PayloadAction<any>) {
      const {payload} = action;
      console.log(payload);
      state.page = payload;
    },
    pushRandomMovies(
      state: moviesInterface,
      action: PayloadAction<Array<movieInterface>>,
    ) {
      const {payload} = action;
      console.log(payload);
      state.randomMovies = [...state.randomMovies, ...payload];
    },
  },
});

export const {updatePageNumber, pushRandomMovies} = GenreSlice.actions;
export default GenreSlice.reducer;
