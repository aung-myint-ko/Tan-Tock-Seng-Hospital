import React from "react";
import "../../css_modules/Newsletter.css";

const Newsletter = () => {
  return (
    <>
      <div className="newsletter overflow-hidden flex flex-col md:flex-row md:justify-evenly mt-8 py-4 px-5">
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="subscribe flex  align-middle justify-center mb-2 md:mb-0 "
        >
          <div className="plane mr-4">
            <i className="fab fa-telegram-plane"></i>
          </div>
          <p className=" text-sm sm:text-lg font-medium flex flex-col justify-center align-middle">
            Subscribe to our newsletter
            <br />
            <span> Get the latest news from u</span>
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="search flex justify-center md:align-middle md:my-2"
        >
          <input
            className="input placeholder:text-xs placeholder:font-semibold outline-none py-1 px-2 w-44 md:w-64 mr-4"
            type="email"
            placeholder="Enter Your Email"
          />
          <a
            className="button2 p-2 text-xs md:text-sm md:w-20 md:p-0 md:flex md:justify-center md:align-middle "
            href="/"
          >
            <span className="md:my-auto">Sign Up</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
