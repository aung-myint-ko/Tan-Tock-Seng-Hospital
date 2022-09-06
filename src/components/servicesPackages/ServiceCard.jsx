import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ServiceCard = ({ title, imgURL }) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-once="true"
      className="relative zoom_in center_card w-4/5 mx-auto sm:w-full cursor-pointer "
    >
      <LazyLoadImage className=" rounded" src={imgURL} alt="" />
      <div className="overley rounded">
        <h5 className=" text-base sm:text-sm tracking-wider absolute bottom-5 left-4 sm:bottom-4 sm:left-3 text-white font-bold ">
          {title}
        </h5>
      </div>
    </div>
  );
};
export default ServiceCard;
