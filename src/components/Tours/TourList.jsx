import React from "react";
import BeachesPage from "../../pages/tourPages/BeachesPage";
import CampingPage from "../../pages/tourPages/CampingPage";
import DesertPage from "../../pages/tourPages/DesertPage";
import IconicCitiesPage from "../../pages/tourPages/IconicCitiesPage";
import MountainsPage from "../../pages/tourPages/MountainsPage";
import SkiingPage from "../../pages/tourPages/SkiingPage";
import TropicPage from "../../pages/tourPages/TropicPage";

const TourList = () => {
  //! Filter AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
  return (
    <div>
      <BeachesPage />
      <CampingPage />
      <DesertPage />
      <IconicCitiesPage />
      <MountainsPage />
      <SkiingPage />
      <TropicPage />
    </div>
  );
};

export default TourList;
