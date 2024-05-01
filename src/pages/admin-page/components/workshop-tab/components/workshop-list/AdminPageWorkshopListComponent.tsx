import styles from "./AdminPageWorkshopListComponent.module.scss";
import AdminPageWorkshopListItemComponent from "./workshop-list-item/AdminPageWorkshopListItemComponent";

interface AdminPageWorkshopListComponentProps {
  workshopList: WorkShop[];
  openEditModal: (id: string) => void;
  openDeleteModal: (id: string) => void;
}

const AdminPageWorkshopListComponent: React.FC<
  AdminPageWorkshopListComponentProps
> = ({ workshopList, openEditModal, openDeleteModal }) => {
  return (
    <>
      {workshopList.length > 0 ? (
        <>
          <div className={styles.workshop_list}>
            {workshopList.map((el) => {
              return (
                <AdminPageWorkshopListItemComponent
                  workshop={el}
                  key={el.id}
                  openEditModal={(id: string) => openEditModal(id)}
                  openDeleteModal={(id: string) => openDeleteModal(id)}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className={styles.workshop_list_none}>
          <h2>Nema radionica</h2>
        </div>
      )}
    </>
  );
};

export default AdminPageWorkshopListComponent;
