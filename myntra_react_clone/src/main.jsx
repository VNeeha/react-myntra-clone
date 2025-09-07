// CUSTOM COMPONENTS
import App from "./routes/App.jsx";
import Home from "./routes/Home.jsx";
import Bag from "./routes/Bag.jsx";

// STYLES

// EXTERNAL FUNCTIONALITIES
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// CREATING LAYOUT ROUTES
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
