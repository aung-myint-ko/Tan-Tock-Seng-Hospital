import React from "react";
import { Link } from "react-router-dom";
import "../css_modules/SpecialCenter.css";
import CenterCard from "./specialityCenter/CenterCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

export const SpecialCenterSwiper = ({ centerData }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper sCenterSwiper mb-10"
    >
      {centerData.map((center) => {
        return (
          <SwiperSlide className="sCenter-slide" key={center.id}>
            <Link to={`/speciality-centers/${center.id}`}>
              <CenterCard
                imgURl={center.imgURL}
                title={center.title}
                description={center.description}
              />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export const SpecialCenterGrid = ({ centerData }) => {
  return (
    <div className="mx-9 sm:mx-16 md:mx-24 mb-10 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
      {centerData.map((center) => {
        return (
          <Link key={center.id} to={`/speciality-centers/${center.id}`}>
            <CenterCard
              imgURl={center.imgURL}
              title={center.title}
              description={center.description}
            />
          </Link>
        );
      })}
    </div>
  );
};

export const ServicePackageSwiper = ({ centerData, domain }) => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      className="mySwiper sCenterSwiper mt-4 "
    >
      {centerData.map((center) => {
        return (
          <SwiperSlide className="sCenter-slide" key={center.id}>
            <Link to={`/services-packages/${domain}/${center.id}`}>
              <CenterCard imgURl={center.imgURL} title={center.title} />
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export const ServicePackageGrid = ({ centerData, domain }) => {
  return (
    <div className="sm:pt-5 mb-10 sm:grid sm:grid-cols-3 lg:grid-cols-4 sm:gap-4">
      {centerData.map((center) => {
        return (
          <Link
            key={center.id}
            to={`/services-packages/${domain}/${center.id}`}
          >
            <CenterCard imgURl={center.imgURL} title={center.title} />
          </Link>
        );
      })}
    </div>
  );
};
