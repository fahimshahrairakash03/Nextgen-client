import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Dashboard from "./components/Dashboard";
import Attendance from "./components/Attendance";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Dashboard></Dashboard>,
        },
        {
          path: "/attendance",
          element: <Attendance></Attendance>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
