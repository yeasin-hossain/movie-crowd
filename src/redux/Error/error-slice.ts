import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ErrorState {
  showError: boolean;
  title: string | null;
  details: string | null;
}

const initialState: ErrorState = {
  showError: false,
  title: null,
  details: null,
};

const ErrorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    showError(state: ErrorState, action: PayloadAction<ErrorState>) {
      const {payload} = action;
      state.showError = payload?.showError;
      state.title = payload?.title;
      state.details = payload?.details;
    },
    hideError(state: ErrorState) {
      state.showError = false;
      state.title = null;
      state.details = null;
    },
  },
});

export const {showError, hideError} = ErrorSlice.actions;
export default ErrorSlice.reducer;
