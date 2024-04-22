import HeaderComponent from "../components/header/HeaderComponent";
import { Outlet } from "react-router-dom";
import { UserRoleManagerProvider } from "../util/userRoleContext";
import FooterComponent from "../components/footer/FooterComponent";

const Layout = () => {
  return (
    <UserRoleManagerProvider>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </UserRoleManagerProvider>
  );
};

export default Layout;
