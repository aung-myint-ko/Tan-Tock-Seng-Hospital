import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";

const RedirectingLinks = ({ Data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const activeStyle = {
    color: "#ac1c2c",
  };
  return (
    <div>
      <h3 className="red pt-6 pb-3 text-xl md:text-2xl font-semibold border-b border-black ">
        Our Services
      </h3>
      <Fade right>
        <ul className="mt-3 md:my-6 ">
          {Data.map((data) => {
            return (
              <NavLink
                key={data.id}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={`/services-packages/${data.route}/${data.id}`}
              >
                <li className="text-xs md:text-sm mt-2 md:mt-3">
                  {data.title}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </Fade>
    </div>
  );
};

export default RedirectingLinks;
