import { useEffect, useState } from "react";
import BannerComponent from "../../components/banner/BannerComponent";
import styles from "./HomePageSection.module.scss";
import HomePageInstructorSliderComponent from "./components/instructors-slider/HomePageInstructorSliderComponent";
import HomePageWorkShopListComponent from "./components/workshop-list/HomePageWorkshopListComponent";
import getWorkshops from "../../lib/workshop/getWorkShops";
import getInstructors from "../../lib/instructor/getInstructors";

const HomePageSection = () => {
  const [workshopList, setWorkshopList] = useState<WorkShop[]>([]);
  const [instructorList, setInstructorList] = useState<Instructor[]>([]);

  const fetchWorkshops = async () => {
    const response = await getWorkshops();

    setWorkshopList(response);
  };

  const fetchInstructors = async () => {
    const response = await getInstructors();

    setInstructorList(response);
  };

  useEffect(() => {
    fetchWorkshops();
    fetchInstructors();
  }, []);

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
              <HomePageWorkShopListComponent workshopList={workshopList} />
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
    </>
  );
};

export default HomePageSection;
