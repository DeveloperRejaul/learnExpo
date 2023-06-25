import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const taskApi = createApi({
    reducerPath: "taskApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://192.168.50.182:3004/api",
    }),
    tagTypes: ["TASK"],
    endpoints: (builder) => ({
        getTask: builder.query({
            query: () => {
                console.log("getTask");
                return {
                    url: `/task?page=0&limit=10`,
                };
            },

            // Modify response with `transformResponse`
            // transformResponse(res, meta) {},
        }),

        getTaskPerPage: builder.query({
            query: ({ page, limit }) => {
                console.log("getTaskPerPage");
                return { url: `/task?page=${page}&limit=${limit}` };
            },
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    var pagePatchResult = dispatch(
                        taskApi.util.updateQueryData(
                            "getTask",
                            undefined,
                            (draft) => {
                                const newData = [
                                    ...draft.newTask,
                                    ...data.newTask,
                                ];

                                const mainData = {
                                    newTask: newData,
                                };
                                return mainData;
                            }
                        )
                    );
                } catch (error) {
                    pagePatchResult.undo();
                    console.log(error.message);
                }
            },
        }),

        getTaskByValue: builder.query({
            query: (value) => {
                return {
                    url: `/task?search=${value}`,
                };
            },

            // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            //     try {
            //         const { data: searchData } = await queryFulfilled;
            //         dispatch(
            //             taskApi.util.updateQueryData(
            //                 "getTask",
            //                 undefined,
            //                 (draft) => {
            //                     return searchData;
            //                 }
            //             )
            //         );
            //     } catch (error) {
            //         console.log(error.message);
            //     }
            // },
        }),

        addTask: builder.mutation({
            query: (data) => ({
                url: "/task",
                method: "POST",
                body: data,
            }),

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // Optimistic Update //!server e request na huoyar age manoyaly cash ta update hucce
                const patchResult = dispatch(
                    taskApi.util.updateQueryData(
                        "getTask",
                        undefined,
                        (draft) => {
                            draft?.newTask?.push({
                                id: arg.id,
                                title: arg.title,
                            });
                        }
                    )
                );
                try {
                    // Pessimistic Updates  //!server e request na huoyar pore manoyaly cash ta update hucce
                    const { data: createData } = await queryFulfilled;
                    // dispatch(
                    //     taskApi.util.updateQueryData(
                    //         "getTask",
                    //         undefined,
                    //         (draft) => {
                    //             draft?.newTask?.push(createData.newTask);
                    //         }
                    //     )
                    // );
                } catch (error) {
                    patchResult.undo(); // update judi tik moto nahy ta hule ager obostay pire jabe
                }
            },
        }),

        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/task/${id}`,
                method: "DELETE",
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                // Optimistic Update
                const deletePatchResult = dispatch(
                    taskApi.util.updateQueryData(
                        "getTask",
                        undefined,
                        (draft) => {
                            const newData = draft?.newTask?.filter(
                                (data) => data.id !== arg
                            );
                            const data = { newTask: newData };
                            return data;
                        }
                    )
                );
                queryFulfilled.catch(deletePatchResult.undo);
            },
        }),

        upDateTask: builder.mutation({
            query: (data) => ({
                url: `/task`,
                method: "PUT",
                body: data,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                // Optimistic Update
                const updatePatchResult = dispatch(
                    taskApi.util.updateQueryData(
                        "getTask",
                        undefined,
                        (draft) => {
                            const newData = draft.newTask.map((data) => {
                                if (data.id == arg.id) {
                                    return {
                                        ...data,
                                        title: arg.title,
                                    };
                                } else {
                                    return {
                                        ...data,
                                    };
                                }
                            });

                            const data = { newTask: newData };
                            return data;
                        }
                    )
                );
                queryFulfilled.catch(updatePatchResult.undo);
            },
        }),
    }),
});

export const {
    useGetTaskQuery,
    useAddTaskMutation,
    useDeleteTaskMutation,
    useUpDateTaskMutation,
    useGetTaskPerPageQuery,
    useGetTaskByValueQuery,
} = taskApi;
