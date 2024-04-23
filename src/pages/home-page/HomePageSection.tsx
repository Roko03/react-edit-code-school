import BannerComponent from "../../components/banner/BannerComponent";
import styles from "./HomePageSection.module.scss";
import HomePageWorkShopListComponent from "./components/workshop-list/HomePageWorkshopListComponent";

const HomePageSection = () => {
  return (
    <>
      <BannerComponent
        variant={"main"}
        title={"Dobrodošli na Edit Code School"}
      />
      <div className={styles.container}>
        <section className={styles.home_section}>
          <div className={styles.home_section__workshop}>
            <span className={styles.home_section__small_title}>RADIONICE</span>
            <h1>Pogledaj Naše Radionice</h1>
            <HomePageWorkShopListComponent />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePageSection;
