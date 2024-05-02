import styles from "./HomePageWorkshopListComponent.module.scss";
import HomePageWorkshopListItemComponent from "./workshop-item/HomePageWorkshopListItemComponent";

interface HomePageWorkShopListComponentProps {
  workshopList: WorkShop[];
  openEntryModal: (id: string) => void;
  entryWorkshopList: string[];
}

const HomePageWorkShopListComponent: React.FC<
  HomePageWorkShopListComponentProps
> = ({ workshopList, openEntryModal, entryWorkshopList }) => {
  let listElement;
  if (workshopList.length > 3) {
    listElement = styles.workshop_list_less;
  } else if (workshopList.length == 3) {
    listElement = styles.workshop_list_more;
  } else {
    listElement = styles.workshop_list_less;
  }
  return (
    <div className={`${styles.workshop_list} ${listElement}`}>
      {workshopList.map((workshop) => {
        return (
          <HomePageWorkshopListItemComponent
            key={workshop.id}
            workshopData={workshop}
            openEntryModal={(id: string) => openEntryModal(id)}
            entryWorkshopList={entryWorkshopList}
          />
        );
      })}
    </div>
  );
};

export default HomePageWorkShopListComponent;
