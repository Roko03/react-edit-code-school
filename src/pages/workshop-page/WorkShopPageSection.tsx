import { useEffect, useState } from "react";
import BannerComponent from "../../components/banner/BannerComponent";
import styles from "./WorkShopPageSection.module.scss";
import getWorkshops from "../../lib/workshop/getWorkShops";
import CircularProgressComponent from "../../components/circular-progress/CircularProgressComponent";
import WorkShopPageList from "./components/workshop-list/WorkShopPageList";
import FilterComponent from "../../components/filter/FilterComponent";
import getWorkshopById from "../../lib/workshop/getWorkshopById";
import EntryWorkshopModalComponent from "../../components/entry-modal/EntryWorkshopModalComponent";

const WorkShopPageSection = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [workshopList, setWorkshopList] = useState<WorkShop[] | null>(null);

  const [filters, setFilters] = useState<string[]>([]);

  const [targetWorkshopId, setTargetWorkshopId] = useState<string>("");
  const [targetWorkshop, setTargetWorkshop] = useState<WorkShop | null>(null);

  const [isEntryModalOpen, setIsEntryModalOpen] = useState<boolean>(false);
  const [entryWorkshopList, setEntryWorkshopList] = useState<string[]>([]);

  const fetchWorkshop = async () => {
    setIsLoading(true);
    const reponse = await getWorkshops();

    setWorkshopList(reponse);
    setIsLoading(false);
  };

  const fetchWorkshopById = async () => {
    if (targetWorkshopId != "") {
      const reponse = await getWorkshopById(targetWorkshopId);

      setTargetWorkshop(reponse);
    }
  };

  useEffect(() => {
    fetchWorkshop();
  }, []);

  useEffect(() => {
    fetchWorkshopById();
  }, [targetWorkshopId]);

  return (
    <>
      <BannerComponent title={"Radionice"} variant={"secondary"} />
      <div className={styles.container}>
        <section className={styles.workshop_section}>
          <FilterComponent
            variant={"workshop"}
            filters={filters}
            setFilters={(value: string) => setFilters([...filters, value])}
            clearFilters={() => setFilters([])}
          />
          {isLoading && <CircularProgressComponent />}
          {workshopList != null && (
            <>
              {workshopList.length > 0 ? (
                <WorkShopPageList
                  workshopList={workshopList}
                  openEntryModal={(id: string) => {
                    setTargetWorkshopId(id);
                    setIsEntryModalOpen(true);
                  }}
                  entryWorkshopList={entryWorkshopList}
                />
              ) : (
                <h2>Nemate radionica</h2>
              )}
            </>
          )}
        </section>
      </div>
      <EntryWorkshopModalComponent
        isModalOpen={isEntryModalOpen}
        closeModal={() => {
          setTargetWorkshop(null);
          setIsEntryModalOpen(false);
        }}
        targetWorkshop={targetWorkshop}
        setEntryWorkshopList={(id: string) =>
          setEntryWorkshopList([...entryWorkshopList, id])
        }
      />
    </>
  );
};

export default WorkShopPageSection;
