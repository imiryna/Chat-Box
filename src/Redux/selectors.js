import { createSelector } from '@reduxjs/toolkit';

// chat selectors
export const selectChats = state => state.chat.messageStack;
// export const selectFilter = state => state.filter;
export const selectError = state => state.chat.error;
export const selectCurrentChat = state => state.chat.currentChat;
export const selectMessagesById = createSelector(
  [selectChats, selectCurrentChat],
  (chats, currentChatId) => {
    const currentChat = chats.filter(chat => chat.id === currentChatId);
    return currentChat;
  }
);

// upload selectors
export const selectListOfUploads = state => state.upload.documents;
export const selectUploadFilter = state => state.upload.filter;
export const selectFilteredUploads = createSelector(
  [selectListOfUploads, selectUploadFilter],
  (documents, filter) => {
    return documents.filter(document =>
      document.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
