import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "taskTask",
    initialState: { model: false, isSearch: false },
    reducers: {
        showModel: (state) => {
            state.model = true;
        },
        hideModel: (state) => {
            state.model = false;
        },
        showSearch: (state) => {
            state.isSearch = true;
        },
        hideSearch: (state) => {
            state.isSearch = false;
        },
    },
});

export const { showModel, hideModel, showSearch, hideSearch } =
    taskSlice.actions;
export default taskSlice.reducer;
