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
import {
  AcalaCircle,
  MoonbeamCircle,
  PolkadotCircle,
} from "./components/ui/icons.tsx";

export const addresses = [
  {
    ss58: "15UktDFzD6o3dS1ibxDpBbkzNX6jaEkjAe5nHcWUBMrq3SGj",
    name: "Stash Account",
  },
  { ss58: "5EZrUD2S9ZyXPbZj88Ruu6ZdWCDYnxsu8sD37JW2tAU125Kd" },
  { ss58: "a7dKBTCuTt6ZzGEgL9nQsSWKPZrxVrDghe8NP9KhCoy3y5E" },
  {
    ss58: "Xyi6j3P1d8LHMVPydzBn7yz2pojbKuXTpoNFoZLG57fJzsd",
    name: "Eco Stash",
  },
];

export const tokens = [
  { currency: "DOT", amount: "142.3901" },
  { currency: "GLMR", amount: "73.8311" },
  { currency: "ACA", amount: "0.2506" },
];

export function TokenCircle({ chain }: { chain: any }) {
  return (
    <>
      {chain === "ACA" ? (
        <AcalaCircle />
      ) : chain === "GLMR" ? (
        <MoonbeamCircle />
      ) : (
        <PolkadotCircle />
      )}
    </>
  );
}

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
