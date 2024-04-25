import ButtonComponent from "../../../../components/button/ButtonComponent";
import styles from "./AdminPageListItemComponent.module.scss";

interface AdminPageListItemComponentProps {
  variant: "instructor" | "organization";
  data: Instructor | Organization;
  deleteFunction?: () => void;
  editFunction?: () => void;
}

const AdminPageListItemComponent: React.FC<AdminPageListItemComponentProps> = ({
  variant,
  data,
}) => {
  let itemData;

  switch (variant) {
    case "instructor":
      itemData = () => {
        let instructorData: Instructor = data as Instructor;
        return (
          <>
            <div className={styles.list_item__image}>
              <img
                src={instructorData.imageUrl}
                alt={`${instructorData.name}-photo`}
              />
            </div>
            <div className={styles.list_item__instructor_info}>
              <p>{instructorData.name}</p>
              <p>{instructorData.biography}</p>
              <p>{instructorData.organization}</p>
            </div>
          </>
        );
      };
      break;
    case "organization":
      itemData = () => {
        let organizationData: Organization = data as Organization;
        return (
          <>
            <div className={styles.list_item__organization_info}>
              <p>{organizationData.name}</p>
              <p>{organizationData.info}</p>
            </div>
          </>
        );
      };
      break;
  }

  return (
    <div className={styles.list_item}>
      {itemData()}
      <div className={styles.list_item__buttons}>
        <ButtonComponent variant={"adminEdit"}>
          <img src={"/pencil.svg"} alt="edit" />
          <span>
            <p>Edit</p>
          </span>
        </ButtonComponent>
        <ButtonComponent variant={"adminTrash"}>
          <img src={"/trash.svg"} alt="trash" />
          <span>
            <p>Trash</p>
          </span>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default AdminPageListItemComponent;
