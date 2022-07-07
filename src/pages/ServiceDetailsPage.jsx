import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ServiceDetails from "../components/servicesPackages/ServiceDetails";
import { UpdateTitle } from "../custom_hook/UpdateTitle";

const ServiceDetailsPage = ({ title, subTitle, description, imgURL }) => {
  UpdateTitle(`${title} - Tan Tock Seng Hospital`);

  return (
    <>
      <Nav />
      <ServiceDetails
        title={title}
        subTitle={subTitle}
        description={description}
        imgURL={imgURL}
      />
      <Footer />
    </>
  );
};

export default ServiceDetailsPage;
