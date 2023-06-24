import taskReducer from "../futusers/taskSlice";
import { taskApi } from "../futusers/taskSliceApi";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        task: taskReducer,
        [taskApi.reducerPath]: taskApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(taskApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
});
