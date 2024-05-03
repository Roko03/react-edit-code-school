import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./FilterComponent.module.scss";
import "./slider.scss";
import { useEffect, useState } from "react";
import provideDefaultSubjectData from "../data/SelectSubjectData";
import provideDefaultDifficultyData from "../data/SelectDifficultyData";
import getOrganizations from "../../lib/organization/getOrganizations";

interface FilterComponentProps {
  variant: "workshop" | "instructor";
  filters: string[];
  setFilters: (value: string) => void;
  clearFilters: () => void;
}

const getSubjects = provideDefaultSubjectData();
const getLevels = provideDefaultDifficultyData();

const FilterComponent: React.FC<FilterComponentProps> = ({
  variant,
  filters,
  setFilters,
  clearFilters,
}) => {
  const [organizationsList, setOrganizationList] = useState<
    Organization[] | null
  >(null);

  const fetchOrganization = async () => {
    const response = await getOrganizations();
    setOrganizationList(response);
  };

  let filterListMobile: string[];
  let getDesktopFilters;

  const inputFilterInArray = (value: string) => {
    const isInArray = filters.some((filter) => filter == value);

    if (!isInArray) {
      setFilters(value);
    }
  };

  switch (variant) {
    case "workshop":
      filterListMobile = [...getSubjects, ...getLevels];
      getDesktopFilters = () => {
        return (
          <>
            <ul className={styles.filter_desktop__list}>
              <h2>Teme</h2>
              {getSubjects.map((filter, index) => {
                return (
                  <FilterComponentItem
                    key={index}
                    filterItem={filter}
                    setFilter={(value: string) => inputFilterInArray(value)}
                  />
                );
              })}
            </ul>
            <ul className={styles.filter_desktop__list}>
              <h2>Težine</h2>
              {getLevels.map((filter, index) => {
                return (
                  <FilterComponentItem
                    key={index}
                    filterItem={filter}
                    setFilter={(value: string) => inputFilterInArray(value)}
                  />
                );
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
                return (
                  <FilterComponentItem
                    key={index}
                    filterItem={filter}
                    setFilter={(value: string) => inputFilterInArray(value)}
                  />
                );
              })}
            </ul>
            <h2>Organizacije</h2>
            <ul className={styles.filter_desktop__list}>
              {organizationsNames.map((filter, index) => {
                return (
                  <FilterComponentItem
                    key={index}
                    filterItem={filter}
                    setFilter={(value: string) => inputFilterInArray(value)}
                  />
                );
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
          <SwiperSlide>
            <button className={styles.delete_filters} onClick={clearFilters}>
              <p>Izbriši filtere</p>
            </button>
          </SwiperSlide>
          ;
          {filterListMobile.map((filter, index) => {
            return (
              <SwiperSlide key={index}>
                <FilterComponentItem
                  key={index}
                  filterItem={filter}
                  setFilter={(value: string) => inputFilterInArray(value)}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={styles.filter_desktop}>
        {getDesktopFilters()}
        <button
          className={`${styles.delete_filters} ${
            filters.length > 0 ? styles.delete_filters_active : ""
          }`}
          onClick={clearFilters}
        >
          <p>Izbriši filtere</p>
        </button>
      </div>
    </>
  );
};

interface FilterComponentItemProps {
  filterItem: string;
  setFilter: (value: string) => void;
}

const FilterComponentItem: React.FC<FilterComponentItemProps> = ({
  filterItem,
  setFilter,
}) => {
  return (
    <li onClick={() => setFilter(filterItem)} className={`${styles.item}`}>
      {filterItem}
    </li>
  );
};

export default FilterComponent;
