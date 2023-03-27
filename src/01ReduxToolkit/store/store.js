import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  configureStore,
  createImmutableStateInvariantMiddleware,
} from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "../features/authSlice.js";

// config persist
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"], // not save in store
  blacklist: ["counter"], // save in store
};

// persist reducer
const persistedCounterReducer = persistReducer(persistConfig, counterReducer);
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Middleware setup
const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({
  ignoredPaths: ["ignoredPath", "ignoredNested.one", "ignoredNested.two"],
});

// setup store
export const store = configureStore({
  reducer: {
    counter: persistedCounterReducer,
    auth: persistedAuthReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [immutableInvariantMiddleware],
});

export const persistor = persistStore(store);
