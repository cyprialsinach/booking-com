import { RouteObject } from "react-router-dom";
import { authRoutes } from "./routes";
import Layout from "../../components/Layout";
import Login from "../../views/auth/Login";

const AuthRouters: RouteObject[] = [
  {
    path: "/",
    element: <Layout type="auth" />,
    // loader: rootLoader,
    children: [
      {
        index: true,
        path: authRoutes.login,
        element: <Login />,
      },
    ],
  },
];
export default AuthRouters;
