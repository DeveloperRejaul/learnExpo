export const INCREMENT = "increment";
export const DECREMENT = "decrement";

// For data fetching
export const FETCH_DATA = "fetchData";
export const FETCHED_DATA = "fetchEDData";

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

// For data fetching

// this action call from screen1
export const fetchData = (value) => {
    return {
        type: FETCH_DATA,
        payload: value,
    };
};

// this action call from middleware
export const fetchedData = (value) => {
    return {
        type: FETCHED_DATA,
        payload: value,
    };
};
