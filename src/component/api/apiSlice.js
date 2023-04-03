import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:4000"}),
    tagTypes: ["ToDoList"],
    endpoints: builder => ({
        getData: builder.query({
            query: () => '/toDos',
            providesTags:  ["ToDoList"]
        }),

        createData: builder.mutation({
            query: data => ({
                url: '/toDos',
                method: "POST",
                body: data
            }),
            invalidatesTags:  ["ToDoList"]
        }),
        deleteData: builder.mutation({
            query: id => ({
                url: `/toDos/${id}`,
                method: "DELETE"
            }),
            invalidatesTags:  ["ToDoList"]
        })
    })
})

export const { useGetDataQuery, useCreateDataMutation, useDeleteDataMutation } = apiSlice