import styles from "./InstructorPageListComponent.module.scss";
import InstructorPageListItemComponent from "./instructor-item/InstructorPageListItemComponent";

const InstructorPageListComponent = () => {
  return (
    <div className={styles.instructor_list}>
      <InstructorPageListItemComponent />
      <InstructorPageListItemComponent />
    </div>
  );
};

export default InstructorPageListComponent;
