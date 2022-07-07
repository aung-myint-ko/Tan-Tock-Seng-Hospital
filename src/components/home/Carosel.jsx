import React from "react";
import "../../css_modules/Carosel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Carosel = () => {
  return (
    <div data-aos="fade-down">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper carouselSwiper"
      >
        <SwiperSlide className="carousel-slide">
          <img src="images/background1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <img src="images/background3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <img src="images/background2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <img src="images/background4.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carosel;
