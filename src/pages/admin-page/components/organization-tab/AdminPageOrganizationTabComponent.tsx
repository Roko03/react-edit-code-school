import { useEffect, useState } from "react";
import getOrganizations from "../../../../lib/getOrganizations";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";
import AdminPageOrganizationListComponent from "./organization-list/AdminPageOrganizationListComponent";
import DialogComponent from "../../../../components/dialog/DialogComponent";
import AdminPageModalComponent from "../modal/AdminPageModalComponent";
import AdminPageOrganizationAddForm from "./components/organization-add-form/AdminPageOrganizationAddForm";

export const AdminPageOrganizationTabComponent = () => {
  const [organizationList, setOrganizationList] = useState<
    Organization[] | null
  >(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"add" | "edit" | "delete" | null>(
    null
  );

  const fetchOrganization = async () => {
    setIsLoading(true);
    const response = await getOrganizations();

    setOrganizationList(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchOrganization();
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
        <p>Dodaj organizacije</p>
      </ButtonComponent>
      {organizationList != null && (
        <AdminPageOrganizationListComponent
          organizationList={organizationList}
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
            <AdminPageOrganizationAddForm />
          ) : modalType == "delete" ? (
            <p>Delete</p>
          ) : (
            <p>Edit</p>
          )}
        </AdminPageModalComponent>
      </DialogComponent>
    </>
  );
};
