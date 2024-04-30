import { useEffect, useState } from "react";
import BurgerMenuComponent from "../burger-menu/BurgerMenuComponent";
import styles from "./HeaderComponent.module.scss";
import RoleSwitcherComponent from "../role-switcher/RoleSwitcherComponent";
import { Link } from "react-router-dom";
import MenuComponent from "./menu/MenuComponent";
import LinkListComponent from "../link-list/LinkListComponent";
import { userRoleManager } from "../../util/userRoleContext";

const HeaderComponent = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const roleManager = userRoleManager();
  // const navigate = useNavigate();

  useEffect(() => {
    if (isAdmin) {
      roleManager.setRole("admin");
      //navigate("/admin");
    } else {
      roleManager.setRole("user");
      //navigate("/");
    }
  }, [isAdmin]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__preheader}>
          <div className={styles.header__preheader__container}>
            <RoleSwitcherComponent
              isAdmin={isAdmin}
              onClick={() => setIsAdmin(!isAdmin)}
            />
          </div>
        </div>
        <div className={styles.header__container}>
          <div className={styles.header__main}>
            <Link
              to={isAdmin ? "/admin" : "/"}
              className={styles.header__main__logo}
            >
              <img
                src={"/logo-mobile.svg"}
                alt="mobile-logo"
                className={styles.header__main__logo__mobile}
              />
              <img
                src={"/logo-desktop.svg"}
                alt="mobile-logo"
                className={styles.header__main__logo__desktop}
              />
            </Link>
            <div className={styles.header__main__links}>
              <LinkListComponent variant={"header"} />
            </div>
            <BurgerMenuComponent
              isActive={isMenuActive}
              onClick={() => setIsMenuActive(!isMenuActive)}
            />
            <div className={styles.header__main__switcher}>
              <RoleSwitcherComponent
                isAdmin={isAdmin}
                onClick={() => setIsAdmin(!isAdmin)}
              />
            </div>
          </div>
        </div>
      </header>
      <MenuComponent
        isActive={isMenuActive}
        closeModal={() => setIsMenuActive(false)}
      />
    </>
  );
};

export default HeaderComponent;
