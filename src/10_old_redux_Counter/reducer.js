import { DECREMENT, INCREMENT, FETCHED_DATA, FETCHED_POST } from "./action";

const initialState = { value: 0, posts: [] };

export function counterReducer(state = initialState, action) {
    const { payload } = action;

    switch (action.type) {
        case INCREMENT:
            if (payload) {
                return {
                    ...state,
                    value: state.value + payload,
                };
                break;
            }
            return {
                ...state,
                value: state.value + 1,
            };
            break;

        case DECREMENT:
            if (payload) {
                return {
                    ...state,
                    value: state.value - payload,
                };
                break;
            }
            return {
                ...state,
                value: state.value - 1,
            };
            break;

        // receiving middleware dispatch data
        case FETCHED_DATA:
            return {
                ...state,
                posts: [...payload],
            };
            break;

        // receiving reusable middleware dispatch POST
        case FETCHED_POST:
            return {
                ...state,
                posts: [...payload],
            };
            break;

        default:
            return { ...state };
            break;
    }
}
