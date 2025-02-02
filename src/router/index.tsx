import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";

import NotFound from "@/views/NotFound";
const Home = lazy(() => import("@/views/Home"));
const Page1 = lazy(() => import("@/views/Page1"));
const Page2 = lazy(() => import("@/views/Page2"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true, // Default route for "/"
        element: <Navigate to="page1" replace />, // Redirect to "/comp1"
      },
      {
        path: "/page1",
        element: <Page1 />,
      },
      {
        path: "/page2",
        element: <Page2 />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
