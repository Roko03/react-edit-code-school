import styles from "./AdminPageWorkshopListComponent.module.scss";
import AdminPageWorkshopListItemComponent from "./workshop-list-item/AdminPageWorkshopListItemComponent";

interface AdminPageWorkshopListComponentProps {
  workshopList: WorkShop[];
  openEditModal: () => void;
  openDeleteModal: () => void;
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
                  openEditModal={openEditModal}
                  openDeleteModal={openDeleteModal}
                />
              );
            })}
          </div>
        </>
      ) : (
        <h2>Nema radionica</h2>
      )}
    </>
  );
};

export default AdminPageWorkshopListComponent;
