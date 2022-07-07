import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import SpecialityCenterDetails from "../components/specialityCenter/SpecialCenterDetails";
import { UpdateTitle } from "../custom_hook/UpdateTitle";

const SpecialityCenterSub = ({ title, secImgURL }) => {
  UpdateTitle(`${title} - Tan Tock Seng Hospital`);

  return (
    <>
      <Nav />
      <SpecialityCenterDetails title={title} secImgURL={secImgURL} />
      <Footer />
    </>
  );
};

export default SpecialityCenterSub;
