import React from "react";
import Slogan from "./Slogan";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const AboutDetails = () => {
  return (
    <div className=" overflow-hidden">
      <div className="pt_adjustment mx-9 sm:mx-16 md:mx-24">
        <Fade top>
          <h3 className="red pt-6 pb-3 text-xl sm:text-3xl font-semibold border-b border-black ">
            ABOUT US
          </h3>
        </Fade>

        <div className="py-2 sm:py-3 border-b border-black">
          <Slide top>
            <h5 className="pb-2 text-base font-semibold">
              ABOUT TAN TOCK SENG HOSPITAL
            </h5>
          </Slide>

          <div className=" overflow-hidden">
            <Fade top>
              <p className="mb-2 text-xs md:text-base">
                Tan Tock Seng Hospital was established on 25th June 2011. Its
                birth was motivated by and anchored on providing advanced and
                quality healthcare services to the citizens through the combined
                and dedicated hands of the medical and non-medical experts in
                the field.
              </p>
            </Fade>
            <Fade top>
              <p className="mb-2 text-xs md:text-base text-gray-500">
                Its unassuming and forward looking disposition has shaped the
                hospital as one of the leading hospitals in Myanmar, gaining the
                recognition as a respected and trusted healthcare partner and
                service provider. Tan Tock Seng Hospital is famed as the
                preferred hospital by locals, foreigners and corporate
                businesses alike.
              </p>
            </Fade>
            <Fade top>
              <p className="mb-2 text-xs md:text-base">
                Since its inception, and with the realization and understanding
                of the local healthcare needs, Tan Tock Seng Hospital has
                continued to introduce a wide range of medical treatments and
                services to further elevate the country's medical standard while
                mindfully bridging the gap by importing and introducing
                state-of-the-art technologies into the local medical scene.
                Furthermore, the hospital's continual search for meaningful
                collaborations with local, overseas specialists and counterparts
                has laid the platform for providing unparalleled medical
                treatments to patients while determining possible future
                demands.
              </p>
            </Fade>
            <Fade top>
              <p className="mb-2 text-xs md:text-base text-gray-500">
                Not forgetting the less fortunate living in the country, Tan
                Tock Seng Hospital has unreservedly been extending helping hands
                to reaching out to the villagers who cannot afford and have
                tremendous needs to proper medical treatments.Corporate social
                responsibility (CSR) receives no less focus and importance in
                Tan Tock Seng Hospital. It is inculcated and rooted in Tan Tock
                Seng's culture to go beyond mediocre effort to provide genuine.
              </p>
            </Fade>
            <Fade top>
              <p className="mb-2 text-xs md:text-base">
                To continue with what the hospital has started, everyone in Tan
                Tock Seng Hospital is prepared to go the extra mile to produce
                and provide effective and efficient patient centered services.
                With the passion to learn and to become better than yesterday,
                Tan Tock Seng Hospital remains focus on improving the
                comprehensive services that our patients have benefitted. The
                entire team continues to discover, to be steadfast in learning
                and to be undeterred to provide utmost medical services to our
                patients. Whilst patients put their trusts in Tan Tock Seng.
              </p>
            </Fade>
            <Fade top>
              <p className="mb-2 text-xs md:text-base text-gray-500">
                Tan Tock Seng puts her 'Quality Care' into action. It is all
                about the 'Synergy of international healthcare standard and
                professional healthcare service providers'.
              </p>
            </Fade>
            <Fade top>
              <p className="mb-2 text-xs md:text-base">
                Tan Tock Seng Hospital aims to go beyond medical and healthcare
                services. Emphasis has also been placed on forging and nurturing
                healthy working relationships with all our trusted partners to
                ensure growth and mutual benefits. Tan Tock Seng organizes and
                conducts regular consultations and Tan Tock Seng Hospital prides
                itself to work with the acknowledgement and understanding that
                stagnation leads to impossibilities, while being proactive leads
                to possibilities.
              </p>
            </Fade>
          </div>
        </div>
        <Slogan />
      </div>
    </div>
  );
};

export default AboutDetails;
