import { FETCH_DATA, fetchedData } from "./action";

export const myLogger = (store) => (next) => (action) => {
    // ey kane next(action) call na kurle ay kane atke takbe
    console.log("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    return result;
};

// handle async task
export const getData = (store) => (next) => async (action) => {
    const url = `https://jsonplaceholder.typicode.com/posts`;

    if (action.type === FETCH_DATA) {
        const response = await fetch(url);
        const posts = await response.json();

        store.dispatch(fetchedData(posts));
        return;
    }
    return next(action);
};

// handle async task reusable Middleware // custom thank // don't need this when use thunk
export const apiAsyncMiddleware = (store) => (next) => async (action) => {
    if (typeof action == "function") {
        return action(store.dispatch, store.getState);
    }
    return next(action);
};
