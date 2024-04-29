import styles from "./SnackBarComponent.module.scss";

interface SnackBarComponentProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant: "successful" | "error";
}

const SnackBarComponent: React.FC<SnackBarComponentProps> = ({
  children,
  variant,
  onClick,
}) => {
  let snackBarVariant;

  switch (variant) {
    case "successful":
      snackBarVariant = styles.snack_bar_successful;
      break;
    case "error":
      snackBarVariant = styles.snack_bar_error;
      break;
  }

  return (
    <div className={`${styles.snack_bar} ${snackBarVariant}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default SnackBarComponent;
