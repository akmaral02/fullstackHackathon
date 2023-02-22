import React, { useEffect } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../../pages/tourPages/css/TourCard.css";
import { Container } from "@mui/system";
import { Box, IconButton } from "@mui/material";
import { useTour } from "../../contexts/ToursContextProvider";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TourCard = ({ item }) => {
  const { getOneTour, oneTour, deleteTour, like } = useTour();
  const { user } = useAuth();

  // console.log(item.image);
  return (
    <>
      {/* <div className="tour_card__block"> */}
      <div className="tour_card__card">
        <div className="tour_card__card__block">
          <div
            className="tour_card__card__img"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <IconButton>
              <BookmarkBorderIcon
                style={{
                  color: "rgb(255, 255, 213)",
                }}
              ></BookmarkBorderIcon>
            </IconButton>

            <IconButton onClick={() => like(item.id)}>
              <FavoriteIcon
                color={item.likes_count > 0 ? "error" : ""}
              ></FavoriteIcon>
            </IconButton>
          </div>

          <div className="tour_card__card__down">
            <div className="tour_card__card__down-side">
              <h6>{item.title}</h6>
              <div>
                <LocationOnIcon
                  style={{
                    color: "white",
                  }}
                ></LocationOnIcon>
                <span>{item.title}</span>
              </div>
            </div>

            <span>{item.price}$</span>
          </div>

          <div className="tour_card__card_baseLine"></div>

          <div className="tour_card__card__block_time">
            <div className="tour_card__card__time flight">
              <div></div>
              {item.date_start}
            </div>

            <div className="tour_card__card__time arrived">
              <div></div>
              {item.date_end}
            </div>

            {/* <div className="tour_card__card__days">7 days</div> */}
          </div>

          <div className="tour_card__card_baseLine"></div>
          {user === "admin@admin.com" ? (
            <Box display={"flex"} justifyContent="space-evenly">
              <Box>
                <IconButton>
                  <DeleteIcon
                    fontSize="large"
                    sx={{ color: "white" }}
                    onClick={() => {
                      deleteTour(item.id);
                    }}
                  />
                </IconButton>
              </Box>
              <Link style={{ textDecoration: "none" }} to={`/edit/${item.id}`}>
                <Box>
                  <IconButton>
                    <EditIcon fontSize="large" sx={{ color: "white" }} />
                  </IconButton>
                </Box>
              </Link>
            </Box>
          ) : (
            <Link style={{ textDecoration: "none" }} to={`/detail/${item.id}`}>
              <Box
                display={"flex"}
                justifyContent="center"
                alignItems={"center"}
              >
                <button className="tour_card__card_btn">VIEW DETAILS</button>
              </Box>
            </Link>
          )}
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default TourCard;
