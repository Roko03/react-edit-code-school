import { useState } from "react";
import BurgerMenuComponent from "../burger-menu/BurgerMenuComponent";
import styles from "./HeaderComponent.module.scss";
import RoleSwitcherComponent from "../role-switcher/RoleSwitcherComponent";

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
            <div className={styles.header__main__logo}>
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
            </div>
            <ul className={styles.header__main__links}>
              <li>List</li>
              <li>List</li>
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
    </>
  );
};

export default HeaderComponent;
