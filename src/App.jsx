import "./App.css";
import { Routes, Route } from "react-router";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";

const TodosList = lazy(() => import("./components/Todos/TodosList"));
const UserDetails = lazy(() => import("./components/UserDetails"));
// const Navbar = lazy(() => import("./components/Navbar"));

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading..............</h1>}>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/user-details" element={<UserDetails />} />
          <Route path="/todos-list" element={<TodosList />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
