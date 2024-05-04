import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./FilterComponent.module.scss";
import "./slider.scss";
import { useEffect, useState } from "react";
import provideDefaultSubjectData from "../data/SelectSubjectData";
import provideDefaultDifficultyData from "../data/SelectDifficultyData";
import getOrganizations from "../../lib/organization/getOrganizations";
import { useSearchParams } from "react-router-dom";

interface FilterComponentProps {
  variant: "workshop" | "instructor";
  filters: string[];
  setFiltersArray: (array: string[]) => void;
  clearFilters: () => void;
}

const getSubjects = provideDefaultSubjectData();
const getLevels = provideDefaultDifficultyData();

const FilterComponent: React.FC<FilterComponentProps> = ({
  variant,
  filters,
  setFiltersArray,
  clearFilters,
}) => {
  const [organizationsList, setOrganizationList] = useState<
    Organization[] | null
  >(null);

  const fetchOrganization = async () => {
    const response = await getOrganizations();
    setOrganizationList(response);
  };

  const [, setSearchParams] = useSearchParams();

  let filterListMobile: string[];
  let getDesktopFilters;

  const putFilterInArray = (value: string) => {
    const isInArray = filters.some((filter) => filter == value);

    if (!isInArray) {
      let filtersArray = [...filters, value];
      setFiltersArray(filtersArray);

      const stringFiltersArray = filtersArray.join(",");

      setSearchParams({ filter: stringFiltersArray });
    } else {
      let filtersArray = filters.filter((filter) => filter != value);

      setFiltersArray(filtersArray);

      const stringFiltersArray = filtersArray.join(",");

      setSearchParams({ filter: stringFiltersArray });
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
                    setFilter={(value: string) => putFilterInArray(value)}
                    filters={filters}
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
                    setFilter={(value: string) => putFilterInArray(value)}
                    filters={filters}
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

      filterListMobile = [...organizationsNames];
      getDesktopFilters = () => {
        return (
          <>
            <h2>Organizacije</h2>
            <ul className={styles.filter_desktop__list}>
              {organizationsNames.map((filter, index) => {
                return (
                  <FilterComponentItem
                    key={index}
                    filterItem={filter}
                    setFilter={(value: string) => putFilterInArray(value)}
                    filters={filters}
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
            <button
              className={styles.delete_filters}
              onClick={() => {
                clearFilters();
                setSearchParams("");
              }}
            >
              <p>Izbriši filtere</p>
            </button>
          </SwiperSlide>
          {filterListMobile.map((filter, index) => {
            return (
              <SwiperSlide key={index}>
                <FilterComponentItem
                  key={index}
                  filterItem={filter}
                  setFilter={(value: string) => putFilterInArray(value)}
                  filters={filters}
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
          onClick={() => {
            clearFilters();
            setSearchParams("");
          }}
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
  filters: string[];
}

const FilterComponentItem: React.FC<FilterComponentItemProps> = ({
  filterItem,
  setFilter,
  filters,
}) => {
  return (
    <li
      onClick={() => setFilter(filterItem)}
      className={`${styles.item} ${
        filters.some((el) => el == filterItem) ? styles.item_active : ""
      }`}
    >
      {filterItem}
    </li>
  );
};

export default FilterComponent;
