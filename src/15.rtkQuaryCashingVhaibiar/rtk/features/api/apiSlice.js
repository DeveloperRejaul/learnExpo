import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const apiSlice = createApi({
    reducerPath: "mainApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://192.168.70.182:3004/api/",
    }),
    tagTypes: ["TASK", "newTask"],
    endpoints: (builder) => ({
        getPost: builder.query({
            query: () => ({
                url: "task",
            }),
            keepUnusedDataFor: 6000, // unuse data 6 secend for feach hube
            providesTags: (result, error, arg) => ["TASK"], // use genaral way

            // Provode dinaic tag
            // providesTags: (result, error, arg) => {
            //     console.log(result.newTasK._id);

            //     return ["TASK", { type: "newTask", id: result.newTasK._id }];
            // },
        }),
        updatePost: builder.mutation({
            query: ({ inputValue, id }) => {
                console.log(inputValue, id);
                return {
                    url: `task`,
                    method: "PUT",
                    body: {
                        title: inputValue,
                        id,
                    },
                };
            },
            invalidatesTags: (result, error, arg) => ["TASK"], // use genaral way

            // set dynamic id tag
            // invalidatesTags: (result, error, arg) => [
            //     "TASK",
            //     { type: "newTask", id: arg.id },
            // ],
        }),
    }),
});

export const { useGetPostQuery, useUpdatePostMutation } = apiSlice;
