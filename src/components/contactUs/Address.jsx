import React from "react";
import "../../css_modules/ContactUs.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Address = () => {
  return (
    <div className="pt_adjustment mx-5 sm:mx-16 md:mx-24">
      <Fade top>
        <h3 className="red pt-6 pb-3 text-xl sm:text-3xl font-semibold border-b border-black ">
          CONTACT US
        </h3>
      </Fade>

      <div
        data-aos="fade-right"
        data-aos-duration="500"
        className="my-3 md:my-6 flex"
      >
        <i className="fas fa-hospital-alt icon "></i>
        <p className="ml-3 text-sm ">
          No.68, Taw Win Road, 9 mile, Mayangone Township, Yangon, Myanmar.
        </p>
      </div>
      <div className="">
        <div data-aos="fade-right" data-aos-delay="500" className="flex">
          <i className="fas align-middle fa-phone-alt icon"></i>
          <p className="ml-3 text-sm ">+959-955444</p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="1000"
          className="flex align-middle mt-2"
        >
          <i className="fas fa-fax icon"></i>
          <p className="ml-3 text-sm ">+959-955123</p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="1500"
          className="flex align-middle mt-2"
        >
          <i className="fas fa-envelope icon"></i>
          <p className="ml-3 text-sm "> info@tantockseng.com</p>
        </div>
      </div>
      <div className="mt-5 pb-4 border-b border-black">
        <Flip left delay="1800">
          <i className="fab fa-facebook icon mr-3 "></i>
        </Flip>
        <Flip left delay="2100">
          <i className="fab fa-linkedin icon mr-3 "></i>
        </Flip>
        <Flip left delay="2400">
          <i className="fab fa-instagram icon mr-3 "></i>
        </Flip>
        <Flip left delay="2700">
          <i className="fab fa-twitter icon mr-3 "></i>
        </Flip>
      </div>
    </div>
  );
};

export default Address;
