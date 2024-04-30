import ButtonComponent from "../../../../../../components/button/ButtonComponent";
import styles from "./AdminPageWorkshopDeleteForm.module.scss";

const AdminPageWorkshopDeleteForm = () => {
  return (
    <div className={styles.delete_box}>
      <h2>Želite li izbrisati radionicu</h2>
      <ButtonComponent variant={"search"}>
        <p>Izbriši</p>
      </ButtonComponent>
    </div>
  );
};

export default AdminPageWorkshopDeleteForm;
