import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import phonebookReducer from "./phonebook/phonebook-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const phonebookPersistConfig = {
  key: "phonebook",
  storage,
  blacklist: ["filter"],
};

export const store = configureStore({
  reducer: {
    phonebook: persistReducer(phonebookPersistConfig, phonebookReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
