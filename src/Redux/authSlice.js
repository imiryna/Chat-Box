import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  registerThunk,
  refreshUserThunk,
} from 'Redux/authThunk';

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    token: null,
    user: null,
    authenticated: false,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoading = false;
        state.authenticated = true;
        state.token = payload.token;
      })
      .addCase(logoutThunk.fulfilled, (state, { payload }) => {
        state.user = null;
        state.isLoading = false;
        state.authenticated = false;
        state.token = null;
      })
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoading = false;
        state.authenticated = true;
      })

      .addMatcher(
        isAnyOf(registerThunk.pending, loginThunk.pending, logoutThunk.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          registerThunk.rejected,
          loginThunk.rejected,
          logoutThunk.rejected
        ),
        handleReject
      );
  },
});

export const authReducer = authSlice.reducer;
