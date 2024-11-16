import { RouteObject } from "react-router-dom";
import { authRoutes } from "./routes";
import Layout from "../../components/Layout";
import HomePage from "../../views/app/home/Index";

const AppRouters: RouteObject[] = [
  {
    path: "/",
    element: <Layout type="app" />,
    // loader: rootLoader,
    children: [
      {
        index: true,
        path: authRoutes.login,
        element: <HomePage />,
      },
    ],
  },
];
export default AppRouters;
