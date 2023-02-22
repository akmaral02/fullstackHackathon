import React from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../../pages/tourPages/css/TourCard.css";
import { Container } from "@mui/system";
import { IconButton } from "@mui/material";
import { useTour } from "../../contexts/ToursContextProvider";
import { Link } from "react-router-dom";

const TourCard = ({ item }) => {
  const { getOneTour, oneTour, deleteTour, like } = useTour();
  // console.log(item.image);
  return (
    <Container>
      <div className="tour_card__block">
        <div className="tour_card__card">
          <div className="tour_card__card__block">
            <div
              className="tour_card__card__img"
              style={{ backgroundImage: `${item.image}` }}
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
                  // style={{
                  //   color: "rgb(255, 255, 213)",
                  // }}
                  color={item.likes_count > 0 ? "error" : ""}
                ></FavoriteIcon>
              </IconButton>
            </div>

            <div className="tour_card__card__down">
              <div className="tour_card__card__down-side">
                <h6>CAPPADOCIA</h6>
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
            <Link to={`/detail/${item.id}`}>
              <button className="tour_card__card_btn">VIEW DETAILS</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TourCard;
