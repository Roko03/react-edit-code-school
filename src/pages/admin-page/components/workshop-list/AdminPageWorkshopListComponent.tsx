import { useEffect, useState } from "react";
import getWorkshops from "../../../../lib/getWorkShops";
import styles from "./AdminPageWorkshopListComponent.module.scss";
import AdminPageWorkshopListItemComponent from "./workshop-list-item/AdminPageWorkshopListItemComponent";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";

const AdminPageWorkshopListComponent = () => {
  const [workshopList, setWorkshopList] = useState<WorkShop[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchWorkshops = async () => {
    setIsLoading(true);
    const response = await getWorkshops();

    setWorkshopList(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWorkshops();
  }, []);

  if (isLoading) {
    return <CircularProgressComponent />;
  }

  return (
    workshopList !== null &&
    (workshopList.length > 0 ? (
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
    ) : (
      <h2>Nema radionica</h2>
    ))
  );
};

export default AdminPageWorkshopListComponent;
