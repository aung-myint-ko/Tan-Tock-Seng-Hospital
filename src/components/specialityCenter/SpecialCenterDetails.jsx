import React from "react";
import "../../css_modules/SpecialCenter.css";
import Fade from "react-reveal/Fade";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SpecialityCenterDetails = ({ title, secImgURL }) => {
  return (
    <div className=" overflow-hidden">
      <div className="pt_adjustment relative h-40 md:h-72">
        <LazyLoadImage className=" w-full h-full" src={secImgURL} alt="" />
        <div className="overley">
          <Fade left>
            <h5 className="absolute bottom-5 left-5 sm:left-16 md:left-24 text-white text-xl font-bold ">
              {title}
            </h5>
          </Fade>
        </div>
      </div>
      <div className=" mx-5 sm:mx-16 md:mx-24 md:grid md:grid-cols-3 md:gap-6">
        <Fade left>
          <div className=" pt-6 sm:mb-10 md:col-span-2">
            <h3 className="red pb-3 text-xl sm:text-3xl font-semibold">
              Center Information
            </h3>
            <p className="mb-2 text-xs sm:text-base ">
              It is vital to seek medical help as quickly as possible as
              infertility can often be treated. And it is a common problem
              affecting some couples. As such, Victoria Fertility Centre
              provides holistic and seamless integrated care by offering a wide
              range of services range from diagnosis to treatment for the best
              possible outcome for individual patient.
              <br />
              <br />
              Couples who need further treatment like In-Vitro-Fertilization
              (IVF Pregnancy) can have the initial ovulation stimulation steps
              done in Victoria Hospital. And the advanced treatment will be
              conducted in Superior A.R.T ( Thailand ) , an affiliation with
              Victoria Hospital.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div className="mb-10 md:pt-6">
            <div className=" border-b border-black pb-2">
              <h5 className="red sm:text-lg">Contact</h5>
              <p className="text-xs sm:text-sm">
                HotLine : 01 9666 141 or 09 783 666 141-4 <br />
                ( Ext 7200 ) <br />
                Fax : 01 9666 135
              </p>
            </div>
            <div className="mt-3 border-b border-black pb-2">
              <h5 className="red sm:text-lg">Service Hours</h5>
              <p className="text-xs sm:text-sm">Daily 8:00 AM to 5:30 PM</p>
            </div>
            <div className="mt-3 border-b border-black pb-2">
              <h5 className="red sm:text-lg">Location</h5>
              <p className="text-xs sm:text-sm">
                No.68, Taw Win Rd , 9 mile, Mayangone Township, Yangon, Myanmar
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default SpecialityCenterDetails;
