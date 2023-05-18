import { createSlice } from "@reduxjs/toolkit";
import { increment } from "./counterSlice";

const crudSlice = createSlice({
    name: "crud",
    initialState: { tasks: [], isLoading: false, error: null },
    reducers: {
        createTask: (state, action) => {
            state.tasks.push("1");
        },
        deleteTask: (state, action) => {},
        updateTask: (state, action) => {},
        getTask: (state, action) => {},
    },
    extraReducers: () => {},
});

export const { createTask, deleteTask, getTask, updateTask } =
    crudSlice.actions;
export default crudSlice.reducer;
