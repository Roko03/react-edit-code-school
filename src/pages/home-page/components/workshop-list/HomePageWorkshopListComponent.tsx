import styles from "./HomePageWorkshopListComponent.module.scss";
import HomePageWorkshopListItemComponent from "./workshop-item/HomePageWorkshopListItemComponent";

const HomePageWorkShopListComponent = () => {
  const arr: WorkShop[] = [
    {
      id: "b1d86ea1-d1a0-4fea-ae44-9e21c74d767b",
      name: "Radionica 1",
      date: "2024-04-10",
      instructor: "4a95a8c6-138c-4eb0-8808-43972642bc6a",
      info: "Radionica o Reactu",
      level: "junior",
      subject: "react",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/edit-code-school-image.appspot.com/o/radionice%2Fslika1.jpg9b7829a1-ca7c-4c05-8d93-065ad459fc2c?alt=media&token=c8337c7a-84d5-49ff-9bb3-f93fe89dcdef",
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
