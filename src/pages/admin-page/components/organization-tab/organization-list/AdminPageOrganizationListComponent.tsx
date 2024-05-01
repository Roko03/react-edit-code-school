import styles from "./AdminPageOrganizationListComponent.module.scss";
import AdminPageListItemComponent from "../../admin-list-item/AdminPageListItemComponent";

interface AdminPageOrganizationListComponentProps {
  organizationList: Organization[];
  openEditModal: (id: string) => void;
  openDeleteModal: (id: string) => void;
}

const AdminPageOrganizationListComponent: React.FC<
  AdminPageOrganizationListComponentProps
> = ({ organizationList, openEditModal, openDeleteModal }) => {
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
                  editFunction={(id: string) => openEditModal(id)}
                  deleteFunction={(id: string) => openDeleteModal(id)}
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
