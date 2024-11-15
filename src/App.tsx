import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";

function App(): JSX.Element {
  // const { user } = useUser()

  const router = createHashRouter(user.user?.authenticated ? AppRouters : AuthRouters)

  return <RouterProvider router={router} />
}

export default App;
