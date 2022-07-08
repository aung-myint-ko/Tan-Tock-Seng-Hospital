import React from "react";
import "../css_modules/Footer.css";
import "aos/dist/aos.css";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  return (
    <div className=" overflow-hidden">
      <div className="footer1 py-5 px-2">
        <Zoom>
          <p className=" text-sm fo text-center font-semibold">
            Copyright © Tan Tock Seng Hospital Myanmar. All rights reserved 2021
            <br />
            <span className=" block text-xs font-thin mt-2">
              Developed with
              <span className="mx-1">
                <i className="far fa-heart"></i>
              </span>
              By Lucifer96
            </span>
          </p>
        </Zoom>
      </div>
    </div>
  );
};
export default Footer;
