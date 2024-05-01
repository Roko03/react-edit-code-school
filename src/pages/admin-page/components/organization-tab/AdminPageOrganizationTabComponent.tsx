import { useEffect, useState } from "react";
import getOrganizations from "../../../../lib/getOrganizations";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";
import AdminPageOrganizationListComponent from "./organization-list/AdminPageOrganizationListComponent";
import DialogComponent from "../../../../components/dialog/DialogComponent";
import AdminPageModalComponent from "../modal/AdminPageModalComponent";
import AdminPageOrganizationAddForm from "./components/organization-add-form/AdminPageOrganizationAddForm";
import SnackBarComponent from "../../../../components/snack-bar/SnackBarComponent";
import AdminPageOrganizationEditForm from "./components/organization-edit-form/AdminPageOrganizationEditForm";
import getOrganizationById from "../../../../lib/getOrganizationById";
import AdminPageOrganizationDeleteForm from "./components/organization-delete-form/AdminPageOrganizationDeleteForm";
import deleteOrganization from "../../../../lib/deleteOrganization";

export const AdminPageOrganizationTabComponent = () => {
  const [organizationList, setOrganizationList] = useState<
    Organization[] | null
  >(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"add" | "edit" | "delete" | null>(
    null
  );

  const [isSuccessful, setIsSuccessful] = useState<boolean | null>(null);
  const [snackBarMessage, setSnackBarMessage] = useState<string>("");

  const [targetOrganizationId, setTargetOrganizationId] = useState<string>("");
  const [targetOrganization, setTargetOrganization] =
    useState<Organization | null>(null);

  const fetchOrganization = async () => {
    setIsLoading(true);
    const response = await getOrganizations();

    setOrganizationList(response);
    setIsLoading(false);
  };

  const fetchOrganizationById = async () => {
    if (targetOrganizationId != "") {
      const response = await getOrganizationById(targetOrganizationId);

      setTargetOrganization(response);
      return;
    }
    setTargetOrganization(null);
  };

  const deleteOrganizationFunction = async () => {
    const response = await deleteOrganization(targetOrganizationId);

    setModalType(null);
    setIsModalOpen(false);

    if (!response.success) {
      openErrorSnackBar(response.message);
      return;
    }

    openSuccessSnackBar(response.message);
    fetchOrganization();
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
    fetchOrganization();
  }, []);

  useEffect(() => {
    fetchOrganizationById();
  }, [targetOrganizationId]);

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
        <p>Dodaj organizacije</p>
      </ButtonComponent>
      {organizationList != null && (
        <AdminPageOrganizationListComponent
          organizationList={organizationList}
          openEditModal={(id: string) => {
            setIsModalOpen(true);
            setModalType("edit");
            setTargetOrganizationId(id);
          }}
          openDeleteModal={(id: string) => {
            setIsModalOpen(true);
            setModalType("delete");
            setTargetOrganizationId(id);
          }}
        />
      )}
      <DialogComponent
        isOpen={isModalOpen}
        closeDialog={() => {
          setIsModalOpen(false);
          setModalType(null);
        }}
      >
        <AdminPageModalComponent actionType={modalType}>
          {modalType == "add" ? (
            <AdminPageOrganizationAddForm
              fetchOrganization={fetchOrganization}
              closeModal={() => {
                setIsModalOpen(false);
                setModalType(null);
              }}
              openSuccessSnackBar={(message: string) =>
                openSuccessSnackBar(message)
              }
              openErrorSnackBar={(message: string) =>
                openErrorSnackBar(message)
              }
            />
          ) : modalType == "delete" ? (
            <AdminPageOrganizationDeleteForm
              deleteOrganizationFunction={deleteOrganizationFunction}
            />
          ) : (
            <AdminPageOrganizationEditForm
              fetchOrganization={fetchOrganization}
              targetOrganization={targetOrganization}
              closeModal={() => {
                setIsModalOpen(false);
                setModalType(null);
              }}
              openSuccessSnackBar={(message: string) =>
                openSuccessSnackBar(message)
              }
              openErrorSnackBar={(message: string) =>
                openErrorSnackBar(message)
              }
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
