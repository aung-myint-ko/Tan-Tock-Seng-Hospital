import React from "react";
import AboutDetails from "../components/aboutUs/AboutDetails";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { UpdateTitle } from "../custom_hook/UpdateTitle";

const About = () => {
  UpdateTitle("About Us - Tan Tock Seng Hospital");
  return (
    <>
      <Nav />
      <AboutDetails />
      <Footer />
    </>
  );
};

export default About;
