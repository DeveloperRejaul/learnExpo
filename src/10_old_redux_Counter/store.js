import { applyMiddleware, createStore } from "redux";
import { counterReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { apiAsyncMiddleware, getData, myLogger } from "./middlewere";
import thunk from "redux-thunk";
export const store = createStore(
    counterReducer,
    composeWithDevTools(
        applyMiddleware(
            // myLogger,
            // getData,
            //  logger,
            // apiAsyncMiddleware, // this is custom redux-thank
            thunk // using redux thunk , don't need this apiAsyncMiddleware
        )
    )
);
