import { useState } from "react";
import BannerComponent from "../../components/banner/BannerComponent";
import FilterComponent from "../../components/filter/FilterComponent";
import styles from "./InstructorPageSection.module.scss";
import { useSearchParams } from "react-router-dom";
import InstructorPageListComponent from "./components/instructor-list/InstructorPageListComponent";

const InstructorPageSection = () => {
  const [searchParams] = useSearchParams();

  const getFiltersByParams = () => {
    const filters = searchParams.get("filter");

    if (filters) {
      return filters.split(",");
    }

    return [];
  };
  const [filters, setFilters] = useState<string[]>(getFiltersByParams());

  return (
    <>
      <BannerComponent variant={"secondary"} title={"Predavači"} />
      <div className={styles.container}>
        <section className={styles.instructor_section}>
          <FilterComponent
            variant={"instructor"}
            filters={filters}
            setFiltersArray={(array: string[]) => setFilters(array)}
            clearFilters={() => setFilters([])}
          />
          <InstructorPageListComponent />
        </section>
      </div>
    </>
  );
};

export default InstructorPageSection;
