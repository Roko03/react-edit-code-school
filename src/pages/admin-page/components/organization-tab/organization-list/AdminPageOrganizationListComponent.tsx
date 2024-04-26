import styles from "./AdminPageOrganizationListComponent.module.scss";
import AdminPageListItemComponent from "../../admin-list-item/AdminPageListItemComponent";

interface AdminPageOrganizationListComponentProps {
  organizationList: Organization[];
}

const AdminPageOrganizationListComponent: React.FC<
  AdminPageOrganizationListComponentProps
> = ({ organizationList }) => {
  return (
    <>
      {organizationList.length > 0 ? (
        <>
          <div className={styles.organization_header}>
            <div className={styles.organization_header__list}>
              <p>Naziv organizacije</p>
              <p>Opis organizacije</p>
            </div>
          </div>
          <div className={styles.organization_list}>
            {organizationList.map((organization) => {
              return (
                <AdminPageListItemComponent
                  variant={"organization"}
                  data={organization}
                  key={organization.id}
                />
              );
            })}
          </div>
        </>
      ) : (
        <h2>Nema organizacija</h2>
      )}
    </>
  );
};

export default AdminPageOrganizationListComponent;
