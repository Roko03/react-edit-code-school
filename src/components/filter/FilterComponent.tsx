import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./FilterComponent.module.scss";
import { Virtual } from "swiper/modules";
import "./slider.scss";
import useScreenSize from "../../util/useScreenSize";
import { useEffect, useState } from "react";

interface FilterComponentProps {
  filterList: string[];
}

const FilterComponent: React.FC<FilterComponentProps> = ({ filterList }) => {
  const [slidesPerView, setSlidesPerView] = useState<number>(4);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize.width < 350) {
      setSlidesPerView(3);
    } else if (screenSize.width > 350 && screenSize.width < 550) {
      setSlidesPerView(4);
    } else if (screenSize.width > 550 && screenSize.width < 750) {
      setSlidesPerView(5);
    } else {
      setSlidesPerView(6);
    }
  }, [screenSize]);

  return (
    <>
      <div className={styles.filter_mobile}>
        <Swiper
          modules={[Virtual]}
          slidesPerView={slidesPerView}
          spaceBetween={8}
          virtual
        >
          {filterList.map((filter, index) => {
            return (
              <SwiperSlide key={index} virtualIndex={index}>
                <FilterComponentItem key={index} filterItem={filter} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={styles.filter_desktop}>
        <ul className={styles.filter_desktop__list}>
          <h2>Težine</h2>
          {filterList.map((filter, index) => {
            return <FilterComponentItem key={index} filterItem={filter} />;
          })}
        </ul>
      </div>
    </>
  );
};

interface FilterComponentItemProps {
  filterItem: string;
}

const FilterComponentItem: React.FC<FilterComponentItemProps> = ({
  filterItem,
}) => {
  return <li className={`${styles.item_active}`}>{filterItem}</li>;
};

export default FilterComponent;
