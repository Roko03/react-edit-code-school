import AdminPageInstructorTabComponent from "../../instructor-tab/AdminPageInstructorTabComponent";
import { AdminPageOrganizationTabComponent } from "../../organization-tab/AdminPageOrganizationTabComponent";
import AdminPageWorkshopTabComponent from "../../workshop-tab/AdminPageWorkshopTabComponent";
import styles from "./AdminPageTabsItemListComponent.module.scss";

interface AdminPageTabsItemListComponentProps {
  tabsActiveLink: "workshops" | "instructors" | "organizations";
}

const AdminPageTabsItemListComponent: React.FC<
  AdminPageTabsItemListComponentProps
> = ({ tabsActiveLink }) => {
  return (
    <div className={styles.tab_item_list}>
      <div
        className={`${styles.tab_item_list__item} ${
          tabsActiveLink == "workshops" ? styles.tab_item_list_item_active : ""
        }`}
      >
        <AdminPageWorkshopTabComponent />
      </div>
      <div
        className={`${styles.tab_item_list__item} ${
          tabsActiveLink == "instructors"
            ? styles.tab_item_list_item_active
            : ""
        }`}
      >
        <AdminPageInstructorTabComponent />
      </div>
      <div
        className={`${styles.tab_item_list__item} ${
          tabsActiveLink == "organizations"
            ? styles.tab_item_list_item_active
            : ""
        }`}
      >
        <AdminPageOrganizationTabComponent />
      </div>
    </div>
  );
};

export default AdminPageTabsItemListComponent;
