import styles from "./AdminPageInstructorListComponent.module.scss";
import AdminPageListItemComponent from "../../../admin-list-item/AdminPageListItemComponent";

interface AdminPageInstructorListComponentProps {
  instructorList: Instructor[];
  openEditModal: (id: string) => void;
  openDeleteModal: (id: string) => void;
}

const AdminPageInstructorListComponent: React.FC<
  AdminPageInstructorListComponentProps
> = ({ instructorList, openEditModal, openDeleteModal }) => {
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
                  deleteFunction={(id: string) => openDeleteModal(id)}
                  editFunction={(id: string) => openEditModal(id)}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className={styles.instructor_list_none}>
          <h2>Nema predavača</h2>
        </div>
      )}
    </>
  );
};

export default AdminPageInstructorListComponent;
