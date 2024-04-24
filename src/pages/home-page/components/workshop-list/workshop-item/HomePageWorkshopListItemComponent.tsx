import ButtonComponent from "../../../../../components/button/ButtonComponent";
import styles from "./HomePageWorkshopListItemComponent.module.scss";

interface HomePageWorkshopListItemComponentProps {
  workshopData: WorkShop;
}

const HomePageWorkshopListItemComponent: React.FC<
  HomePageWorkshopListItemComponentProps
> = ({ workshopData }) => {
  return (
    <div className={styles.workshop_list_item}>
      <div className={styles.workshop_list_item__image}>
        <img src={"/background-banner.png"} alt="workshop-item-image" />
      </div>
      <div className={styles.workshop_list_item__info}>
        <h2>{workshopData.name}</h2>
        <hr></hr>
        <div className={styles.workshop_list_item__info__text}>
          <span>
            <img src={"/profile.svg"} alt="profile" />
            <p>{workshopData.instructor}</p>
          </span>
          <span>
            <img src={"/calendar.svg"} alt="profile" />
            <p>{workshopData.date}</p>
          </span>
        </div>
      </div>
      <div className={styles.workshop_list_item__overlay}>
        <ButtonComponent variant={"entry"}>
          <p>Prijavi se</p>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default HomePageWorkshopListItemComponent;
