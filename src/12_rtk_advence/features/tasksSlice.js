import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    isLoading: false,
    error: null,
};
const base_url = `http://192.168.186.182:3004/api`;

// handle async thank fetch task
const FETCH_TASKS = "task/fetchTask";
const fetchTask = createAsyncThunk(FETCH_TASKS, async () => {
    const response = await fetch(`${base_url}/task`);
    const tasks = await response.json();
    return tasks;
});

const taskSlice = createSlice({
    name: "tasks",
    initialState: initialState,
    extraReducers: (builder) => {
        // fetching task
        builder.addCase(fetchTask.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(fetchTask.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.tasks = action.payload;
        });
        builder.addCase(fetchTask.rejected, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.tasks = action.error;
        });
    },
});

export default taskSlice.reducer;
export { fetchTask };
