import styles from "./AdminPageTabsLinkComponent.module.scss";

interface AdminPageTabsLinkComponentProps {
  tabActiveLink: string;
  setTabActiveLink: (
    value: "workshops" | "instructors" | "organizations"
  ) => void;
}

const AdminPageTabsLinkComponent: React.FC<AdminPageTabsLinkComponentProps> = ({
  tabActiveLink,
  setTabActiveLink,
}) => {
  return (
    <>
      <ul className={styles.admin_tabs_links}>
        <li
          onClick={() => setTabActiveLink("workshops")}
          className={`${tabActiveLink == "workshops" ? styles.tab_active : ""}`}
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
            `${e.target.value as "workshops" | "instructors" | "organizations"}`
          )
        }
        value={tabActiveLink}
        className={styles.admin_tabs_select}
      >
        <option value={"workshops"}>Radionice</option>
        <option value={"instructors"}>Predavači</option>
        <option value={"organizations"}>Organizacije</option>
      </select>
    </>
  );
};

export default AdminPageTabsLinkComponent;
