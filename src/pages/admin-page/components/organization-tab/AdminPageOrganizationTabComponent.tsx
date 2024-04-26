import { useEffect, useState } from "react";
import styles from "./AdminPageOrganizationTabComponent.module.scss";
import getOrganizations from "../../../../lib/getOrganizations";
import ButtonComponent from "../../../../components/button/ButtonComponent";
import CircularProgressComponent from "../../../../components/circular-progress/CircularProgressComponent";
import AdminPageOrganizationListComponent from "./organization-list/AdminPageOrganizationListComponent";

export const AdminPageOrganizationTabComponent = () => {
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
      {organizationList != null && (
        <AdminPageOrganizationListComponent
          organizationList={organizationList}
        />
      )}
    </>
  );
};
