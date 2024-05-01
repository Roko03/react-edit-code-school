import ButtonComponent from "../../../../../../components/button/ButtonComponent";
import styles from "./AdminPageOrganizationDeleteForm.module.scss";

interface AdminPageOrganizationDeleteFormProps {
  deleteOrganizationFunction: () => void;
}

const AdminPageOrganizationDeleteForm: React.FC<
  AdminPageOrganizationDeleteFormProps
> = ({ deleteOrganizationFunction }) => {
  return (
    <div className={styles.organization_delete_box}>
      <h2>Želite li izbrisati organizaciju</h2>
      <ButtonComponent variant={"search"} onClick={deleteOrganizationFunction}>
        <p>Izbriši</p>
      </ButtonComponent>
    </div>
  );
};

export default AdminPageOrganizationDeleteForm;
