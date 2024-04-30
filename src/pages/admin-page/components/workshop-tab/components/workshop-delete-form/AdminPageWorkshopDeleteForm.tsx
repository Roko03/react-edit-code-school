import ButtonComponent from "../../../../../../components/button/ButtonComponent";
import styles from "./AdminPageWorkshopDeleteForm.module.scss";

interface AdminPageWorkshopDeleteFormProps {
  deleteWorkshopById: () => void;
}

const AdminPageWorkshopDeleteForm: React.FC<
  AdminPageWorkshopDeleteFormProps
> = ({ deleteWorkshopById }) => {
  return (
    <div className={styles.delete_box}>
      <h2>Želite li izbrisati radionicu</h2>
      <ButtonComponent variant={"search"} onClick={deleteWorkshopById}>
        <p>Izbriši</p>
      </ButtonComponent>
    </div>
  );
};

export default AdminPageWorkshopDeleteForm;
