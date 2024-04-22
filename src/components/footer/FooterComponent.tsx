import styles from "./FooterComponent.module.scss";
const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wave}>
        <img src="/blue-background-wave.svg" alt="blue-background-wave" />
      </div>
      <div className={styles.footer__box}>
        <div className={styles.footer__box__container}></div>
      </div>
    </footer>
  );
};

export default FooterComponent;
