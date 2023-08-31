import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./theme/globals.css";
import "polkadot-theme/global.css";
import "polkadot-theme/light.css";
import "polkadot-theme/dark.css";
import WithButton from "./WithButton.tsx";
import InContextMenu from "./InContextMenu.tsx";
import Header from "./components/ui/header.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <InContextMenu />
      </>
    ),
  },
  {
    path: "/button",
    element: (
      <>
        <Header />
        <WithButton />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
