import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CenterData from "./Data/CenterData";
import ActivitiesData from "./Data/ActivitiesData";
import ServiceData from "./Data/ServiceData";
import PackageData from "./Data/PackageData";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  once: "true",
  duration: 1000,
  offset: 50,
});

export const HospitalContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HospitalContext.Provider
    value={{ CenterData, ActivitiesData, ServiceData, PackageData }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HospitalContext.Provider>
);

// window.addEventListener("scroll",()=>{
//   if(window.screenTop())

// })
// $(window).scroll(function(){
//   if($(this).scrollTop() > 90){
//     $(".second_dsk").addClass('fixed');
//   }else{
//     $(".second_dsk").removeClass('fixed');
//   }
// })
