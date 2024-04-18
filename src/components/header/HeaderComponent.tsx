import styles from "./HeaderComponent.module.scss";

const HeaderComponent = () => {
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
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
