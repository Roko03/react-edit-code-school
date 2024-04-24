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
  const arr: Instructor[] = [
    {
      id: "predavac_1",
      name: "Predavac 1",
      imageUrl: "/",
      biography: "Biografija predavaca 1",
      organization: "organizacija_1",
    },
    {
      id: "predavac_2",
      name: "Predavac 2",
      imageUrl: "/",
      biography: "Biografija predavaca 2",
      organization: "organizacija_1",
    },
  ];

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
        {arr.map((instructor, index) => {
          return (
            <SwiperSlide key={index} virtualIndex={index}>
              <HomePageInstructorSlideComponent instructor={instructor} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HomePageInstructorSliderComponent;
