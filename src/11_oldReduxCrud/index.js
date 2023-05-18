import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { NativeBaseProvider } from "native-base";
import Home from "./screen/Home";

export default function Index() {
    return (
        <Provider store={store}>
            <NativeBaseProvider>
                <Home />
            </NativeBaseProvider>
        </Provider>
    );
}
