import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import counterReducer from "../features/counterSlice";
import crudReducer from "../features/crudSlice";
import tasksReducer from "../features/tasksSlice";

const logger = createLogger();
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        crud: crudReducer,
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
