import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
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

import storiesReducer from "../features/stories/slice";
import themesReducer from "../features/themes/slice";
import languagesReducer from "../features/languages/slice";
import searchReducer from "../features/search/slice";
import pagesReducer from "../features/pages/slice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["pages"],
};

const rootReducer = combineReducers({
  stories: storiesReducer,
  themes: themesReducer,
  languages: languagesReducer,
  search: searchReducer,
  pages: pagesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
