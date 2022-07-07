import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Package from "../components/servicesPackages/Package";
import Service from "../components/servicesPackages/Service";
import "../css_modules/SpecialCenter.css";
import { UpdateTitle } from "../custom_hook/UpdateTitle";

const ServicePackage = () => {
  UpdateTitle(" Services & Packages - Tan Tock Seng Hospital");

  return (
    <>
      <Nav />
      <Service />
      <Package />
      <Footer />
    </>
  );
};

export default ServicePackage;
