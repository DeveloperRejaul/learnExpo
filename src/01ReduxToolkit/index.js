import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store.js";
import CounterAppScreen from "./CounterAppScreen.js";
import { PersistGate } from "redux-persist/integration/react";

const ReduxToolKit = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CounterAppScreen />
      </PersistGate>
    </Provider>
  );
};

export default ReduxToolKit;
