import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'services/Api';

export const getChatsThunk = createAsyncThunk(
  'chat/chats',
  async (_, thunkAPI) => {
    try {
      const data = await API.getChatList();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createChatThunk = createAsyncThunk(
  'chat/create_chat',
  async (chatName, thunkAPI) => {
    try {
      const data = await API.createChat(chatName);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const sendMessageThunk = createAsyncThunk(
  'chat/send',
  async (messageFromUser, thunkAPI) => {
    try {
      const data = await API.fetchMessageChat(messageFromUser);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getMessagesThunk = createAsyncThunk(
  'chat/messages',
  async (chatId, thunkAPI) => {
    try {
      const data = await API.getChatMessages(chatId);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteChatThunk = createAsyncThunk(
  'chat/delete_chat',
  async (id, thunkAPI) => {
    try {
      const data = await API.deleteChat(id);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
