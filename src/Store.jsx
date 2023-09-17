import { configureStore } from "@reduxjs/toolkit";
import { userAPI } from "./Services/UserAPI";
import { TodosAPI } from "./Services/api/TodosAPI";

export const store = configureStore({
  reducer: {
    [userAPI.reducerPath]: userAPI.reducer,
    [TodosAPI.reducerPath]: TodosAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware, TodosAPI.middleware),
});
