import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/Api';

export const uploadFileThunk = createAsyncThunk(
  'upload/upload',
  async (uploadedFile, thunkAPI) => {
    try {
      const data = await API.uploadFiles(uploadedFile);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const uploadFilesListThunk = createAsyncThunk(
  'upload/list',
  async (_, thunkAPI) => {
    try {
      const data = await API.getUploadsList();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteUploadFileThunk = createAsyncThunk(
  'upload/delete',
  async (id, thunkAPI) => {
    try {
      const data = await API.deleteUploadedDocument(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
