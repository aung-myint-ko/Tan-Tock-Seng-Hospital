import React, { useEffect } from "react";
import { useContext } from "react";
import { HospitalContext } from "../..";
import RedirectingLinks from "./RedirectingLinks";
import Fade from "react-reveal/Fade";

const ServiceDetails = ({ title, imgURL, description, subTitle }) => {
  const { ServiceData } = useContext(HospitalContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" overflow-hidden pt_adjustment mx-5 sm:mx-16 md:mx-24 mb-10 md:grid md:grid-cols-4 md:gap-10">
      <div className="col-span-3">
        <Fade left>
          <h3 className="red pt-6 pb-3 text-xl sm:text-3xl font-semibold border-b border-black ">
            {title}
          </h3>
        </Fade>
        <Fade left>
          <img
            className="my-3 md:my-6 h-40 md:w-5/6 md:h-80"
            src={imgURL}
            alt=""
          />
        </Fade>
        <Fade left>
          <p className="mb-4 text-xs sm:text-base font-thin">{description}</p>
        </Fade>
        <Fade left cascade>
          <ul>
            {subTitle.map((sub) => {
              return (
                <li key={sub} className=" flex mt-1">
                  <img
                    className="bullet-img"
                    src="/images/small_logo.png"
                    alt=""
                  />
                  <p className=" my-auto h-fit text-xs sm:text-sm font-thin">
                    {sub}
                  </p>
                </li>
              );
            })}
          </ul>
        </Fade>
      </div>
      <RedirectingLinks Data={ServiceData} />
    </div>
  );
};

export default ServiceDetails;
