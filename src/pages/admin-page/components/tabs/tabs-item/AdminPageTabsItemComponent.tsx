import AdminPageInstructorListComponent from "../../instructor-list/AdminPageInstructorListComponent";
import AdminPageOrganizationListComponent from "../../organization-list/AdminPageOrganizationListComponent";
import AdminPageWorkshopListComponent from "../../workshop-list/AdminPageWorkshopListComponent";
import styles from "./AdminPageTabsItemComponent.module.scss";

interface AdminPageTabsItemComponentProps {
  tabsActiveLink: "workshops" | "instructors" | "organizations";
}

const AdminPageTabsItemComponent: React.FC<AdminPageTabsItemComponentProps> = ({
  tabsActiveLink,
}) => {
  const getTabItem = () => {
    switch (tabsActiveLink) {
      case "workshops":
        return <AdminPageWorkshopListComponent />;
      case "instructors":
        return <AdminPageInstructorListComponent />;
      case "organizations":
        return <AdminPageOrganizationListComponent />;
    }
  };

  return <div>{getTabItem()}</div>;
};

export default AdminPageTabsItemComponent;
