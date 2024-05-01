import styles from "./HomePageWorkshopListComponent.module.scss";
import HomePageWorkshopListItemComponent from "./workshop-item/HomePageWorkshopListItemComponent";

interface HomePageWorkShopListComponentProps {
  workshopList: WorkShop[];
  openEntryModal: (id: string) => void;
}

const HomePageWorkShopListComponent: React.FC<
  HomePageWorkShopListComponentProps
> = ({ workshopList, openEntryModal }) => {
  return (
    <div className={styles.workshop_list}>
      {workshopList.map((workshop) => {
        return (
          <HomePageWorkshopListItemComponent
            key={workshop.id}
            workshopData={workshop}
            openEntryModal={(id: string) => openEntryModal(id)}
          />
        );
      })}
    </div>
  );
};

export default HomePageWorkShopListComponent;
