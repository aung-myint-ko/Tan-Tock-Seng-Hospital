import React from "react";
import "../../css_modules/SpecialCenter.css";

const CenterCard = ({ imgURl, title, description }) => {
  return (
    <div
      data-aos="flip-right"
      data-aos-duration="1500"
      className="relative zoom_in center_card w-4/5 mx-auto  sm:w-full cursor-pointer "
    >
      <img className="rounded" src={imgURl} alt="" />
      <div className="overley rounded">
        <div className=" absolute bottom-5 left-4 sm:bottom-4 sm:left-3 text-white">
          <h5 className=" text-base sm:text-sm tracking-wider font-bold ">
            {title}
          </h5>
          <p className=" text-xs font-extralight">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CenterCard;
