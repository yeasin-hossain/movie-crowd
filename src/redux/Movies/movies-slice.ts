import {createSlice} from '@reduxjs/toolkit';
import {movieInterface} from './movies-interface';

interface moviesInterface {
  moviesByGenre: Array<movieInterface>;
  randomMovies: Array<movieInterface>;
}

const initialState: moviesInterface = {
  moviesByGenre: [],
  randomMovies: [],
};

const GenreSlice = createSlice({
  name: 'Movies',
  initialState,
  reducers: {},
});

export const {} = GenreSlice.actions;
export default GenreSlice.reducer;
