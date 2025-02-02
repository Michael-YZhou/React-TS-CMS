import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import NotFound from "@/views/NotFound";
const Home = lazy(() => import("@/views/Home"));
const Comp1 = lazy(() => import("@/views/Comp1"));
const Comp2 = lazy(() => import("@/views/Comp2"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Comp1 />,
      },
      {
        path: "/comp2",
        element: <Comp2 />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
