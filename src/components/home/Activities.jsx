import React from "react";
import "../../css_modules/Activities.css";
import ActivitiesData from "../../Data/ActivitiesData";
import Card from "./Card";

const Activities = () => {
  return (
    <>
      <div className="grid overflow-hidden pt-2 md:pt-7 gap-3 sm:gap-4 md:gap-5 lg:gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-8 mx-5 md:mt-16 md:mx-16 lg:mx-24  bar">
        {ActivitiesData.map((activitie) => {
          return (
            <Card
              key={activitie.id}
              delay={activitie.delay}
              title={activitie.title}
              img={activitie.img}
              description={activitie.descriptions}
            />
          );
        })}
      </div>
    </>
  );
};
export default Activities;
