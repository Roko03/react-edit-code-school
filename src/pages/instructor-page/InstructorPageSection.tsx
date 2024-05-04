import { useEffect, useState } from "react";
import BannerComponent from "../../components/banner/BannerComponent";
import FilterComponent from "../../components/filter/FilterComponent";
import styles from "./InstructorPageSection.module.scss";
import { useSearchParams } from "react-router-dom";
import InstructorPageListComponent from "./components/instructor-list/InstructorPageListComponent";
import CircularProgressComponent from "../../components/circular-progress/CircularProgressComponent";
import getInstructors from "../../lib/instructor/getInstructors";

const InstructorPageSection = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [instructorList, setInstructorList] = useState<Instructor[] | null>(
    null
  );

  const [searchParams] = useSearchParams();

  const getFiltersByParams = () => {
    const filters = searchParams.get("filter");

    if (filters) {
      return filters.split(",");
    }

    return [];
  };
  const [filters, setFilters] = useState<string[]>(getFiltersByParams());

  const fetchInstructors = async () => {
    setIsLoading(true);

    try {
      let instructors: Instructor[] = await getInstructors();

      if (instructors && filters.length > 0) {
        instructors = instructors.filter((instructor) =>
          filters.some((filter) => filter === instructor.organization)
        );
      }

      setInstructorList(instructors || []);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInstructors();
  }, [filters]);

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
          {isLoading && <CircularProgressComponent />}
          {instructorList != null && (
            <>
              {instructorList.length > 0 ? (
                <InstructorPageListComponent instructorList={instructorList} />
              ) : (
                <h2>Nemate predavača</h2>
              )}
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default InstructorPageSection;
