import React from "react";
import ReactDOM from "react-dom/client";
import AddCard from "./views/AddCard";
import Home from "./views/Home";
import Error from "./Error";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/add-card",
    element: <AddCard />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
