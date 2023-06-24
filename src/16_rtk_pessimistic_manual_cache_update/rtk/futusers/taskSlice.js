import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "taskTask",
    initialState: { model: false },
    reducers: {
        showModel: (state, action) => {
            state.model = true;
        },
        hideModel: (state, action) => {
            state.model = false;
        },
    },
});

export const { showModel, hideModel } = taskSlice.actions;
export default taskSlice.reducer;
