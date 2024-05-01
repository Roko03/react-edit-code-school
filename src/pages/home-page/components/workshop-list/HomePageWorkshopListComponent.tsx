import styles from "./HomePageWorkshopListComponent.module.scss";
import HomePageWorkshopListItemComponent from "./workshop-item/HomePageWorkshopListItemComponent";

interface HomePageWorkShopListComponentProps {
  workshopList: WorkShop[];
}

const HomePageWorkShopListComponent: React.FC<
  HomePageWorkShopListComponentProps
> = ({ workshopList }) => {
  return (
    <div className={styles.workshop_list}>
      {workshopList.map((workshop) => {
        return (
          <HomePageWorkshopListItemComponent
            key={workshop.id}
            workshopData={workshop}
          />
        );
      })}
    </div>
  );
};

export default HomePageWorkShopListComponent;
