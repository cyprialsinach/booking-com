import { Outlet } from "react-router-dom";
import AppLayout from "../views/app/_components/AppLayout";
import AuthLayout from "../views/auth/_components/AuthLayout";

const Layout: ILayout = ({ type }) => {
  if (type === "app") {
    return (
      <AppLayout type={type}>
        <Outlet />
      </AppLayout>
    );
  }

  return (
    <AuthLayout type={type}>
      <Outlet />
    </AuthLayout>
  );
};

export default Layout;
