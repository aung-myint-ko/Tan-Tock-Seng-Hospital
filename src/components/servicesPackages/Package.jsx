import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { HospitalContext } from "../..";
import { ServicePackageGrid, ServicePackageSwiper } from "../CarouselOrGrid";
import Fade from "react-reveal/Fade";

const Package = () => {
  const { PackageData } = useContext(HospitalContext);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return (
    <div className="mb-10 sm:mx-16 md:mx-24">
      <div className="mx-5 sm:mx-0">
        <h3 className="red  pt-6 sm:pt-0 pb-3 text-xl sm:text-3xl font-semibold border-b border-black ">
          PACKAGES
        </h3>
        <Fade bottom>
          <p className="mb-2 pt-2 sm:pt-3 text-xs sm:text-base">
            Our specialized centres cater to treatments that go beyond the
            basic. Each centre is fully equipped with one of the latest medical
            technologies in its respective field.
          </p>
        </Fade>
      </div>

      {width > 640 ? (
        <ServicePackageGrid centerData={PackageData} domain={"packages"} />
      ) : (
        <ServicePackageSwiper centerData={PackageData} domain={"packages"} />
      )}
    </div>
  );
};

export default Package;
