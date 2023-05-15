import { applyMiddleware, createStore } from "redux";
import { counterReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { getData, myLogger } from "./middlewere";
export const store = createStore(
    counterReducer,
    composeWithDevTools(
        applyMiddleware(
            // myLogger,
            getData
            //  logger
        )
    )
);
