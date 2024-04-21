import { userRoleManager } from "../../util/userRoleContext";
import styles from "./LinkListComponent.module.scss";
import { NavLink } from "react-router-dom";

const LinkListComponent = () => {
  const { role } = userRoleManager();

  const linksByRole = () => {
    switch (role) {
      case "admin":
        return (
          <>
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
          </>
        );
      case "user":
        return (
          <>
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
          </>
        );
    }
  };

  return <ul className={styles.link_list}>{linksByRole()}</ul>;
};

export default LinkListComponent;
