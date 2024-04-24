import { useEffect, useState } from "react";
import getWorkshops from "../../../../lib/getWorkShops";
import styles from "./AdminPageWorkshopListComponent.module.scss";
import AdminPageWorkshopListItemComponent from "./workshop-list-item/AdminPageWorkshopListItemComponent";

const AdminPageWorkshopListComponent = () => {
  const [workshopList, setWorkshopList] = useState<WorkShop[]>([]);

  const fetchWorkshops = async () => {
    const response = await getWorkshops();

    setWorkshopList(response);
  };

  useEffect(() => {
    fetchWorkshops();
  }, [0]);

  console.log(workshopList);

  return (
    <div className={styles.workshop_list}>
      {workshopList.map((el) => {
        return <AdminPageWorkshopListItemComponent workshop={el} key={el.id} />;
      })}
    </div>
  );
};

export default AdminPageWorkshopListComponent;
