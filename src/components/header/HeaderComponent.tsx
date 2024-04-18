import { useState } from "react";
import BurgerMenuComponent from "../burger-menu/BurgerMenuComponent";
import styles from "./HeaderComponent.module.scss";

const HeaderComponent = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__preheader}>
          <div className={styles.header__container}></div>
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
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
