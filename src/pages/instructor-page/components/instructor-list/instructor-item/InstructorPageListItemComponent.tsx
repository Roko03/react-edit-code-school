import styles from "./InstructorPageListItemComponent.module.scss";

const InstructorPageListItemComponent = () => {
  return (
    <div className={styles.instructor_item}>
      <div className={styles.instructor_item__image}>
        <img src={"/background-banner.png"} alt="instructor-image" />
      </div>
      <div className={styles.instructor_item__info}>
        <span className={styles.instructor_item__info__name}>Predavac 1</span>
        <p className={styles.instructor_item__info__organization}>
          <span>Organizacija</span>
          <span>Organizacija</span>
        </p>
        <p className={styles.instructor_item__info__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          quibusdam?
        </p>
      </div>
    </div>
  );
};

export default InstructorPageListItemComponent;
