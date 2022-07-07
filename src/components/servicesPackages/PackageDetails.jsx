import React, { useEffect } from "react";
import { useContext } from "react";
import { HospitalContext } from "../..";
import RedirectingLinks from "./RedirectingLinks";

const PackageDetails = ({ title, imgURL, price, details }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { PackageData } = useContext(HospitalContext);
  return (
    <div className=" overflow-hidden pt_adjustment mx-5 sm:mx-16 md:mx-24 mb-10 md:grid md:grid-cols-4 md:gap-10">
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="col-span-3"
      >
        <h3 className="red pt-6 pb-3 text-xl md:text-2xl font-semibold border-b border-black ">
          {title}
        </h3>
        <p className="mt-2">Cost: {price}</p>
        <img
          className=" my-3 md:my-6 h-40 md:w-5/6 md:h-80"
          src={imgURL}
          alt=""
        />
        <ul data-aos="fade-right" data-aos-duration="1000">
          {details.map((detail) => {
            return (
              <li key={detail} className=" flex mt-1">
                <img
                  className="bullet-img"
                  src="/images/small_logo.png"
                  alt=""
                />
                <p className=" my-auto h-fit text-xs sm:text-sm font-thin">
                  {detail}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <RedirectingLinks Data={PackageData} />
    </div>
  );
};

export default PackageDetails;
