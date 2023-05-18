import { createSlice } from "@reduxjs/toolkit";
import { createTask } from "./crudSlice";

export const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        increment: (state, action) => {
            state.value += 1;
        },
        decrement: (state, action) => {
            state.value -= 1;
        },
    },
    extraReducers: (builder) => {
        // relation with crudReducer createTask action
        builder.addCase(createTask, (state, action) => {
            state.value += 1;
        });
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
