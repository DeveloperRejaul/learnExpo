import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const taskApi = createApi({
    reducerPath: "taskApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://172.31.112.1:3004/api",
    }),
    endpoints: (builder) => ({
        getTask: builder.query({
            query: () => ({
                url: "/task?limit=10",
            }),
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
} = taskApi;
