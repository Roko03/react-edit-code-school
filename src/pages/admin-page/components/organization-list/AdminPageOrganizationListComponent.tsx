import { useEffect, useState } from "react";
import styles from "./AdminPageOrganizationListComponent.module.scss";
import getOrganizations from "../../../../lib/getOrganizations";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import AdminPageListItemComponent from "../admin-list-item/AdminPageListItemComponent";
import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";

const AdminPageOrganizationListComponent = () => {
  const [organizationList, setOrganizationList] = useState<
    Organization[] | null
  >(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      <ButtonComponent variant={"add"}>
        <img src={"/plus.svg"} alt="plus" />
        <p>Dodaj organizacije</p>
      </ButtonComponent>
      <div className={styles.organization_header}>
        <div className={styles.organization_header__list}>
          <p>Naziv organizacije</p>
          <p>Opis organizacije</p>
        </div>
      </div>
      {organizationList != null &&
        (organizationList.length > 0 ? (
          <div className={styles.organization_list}>
            {organizationList.map((organization) => {
              return (
                <AdminPageListItemComponent
                  variant={"organization"}
                  data={organization}
                  key={organization.id}
                />
              );
            })}
          </div>
        ) : (
          <h2>Nema organizacija</h2>
        ))}
    </>
  );
};

export default AdminPageOrganizationListComponent;
