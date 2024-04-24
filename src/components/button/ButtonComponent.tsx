import styles from "./ButtonComponent.module.scss";

interface ButtonComponentProps {
  variant: "add" | "entry" | "search" | "adminEdit" | "adminTrash";
  children: React.ReactNode;
  onClick?: () => void;
  enabled?: boolean;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  variant,
  children,
  onClick,
  enabled,
}) => {
  let buttonStyle;

  switch (variant) {
    case "add":
      buttonStyle = styles.add_button;
      break;
    case "entry":
      buttonStyle = styles.entry_button;
      break;
    case "search":
      buttonStyle = styles.search_button;
      break;
    case "adminEdit":
      buttonStyle = `${styles.admin_button} ${styles.edit_button}`;
      break;
    case "adminTrash":
      buttonStyle = `${styles.admin_button} ${styles.trash_button}`;
  }

  return (
    <button
      className={`${styles.button} ${buttonStyle}`}
      onClick={onClick}
      disabled={enabled}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
