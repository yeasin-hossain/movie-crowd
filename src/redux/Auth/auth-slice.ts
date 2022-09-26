import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loggedIn(state: AuthState, action: PayloadAction<AuthState>) {
      const {payload} = action;
      state.isAuthenticated = payload?.isAuthenticated;
      state.accessToken = payload?.accessToken;
      state.refreshToken = payload?.refreshToken;
    },
    authenticated(
      state: AuthState,
      action: PayloadAction<{isAuthenticated: boolean}>,
    ) {
      const {payload} = action;
      state.isAuthenticated = payload?.isAuthenticated;
    },
    updateAuthToken(
      state: AuthState,
      action: PayloadAction<{access_token: string | null}>,
    ) {
      const {payload} = action;
      state.accessToken = payload?.access_token;
    },
    logout(state: AuthState) {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const {loggedIn, updateAuthToken, logout, authenticated} =
  AuthSlice.actions;
export default AuthSlice.reducer;
