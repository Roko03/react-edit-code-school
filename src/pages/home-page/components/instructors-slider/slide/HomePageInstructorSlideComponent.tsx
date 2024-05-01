import "./instructor-slide.scss";

import styles from "./HomePageInstructorSlideComponent.module.scss";

interface HomePageInstructorSlideComponentProps {
  instructor: Instructor;
}

const HomePageInstructorSlideComponent: React.FC<
  HomePageInstructorSlideComponentProps
> = ({ instructor }) => {
  return (
    <div className={styles.instructor_slide}>
      <div className={styles.instructor_slide__image}>
        <img src={instructor.imageUrl} alt="instructor-image" />
      </div>
      <div className={styles.instructor_slide__info}>
        <h2 className={styles.instructor_slide__info__name}>
          {instructor.name}
        </h2>
        {typeof instructor.organization == "string" ? (
          <span className={styles.instructor_slide__info__organization}>
            {instructor.organization}
          </span>
        ) : (
          <div className={styles.instructor_slide__info__organization}>
            {instructor.organization.map((org, index) => {
              return <span key={index}>{org}</span>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePageInstructorSlideComponent;
