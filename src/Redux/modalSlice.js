import { createSlice } from '@reduxjs/toolkit';

const modalInitialState = {
  sidebar: 'none',
  upload: false,
};

const modalSlice = createSlice({
  name: 'modal',

  initialState: modalInitialState,

  reducers: {
    setSidebarVisibility(state, action) {
      state.sidebar = action.payload;
    },
    setUploadVisibility(state, action) {
      state.upload = action.payload;
    },
  },
});

export const { setSidebarVisibility, setUploadVisibility } = modalSlice.actions;

export const getSidebarVisibility = state => state.modal.sidebar;
export const getUploadVisibility = state => state.modal.upload;

export const modalReducer = modalSlice.reducer;
