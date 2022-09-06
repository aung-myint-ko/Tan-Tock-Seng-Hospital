import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HospitalContext } from ".";
import Home from "./pages/Home";
import About from "./pages/About";
import SpecialityCenter from "./pages/SpecialityCenter";
import SpecialityCenterSub from "./pages/SpecialityCenterSub";
import ServicePackage from "./pages/ServicePackage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import PackageDetailsPage from "./pages/PackageDetailsPage";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./custom_hook/ScrollToTop";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./components/Loading";

export default function App() {
  const { CenterData, ServiceData, PackageData } = useContext(HospitalContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Router>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/about-us" element={<About />} />
              <Route
                path="/speciality-centers"
                element={<SpecialityCenter />}
              />
              {CenterData.map((Center) => {
                return (
                  <Route
                    key={Center.id}
                    path={`/speciality-centers/${Center.id}`}
                    element={
                      <SpecialityCenterSub
                        title={Center.title}
                        secImgURL={Center.secImgURL}
                      />
                    }
                  />
                );
              })}
              <Route path="/services-packages" element={<ServicePackage />} />
              {ServiceData.map((Center) => {
                return (
                  <Route
                    key={Center.id}
                    path={`/services-packages/services/${Center.id}`}
                    element={
                      <ServiceDetailsPage
                        title={Center.title}
                        subTitle={Center.subTitle}
                        description={Center.description}
                        imgURL={Center.imgURL}
                      />
                    }
                  />
                );
              })}
              {PackageData.map((Center) => {
                return (
                  <Route
                    key={Center.id}
                    path={`/services-packages/packages/${Center.id}`}
                    element={
                      <PackageDetailsPage
                        title={Center.title}
                        price={Center.price}
                        details={Center.details}
                        imgURL={Center.imgURL}
                      />
                    }
                  />
                );
              })}
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
          </ScrollToTop>
        </Router>
      )}
    </>
  );
}
