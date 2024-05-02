import styles from "./WorkShopPageListItem.module.scss";

interface WorkShopPageListItemProps {
  workshop: WorkShop;
}

const WorkShopPageListItem: React.FC<WorkShopPageListItemProps> = ({
  workshop,
}) => {
  return <div>WorkShopPageListItem</div>;
};

export default WorkShopPageListItem;
