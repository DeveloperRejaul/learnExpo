import { applyMiddleware, combineReducers, createStore } from "redux";
import { taskReducer } from "../reducers/taskReducer";
import { counterReducer } from "../reducers/counterReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    tasks: taskReducer,
    counter: counterReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
