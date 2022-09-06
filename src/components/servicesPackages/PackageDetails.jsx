import React, { useEffect } from "react";
import { useContext } from "react";
import { HospitalContext } from "../..";
import RedirectingLinks from "./RedirectingLinks";
import Fade from "react-reveal/Fade";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PackageDetails = ({ title, imgURL, price, details }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { PackageData } = useContext(HospitalContext);
  return (
    <div className=" overflow-hidden pt_adjustment mx-5 sm:mx-16 md:mx-24 mb-10 md:grid md:grid-cols-4 md:gap-10">
      <div className="col-span-3">
        <h3 className="red pt-6 pb-3 text-xl md:text-2xl font-semibold border-b border-black ">
          {title}
        </h3>
        <Fade left>
          <p className="mt-2">Cost: {price}</p>
          <LazyLoadImage
            className=" my-3 md:my-6 h-40 md:w-5/6 md:h-80"
            src={imgURL}
            alt=""
          />
        </Fade>

        <Fade left cascade>
          <ul>
            {details.map((detail) => {
              return (
                <li key={detail} className=" flex mt-1">
                  <LazyLoadImage
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
        </Fade>
      </div>
      <RedirectingLinks Data={PackageData} />
    </div>
  );
};

export default PackageDetails;
