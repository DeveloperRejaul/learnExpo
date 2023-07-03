import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: "taskTask",
    initialState: { model: false, isSearch: false, searchTask: [] },
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
        setSearchTask: (state, action) => {
            state.searchTask = action.payload;
        },
        deleteSearchTask: (state, action) => {
            state.searchTask = state.searchTask.filter(
                (data) => data.id !== action.payload
            );
        },
    },
});

export const {
    showModel,
    hideModel,
    showSearch,
    hideSearch,
    setSearchTask,
    deleteSearchTask,
} = taskSlice.actions;
export default taskSlice.reducer;
