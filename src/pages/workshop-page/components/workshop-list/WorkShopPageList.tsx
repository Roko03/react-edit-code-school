import { useState } from "react";
import styles from "./WorkShopPageList.module.scss";
import WorkShopPageListItem from "./workshop-item/WorkShopPageListItem";

interface WorkShopPageListProps {
  workshopList: WorkShop[];
}

const WorkShopPageList: React.FC<WorkShopPageListProps> = ({
  workshopList,
}) => {
  const [workshopItemOpen, setWorkshopItemOpen] = useState<string>("");

  return (
    <div className={styles.workshop_list}>
      {workshopList.map((workshop) => {
        return (
          <WorkShopPageListItem
            key={workshop.id}
            workshop={workshop}
            workshopItemOpen={workshopItemOpen}
            setWorkshopItemOpen={(id: string) => setWorkshopItemOpen(id)}
          />
        );
      })}
    </div>
  );
};

export default WorkShopPageList;
