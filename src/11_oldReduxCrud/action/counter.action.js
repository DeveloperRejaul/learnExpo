export const INCREMENT = "increment";
export const DECREMENT = "decrement";

export const incrementCount = (value) => {
    return {
        type: INCREMENT,
        payload: value,
    };
};

export const decrementCount = (value) => {
    return {
        type: DECREMENT,
        payload: value,
    };
};
