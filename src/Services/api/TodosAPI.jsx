import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const TodosAPI = createApi({
  reducerPath: "TodosAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Todos"],
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => "todos",
      transformErrorResponse: (res) => res.sort((a, b) => b.id - a.id),
      providesTags: ["Todos"],
    }),
    addTodos: builder.mutation({
      query: (todo) => ({
        url: "todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    updateTodos: builder.mutation({
      query: (todo) => ({
        url: `todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTodos: builder.mutation({
      query: ({ id }) => ({
        url: `todos/${id}`,
        method: "Delete",
        body: id,
      }),
      invalidatesTags: ["Todos"],
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useAddTodosMutation,
  useUpdateTodosMutation,
  useDeleteTodosMutation,
} = TodosAPI;
