import { useState } from "react";
import BannerComponent from "../../components/banner/BannerComponent";
import styles from "./AdminPageSection.module.scss";
import AdminPageTabsLinkComponent from "./components/tabs-links/AdminPageTabsLinkComponent";

const AdminPageSection = () => {
  const [tabActiveLink, setTabActiveLink] = useState<
    "workshops" | "instructors" | "organizations"
  >("workshops");

  console.log(tabActiveLink);

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
        </section>
      </div>
    </>
  );
};

export default AdminPageSection;
