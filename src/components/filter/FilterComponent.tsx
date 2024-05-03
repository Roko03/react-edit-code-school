import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./FilterComponent.module.scss";
import "./slider.scss";
import { useEffect, useState } from "react";
import provideDefaultSubjectData from "../data/SelectSubjectData";
import provideDefaultDifficultyData from "../data/SelectDifficultyData";
import getOrganizations from "../../lib/organization/getOrganizations";

interface FilterComponentProps {
  variant: "workshop" | "instructor";
}

const getSubjects = provideDefaultSubjectData();
const getLevels = provideDefaultDifficultyData();

const FilterComponent: React.FC<FilterComponentProps> = ({ variant }) => {
  const [organizationsList, setOrganizationList] = useState<
    Organization[] | null
  >(null);

  const fetchOrganization = async () => {
    const response = await getOrganizations();
    setOrganizationList(response);
  };

  let filterListMobile: string[];
  let getDesktopFilters;

  switch (variant) {
    case "workshop":
      filterListMobile = [...getSubjects, ...getLevels];
      getDesktopFilters = () => {
        return (
          <>
            <ul className={styles.filter_desktop__list}>
              <h2>Teme</h2>
              {getSubjects.map((filter, index) => {
                return <FilterComponentItem key={index} filterItem={filter} />;
              })}
            </ul>
            <ul className={styles.filter_desktop__list}>
              <h2>Težine</h2>
              {getLevels.map((filter, index) => {
                return <FilterComponentItem key={index} filterItem={filter} />;
              })}
            </ul>
          </>
        );
      };
      break;
    case "instructor":
      let organizationsNames: string[] = [];
      if (organizationsList) {
        organizationsNames = organizationsList.map((organization) => {
          return organization.name;
        });
      }

      filterListMobile = [...getSubjects, ...organizationsNames];
      getDesktopFilters = () => {
        return (
          <>
            <h2>Teme</h2>
            <ul className={styles.filter_desktop__list}>
              {getSubjects.map((filter, index) => {
                return <FilterComponentItem key={index} filterItem={filter} />;
              })}
            </ul>
            <h2>Organizacije</h2>
            <ul className={styles.filter_desktop__list}>
              {organizationsNames.map((filter, index) => {
                return <FilterComponentItem key={index} filterItem={filter} />;
              })}
            </ul>
          </>
        );
      };
      break;
  }

  useEffect(() => {
    fetchOrganization();
  }, []);

  return (
    <>
      <div className={styles.filter_mobile}>
        <Swiper slidesPerView={"auto"} spaceBetween={20}>
          {filterListMobile.map((filter, index) => {
            return (
              <SwiperSlide key={index}>
                <FilterComponentItem key={index} filterItem={filter} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={styles.filter_desktop}>{getDesktopFilters()}</div>
    </>
  );
};

interface FilterComponentItemProps {
  filterItem: string;
}

const FilterComponentItem: React.FC<FilterComponentItemProps> = ({
  filterItem,
}) => {
  return (
    <li className={`${styles.item} ${styles.item_active}`}>{filterItem}</li>
  );
};

export default FilterComponent;
