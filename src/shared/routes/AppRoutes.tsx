import { RouteObject } from "react-router-dom";

import HomeRouters from "./HomeRoutes";
import WalletRouters from "./WalletRoutes";
import Layout from "../../components/Layout";

// const AppRouters: RouteObject[] = [
//     ...HomeRouters, ...WalletRouters];
// export default AppRouters;

const AppRouters: RouteObject[] = [
  {
    path: "/",
    element: <Layout type="app" />,
    // loader: rootLoader,
    errorElement: <h1>Opps, Page not found</h1>,
    children: [...HomeRouters, ...WalletRouters],
  },
];
export default AppRouters;
