import { apiSlice } from "../api/apiSlice";

export const deleteTask = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `task/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: (result, error, arg) => ["TASK"],
        }),
    }),
});

export const { useDeleteTaskMutation } = deleteTask;
