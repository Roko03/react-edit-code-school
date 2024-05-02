import styles from "./WorkShopPageList.module.scss";
import WorkShopPageListItem from "./workshop-item/WorkShopPageListItem";

interface WorkShopPageListProps {
  workshopList: WorkShop[];
}

const WorkShopPageList: React.FC<WorkShopPageListProps> = ({
  workshopList,
}) => {
  return (
    <div className={styles.workshop_list}>
      {workshopList.map((workshop) => {
        return <WorkShopPageListItem key={workshop.id} workshop={workshop} />;
      })}
    </div>
  );
};

export default WorkShopPageList;
