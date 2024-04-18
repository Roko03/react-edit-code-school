import { useEffect, useRef } from "react";
import styles from "./MenuComponent.module.scss";
import useScreenSize from "../../../util/useScreenSize";

interface MenuComponentProps {
  isActive: boolean;
  closeModal: () => void;
}

const MenuComponent: React.FC<MenuComponentProps> = ({
  isActive,
  closeModal,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const screenSize = useScreenSize();

  useEffect(() => {
    const handleOutSideBox = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeModal();
      }
    };

    return () => {
      document.addEventListener("mousedown", handleOutSideBox);
    };
  }, []);

  useEffect(() => {
    if (isActive && screenSize.width < 1150) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive, screenSize]);

  return (
    <div className={`${styles.menu} ${isActive ? styles.menu_active : ""}`}>
      <div className={styles.menu__box} ref={menuRef}></div>
    </div>
  );
};

export default MenuComponent;
