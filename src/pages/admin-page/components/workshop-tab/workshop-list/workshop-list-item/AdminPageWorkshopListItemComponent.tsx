import { useEffect, useState } from "react";
import ButtonComponent from "../../../../../../components/button/ButtonComponent";
import styles from "./AdminPageWorkshopListItemComponent.module.scss";
import getInstructorById from "../../../../../../lib/getInstructorById";

interface AdminPageWorkshopListItemComponentProps {
  workshop: WorkShop;
  openEditModal: () => void;
  openDeleteModal: () => void;
}

const AdminPageWorkshopListItemComponent: React.FC<
  AdminPageWorkshopListItemComponentProps
> = ({ workshop, openEditModal, openDeleteModal }) => {
  const [instructorName, setInstructorName] = useState<Instructor | null>();

  const fetchInstructorById = async () => {
    const response = await getInstructorById(workshop.instructor);

    setInstructorName(response);
  };

  useEffect(() => {
    fetchInstructorById();
  }, []);

  return (
    <div className={styles.workshop_item}>
      <div className={styles.workshop_item__image}>
        <img src={workshop.imageUrl} alt={`${workshop.name}-image`} />
        <div className={styles.workshop_item__buttons}>
          <ButtonComponent variant={"adminEdit"} onClick={openEditModal}>
            <img src={"/pencil.svg"} alt="edit" />
            <span>
              <p>Edit</p>
            </span>
          </ButtonComponent>
          <ButtonComponent variant={"adminTrash"} onClick={openDeleteModal}>
            <img src={"/trash.svg"} alt="trash" />
            <span>
              <p>Trash</p>
            </span>
          </ButtonComponent>
        </div>
      </div>
      <div className={styles.workshop_item__info}>
        <div className={styles.workshop_item__info__top}>
          <h2>{workshop.name}</h2>
          <span>{instructorName?.name}</span>
          <p>{workshop.info}</p>
          <span className={styles.workshop_item__info__top__level}>
            {workshop.level}
          </span>
        </div>
        <div className={styles.workshop_item__info__bottom}>
          <span className={styles.workshop_item__info__bottom__counter}>
            <img src={"/people.svg"} alt="people" width={28} height={28} />
            <p>{workshop.numOfEntry}</p>
          </span>
          <p className={styles.workshop_item__info__bottom__subject}>
            {workshop.subject}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPageWorkshopListItemComponent;
