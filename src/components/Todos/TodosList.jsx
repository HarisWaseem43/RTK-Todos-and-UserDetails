import {
  useGetAllTodosQuery,
  useAddTodosMutation,
  useUpdateTodosMutation,
  useDeleteTodosMutation,
} from "../../Services/api/TodosAPI";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const TodosList = () => {
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllTodosQuery();
  const [addTodo] = useAddTodosMutation();
  const [updateTodos] = useUpdateTodosMutation();
  const [deleteTodos] = useDeleteTodosMutation();

  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ userId: 1, title: newTodo, completed: false });
    setNewTodo("");
  };

  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new todo item</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
      </div>
      <button className="submit">
        <FontAwesomeIcon icon={faUpload} />
      </button>
    </form>
  );

  let content;
  if (isLoading) {
    content = <h2>Loading...</h2>;
  }
  if (isSuccess) {
    content = todos.map((todo) => {
      return (
        <article key={todo.id}>
          <div className="todo">
            <input
              type="checkbox"
              checked={todo.completed}
              id={todo.id}
              onChange={() =>
                updateTodos({ ...todo, completed: !todo.completed })
              }
            />
            <label htmlFor={todo.id}>{todo.title}</label>
          </div>
          <button
            className="trash"
            onClick={() => deleteTodos({ id: todo.id })}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </article>
      );
    });
  }
  if (isError) {
    content = <h1>{error}</h1>;
  }

  return (
    <>
      <Link to="/">Go Back</Link>
      <main>
        <h1>Todo List</h1>
        {newItemSection}
        {content}
      </main>
    </>
  );
};

export default TodosList;
