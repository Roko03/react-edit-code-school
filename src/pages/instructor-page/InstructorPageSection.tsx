import BannerComponent from "../../components/banner/BannerComponent";
import styles from "./InstructorPageSection.module.scss";

const InstructorPageSection = () => {
  return (
    <>
      <BannerComponent variant={"secondary"} title={"Predavači"} />
      <div className={styles.container}>
        <section className={styles.instructor_section}></section>
      </div>
    </>
  );
};

export default InstructorPageSection;
