import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "@/App";

import NotFound from "@/views/NotFound";

const Home = lazy(() => import("@/views/Home"));
const About = lazy(() => import("@/views/About"));
const User = lazy(() => import("@/views/User"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/user",
        element: <User />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
