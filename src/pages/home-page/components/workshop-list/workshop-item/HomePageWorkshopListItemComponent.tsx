import styles from "./HomePageWorkshopListItemComponent.module.scss";

const HomePageWorkshopListItemComponent = () => {
  return (
    <div className={styles.workshop_list_item}>
      <div className={styles.workshop_list_item__image}>
        <img src={"/background-banner.png"} alt="workshop-item-image" />
      </div>
      <div className={styles.workshop_list_item__info}>
        <h2>Radionica 1</h2>
        <hr></hr>
        <div className={styles.workshop_list_item__info__text}>
          <span>
            <img src={"/profile.svg"} alt="profile" />
            <p>Predavač 1</p>
          </span>
          <span>
            <img src={"/calendar.svg"} alt="profile" />
            <p>Radionica 1</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePageWorkshopListItemComponent;
