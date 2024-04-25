import { useEffect, useState } from "react";
import styles from "./AdminPageOrganizationListComponent.module.scss";
import getOrganizations from "../../../../lib/getOrganizations";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import AdminPageListItemComponent from "../admin-list-item/AdminPageListItemComponent";

const AdminPageOrganizationListComponent = () => {
  const [organizationList, setOrganizationList] = useState<
    Organization[] | null
  >(null);

  const fetchOrganization = async () => {
    const response = await getOrganizations();

    setOrganizationList(response);
  };

  useEffect(() => {
    fetchOrganization();
  }, [0]);

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
      {organizationList != null && (
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
      )}
    </>
  );
};

export default AdminPageOrganizationListComponent;
