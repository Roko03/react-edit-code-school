import { useEffect, useRef } from "react";
import styles from "./MenuComponent.module.scss";
import useScreenSize from "../../../util/useScreenSize";
import LinkListComponent from "../../link-list/LinkListComponent";
import { Link } from "react-router-dom";

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

    document.addEventListener("mousedown", handleOutSideBox);

    return () => {
      document.removeEventListener("mousedown", handleOutSideBox);
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
      <div className={styles.menu__box} ref={menuRef}>
        <div className={styles.menu__box__container}>
          <Link to={"/"} className={styles.menu__box__logo}>
            <img
              src={"/logo-mobile.svg"}
              alt="mobile.logo"
              className={styles.menu__box__logo__mobile}
            />
            <img
              src={"/logo-desktop.svg"}
              alt="mobile.logo"
              className={styles.menu__box__logo__desktop}
            />
          </Link>
          <LinkListComponent variant={"header"} />
        </div>
      </div>
    </div>
  );
};

export default MenuComponent;
