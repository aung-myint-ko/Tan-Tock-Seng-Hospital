import React, { useEffect } from "react";
import { useState } from "react";
import "../css_modules/Nav.css";
import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  // const [show, setShow] = useState(true);

  // const navbarControl = () => {
  //   if (window.scrollY > 165) {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", navbarControl);
  //   return () => {
  //     window.removeEventListener("scroll", navbarControl);
  //   };
  // });
  useEffect(() => {
    const CloseNav = (e) => {
      if (e.target.id !== "menu_icon" && e.target.id !== "three_line") {
        setClicked(false);
        console.log("true");
      } else {
        console.log("false");
      }
    };
    document.body.addEventListener("click", CloseNav);
    return () => document.body.removeEventListener("click", CloseNav);
  }, [clicked]);
  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-30">
      <div className="first_nav ">
        <div className="logo_img">
          <Link to={"/"}>
            <img
              src={"/images/ttshlogo.png"}
              width="100%"
              height="100%"
              alt=""
            />
          </Link>
        </div>
        <div className="hamburger">
          {/* <i onClick={handleClick} className="fas fa-bars"></i> */}
          <div
            id="menu_icon"
            onClick={handleClick}
            className={!clicked ? "menu_icon" : "menu_icon open"}
          >
            <div id="three_line" className="three_line"></div>
          </div>
        </div>

        <div className="ph_text">
          <div className="icon">
            <i className="fas fa-mobile-alt"></i>
          </div>

          <div className="ph_number">
            Hot Lines: +959 789 723 555
            <br />
            Hunt Lines: +959 788 443 555
          </div>
        </div>
      </div>

      <div className={`second_nav_dsk `}>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about-us"}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={"/speciality-centers"}>Speciality Centers</NavLink>
          </li>
          <li>
            <NavLink to={"/services-packages"}>Services & Packages</NavLink>
          </li>
          <li>
            <NavLink to={"/contact-us"}>Contact Us</NavLink>
          </li>
        </ul>
      </div>

      <div className={!clicked ? "second_nav" : "second_nav open_mb"}>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about-us"}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={"/speciality-centers"}>Speciality Centers</NavLink>
          </li>
          <li>
            <NavLink to={"/services-packages"}>Services & Packages</NavLink>
          </li>
          <li>
            <NavLink to={"/contact-us"}>Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
