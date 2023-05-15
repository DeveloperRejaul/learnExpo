export const INCREMENT = "increment";
export const DECREMENT = "decrement";

export const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    };
};

export const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    };
};

// #For data fetching
// ##this action call from screen1
export const FETCH_DATA = "fetchData";
export const FETCHED_DATA = "fetchedData";
export const fetchData = (value) => {
    return {
        type: FETCH_DATA,
        payload: value,
    };
};

// ##this action call from middleware
export const fetchedData = (value) => {
    return {
        type: FETCHED_DATA,
        payload: value,
    };
};

//action for  handle async task  reusable Middleware
export const FETCHED_POST = "fetchedPost";
export const fetchedPost = (value) => {
    return {
        type: FETCHED_POST,
        payload: value,
    };
};
