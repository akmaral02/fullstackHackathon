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
  const { getTours, tours, page } = useTour();
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
      page: currentPage,
    });
  }, [currentPage]);
  return (
    <div className="tour_tropic">
      <div className="tour_card">
        <Container>
          <h1 className="tour_card_h1">TROPIC</h1>
          <Box width={"100%"} display="flex" flexWrap={"wrap"}>
            {tours?.map((item) =>
              item.packet_category === 6 ? (
                <TourCard key={item.id} item={item} />
              ) : null
            )}
          </Box>
          <Box
            width={"30%"}
            height={50}
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            sx={{ backgroundColor: "rgba(255, 255, 255, 0.30)" }}
          >
            <Pagination
              count={page}
              page={currentPage}
              variant="outlined"
              shape="rounded"
              onChange={(e, p) => setCurrentPage(p)}
            />
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default TropicPage;
