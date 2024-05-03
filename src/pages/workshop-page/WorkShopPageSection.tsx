import { useEffect, useState } from "react";
import BannerComponent from "../../components/banner/BannerComponent";
import styles from "./WorkShopPageSection.module.scss";
import getWorkshops from "../../lib/workshop/getWorkShops";
import CircularProgressComponent from "../../components/circular-progress/CircularProgressComponent";
import WorkShopPageList from "./components/workshop-list/WorkShopPageList";
import FilterComponent from "../../components/filter/FilterComponent";

const WorkShopPageSection = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [workshopList, setWorkshopList] = useState<WorkShop[] | null>(null);

  const [filters, setFilters] = useState<string[]>([]);

  const fetchWorkshop = async () => {
    setIsLoading(true);
    const reponse = await getWorkshops();

    setWorkshopList(reponse);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWorkshop();
  }, []);

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
                <WorkShopPageList workshopList={workshopList} />
              ) : (
                <h2>Nemate radionica</h2>
              )}
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default WorkShopPageSection;
