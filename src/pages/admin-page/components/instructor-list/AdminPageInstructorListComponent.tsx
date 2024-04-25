import { useEffect, useState } from "react";
import styles from "./AdminPageInstructorListComponent.module.scss";
import getInstructors from "../../../../lib/getInstructors";
import AdminPageInstructorListItemComponent from "./instructor-list-item/AdminPageInstructorListItemComponent";
import ButtonComponent from "../../../../components/button/ButtonComponent";

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
              <AdminPageInstructorListItemComponent
                instructor={instructor}
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
