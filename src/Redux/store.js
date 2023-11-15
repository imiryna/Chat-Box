import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer } from 'Redux/contactsSlice';
import { filterUploadsReducer } from 'Redux/filterUploadsSlice';
import { authReducer } from 'Redux/authSlice';
import { modalReducer } from 'Redux/modalSlice';
import { chatReducer } from 'Redux/chatComponentSlice';
import { uploadReducer } from 'Redux/uploadSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    modal: modalReducer,
    filter: filterUploadsReducer,
    upload: uploadReducer,
    auth: persistReducer(authConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
