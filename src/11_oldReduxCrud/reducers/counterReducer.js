import { produce } from "immer";
import { DECREMENT, INCREMENT } from "../action/counter.action";
import {
    CREATE_DATA_FAILED,
    CREATE_DATA_SUCCEEDED,
} from "../action/task.action";
const initialState = {
    value: 0,
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            };

        case DECREMENT:
            return {
                ...state,
                value: state.value + 1,
            };

        // Relation with Task Reducer
        case CREATE_DATA_SUCCEEDED:
            return {
                ...state,
                value: state.value + 1,
            };

        default:
            return { ...state };
            break;
    }
};
