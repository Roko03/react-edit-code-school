import { useEffect, useState } from "react";
import getInstructors from "../../../../lib/getInstructors";
import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import AdminPageInstructorListComponent from "./instructor-list/AdminPageInstructorListComponent";
import AdminPageModalComponent from "../modal/AdminPageModalComponent";
import DialogComponent from "../../../../components/dialog/DialogComponent";
import SnackBarComponent from "../../../../components/snack-bar/SnackBarComponent";
import AdminPageInstructorAddForm from "./components/instructor-add-form/AdminPageInstructorAddForm";
import AdminPageInstructorEditForm from "./components/instructor-edit-form/AdminPageInstructorEditForm";
import getInstructorById from "../../../../lib/getInstructorById";
import AdminPageInstructorDeleteForm from "./components/instructor-delete-form/AdminPageInstructorDeleteForm";

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

  const [targetInstructorId, setTargetInstructorId] = useState<string>("");
  const [targetInstructor, setTargetInstructor] = useState<Instructor | null>(
    null
  );

  const fetchInstructors = async () => {
    setIsLoading(true);
    const response = await getInstructors();

    setInstructorList(response);
    setIsLoading(false);
  };

  const fetchInstructorById = async () => {
    if (targetInstructorId != "") {
      const response = await getInstructorById(targetInstructorId);

      setTargetInstructor(response);
      return;
    }

    setTargetInstructor(null);
  };

  const deleteInstructorFunction = () => {
    setModalType(null);
    setIsModalOpen(false);
    console.log(targetInstructorId);
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

  useEffect(() => {
    fetchInstructorById();
  }, [targetInstructorId]);

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
        <AdminPageInstructorListComponent
          instructorList={instructorList}
          openEditModal={(id: string) => {
            setIsModalOpen(true);
            setModalType("edit");
            setTargetInstructorId(id);
          }}
          openDeleteModal={(id: string) => {
            setIsModalOpen(true);
            setModalType("delete");
            setTargetInstructorId(id);
          }}
        />
      )}
      <DialogComponent
        isOpen={isModalOpen}
        closeDialog={() => {
          setIsModalOpen(false);
          setTargetInstructorId("");
        }}
      >
        <AdminPageModalComponent actionType={modalType}>
          {modalType == "add" ? (
            <AdminPageInstructorAddForm
              fetchInstructor={() => fetchInstructors()}
              closeModal={() => setIsModalOpen(false)}
              openErrorSnackBar={openErrorSnackBar}
              openSuccessSnackBar={openSuccessSnackBar}
            />
          ) : modalType == "delete" ? (
            <AdminPageInstructorDeleteForm
              deleteInstructor={deleteInstructorFunction}
            />
          ) : (
            <AdminPageInstructorEditForm
              targetInstructor={targetInstructor}
              fetchInstructor={() => fetchInstructors()}
              closeModal={() => setIsModalOpen(false)}
              openErrorSnackBar={openErrorSnackBar}
              openSuccessSnackBar={openSuccessSnackBar}
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

export default AdminPageInstructorTabComponent;
