import { useEffect, useState } from "react";
import styles from "./AdminPageWorkshopTabComponent.module.scss";
import getWorkshops from "../../../../lib/getWorkShops";
import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import AdminPageWorkshopListComponent from "./workshop-list/AdminPageWorkshopListComponent";
import DialogComponent from "../../../../components/dialog/DialogComponent";
import AdminPageModalComponent from "../modal/AdminPageModalComponent";
import AdminPageWorkshopAddForm from "./components/workshop-add-form/AdminPageWorkshopAddForm";

const AdminPageWorkshopTabComponent = () => {
  const [workshopList, setWorkshopList] = useState<WorkShop[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"add" | "edit" | "delete" | null>(
    null
  );

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
      <ButtonComponent
        variant={"add"}
        onClick={() => {
          setIsModalOpen(true);
          setModalType("add");
        }}
      >
        <img src={"/plus.svg"} alt="plus" />
        <p>Dodaj radionicu</p>
      </ButtonComponent>
      {workshopList != null && (
        <AdminPageWorkshopListComponent
          workshopList={workshopList}
          openEditModal={() => {
            setIsModalOpen(true);
            setModalType("edit");
          }}
          openDeleteModal={() => {
            setIsModalOpen(true);
            setModalType("delete");
          }}
        />
      )}
      <DialogComponent
        isOpen={isModalOpen}
        closeDialog={() => setIsModalOpen(false)}
      >
        <AdminPageModalComponent actionType={modalType}>
          {modalType == "add" ? (
            <AdminPageWorkshopAddForm fetchWorkshops={fetchWorkshops} />
          ) : modalType == "delete" ? (
            <p>Izbrisi</p>
          ) : (
            <p>Uredi</p>
          )}
        </AdminPageModalComponent>
      </DialogComponent>
    </>
  );
};

export default AdminPageWorkshopTabComponent;
