import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface genreInterface {
  id: number;
  name: string;
}

const initialState: genreInterface = {
  name: 'Action',
  id: 28,
};

const GenreSlice = createSlice({
  name: 'Genre',
  initialState,
  reducers: {
    setSelectedGenre(
      state: genreInterface,
      action: PayloadAction<genreInterface>,
    ) {
      const {payload} = action;
      return {...payload};
    },
  },
});

export const {setSelectedGenre} = GenreSlice.actions;
export default GenreSlice.reducer;
