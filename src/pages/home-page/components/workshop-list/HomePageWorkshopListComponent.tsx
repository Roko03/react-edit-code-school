import styles from "./HomePageWorkshopListComponent.module.scss";
import HomePageWorkshopListItemComponent from "./workshop-item/HomePageWorkshopListItemComponent";

const HomePageWorkShopListComponent = () => {
  const arr: WorkShop[] = [
    {
      id: "radionica_1",
      name: "Radionica 1",
      imageUrl: "/",
      date: "01.01.2025",
      instructor: "predavac_1",
      info: "Kratki opis radionice 1",
      numOfEntry: 0,
    },
  ];

  return (
    <div className={styles.workshop_list}>
      {arr.map((workshop) => {
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
