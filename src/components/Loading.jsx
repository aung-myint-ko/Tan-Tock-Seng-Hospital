import React from "react";

function Loading(props) {
  return (
    <div className=" w-full h-screen bg-white z-50 flex items-center justify-center">
      <img
        src="/images/spinner.gif"
        className=" w-28 h-28 sm:w-28 sm:h-28 "
        alt=""
      />
    </div>
  );
}

export default Loading;
