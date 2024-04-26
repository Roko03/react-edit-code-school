import { useEffect, useState } from "react";
import styles from "./AdminPageWorkshopTabComponent.module.scss";
import getWorkshops from "../../../../lib/getWorkShops";
import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import AdminPageWorkshopListComponent from "./workshop-list/AdminPageWorkshopListComponent";

const AdminPageWorkshopTabComponent = () => {
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
    <>
      <ButtonComponent variant={"add"}>
        <img src={"/plus.svg"} alt="plus" />
        <p>Dodaj radionicu</p>
      </ButtonComponent>
      {workshopList != null && (
        <AdminPageWorkshopListComponent workshopList={workshopList} />
      )}
    </>
  );
};

export default AdminPageWorkshopTabComponent;
