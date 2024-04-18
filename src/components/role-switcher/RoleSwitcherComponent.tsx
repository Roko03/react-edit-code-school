import styles from "./RoleSwitcherComponent.module.scss";

interface RoleSwitcherComponentProps {
  isAdmin: boolean;
  onClick: () => void;
}

const RoleSwitcherComponent: React.FC<RoleSwitcherComponentProps> = ({
  isAdmin,
  onClick,
}) => {
  return (
    <label className={styles.role_switcher} onClick={onClick}>
      {isAdmin ? (
        <span className={styles.role_switcher__active_span}>Admin</span>
      ) : (
        <span>Admin</span>
      )}
      <div className={styles.role_switcher__toogle}>
        <div
          className={`${styles.role_switcher__toogle__item} ${
            isAdmin ? styles.role_switcher__toogle__item__active : ""
          }`}
        ></div>
      </div>
      {isAdmin ? (
        <span>User</span>
      ) : (
        <span className={styles.role_switcher__active_span}>User</span>
      )}
    </label>
  );
};

export default RoleSwitcherComponent;
