import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getChatsThunk,
  createChatThunk,
  sendMessageThunk,
  getMessagesThunk,
  deleteChatThunk,
} from 'Redux/chatComponentThunk';

const handleReject = (state, { payload }) => {
  state.error = payload;
};

const chatComponentSlice = createSlice({
  name: 'chat',

  initialState: {
    currentChat: null,
    messageStack: [],
    error: null,
  },

  reducers: {
    setCurrentChat(state, action) {
      return (state.currentChat = action.payload);
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getChatsThunk.fulfilled, (state, { payload }) => {
        state.messageStack = payload;
      })
      .addCase(createChatThunk.fulfilled, (state, { payload }) => {
        state.messageStack = [...state.messageStack, payload];
      })
      .addCase(getMessagesThunk.fulfilled, (state, { payload }) => {
        /**
         * suggested payload from API response:
         * {
         *    chatId: "1111",
         *    messages: ["array", "of", "messages"]
         * }
         */
        state.messageStack[payload.chatId] = payload.messages;
      })
      .addCase(deleteChatThunk.fulfilled, (state, { payload }) => {
        state.messageStack = payload;
      })
      .addMatcher(
        isAnyOf(
          getChatsThunk.rejected,
          createChatThunk.rejected,
          sendMessageThunk.rejected,
          getMessagesThunk.rejected,
          deleteChatThunk.rejected
        ),
        handleReject
      );
  },
});

export const { setCurrentChat } = chatComponentSlice.actions;
export const getCurrentChat = state => state.chat.currentChat;
export const chatReducer = chatComponentSlice.reducer;
