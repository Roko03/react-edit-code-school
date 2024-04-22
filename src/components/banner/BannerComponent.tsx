import styles from "./BannerComponent.module.scss";

interface BannerComponentProps {
  variant: "main" | "secondary";
  title: string;
}

const BannerComponent: React.FC<BannerComponentProps> = ({
  variant,
  title,
}) => {
  return (
    <div
      className={`${styles.banner} ${
        variant == "main" ? styles.banner_main : styles.banner_secondary
      }`}
    >
      <div className={styles.banner__image}>
        <img src={"/background-banner.png"} alt="banner-image" />
      </div>
      <div className={styles.banner__text}>
        <h1>{title}</h1>
      </div>
      <div className={styles.banner__wave}>
        <img src={"/white-background-wave.svg"} alt="wave-image" />
      </div>
    </div>
  );
};

export default BannerComponent;
