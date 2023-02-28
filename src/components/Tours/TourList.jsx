import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTour } from "../../contexts/ToursContextProvider";
import BeachesPage from "../../pages/tourPages/BeachesPage";
import CampingPage from "../../pages/tourPages/CampingPage";
import DesertPage from "../../pages/tourPages/DesertPage";
import IconicCitiesPage from "../../pages/tourPages/IconicCitiesPage";
import MountainsPage from "../../pages/tourPages/MountainsPage";
import SkiingPage from "../../pages/tourPages/SkiingPage";
import TropicPage from "../../pages/tourPages/TropicPage";

const TourList = () => {
  // const { getTours, tours, next } = useTour();
  // const [currentPage, setCurrentPage] = useState(1);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [search, setSearch] = useState(searchParams.get("q") || "");

  // useEffect(() => {
  //   getTours();
  // }, []);
  // useEffect(() => {
  //   setSearchParams({
  //     q: search,
  //   });
  //   console.log(searchParams.toString());
  // }, [search]);

  // useEffect(() => {
  //   getTours();
  // }, [searchParams]);

  // useEffect(() => {
  //   setSearchParams({
  //     next: currentPage,
  //   });
  // }, [currentPage]);

  return (
    <div>
      {/* {tours?.map((item) => {
        if (item.packet_category === 1) {
          return <BeachesPage />;
        } else if (item.packet_category === 2) {
          return <IconicCitiesPage />;
        } else if (item.packet_category === 3) {
          return <MountainsPage />;
        } else if (item.packet_category === 4) {
          return <DesertPage />;
        } else if (item.packet_category === 5) {
          return <SkiingPage />;
        } else if (item.packet_category === 6) {
          return <TropicPage />;
        } else if (item.packet_category === 7) {
          return <CampingPage />;
        }
      })} */}

      <BeachesPage />
      <IconicCitiesPage />
      <MountainsPage />
      <DesertPage />
      <SkiingPage />
      <TropicPage />
      <CampingPage />
    </div>
  );
};

export default TourList;
