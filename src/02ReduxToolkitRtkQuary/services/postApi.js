import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  // The unique key that defines where the Redux store will store our cache.
  reducerPath: "postApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  // The set of operations that we want to perform against the server.
  endpoints: (builder) => ({
    // all type of request make in hare
    getAllPost: builder.query({
      query: () => {
        return {
          url: "posts",
          method: "GET",
        };
      },
    }),

    // Data fetch by id
    getPostById: builder.query({
      query: (id) => {
        console.log(id);

        return {
          url: `posts/${id}`,
          method: "GET",
        };
      },
    }),

    getPostByLimit: builder.query({
      query: (num) => {
        console.log("Limit Number:", num);
        return {
          url: `posts?_limit=${num}`,
          method: "GET",
        };
      },
    }),

    deletePost: builder.mutation({
      query: (id) => {
        console.log("Delete ID:", id);
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
    }),

    createPost: builder.mutation({
      query: (newPost) => {
        console.log("Create Post: ", newPost);
        return {
          url: `posts`,
          method: "POST",
          body: newPost,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),

    updatePost: builder.mutation({
      query: (updatePostData) => {
        console.log("Update Post: ", updatePostData);
        const { id, ...data } = updatePostData;
        console.log("Actual Update Post: ", data);
        return {
          url: `posts/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} = postApi;
