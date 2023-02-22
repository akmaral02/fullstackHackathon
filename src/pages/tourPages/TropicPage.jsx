import React, { useEffect, useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./css/TourCard.css";
import { Container } from "@mui/system";
import { Box, IconButton, Pagination } from "@mui/material";
import TourCard from "../../components/Tours/TourCard";
import { useSearchParams } from "react-router-dom";
import { useTour } from "../../contexts/ToursContextProvider";

const TropicPage = ({ item }) => {
  // const { getTours, tours, next } = useTour();
  // const [currentPage, setCurrentPage] = useState(1);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [search, setSearch] = useState(searchParams.get("q") || "");

  // useEffect(() => {
  //   setSearchParams({
  //     next: currentPage,
  //   });
  // }, [currentPage]);
  return (
    <div className="tour_tropic">
      <div className="tour_card">
        <Container>
          <h1 className="tour_card_h1">TROPIC</h1>
          <Box width={"100%"} display="flex" flexWrap={"wra"}>
            <TourCard key={item.id} item={item} />
            {/* <Box>
              <Pagination
                count={next}
                page={currentPage}
                variant="outlined"
                color="primary"
                onChange={(e, p) => setCurrentPage(p)}
              />
            </Box> */}
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default TropicPage;
