import { useEffect, useState } from "react";
import ButtonComponent from "../../../../../components/button/ButtonComponent";
import getInstructorById from "../../../../../lib/instructor/getInstructorById";
import styles from "./HomePageWorkshopListItemComponent.module.scss";

interface HomePageWorkshopListItemComponentProps {
  workshopData: WorkShop;
  openEntryModal: (id: string) => void;
}

const HomePageWorkshopListItemComponent: React.FC<
  HomePageWorkshopListItemComponentProps
> = ({ workshopData, openEntryModal }) => {
  const [workshopInstructor, setWorkshopInstructor] =
    useState<Instructor | null>(null);

  const fetchWorkshopInstructor = async () => {
    const response = await getInstructorById(workshopData.instructor);

    setWorkshopInstructor(response);
  };

  useEffect(() => {
    fetchWorkshopInstructor();
  }, []);

  return (
    <div className={styles.workshop_list_item}>
      <div className={styles.workshop_list_item__image}>
        <img src={workshopData.imageUrl} alt="workshop-item-image" />
      </div>
      <div className={styles.workshop_list_item__info}>
        <h2>{workshopData.name}</h2>
        <hr></hr>
        <div className={styles.workshop_list_item__info__text}>
          {workshopInstructor != null && (
            <span>
              <img src={"/profile.svg"} alt="profile" />
              <p>{workshopInstructor.name}</p>
            </span>
          )}
          <span>
            <img src={"/calendar.svg"} alt="profile" />
            <p>{workshopData.date}</p>
          </span>
        </div>
      </div>
      <div className={styles.workshop_list_item__overlay}>
        <ButtonComponent
          variant={"entry"}
          onClick={() => openEntryModal(workshopData.id)}
        >
          <p>Prijavi se</p>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default HomePageWorkshopListItemComponent;
