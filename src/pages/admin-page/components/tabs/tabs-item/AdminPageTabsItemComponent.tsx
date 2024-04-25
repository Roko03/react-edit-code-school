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
  return (
    <div className={styles.tab_item_list}>
      <div
        className={`${styles.tab_item_list__item} ${
          tabsActiveLink == "workshops" ? styles.tab_item_list_item_active : ""
        }`}
      >
        <AdminPageWorkshopListComponent />
      </div>
      <div
        className={`${styles.tab_item_list__item} ${
          tabsActiveLink == "instructors"
            ? styles.tab_item_list_item_active
            : ""
        }`}
      >
        <AdminPageInstructorListComponent />
      </div>
      <div
        className={`${styles.tab_item_list__item} ${
          tabsActiveLink == "organizations"
            ? styles.tab_item_list_item_active
            : ""
        }`}
      >
        <AdminPageOrganizationListComponent />
      </div>
    </div>
  );
};

export default AdminPageTabsItemComponent;
