import { useEffect, useState } from "react";
import styles from "./AdminPageInstructorTabComponent.module.scss";
import getInstructors from "../../../../lib/getInstructors";
import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import AdminPageInstructorListComponent from "./instructor-list/AdminPageInstructorListComponent";

const AdminPageInstructorTabComponent = () => {
  const [instructorList, setInstructorList] = useState<Instructor[] | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchInstructors = async () => {
    setIsLoading(true);
    const response = await getInstructors();

    setInstructorList(response);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchInstructors();
  }, []);

  if (isLoading) {
    return <CircularProgressComponent />;
  }

  return (
    <>
      <ButtonComponent variant={"add"}>
        <img src={"/plus.svg"} alt="plus" />
        <p>Dodaj predavača</p>
      </ButtonComponent>
      {instructorList != null && (
        <AdminPageInstructorListComponent instructorList={instructorList} />
      )}
    </>
  );
};

export default AdminPageInstructorTabComponent;
