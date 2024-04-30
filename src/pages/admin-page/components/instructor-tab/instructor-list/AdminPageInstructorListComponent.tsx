import styles from "./AdminPageInstructorListComponent.module.scss";
import AdminPageListItemComponent from "../../admin-list-item/AdminPageListItemComponent";

interface AdminPageInstructorListComponentProps {
  instructorList: Instructor[];
}

const AdminPageInstructorListComponent: React.FC<
  AdminPageInstructorListComponentProps
> = ({ instructorList }) => {
  return (
    <>
      {instructorList.length > 0 ? (
        <>
          <div className={styles.instructor_header}>
            <div className={styles.instructor_header__box}></div>
            <div className={styles.instructor_header__list}>
              <p>Naziv predavača</p>
              <p>Biografija predavača</p>
              <p>Organizacije</p>
            </div>
          </div>
          <div className={styles.instructor_list}>
            {instructorList.map((instructor) => {
              return (
                <AdminPageListItemComponent
                  variant={"instructor"}
                  data={instructor}
                  key={instructor.id}
                />
              );
            })}
          </div>
        </>
      ) : (
        <h2>Nema predavača</h2>
      )}
    </>
  );
};

export default AdminPageInstructorListComponent;
