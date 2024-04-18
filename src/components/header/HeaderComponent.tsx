import { useState } from "react";
import BurgerMenuComponent from "../burger-menu/BurgerMenuComponent";
import styles from "./HeaderComponent.module.scss";
import RoleSwitcherComponent from "../role-switcher/RoleSwitcherComponent";
import { Link, NavLink } from "react-router-dom";
import MenuComponent from "./menu/MenuComponent";

const HeaderComponent = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

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
            <Link to={"/"} className={styles.header__main__logo}>
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
            <ul className={styles.header__main__links}>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? styles.header__main__links__active : ""
                  }
                >
                  Naslovna
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/radionice"}
                  className={({ isActive }) =>
                    isActive ? styles.header__main__links__active : ""
                  }
                >
                  Radionice
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/predavaci"}
                  className={({ isActive }) =>
                    isActive ? styles.header__main__links__active : ""
                  }
                >
                  Predavaci
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/admin"}
                  className={({ isActive }) =>
                    isActive ? styles.header__main__links__active : ""
                  }
                >
                  Administracija
                </NavLink>
              </li>
            </ul>
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
