import ButtonComponent from "../../../../../../components/button/ButtonComponent";
import styles from "./AdminPageWorkshopListItemComponent.module.scss";

interface AdminPageWorkshopListItemComponentProps {
  workshop: WorkShop;
  openEditModal: () => void;
  openDeleteModal: () => void;
}

const AdminPageWorkshopListItemComponent: React.FC<
  AdminPageWorkshopListItemComponentProps
> = ({ workshop, openEditModal, openDeleteModal }) => {
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
          <span>{workshop.instructor}</span>
          <p>{workshop.info}</p>
          <span className={styles.workshop_item__info__top__partners}>
            {workshop.level}
          </span>
        </div>
        <div className={styles.workshop_item__info__bottom}>
          <span className={styles.workshop_item__info__bottom__counter}>
            <img src={"/people.svg"} alt="people" width={28} height={28} />
            <p>{workshop.numOfEntry}</p>
          </span>
          <ul className={styles.workshop_item__info__bottom__tags}>
            {workshop.tags.map((tag, index) => {
              return <li key={index}>{tag}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPageWorkshopListItemComponent;
