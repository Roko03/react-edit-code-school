import ButtonComponent from "../../../../../../components/button/ButtonComponent";
import styles from "./AdminPageInstructorDeleteForm.module.scss";

interface AdminPageInstructorDeleteFormProps {
  deleteInstructor: () => void;
}

const AdminPageInstructorDeleteForm: React.FC<
  AdminPageInstructorDeleteFormProps
> = ({ deleteInstructor }) => {
  return (
    <div className={styles.instructor_delete_box}>
      <h2>Želite li izbrisati predavača</h2>
      <ButtonComponent variant={"search"} onClick={deleteInstructor}>
        <p>Izbriši</p>
      </ButtonComponent>
    </div>
  );
};

export default AdminPageInstructorDeleteForm;
