import styles from "./BurgerMenuComponent.module.scss";

interface BurgerMenuComponentProps {
  isActive: boolean;
  onClick: () => void;
}

const BurgerMenuComponent: React.FC<BurgerMenuComponentProps> = ({
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`${styles.burger_menu} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <span></span>
    </div>
  );
};

export default BurgerMenuComponent;
