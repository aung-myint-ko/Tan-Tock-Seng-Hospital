import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import PackageDetails from "../components/servicesPackages/PackageDetails";
import { UpdateTitle } from "../custom_hook/UpdateTitle";

const PackageDetailsPage = ({ title, imgURL, details, price }) => {
  UpdateTitle(`${title} - Tan Tock Seng Hospital`);

  return (
    <>
      <Nav />
      <PackageDetails
        title={title}
        imgURL={imgURL}
        details={details}
        price={price}
      />
      <Footer />
    </>
  );
};

export default PackageDetailsPage;
