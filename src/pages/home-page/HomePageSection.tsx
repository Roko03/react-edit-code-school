import { useEffect, useState } from "react";
import BannerComponent from "../../components/banner/BannerComponent";
import styles from "./HomePageSection.module.scss";
import HomePageInstructorSliderComponent from "./components/instructors-slider/HomePageInstructorSliderComponent";
import HomePageWorkShopListComponent from "./components/workshop-list/HomePageWorkshopListComponent";
import getWorkshops from "../../lib/workshop/getWorkShops";
import getInstructors from "../../lib/instructor/getInstructors";
import EntryWorkshopModalComponent from "../../components/entry-modal/EntryWorkshopModalComponent";
import getWorkshopById from "../../lib/workshop/getWorkshopById";

const HomePageSection = () => {
  const [workshopList, setWorkshopList] = useState<WorkShop[]>([]);
  const [instructorList, setInstructorList] = useState<Instructor[]>([]);

  const [isEntryModalOpen, setIsEntryModalOpen] = useState<boolean>(false);

  const [targetWorkshopId, setTargetWorkshopId] = useState<string>("");
  const [targetWorkshop, setTargetWorkshop] = useState<WorkShop | null>(null);

  const fetchWorkshops = async () => {
    const response = await getWorkshops();

    setWorkshopList(response);
  };

  const fetchWorkshopById = async () => {
    if (targetWorkshopId != "") {
      const response = await getWorkshopById(targetWorkshopId);

      setTargetWorkshop(response);
      return;
    }

    setTargetWorkshop(null);
  };

  const fetchInstructors = async () => {
    const response = await getInstructors();

    setInstructorList(response);
  };

  useEffect(() => {
    fetchWorkshops();
    fetchInstructors();
  }, []);

  useEffect(() => {
    fetchWorkshopById();
  }, [targetWorkshopId]);

  return (
    <>
      <BannerComponent
        variant={"main"}
        title={"Dobrodošli na Edit Code School"}
      />
      <div className={styles.container}>
        <section className={styles.home_section}>
          {workshopList.length > 0 && (
            <div className={styles.home_section__box}>
              <span className={styles.home_section__small_title}>
                RADIONICE
              </span>
              <h1>Pogledaj Naše Radionice</h1>
              <HomePageWorkShopListComponent
                workshopList={workshopList}
                openEntryModal={(id: string) => {
                  setIsEntryModalOpen(true);
                  setTargetWorkshopId(id);
                }}
              />
            </div>
          )}
          {instructorList.length > 0 && (
            <div className={styles.home_section__box}>
              <span className={styles.home_section__small_title}>
                PREDAVAČI
              </span>
              <h1>Pogledaj Naše Predavače</h1>
              <HomePageInstructorSliderComponent
                instructorList={instructorList}
              />
            </div>
          )}
        </section>
      </div>
      <EntryWorkshopModalComponent
        isModalOpen={isEntryModalOpen}
        closeModal={() => setIsEntryModalOpen(false)}
        targetWorkshop={targetWorkshop}
      />
    </>
  );
};

export default HomePageSection;
