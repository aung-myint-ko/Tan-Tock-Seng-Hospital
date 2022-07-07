import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { HospitalContext } from "..";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import {
  SpecialCenterGrid,
  SpecialCenterSwiper,
} from "../components/CarouselOrGrid";
import SpecialityCenterDetails from "../components/specialityCenter/SpecialCenterIntro";
import { UpdateTitle } from "../custom_hook/UpdateTitle";

const SpecialityCenter = () => {
  UpdateTitle("Speciality Centers - Tan Tock Seng Hospital");

  const { CenterData } = useContext(HospitalContext);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <>
      <Nav />
      <SpecialityCenterDetails />
      {width > 640 ? (
        <SpecialCenterGrid centerData={CenterData} />
      ) : (
        <SpecialCenterSwiper centerData={CenterData} />
      )}
      <Footer />
    </>
  );
};

export default SpecialityCenter;
