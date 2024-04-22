import BannerComponent from "../../components/banner/BannerComponent";
import styles from "./HomePageSection.module.scss";

const HomePageSection = () => {
  return (
    <>
      <BannerComponent
        variant={"main"}
        title={"Dobrodošli na Edit Code School"}
      />
      <section className={styles.home_section}>
        <span className={styles.home_section__small_title}>RADIONICE</span>
      </section>
    </>
  );
};

export default HomePageSection;
