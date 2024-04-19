import HeaderComponent from "../components/header/HeaderComponent";
import { Outlet } from "react-router-dom";
import { UserRoleManagerProvider } from "../util/userRoleContext";

const Layout = () => {
  return (
    <UserRoleManagerProvider>
      <HeaderComponent />
      <Outlet />
    </UserRoleManagerProvider>
  );
};

export default Layout;
