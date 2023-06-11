import { apiSlice } from "../api/apiSlice";

export const addTaskSlice = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        addTask: builder.mutation({
            query: ({ task }) => {
                return {
                    url: "task",
                    method: "POST",
                    body: { title: task },
                };
            },
            invalidatesTags: (result, error, arg) => ["TASK"],
        }),
    }),
});

export const { useAddTaskMutation } = addTaskSlice;
