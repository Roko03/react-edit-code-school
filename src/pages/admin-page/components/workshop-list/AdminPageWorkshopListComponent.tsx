import { useEffect, useState } from "react";
import getWorkshops from "../../../../lib/getWorkShops";
import styles from "./AdminPageWorkshopListComponent.module.scss";
import AdminPageWorkshopListItemComponent from "./workshop-list-item/AdminPageWorkshopListItemComponent";
import ButtonComponent from "../../../../components/button/ButtonComponent";

const AdminPageWorkshopListComponent = () => {
  const [workshopList, setWorkshopList] = useState<WorkShop[]>([]);

  const fetchWorkshops = async () => {
    const response = await getWorkshops();

    setWorkshopList(response);
  };

  useEffect(() => {
    fetchWorkshops();
  }, [0]);

  return (
    <>
      <ButtonComponent variant={"add"}>
        <img src={"/plus.svg"} alt="plus" />
        <p>Dodaj radionicu</p>
      </ButtonComponent>
      <div className={styles.workshop_list}>
        {workshopList.map((el) => {
          return (
            <AdminPageWorkshopListItemComponent workshop={el} key={el.id} />
          );
        })}
      </div>
    </>
  );
};

export default AdminPageWorkshopListComponent;
