import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { uploadFileThunk, deleteUploadFileThunk } from 'Redux/uploadThunk';

const handleReject = (state, { payload }) => {
  state.error = payload;
};

const uploadSlice = createSlice({
  name: 'upload',

  initialState: {
    documents: [],
    error: null,
    filter: '',
  },

  extraReducers: builder => {
    builder
      .addCase(uploadFileThunk.fulfilled, (state, { payload }) => {
        state.documents = [...state.documents, payload];
      })
      .addCase(deleteUploadFileThunk.fulfilled, (state, { payload }) => {
        state.documents = state.documents.filter(
          document => document.id !== payload.id
        );
      })
      .addMatcher(
        isAnyOf(uploadFileThunk.rejected, deleteUploadFileThunk.rejected),
        handleReject
      );
  },
});

export const uploadReducer = uploadSlice.reducer;
