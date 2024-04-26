import { useEffect, useState } from "react";
import styles from "./AdminPageInstructorListComponent.module.scss";
import getInstructors from "../../../../lib/getInstructors";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import AdminPageListItemComponent from "../admin-list-item/AdminPageListItemComponent";
import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";

const AdminPageInstructorListComponent = () => {
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
      <div className={styles.instructor_header}>
        <div className={styles.instructor_header__box}></div>
        <div className={styles.instructor_header__list}>
          <p>Naziv predavača</p>
          <p>Biografija predavača</p>
          <p>Organizacije</p>
        </div>
      </div>
      {instructorList != null &&
        (instructorList.length > 0 ? (
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
        ) : (
          <h2>Nema predavača</h2>
        ))}
    </>
  );
};

export default AdminPageInstructorListComponent;
