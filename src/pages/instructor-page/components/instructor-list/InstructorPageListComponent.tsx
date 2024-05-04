import styles from "./InstructorPageListComponent.module.scss";
import InstructorPageListItemComponent from "./instructor-item/InstructorPageListItemComponent";

interface InstructorPageListComponentProps {
  instructorList: Instructor[];
}

const InstructorPageListComponent: React.FC<
  InstructorPageListComponentProps
> = ({ instructorList }) => {
  return (
    <div className={styles.instructor_list}>
      {instructorList.map((instructor) => {
        return <InstructorPageListItemComponent instructor={instructor} />;
      })}
    </div>
  );
};

export default InstructorPageListComponent;
