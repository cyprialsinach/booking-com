import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AppRouters from "./shared/routes/AppRoutes";
import AuthRouters from "./shared/routes/AuthRoutes";
import React from "react";
import { Toaster } from "sonner";
// import useUser from "./shared/store/user.store";

function App(): JSX.Element {
  // const { user } = useUser()
  const hasAccount = true;
  // const router = createBrowserRouter(user.user?.authenticated ? AppRouters : AuthRouters)
  const router = createBrowserRouter(hasAccount ? AppRouters : AuthRouters);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
      <Toaster richColors position="top-center" />
    </React.StrictMode>
  );
}

export default App;
