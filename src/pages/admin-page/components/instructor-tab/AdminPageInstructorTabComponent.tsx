import { useEffect, useState } from "react";
import getInstructors from "../../../../lib/getInstructors";
import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import AdminPageInstructorListComponent from "./instructor-list/AdminPageInstructorListComponent";
import AdminPageModalComponent from "../modal/AdminPageModalComponent";
import DialogComponent from "../../../../components/dialog/DialogComponent";
import SnackBarComponent from "../../../../components/snack-bar/SnackBarComponent";
import AdminPageInstructorAddForm from "./components/instructor-add-form/AdminPageInstructorAddForm";

const AdminPageInstructorTabComponent = () => {
  const [instructorList, setInstructorList] = useState<Instructor[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalType, setModalType] = useState<"add" | "delete" | "edit" | null>(
    null
  );

  const [isSuccessful, setIsSuccessful] = useState<boolean | null>(null);
  const [snackBarMessage, setSnackBarMessage] = useState<string>("");

  const fetchInstructors = async () => {
    setIsLoading(true);
    const response = await getInstructors();

    setInstructorList(response);
    setIsLoading(false);
  };

  const openSuccessSnackBar = (message: string) => {
    setSnackBarMessage(message);
    setIsSuccessful(true);
  };

  const openErrorSnackBar = (message: string) => {
    setSnackBarMessage(message);
    setIsSuccessful(false);
  };

  useEffect(() => {
    fetchInstructors();
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
        <p>Dodaj predavača</p>
      </ButtonComponent>
      {instructorList != null && (
        <AdminPageInstructorListComponent instructorList={instructorList} />
      )}
      <DialogComponent
        isOpen={isModalOpen}
        closeDialog={() => {
          setIsModalOpen(false);
        }}
      >
        <AdminPageModalComponent actionType={modalType}>
          {modalType == "add" ? (
            <AdminPageInstructorAddForm
              openErrorSnackBar={openErrorSnackBar}
              openSuccessSnackBar={openSuccessSnackBar}
            />
          ) : modalType == "delete" ? (
            <p>Delete</p>
          ) : (
            <p>Edit</p>
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

export default AdminPageInstructorTabComponent;
