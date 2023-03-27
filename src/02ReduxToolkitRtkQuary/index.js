import { Text, View } from "react-native";
import React from "react";
import { useGetAllPostQuery } from "./services/postApi.js";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import RtkQueryScreen from "./RtkQueryScreen.js";

export default function ReduxToolKitRtkQuery() {
  return (
    <Provider store={store}>
      <RtkQueryScreen />
    </Provider>
  );
}
