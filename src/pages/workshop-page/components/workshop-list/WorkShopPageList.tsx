import { useState } from "react";
import styles from "./WorkShopPageList.module.scss";
import WorkShopPageListItem from "./workshop-item/WorkShopPageListItem";

interface WorkShopPageListProps {
  workshopList: WorkShop[];
  openEntryModal: (id: string) => void;
  entryWorkshopList: string[];
}

const WorkShopPageList: React.FC<WorkShopPageListProps> = ({
  workshopList,
  openEntryModal,
  entryWorkshopList,
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
            setWorkshopItemOpen={(id: string) => {
              setWorkshopItemOpen(id);
            }}
            openEntryModal={(id: string) => {
              openEntryModal(id);
            }}
            entryWorkshopList={entryWorkshopList}
          />
        );
      })}
    </div>
  );
};

export default WorkShopPageList;
