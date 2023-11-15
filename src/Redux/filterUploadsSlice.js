import { createSlice } from '@reduxjs/toolkit';

const filterUploadsInitialState = '';

const filterUploadsSlice = createSlice({
  name: 'filter',

  initialState: filterUploadsInitialState,

  reducers: {
    setUploadsFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setUploadsFilter } = filterUploadsSlice.actions;

export const getUploadsFilter = state => state.filter;

export const filterUploadsReducer = filterUploadsSlice.reducer;
