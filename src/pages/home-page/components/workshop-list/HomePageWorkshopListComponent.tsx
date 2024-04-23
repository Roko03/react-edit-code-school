import styles from "./HomePageWorkshopListComponent.module.scss";
import HomePageWorkshopListItemComponent from "./workshop-item/HomePageWorkshopListItemComponent";

const HomePageWorkShopListComponent = () => {
  const arr = ["ja", "ti", "ti"];

  return (
    <div className={styles.workshop_list}>
      {arr.map((index, el) => {
        return <HomePageWorkshopListItemComponent key={index} />;
      })}
    </div>
  );
};

export default HomePageWorkShopListComponent;
