import { useEffect, useState } from "react";
import BannerComponent from "../../components/banner/BannerComponent";
import styles from "./WorkShopPageSection.module.scss";
import getWorkshops from "../../lib/workshop/getWorkShops";
import CircularProgressComponent from "../../components/circular-progress/CircularProgressComponent";

const WorkShopPageSection = () => {
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
        {isLoading && <CircularProgressComponent />}
        {workshopList != null && (
          <>{workshopList.length < 0 ? <></> : <h2>Nemate radionica</h2>}</>
        )}
      </div>
    </>
  );
};

export default WorkShopPageSection;
