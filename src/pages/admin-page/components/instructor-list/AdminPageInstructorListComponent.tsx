import { useEffect, useState } from "react";
import styles from "./AdminPageInstructorListComponent.module.scss";
import getInstructors from "../../../../lib/getInstructors";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import AdminPageListItemComponent from "../admin-list-item/AdminPageListItemComponent";

const AdminPageInstructorListComponent = () => {
  const [instructorList, setInstructorList] = useState<Instructor[] | null>(
    null
  );

  const fetchInstructors = async () => {
    const response = await getInstructors();

    setInstructorList(response);
  };

  useEffect(() => {
    fetchInstructors();
  }, [0]);

  return (
    <>
      <ButtonComponent variant={"add"}>
        <img src={"/plus.svg"} alt="plus" />
        <p>Dodaj predavača</p>
      </ButtonComponent>
      {instructorList != null && (
        <div className={styles.instructor_list}>
          {instructorList.map((instructor) => {
            return (
              <AdminPageListItemComponent
                variant={"instructor"}
                data={instructor}
                key={instructor.id}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default AdminPageInstructorListComponent;
