import React, { useEffect, useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./css/TourCard.css";
import { Container } from "@mui/system";
import { Box, IconButton, Pagination } from "@mui/material";
import { useTour } from "../../contexts/ToursContextProvider";
import { useSearchParams } from "react-router-dom";
import TourCard from "../../components/Tours/TourCard";

const SkiingPage = ({ item }) => {
  return (
    <div className="tour_skiing">
      <div className="tour_card">
        <Container>
          <h1 className="tour_card_h1">SKIING</h1>
          <Box width={"100%"} display="flex" flexWrap={"wra"}>
            <TourCard key={item.id} item={item} />
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default SkiingPage;
