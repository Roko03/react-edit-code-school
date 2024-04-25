import styles from "./AdminPageInstructorListItemComponent.module.scss";

interface AdminPageInstructorListItemComponentProps {
  instructor: Instructor;
}

const AdminPageInstructorListItemComponent: React.FC<
  AdminPageInstructorListItemComponentProps
> = ({ instructor }) => {
  return <div>AdminPageInstructorListItemComponent</div>;
};

export default AdminPageInstructorListItemComponent;
