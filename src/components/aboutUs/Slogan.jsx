import React from "react";
import Zoom from "react-reveal/Zoom";

const Slogan = () => {
  return (
    <>
      <div className=" mb-10 sm:grid sm:grid-cols-2">
        <Zoom>
          <div className=" pt-3 sm:pt-5">
            <h5 className="red text-xl">VISION</h5>
            <p className=" text-sm">
              To become No.1 trusted and No.1 service providing private hospital
              in Myanmar healthcare system
            </p>
            <div className="line mt-2"></div>
          </div>
        </Zoom>

        <Zoom>
          <div className=" pt-3 sm:pt-5">
            <h5 className="red text-xl">MISSION</h5>
            <p className=" text-sm">
              To provide international standard healthcare in Myanmar with
              reason- able pricing
            </p>
            <div className="line mt-2"></div>
          </div>
        </Zoom>
        <Zoom>
          <div className=" pt-3 sm:pt-5">
            <h5 className="red text-xl">MOTTO</h5>
            <p className=" text-sm">Quality Care</p>
            <div className="line mt-2"></div>
          </div>
        </Zoom>
      </div>
    </>
  );
};
export default Slogan;
