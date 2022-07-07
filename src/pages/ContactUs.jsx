import React from "react";
import Address from "../components/contactUs/Address";
import Form from "../components/contactUs/Form";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { UpdateTitle } from "../custom_hook/UpdateTitle";

const ContactUs = () => {
  UpdateTitle(" Contact Us - Tan Tock Seng Hospital");
  return (
    <>
      <Nav />
      <Address />
      <Form />
      <Footer />
    </>
  );
};

export default ContactUs;
