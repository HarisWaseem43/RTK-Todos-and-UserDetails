import "./App.css";
import { Routes, Route } from "react-router";
import TodosList from "./components/Todos/TodosList";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/todos-list" element={<TodosList />} />
      </Routes>
    </>
  );
}

export default App;
