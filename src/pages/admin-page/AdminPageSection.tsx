import { useState } from "react";
import BannerComponent from "../../components/banner/BannerComponent";
import styles from "./AdminPageSection.module.scss";
import AdminPageTabsLinkComponent from "./components/tabs/tabs-links/AdminPageTabsLinkComponent";
import { useSearchParams } from "react-router-dom";
import AdminPageTabsItemListComponent from "./components/tabs/tabs-item-list/AdminPageTabsItemListComponent";

const AdminPageSection = () => {
  let [searchParams] = useSearchParams();

  let query: "workshops" | "instructors" | "organizations" =
    searchParams.get("tab") !== null
      ? (searchParams.get("tab") as
          | "workshops"
          | "instructors"
          | "organizations")
      : "workshops";

  const [tabActiveLink, setTabActiveLink] = useState<
    "workshops" | "instructors" | "organizations"
  >(query);

  return (
    <>
      <BannerComponent variant={"secondary"} title={"Administracija"} />
      <div className={styles.container}>
        <section className={styles.admin_section}>
          <AdminPageTabsLinkComponent
            tabActiveLink={tabActiveLink}
            setTabActiveLink={(
              value: "workshops" | "instructors" | "organizations"
            ) => setTabActiveLink(value)}
          />
          <AdminPageTabsItemListComponent tabsActiveLink={tabActiveLink} />
        </section>
      </div>
    </>
  );
};

export default AdminPageSection;
