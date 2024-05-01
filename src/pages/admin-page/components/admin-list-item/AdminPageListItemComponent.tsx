import ButtonComponent from "../../../../components/button/ButtonComponent";
import styles from "./AdminPageListItemComponent.module.scss";

interface AdminPageListItemComponentProps {
  variant: "instructor" | "organization";
  data: Instructor | Organization;
  deleteFunction: (id: string) => void;
  editFunction: (id: string) => void;
}

const AdminPageListItemComponent: React.FC<AdminPageListItemComponentProps> = ({
  variant,
  data,
  deleteFunction,
  editFunction,
}) => {
  let itemData;
  let targetId: string;

  switch (variant) {
    case "instructor":
      itemData = () => {
        let instructorData: Instructor = data as Instructor;
        targetId = instructorData.id;
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
              {typeof instructorData.organization != "string" ? (
                <div>
                  {instructorData.organization.map((org, index) => {
                    return <p key={index}>{org}</p>;
                  })}
                </div>
              ) : (
                <p>{instructorData.organization}</p>
              )}
            </div>
          </>
        );
      };
      break;
    case "organization":
      itemData = () => {
        let organizationData: Organization = data as Organization;
        targetId = organizationData.id;
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
        <ButtonComponent
          variant={"adminEdit"}
          onClick={() => editFunction(targetId)}
        >
          <img src={"/pencil.svg"} alt="edit" />
          <span>
            <p>Edit</p>
          </span>
        </ButtonComponent>
        <ButtonComponent
          variant={"adminTrash"}
          onClick={() => deleteFunction(targetId)}
        >
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
