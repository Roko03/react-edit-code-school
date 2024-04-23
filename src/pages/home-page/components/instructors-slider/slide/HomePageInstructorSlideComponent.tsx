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
        <img src={"/background-banner.png"} alt="instructor-image" />
      </div>
      <div className={styles.instructor_slide__info}>
        <h2 className={styles.instructor_slide__info__name}>
          {instructor.name}
        </h2>
        <span>{instructor.organization}</span>
      </div>
    </div>
  );
};

export default HomePageInstructorSlideComponent;
