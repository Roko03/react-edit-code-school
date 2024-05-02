import { useEffect, useState } from "react";
import BannerComponent from "../../components/banner/BannerComponent";
import styles from "./WorkShopPageSection.module.scss";
import getWorkshops from "../../lib/workshop/getWorkShops";
import CircularProgressComponent from "../../components/circular-progress/CircularProgressComponent";
import WorkShopPageList from "./components/workshop-list/WorkShopPageList";
import provideDefaultSubjectData from "../../components/data/SelectSubjectData";
import provideDefaultDifficultyData from "../../components/data/SelectDifficultyData";
import FilterComponent from "../../components/filter/FilterComponent";

const getSubjects = provideDefaultSubjectData();
const getLevels = provideDefaultDifficultyData();

const WorkShopPageSection = () => {
  const filterArray: string[] = [...getSubjects, ...getLevels];
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [workshopList, setWorkshopList] = useState<WorkShop[] | null>(null);

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
          <FilterComponent filterList={filterArray} />
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
