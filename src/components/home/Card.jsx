import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ title, img, description, delay }) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-delay={delay}
      data-aos-once="true"
      className=" activities_card mt-3 md:mt-0"
    >
      <h5 className="red text-2xl md:text-lg h-fit md:h-12 lg:h-7 mb-4 md:mb-3 font-bold">
        {title}
      </h5>
      <LazyLoadImage className=" border border-gray-300" src={img} alt={""} />
      <p className="text-base md:text-base mt-2 mb-3 md:m-0 h-fit md:h-24 md:flex md:flex-col md:justify-center md:align-middle">
        {description}
      </p>
      <button className="button2 block md:inline w-28 h-10 mx-auto text-base md:w-24 md:h-8 md:text-sm">
        Learn More
      </button>
    </div>
  );
};

export default Card;
