import styles from "./LinkListComponent.module.scss";
import { NavLink } from "react-router-dom";

const LinkListComponent = () => {
  return (
    <ul className={styles.link_list}>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? styles.link_list__active : ""
          }
        >
          Naslovna
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/radionice"}
          className={({ isActive }) =>
            isActive ? styles.link_list__active : ""
          }
        >
          Radionice
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/predavaci"}
          className={({ isActive }) =>
            isActive ? styles.link_list__active : ""
          }
        >
          Predavaci
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/admin"}
          className={({ isActive }) =>
            isActive ? styles.link_list__active : ""
          }
        >
          Administracija
        </NavLink>
      </li>
    </ul>
  );
};

export default LinkListComponent;
