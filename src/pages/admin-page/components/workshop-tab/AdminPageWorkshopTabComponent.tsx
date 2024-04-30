import { useEffect, useState } from "react";
import styles from "./AdminPageWorkshopTabComponent.module.scss";
import getWorkshops from "../../../../lib/getWorkShops";
import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import AdminPageWorkshopListComponent from "./workshop-list/AdminPageWorkshopListComponent";
import DialogComponent from "../../../../components/dialog/DialogComponent";
import AdminPageModalComponent from "../modal/AdminPageModalComponent";
import AdminPageWorkshopAddForm from "./components/workshop-add-form/AdminPageWorkshopAddForm";
import SnackBarComponent from "../../../../components/snack-bar/SnackBarComponent";
import AdminPageWorkshopEditForm from "./components/workshop-edit-form/AdminPageWorkshopEditForm";
import getWorkshopById from "../../../../lib/getWorkshopById";
import AdminPageWorkshopDeleteForm from "./components/workshop-delete-form/AdminPageWorkshopDeleteForm";
import deleteWorkshop from "../../../../lib/deleteWorkshop";

const AdminPageWorkshopTabComponent = () => {
  const [workshopList, setWorkshopList] = useState<WorkShop[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"add" | "edit" | "delete" | null>(
    null
  );

  const [isSuccessful, setIsSuccessful] = useState<boolean | null>(null);
  const [snackBarMessage, setSnackBarMessage] = useState<string>("");

  const [targetWorkShopId, setTargetWorkshopId] = useState<string | null>(null);
  const [targetWorkShop, setTargetWorkshop] = useState<WorkShop | null>(null);

  const fetchWorkshops = async () => {
    setIsLoading(true);
    const response = await getWorkshops();

    setWorkshopList(response);
    setIsLoading(false);
  };

  const fetchWorkshopById = async () => {
    if (targetWorkShopId == null) {
      return;
    }

    const response = await getWorkshopById(targetWorkShopId);

    setTargetWorkshop(response);
  };

  const deleteWorkshopById = async () => {
    if (targetWorkShopId != null) {
      const response = await deleteWorkshop(targetWorkShopId);

      if (!response.success) {
        setIsModalOpen(false);
        openErrorSnackBar(response.message);
        return;
      }

      fetchWorkshops();
      setIsModalOpen(false);
      openSuccessSnackBar(response.message);
    }
  };

  const openSuccessSnackBar = (message: string) => {
    setIsSuccessful(true);
    setSnackBarMessage(message);
  };

  const openErrorSnackBar = (message: string) => {
    setIsSuccessful(false);
    setSnackBarMessage(message);
  };

  useEffect(() => {
    fetchWorkshops();
  }, []);

  useEffect(() => {
    fetchWorkshopById();
  }, [targetWorkShopId]);

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
          openEditModal={(id: string) => {
            setIsModalOpen(true);
            setModalType("edit");
            setTargetWorkshopId(id);
          }}
          openDeleteModal={(id: string) => {
            setIsModalOpen(true);
            setModalType("delete");
            setTargetWorkshopId(id);
          }}
        />
      )}
      <DialogComponent
        isOpen={isModalOpen}
        closeDialog={() => {
          setIsModalOpen(false);
          setTargetWorkshopId(null);
        }}
      >
        <AdminPageModalComponent actionType={modalType}>
          {modalType == "add" ? (
            <AdminPageWorkshopAddForm
              fetchWorkshops={fetchWorkshops}
              openSuccessSnackBar={(message: string) =>
                openSuccessSnackBar(message)
              }
              openErrorSnackBar={(message: string) =>
                openErrorSnackBar(message)
              }
              closeModal={() => setIsModalOpen(false)}
            />
          ) : modalType == "delete" ? (
            <AdminPageWorkshopDeleteForm
              deleteWorkshopById={() => deleteWorkshopById()}
            />
          ) : (
            <AdminPageWorkshopEditForm
              workshopItem={targetWorkShop}
              fetchWorkshops={fetchWorkshops}
              openSuccessSnackBar={(message: string) =>
                openSuccessSnackBar(message)
              }
              openErrorSnackBar={(message: string) =>
                openErrorSnackBar(message)
              }
              closeModal={() => setIsModalOpen(false)}
            />
          )}
        </AdminPageModalComponent>
      </DialogComponent>
      {isSuccessful == null ? (
        <></>
      ) : isSuccessful ? (
        <SnackBarComponent
          variant={"successful"}
          onClick={() => setIsSuccessful(null)}
        >
          <p>{snackBarMessage}</p>
        </SnackBarComponent>
      ) : (
        <SnackBarComponent
          variant={"error"}
          onClick={() => setIsSuccessful(null)}
        >
          <p>{snackBarMessage}</p>
        </SnackBarComponent>
      )}
    </>
  );
};

export default AdminPageWorkshopTabComponent;
