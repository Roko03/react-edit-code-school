import BannerComponent from "../../components/banner/BannerComponent";
import styles from "./AdminPageSection.module.scss";

const AdminPageSection = () => {
  return (
    <>
      <BannerComponent variant={"secondary"} title={"Administracija"} />
      <div className={styles.container}>
        <section className={styles.admin_section}>
          <div className={styles.admin_section__tabs}>
            <ul>
              <li></li>
            </ul>
          </div>
        </section>
        ;
      </div>
    </>
  );
};

export default AdminPageSection;
