import { Outlet } from "react-router-dom";
import AuthLayout from "../views/auth/_components/AuthLayout";
// import HomeLayout from "../views/app/home/_components/HomeLayout";
import AppLayout from "../views/app/_components/AppLayout";

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
