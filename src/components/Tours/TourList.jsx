import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useTour } from "../../contexts/ToursContextProvider";
import CardPage from "../../pages/CardPage";
import BeachesPage from "../../pages/tourPages/BeachesPage";
import CampingPage from "../../pages/tourPages/CampingPage";
import DesertPage from "../../pages/tourPages/DesertPage";
import IconicCitiesPage from "../../pages/tourPages/IconicCitiesPage";
import MountainsPage from "../../pages/tourPages/MountainsPage";
import SkiingPage from "../../pages/tourPages/SkiingPage";
import TropicPage from "../../pages/tourPages/TropicPage";
import TourCard from "./TourCard";

const TourList = () => {
  const { getTours, tours, next } = useTour();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    getTours();
  }, []);
  useEffect(() => {
    setSearchParams({
      q: search,
    });
    console.log(searchParams.toString());
  }, [search]);

  useEffect(() => {
    getTours();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      next: currentPage,
    });
  }, [currentPage]);

  return (
    <div>
      {/* {tours?.map((item) => {
        if (item.packet_category === 1) {
          return <CardPage key={item.id} item={item} />;
        } else if (item.packet_category === 2) {
          return <CardPage key={item.id} item={item} />;
        } else if (item.packet_category === 3) {
          return <CardPage key={item.id} item={item} />;
        } else if (item.packet_category === 4) {
          return <CardPage key={item.id} item={item} />;
        } else if (item.packet_category === 5) {
          return <CardPage key={item.id} item={item} />;
        } else if (item.packet_category === 6) {
          return <CardPage key={item.id} item={item} />;
        } else if (item.packet_category === 7) {
          return <CardPage key={item.id} item={item} />;
        }
      })} */}
      <div
        style={{
          width: "100%",
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {tours?.map((item) => {
          return <CardPage key={item.id} item={item} />;
        })}

        <Box width={"100%"} display="flex" flexWrap={"wra"}>
          <Box>
            <Pagination
              count={next}
              page={currentPage}
              variant="outlined"
              color="primary"
              onChange={(e, p) => setCurrentPage(p)}
            />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default TourList;
