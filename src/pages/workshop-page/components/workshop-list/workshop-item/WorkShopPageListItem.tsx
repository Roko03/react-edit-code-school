import ButtonComponent from "../../../../../components/button/ButtonComponent";
import formatDate from "../../../../../util/formatDate";
import styles from "./WorkShopPageListItem.module.scss";

interface WorkShopPageListItemProps {
  workshop: WorkShop;
  workshopItemOpen: string;
  setWorkshopItemOpen: (id: string) => void;
}

const WorkShopPageListItem: React.FC<WorkShopPageListItemProps> = ({
  workshop,
  workshopItemOpen,
  setWorkshopItemOpen,
}) => {
  return (
    <div className={styles.workshop_item}>
      <div
        className={styles.workshop_item__accordion}
        onClick={() => {
          if (workshopItemOpen == workshop.id) {
            setWorkshopItemOpen("");
          } else {
            setWorkshopItemOpen(workshop.id);
          }
        }}
      >
        <div className={styles.workshop_item__accordion__image}>
          <img src={workshop.imageUrl} alt={`${workshop.name}-image`} />
        </div>
        <div className={styles.workshop_item__accordion__main_info}>
          <div className={styles.workshop_item__accordion__main_info__datas}>
            <p>{workshop.name}</p>
            <p>{workshop.instructor}</p>
            <p>{formatDate(workshop.date)}</p>
          </div>
          <ButtonComponent variant={"entry"}>
            <p>Prijavi se</p>
          </ButtonComponent>
        </div>
      </div>
      <div
        className={`${styles.workshop_item__accordion_item} ${
          workshopItemOpen == workshop.id
            ? styles.workshop_item__accordion_item_open
            : styles.workshop_item__accordion_item_close
        }`}
      >
        <div className={styles.workshop_item__accordion_item__box}>
          <p>
            <span>Broj prijava:</span>
            {workshop.numOfEntry}
          </p>
          <p>
            <span>Težina:</span>
            {workshop.level}
          </p>
          <p>
            <span>Predmet:</span>
            {workshop.subject}
          </p>
          <p>{workshop.info}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkShopPageListItem;
