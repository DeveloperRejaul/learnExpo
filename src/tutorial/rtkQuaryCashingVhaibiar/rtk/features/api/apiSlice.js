import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiSlice = createApi({
    reducerPath: "mainApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://192.168.200.182:3004/api/",
    }),
    tagTypes: ["POSTS"],
    endpoints: (builder) => ({
        // get Post
        getPost: builder.query({
            query: () => ({
                url: "task",
            }),
            providesTags: ["POSTS"],
        }),

        // Create Post
        addPost: builder.mutation({
            query: (data) => ({
                url: "task",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["POSTS"],
        }),

        // Update Post
        updatePost: builder.mutation({
            query: ({ inputValue, id }) => {
                return {
                    url: `task`,
                    method: "PUT",
                    body: {
                        title: inputValue,
                        id,
                    },
                };
            },
            invalidatesTags: ["POSTS"],
        }),

        // Delete Post
        deletePost: builder.mutation({
            query: (id) => {
                return {
                    url: `task/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["POSTS"],
        }),
    }),
});

export const {
    useGetPostQuery,
    useUpdatePostMutation,
    useAddPostMutation,
    useDeletePostMutation,
} = apiSlice;
