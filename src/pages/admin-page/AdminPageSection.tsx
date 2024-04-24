import { useState } from "react";
import BannerComponent from "../../components/banner/BannerComponent";
import styles from "./AdminPageSection.module.scss";

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
          <ul className={styles.admin_section__tabs_links}>
            <li
              onClick={() => setTabActiveLink("workshops")}
              className={`${
                tabActiveLink == "workshops" ? styles.tab_active : ""
              }`}
            >
              Radionice
            </li>
            <li
              onClick={() => setTabActiveLink("instructors")}
              className={`${
                tabActiveLink == "instructors" ? styles.tab_active : ""
              }`}
            >
              Predavači
            </li>
            <li
              onClick={() => setTabActiveLink("organizations")}
              className={`${
                tabActiveLink == "organizations" ? styles.tab_active : ""
              }`}
            >
              Organizacije
            </li>
          </ul>
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setTabActiveLink(
                `${
                  e.target.value as
                    | "workshops"
                    | "instructors"
                    | "organizations"
                }`
              )
            }
            value={tabActiveLink}
            className={styles.admin_section__tabs_select}
          >
            <option value={"workshops"}>Radionice</option>
            <option value={"instructors"}>Predavači</option>
            <option value={"organizations"}>Organizacije</option>
          </select>
        </section>
      </div>
    </>
  );
};

export default AdminPageSection;
