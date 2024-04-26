import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import Template from "./Template.tsx";
import AboutPage from "./pages/AboutPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Template>
        <HomePage />
      </Template>
    ),
  },
  {
    path: "/about",
    element: (
      <Template>
        <AboutPage />
      </Template>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
