import React from "react";
import Filp from "react-reveal/Flip";
const ServiceCard = ({ title, imgURL }) => {
  return (
    <Filp left duration={1500}>
      <div className="relative zoom_in center_card w-4/5 mx-auto sm:w-full cursor-pointer ">
        <img className=" rounded" src={imgURL} alt="" />
        <div className="overley rounded">
          <h5 className=" text-base sm:text-sm tracking-wider absolute bottom-5 left-4 sm:bottom-4 sm:left-3 text-white font-bold ">
            {title}
          </h5>
        </div>
      </div>
    </Filp>
  );
};
export default ServiceCard;
