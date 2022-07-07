import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { HospitalContext } from "../..";
import { ServicePackageGrid, ServicePackageSwiper } from "../CarouselOrGrid";

const Service = () => {
  const { ServiceData } = useContext(HospitalContext);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <div className="pt_adjustment sm:mx-16 md:mx-24">
      <h3
        data-aos="fade-down"
        className="red mx-5 sm:mx-0 pt-6 pb-3 text-xl sm:text-3xl font-semibold border-b border-black "
      >
        SERVICES
      </h3>
      {width > 640 ? (
        <ServicePackageGrid centerData={ServiceData} domain={"services"} />
      ) : (
        <ServicePackageSwiper centerData={ServiceData} domain={"services"} />
      )}
    </div>
  );
};

export default Service;
