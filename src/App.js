import styles from "./App.module.scss";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Auth from "./pages/Auth";
import UserLayout from "./components/Layout/UserLayout";
import TodoHome from "./pages/TodoHome";
import NewTodo from "./pages/NewTodo";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to={`../${user._id}`} /> : <Auth />}
        />
        <Route
          path="/:userId"
          element={user ? <TodoHome /> : <Navigate to="/" />}
        />
        <Route
          path="/:userId/new-todo"
          element={user ? <NewTodo /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
