import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
    name: "addTask",
    initialState: { model: false },
    reducers: {
        showModel: (state, _action) => {
            state.model = true;
        },
        hideModel: (state, _action) => {
            state.model = false;
        },
    },
});

export const { showModel, hideModel } = addSlice.actions;
export default addSlice.reducer;
