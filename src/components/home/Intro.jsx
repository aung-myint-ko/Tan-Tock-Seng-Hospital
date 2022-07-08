import React from "react";
import "../../css_modules/Intro.css";
import Fade from "react-reveal/Fade";

const Intro = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 overflow-hidden">
      <Fade left>
        <div className="intro_left_box mt-8 mx-5 md:mt-16 md:ml-16 md:mr-4 lg:mt-16 lg:ml-24 lg:mr-4 ">
          <h3 className="red text-2xl lg:text-4xl font-bold mb-3 ">
            Welcome to Tan Tock Seng Hospital
          </h3>
          <p className="mb-3 text-sm lg:text-base">
            Our Hospital offers high quality medical services and it is
            well-equipped with modern technology. It is located on No.68, Taw
            Win Road, 9 Mile, Mayagone Township, Yangon, Myanmar. Victoria
            Hospital offers comprehensive medical services with superior quality
            and high efficiency.
          </p>
          <div>
            <button className="button2 w-28 h-10 text-base md:w-24 md:h-8 lg:w-28 lg:h-9 md:text-sm lg:text-base">
              Learn More
            </button>
          </div>
        </div>
      </Fade>
      <Fade right>
        <div className="intro_right_box mt-8 mx-5 md:mt-16 md:ml-4 md:mr-16 lg:mt-16 lg:ml-4 lg:mr-24">
          <div className="content">
            <div className="p-3 md:p-6 lg:p-7 ">
              <h4 className="red text-base md:text-lg font-bold mb-1">
                Our Mission
              </h4>
              <p className="text-sm font-light ">
                To provide quality care with competitive pricing
              </p>
            </div>

            <div className="border_bottom"></div>

            <div className="p-3 md:p-6 lg:p-7">
              <h4 className="red text-base md:text-lg font-bold mb-1">
                Our Vision
              </h4>
              <p className="text-sm font-light">
                To become No.1 trusted and No.1 service providing private
                hospital in Myanmar healthcare system
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Intro;
