import React from "react";
import "../../css_modules/SpecialCenter.css";
import Fade from "react-reveal/Fade";

const specialLabels = [
  {
    title: "Dental Care Centre",
    imgURL: "/images/small_logo.png",
    delay: 100 * 1,
  },
  {
    title: "Diabetes Centre",
    imgURL: "/images/small_logo.png",
    delay: 100 * 2,
  },
  {
    title: "Heart and Vascular Centre",
    imgURL: "/images/small_logo.png",
    delay: 100 * 3,
  },
  {
    title: "Medical Centre of Chemotherapy",
    imgURL: "/images/small_logo.png",
    delay: 100 * 4,
  },
  {
    title: "Neurology and Stroke Centre",
    imgURL: "/images/small_logo.png",
    delay: 100 * 5,
  },
  {
    title: "Otorhinolaryngology - Head and Neck Surgery Centre",
    imgURL: "/images/small_logo.png",
    delay: 100 * 6,
  },
  {
    title: "Skin, Aesthetic & Laser Centre",
    imgURL: "/images/small_logo.png",
    delay: 100 * 7,
  },
  {
    title: "Urology Centre",
    imgURL: "/images/small_logo.png",
    delay: 100 * 8,
  },
  {
    title: "Wellness Centre",
    imgURL: "/images/small_logo.png",
    delay: 100 * 9,
  },
  {
    title: "World Class Diagnostic Centre",
    imgURL: "/images/small_logo.png",
    delay: 100 * 10,
  },
];
const SpecialityCenterDetails = () => {
  return (
    <>
      <div className="pt_adjustment mx-5 sm:mx-16 md:mx-24">
        <Fade top>
          <h3 className="red pt-6 pb-3 text-xl sm:text-3xl font-semibold border-b border-black ">
            SPECIALITY CENTERS
          </h3>
        </Fade>

        <div className="paragraph pt-2 sm:pt-3 overflow-hidden">
          <Fade top>
            <h5 className="pb-2 text-base font-semibold">
              Centres of Excellence
            </h5>
          </Fade>
          <Fade top>
            <p className="mb-2 text-xs sm:text-base ">
              Our specialized centres cater to treatments that go beyond the
              basic. Each centre is fully equipped with one of the latest
              medical technologies in its respective field. Concerted effort has
              been put in to ensure patients' comfort, privacy, and treatments
              are not compromised. The perfect marriage of medical technologies
              and the experts' hands ensures our best practices.
            </p>
          </Fade>

          <Fade left cascade>
            <ul className=" my-5">
              {specialLabels.map((label) => {
                return (
                  <li key={label.title} className=" flex mt-1">
                    <img className="bullet-img" src={label.imgURL} alt="" />
                    <p className=" my-auto h-fit text-xs sm:text-base">
                      {label.title}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default SpecialityCenterDetails;
