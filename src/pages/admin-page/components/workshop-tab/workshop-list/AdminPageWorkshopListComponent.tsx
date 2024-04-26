import styles from "./AdminPageWorkshopListComponent.module.scss";
import AdminPageWorkshopListItemComponent from "./workshop-list-item/AdminPageWorkshopListItemComponent";

interface AdminPageWorkshopListComponentProps {
  workshopList: WorkShop[];
}

const AdminPageWorkshopListComponent: React.FC<
  AdminPageWorkshopListComponentProps
> = ({ workshopList }) => {
  return (
    <>
      {workshopList.length > 0 ? (
        <>
          <div className={styles.workshop_list}>
            {workshopList.map((el) => {
              return (
                <AdminPageWorkshopListItemComponent workshop={el} key={el.id} />
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
