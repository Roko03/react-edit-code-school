import styles from "./AdminPageTabsItemComponent.module.scss";

interface AdminPageTabsItemComponentProps {
  tabsActiveLink: "workshops" | "instructors" | "organizations";
}

const AdminPageTabsItemComponent: React.FC<AdminPageTabsItemComponentProps> = ({
  tabsActiveLink,
}) => {
  const getTabItem = () => {
    switch (tabsActiveLink) {
      case "workshops":
        return <p>Radionice</p>;
      case "instructors":
        return <p>Predavači</p>;
      case "organizations":
        return <p>Organizacije</p>;
    }
  };

  return <div>{getTabItem()}</div>;
};

export default AdminPageTabsItemComponent;
