import styles from "./AdminPageWorkshopListItemComponent.module.scss";

interface AdminPageWorkshopListItemComponentProps {
  workshop: WorkShop;
}

const AdminPageWorkshopListItemComponent: React.FC<
  AdminPageWorkshopListItemComponentProps
> = ({ workshop }) => {
  return (
    <div className={styles.workshop_item}>
      <div className={styles.workshop_item__image}>
        <img src={"/background-banner.png"} alt={`${workshop.name}-image`} />
      </div>
      <div className={styles.workshop_item__info}>
        <div className={styles.workshop_item__info__top}>
          <h2>Ime radionice</h2>
          <span>Predavač</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
            quasi!
          </p>
          <span className={styles.workshop_item__info__top__partners}>
            Partneri
          </span>
        </div>
        <div className={styles.workshop_item__info__bottom}>
          <span className={styles.workshop_item__info__bottom__counter}>
            <img src={"/people.svg"} alt="people" width={28} height={28} />
            <p>46</p>
          </span>
          <ul className={styles.workshop_item__info__bottom__tags}>
            <li>React</li>
            <li>Next.JS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPageWorkshopListItemComponent;
