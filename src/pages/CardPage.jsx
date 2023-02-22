import { Box, Pagination } from "@mui/material";
import React, { useState } from "react";
import TourCard from "../components/Tours/TourCard";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./tourPages/css/TourCard.css";
import { Container } from "@mui/system";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useTour } from "../contexts/ToursContextProvider";
import BeachesPage from "./tourPages/BeachesPage";

const CardPage = ({ item }) => {
  const { getTours, tours, next, getOneTour, oneTour, deleteTour, like } =
    useTour();
  const [currentPage, setCurrentPage] = useState(1);

  console.log(tours);

  return (
    <div>
      <TourCard key={item.id} item={item} />
    </div>
  );
};

export default CardPage;
