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

const BeachesPage = ({ item }) => {
  const { getTours, tours, next } = useTour();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");

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

  useEffect(() => {
    setSearchParams({
      next: currentPage,
    });
  }, [currentPage]);

  return (
    <div className="tour_beaches">
      <div className="tour_card">
        <Container>
          <h1 className="tour_card_h1">BEACHES</h1>
          <Box width={"100%"} display="flex" flexWrap={"wra"}>
            <TourCard key={item.id} item={item} />;
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
          {/* <div className="tour_card__block">
            <div className="tour_card__card">
              <div className="tour_card__card__block">
                <div className="tour_card__card__img">
                  <IconButton>
                    <BookmarkBorderIcon
                      style={{
                        color: "rgb(255, 255, 213)",
                      }}
                    ></BookmarkBorderIcon>
                  </IconButton>

                  <IconButton>
                    <FavoriteBorderIcon
                      style={{
                        color: "rgb(255, 255, 213)",
                      }}
                    ></FavoriteBorderIcon>
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
                      <span>Turkey</span>
                    </div>
                  </div>

                  <span>880$</span>
                </div>

                <div className="tour_card__card_baseLine"></div>

                <div className="tour_card__card__block_time">
                  <div className="tour_card__card__time flight">
                    <div></div>25.03.23
                  </div>

                  <div className="tour_card__card__time arrived">
                    <div></div>04.04.23
                  </div>

                  <div className="tour_card__card__days">7 days</div>
                </div>

                <div className="tour_card__card_baseLine"></div>

                <button className="tour_card__card_btn">VIEW DETAILS</button>
              </div>
            </div>

            <div className="tour_card__card">
              <div className="tour_card__card__block">
                <div className="tour_card__card__img">
                  <IconButton>
                    <BookmarkBorderIcon
                      style={{
                        color: "rgb(255, 255, 213)",
                      }}
                    ></BookmarkBorderIcon>
                  </IconButton>

                  <IconButton>
                    <FavoriteBorderIcon
                      style={{
                        color: "rgb(255, 255, 213)",
                      }}
                    ></FavoriteBorderIcon>
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
                      <span>Turkey</span>
                    </div>
                  </div>

                  <span>880$</span>
                </div>

                <div className="tour_card__card_baseLine"></div>

                <div className="tour_card__card__block_time">
                  <div className="tour_card__card__time flight">
                    <div></div>25.03.23
                  </div>

                  <div className="tour_card__card__time arrived">
                    <div></div>04.04.23
                  </div>

                  <div className="tour_card__card__days">7 days</div>
                </div>

                <div className="tour_card__card_baseLine"></div>

                <button className="tour_card__card_btn">VIEW DETAILS</button>
              </div>
            </div>
            <div className="tour_card__card">
              <div className="tour_card__card__block">
                <div className="tour_card__card__img">
                  <IconButton>
                    <BookmarkBorderIcon
                      style={{
                        color: "rgb(255, 255, 213)",
                      }}
                    ></BookmarkBorderIcon>
                  </IconButton>

                  <IconButton>
                    <FavoriteBorderIcon
                      style={{
                        color: "rgb(255, 255, 213)",
                      }}
                    ></FavoriteBorderIcon>
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
                      <span>Turkey</span>
                    </div>
                  </div>

                  <span>880$</span>
                </div>

                <div className="tour_card__card_baseLine"></div>

                <div className="tour_card__card__block_time">
                  <div className="tour_card__card__time flight">
                    <div></div>25.03.23
                  </div>

                  <div className="tour_card__card__time arrived">
                    <div></div>04.04.23
                  </div>

                  <div className="tour_card__card__days">7 days</div>
                </div>

                <div className="tour_card__card_baseLine"></div>

                <button className="tour_card__card_btn">VIEW DETAILS</button>
              </div>
            </div>

            <div className="tour_card__card">
              <div className="tour_card__card__block">
                <div className="tour_card__card__img">
                  <IconButton>
                    <BookmarkBorderIcon
                      style={{
                        color: "rgb(255, 255, 213)",
                      }}
                    ></BookmarkBorderIcon>
                  </IconButton>

                  <IconButton>
                    <FavoriteBorderIcon
                      style={{
                        color: "rgb(255, 255, 213)",
                      }}
                    ></FavoriteBorderIcon>
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
                      <span>Turkey</span>
                    </div>
                  </div>

                  <span>880$</span>
                </div>

                <div className="tour_card__card_baseLine"></div>

                <div className="tour_card__card__block_time">
                  <div className="tour_card__card__time flight">
                    <div></div>25.03.23
                  </div>

                  <div className="tour_card__card__time arrived">
                    <div></div>04.04.23
                  </div>

                  <div className="tour_card__card__days">7 days</div>
                </div>

                <div className="tour_card__card_baseLine"></div>

                <button className="tour_card__card_btn">VIEW DETAILS</button>
              </div>
            </div>

            <div className="tour_card__card">
              <div className="tour_card__card__block">
                <div className="tour_card__card__img">
                  <IconButton>
                    <BookmarkBorderIcon
                      style={{
                        color: "rgb(255, 255, 213)",
                      }}
                    ></BookmarkBorderIcon>
                  </IconButton>

                  <IconButton>
                    <FavoriteBorderIcon
                      style={{
                        color: "rgb(255, 255, 213)",
                      }}
                    ></FavoriteBorderIcon>
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
                      <span>Turkey</span>
                    </div>
                  </div>

                  <span>880$</span>
                </div>

                <div className="tour_card__card_baseLine"></div>

                <div className="tour_card__card__block_time">
                  <div className="tour_card__card__time flight">
                    <div></div>25.03.23
                  </div>

                  <div className="tour_card__card__time arrived">
                    <div></div>04.04.23
                  </div>

                  <div className="tour_card__card__days">7 days</div>
                </div>

                <div className="tour_card__card_baseLine"></div>

                <button className="tour_card__card_btn">VIEW DETAILS</button>
              </div>
            </div>

            <div className="tour_card__card">
              <div className="tour_card__card__block">
                <div className="tour_card__card__img">
                  <IconButton>
                    <BookmarkBorderIcon
                      style={{
                        color: "rgb(255, 255, 213)",
                      }}
                    ></BookmarkBorderIcon>
                  </IconButton>

                  <IconButton>
                    <FavoriteBorderIcon
                      style={{
                        color: "rgb(255, 255, 213)",
                      }}
                    ></FavoriteBorderIcon>
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
                      <span>Turkey</span>
                    </div>
                  </div>

                  <span>880$</span>
                </div>

                <div className="tour_card__card_baseLine"></div>

                <div className="tour_card__card__block_time">
                  <div className="tour_card__card__time flight">
                    <div></div>25.03.23
                  </div>

                  <div className="tour_card__card__time arrived">
                    <div></div>04.04.23
                  </div>

                  <div className="tour_card__card__days">7 days</div>
                </div>

                <div className="tour_card__card_baseLine"></div>

                <button className="tour_card__card_btn">VIEW DETAILS</button>
              </div>
            </div>
          </div> */}
        </Container>
      </div>
    </div>
  );
};

export default BeachesPage;
