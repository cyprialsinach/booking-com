import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AppRouters from "./shared/routes/AppRoutes";
import AuthRouters from "./shared/routes/AuthRoutes";
import useUser from "./shared/store/user.store";

function App(): JSX.Element {
  const { user } = useUser()

  // const router = createHashRouter(user.user?.authenticated ? AppRouters : AuthRouters)
    const router = createHashRouter(
      true ? AppRouters : AuthRouters
    );

  return <RouterProvider router={router} />
}

export default App;
