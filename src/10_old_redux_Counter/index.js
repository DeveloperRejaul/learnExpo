import React from "react";
import { Provider } from "react-redux";
import Screen1 from "./screen1";
import { store } from "./store";

export default function Index() {
    return (
        <Provider store={store}>
            <Screen1 />
        </Provider>
    );
}
