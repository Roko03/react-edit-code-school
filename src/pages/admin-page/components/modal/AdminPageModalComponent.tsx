import styles from "./AdminPageModalComponent.module.scss";

interface AdminPageModalComponentProps {
  actionType: "edit" | "add" | "delete" | null;
  children: React.ReactNode;
}

const AdminPageModalComponent: React.FC<AdminPageModalComponentProps> = ({
  actionType,
  children,
}) => {
  let modalClass;

  switch (actionType) {
    case "add":
      modalClass = styles.modal_add;
      break;
    case "edit":
      modalClass = styles.modal_edit;
      break;
    case "delete":
      modalClass = styles.modal_delete;
      break;
    case null:
      modalClass = styles.modal;
      break;
  }

  if (actionType == null) return <></>;

  return <div className={modalClass}>{children}</div>;
};

export default AdminPageModalComponent;
