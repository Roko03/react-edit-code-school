import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HomePageInstructorSliderComponent.scss";
import useScreenSize from "../../../../util/useScreenSize";
import HomePageInstructorSlideComponent from "./slide/HomePageInstructorSlideComponent";

const HomePageInstructorSliderComponent = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(4);
  const screenSize = useScreenSize();
  const arr = ["ja", "ti"];

  useEffect(() => {
    if (screenSize.width < 500) {
      setSlidesPerView(1);
    } else if (screenSize.width > 500 && screenSize.width < 750) {
      setSlidesPerView(2);
    } else if (screenSize.width > 750 && screenSize.width < 1150) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  }, [screenSize]);

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={slidesPerView}
        spaceBetween={30}
        navigation={true}
        virtual
      >
        {arr.map((el, index) => {
          return (
            <SwiperSlide key={index} virtualIndex={index}>
              <HomePageInstructorSlideComponent index={index} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HomePageInstructorSliderComponent;
