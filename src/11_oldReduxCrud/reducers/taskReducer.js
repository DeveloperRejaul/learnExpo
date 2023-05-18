import { produce } from "immer";
import {
    CREATE_DATA_FAILED,
    CREATE_DATA_REQUEST,
    CREATE_DATA_SUCCEEDED,
    DELETE_DATA_FAILED,
    DELETE_DATA_REQUEST,
    DELETE_DATA_SUCCEEDED,
    FETCH_DATA_FAILED,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCEEDED,
    UPDATE_DATA_FAILED,
    UPDATE_DATA_REQUEST,
    UPDATE_DATA_SUCCEEDED,
} from "../action/task.action";

const initialState = {
    tasks: [],
    isLoading: false,
    error: null,
};

export const taskReducer = (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case FETCH_DATA_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                tasks: [...payload.newTask],
                error: null,
            };
        case FETCH_DATA_FAILED:
            return {
                ...state,
                isLoading: false,
                error: "Internal server Error",
            };

        case DELETE_DATA_REQUEST:
            return {
                ...state,
                isLoading: false,
                error: null,
            };
        case DELETE_DATA_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                tasks: [...state.tasks.filter((data) => data._id !== payload)],
                error: null,
            };
        case DELETE_DATA_FAILED:
            return {
                ...state,
                isLoading: false,
                error: "Internal server Error",
            };

        case CREATE_DATA_FAILED:
            return {
                ...state,
                isLoading: false,
                error: "Internal server Error",
            };
        case CREATE_DATA_REQUEST:
            return {
                ...state,
                isLoading: false,
                error: null,
            };
        case CREATE_DATA_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                error: null,
                tasks: [...state.tasks, payload.newTask],
            };

        case UPDATE_DATA_SUCCEEDED:
            const updatedTask = state.tasks.map((data) => {
                if (data._id == payload.newTask._id) {
                    return payload.newTask;
                } else {
                    return data;
                }
            });

            // using immer for emittable state management
            return produce(state, (draftState) => {
                draftState.isLoading = false;
                draftState.error = null;
                draftState.tasks = updatedTask;
            });

        case UPDATE_DATA_FAILED:
            return {
                ...state,
                isLoading: false,
                error: "Internal server error",
            };
        case UPDATE_DATA_REQUEST:
            return {
                ...state,
                isLoading: false,
                error: null,
            };

        default:
            return { ...state };
            break;
    }
};
