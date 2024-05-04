import styles from "./InstructorPageListItemComponent.module.scss";

interface InstructorPageListItemComponentProps {
  instructor: Instructor;
}

const InstructorPageListItemComponent: React.FC<
  InstructorPageListItemComponentProps
> = ({ instructor }) => {
  return (
    <div className={styles.instructor_item}>
      <div className={styles.instructor_item__image}>
        <img src={instructor.imageUrl} alt="instructor-image" />
      </div>
      <div className={styles.instructor_item__info}>
        <span className={styles.instructor_item__info__name}>
          {instructor.name}
        </span>
        <p className={styles.instructor_item__info__organization}>
          {typeof instructor.organization == "string" ? (
            <span>{instructor.organization}</span>
          ) : (
            <>
              {instructor.organization.map((organization) => (
                <span>{organization}</span>
              ))}
            </>
          )}
        </p>
        <p className={styles.instructor_item__info__text}>
          {instructor.biography}
        </p>
      </div>
    </div>
  );
};

export default InstructorPageListItemComponent;
