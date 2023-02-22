import { Button, Container, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTour } from "../../contexts/ToursContextProvider";
import "./TourDetail.css";
import hotelImage from "../../img/image 310.png";
import { Box } from "@mui/system";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useMyTour } from "../../contexts/MyToursContextProvider";

const TourDetail = () => {
  const { oneTour, getOneTour, oneHotel, getOneHotel, comments } = useTour();

  const { addToMyTours, hasInMyTours } = useMyTour();

  const { user } = useAuth();

  const parametrs = useParams();

  const [comment, setComment] = useState("");

  useEffect(() => {
    getOneTour(parametrs.id);
  }, []);

  useEffect(() => {
    getOneHotel(oneTour?.hotel);
  }, [oneTour]);

  let mycomment = {
    body: comment,
    packet: parametrs.id,
  };

  return (
    <>
      <div className="detail_start">
        {oneTour ? (
          <Button
            style={{ position: "fixed" }}
            onClick={() => {
              addToMyTours(oneTour);
            }}
          >
            BOOK
          </Button>
        ) : (
          <></>
        )}

        <Container>
          <div className="detail_setting_tour">
            <div className="detail_tourIMG">
              {oneTour?.image ? (
                <div
                  style={{ backgroundImage: `url(${oneTour?.image})` }}
                ></div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="detail_tour_setting">
              <div className="detail_tour_setting__tourplace">
                <Typography>{oneTour?.title} </Typography>
              </div>
              <div className="detail_tour_setting_rating">
                <Rating
                  name="half-rating-read"
                  defaultValue={4.5}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <span className="detail_tour_setting_rating_192">(192)</span>
              </div>

              <div className="tour_settings">
                <div className="tour_setting_data">
                  <div className="tour_setting_data_start duo-flex">
                    <div className="tour_setting_data_start_airplane"></div>
                    <div>
                      <div className="data_fly">{oneTour?.date_start}</div>
                      <div className="city--city">
                        {oneTour?.departure}-{oneTour?.arrival}
                      </div>
                    </div>
                  </div>
                  <div className="arrow-right"></div>

                  <div className="tour_setting_data_end duo-flex">
                    <div className="tour_setting_data_end_airplane"></div>
                    <div>
                      <div className="data_fly">{oneTour?.date_end}</div>
                      <div className="city--city">
                        {oneTour?.arrival}-{oneTour?.departure}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tour_setting_params">
                  <div className="tour_setting__set">
                    <div className="o w">
                      <div></div>
                      <span>8 night</span>
                    </div>

                    <div className="b w">
                      <div></div>
                      <span>{oneTour?.quantity} tourist</span>
                    </div>
                  </div>

                  <div className="tour_setting__set">
                    <div className="c w">
                      <div></div>
                      <span>transfer</span>
                    </div>

                    <div className="d w">
                      <div></div>
                      <span>medical insurance</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tour_discription">
                <p>{oneTour?.description}</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="detail_midIMG">
        <Container>
          <div className="detail_mid">
            <div>
              <div className="detail_tour_setting__tourplace">
                <span>{oneHotel?.title}</span>
              </div>
              <div
                className="detail_tour_setting_rating"
                style={{
                  marginTop: "1vw",
                }}
              >
                <Rating
                  name="half-rating-read"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <span className="detail_tour_setting_rating_192">(113)</span>
              </div>
              <div className="detail_hotel">
                <div></div>
                <span>
                  {oneTour?.address}
                  <br />
                  {oneHotel?.title} 81512
                </span>
              </div>
              <p className="hotel_discription">{oneHotel?.description}</p>
            </div>

            <div className="tour_hotel_images">
              <div className="image_left"></div>
              {oneHotel?.image ? (
                <div
                  className="image_center"
                  style={{ backgroundImage: `url(${oneHotel.image})` }}
                ></div>
              ) : (
                <div
                  className="image_center"
                  style={{ backgroundImage: { hotelImage } }}
                ></div>
              )}

              <div className="image_right"></div>
            </div>
          </div>

          <div className="tour_doing">
            <span className="span wwld">What we`ll do</span>
            <div className="doing_blockGL">
              <div>
                <div className="doing_blocks">
                  <div className="doing_blocks__inside">
                    <div></div>
                  </div>
                  <div className="doing_blocks__inside_texts">
                    <span>{oneTour?.day_1}</span>
                  </div>
                </div>
                <div className="doing_blocks">
                  <div className="doing_blocks__inside">
                    <div></div>
                  </div>
                  <div className="doing_blocks__inside_texts">
                    <span>{oneTour?.day_2}</span>
                  </div>
                </div>
                <div className="doing_blocks">
                  <div className="doing_blocks__inside">
                    <div></div>
                  </div>
                  <div className="doing_blocks__inside_texts">
                    <span>{oneTour?.day_3}</span>
                  </div>
                </div>
                <div className="doing_blocks">
                  <div className="doing_blocks__inside">
                    <div></div>
                  </div>
                  <Box className="doing_blocks__inside_texts">
                    <span>{oneTour?.day_4}</span>
                  </Box>
                </div>
              </div>
              <div>
                <div className="doing_blocks">
                  <div className="doing_blocks__inside">
                    <div></div>
                  </div>
                  <Box className="doing_blocks__inside_texts">
                    <span>{oneTour?.day_5}</span>
                  </Box>
                </div>
                <div className="doing_blocks">
                  <div className="doing_blocks__inside">
                    <div></div>
                  </div>
                  <Box className="doing_blocks__inside_texts">
                    <span>{oneTour?.day_6}</span>
                  </Box>
                </div>
                <div className="doing_blocks">
                  <div className="doing_blocks__inside">
                    <div></div>
                  </div>
                  <Box className="doing_blocks__inside_texts">
                    <span>{oneTour?.day_7}</span>
                  </Box>
                </div>
              </div>
            </div>
            <div className="doing_full_block">
              <span>To see the full schedule</span>

              <div
                className="arrow-right"
                style={{ margin: "0 25px 0 15px" }}
              ></div>

              <button className="doing_full-schedule">FULL SCHEDULE</button>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="other">
          <span className="span other_span">TestImonials</span>

          <div className="other_blockGL">
            {oneTour?.comments?.map((item) => (
              <div className="other_block-left">
                <div className="kovichki"></div>

                <div
                  style={{
                    marginTop: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p className="other_block-p">{item}</p>
                </div>

                {/* <span className="email">{item?.author}</span> */}
                <div className="kovichkiR"></div>
              </div>
            ))}

            {/* <div className="other_block-left">
              <div className="kovichki"></div>

              <Rating
                name="half-rating-read"
                defaultValue={5}
                precision={0.5}
                readOnly
                style={{
                  margin: "2.4vw 0 0",
                }}
                size="small"
              />

              <p className="other_block-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda harum sint id perspiciatis dignissimos sit
                exercitationem! Consequatur adipisci ipsum maxime.
              </p>

              <span className="email">someone@gmail.com</span>
              <div className="kovichkiR"></div>
            </div>

            <div className="other_block-center">
              <div className="kovichki"></div>

              <Rating
                name="half-rating-read"
                defaultValue={5}
                precision={0.5}
                readOnly
                style={{
                  margin: "2.4vw 0 0",
                }}
                size="small"
              />

              <p className="other_block-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda harum sint id perspiciatis dignissimos sit
                exercitationem! Consequatur adipisci ipsum maxime.
              </p>

              <span className="email">someone@gmail.com</span>
              <div className="kovichkiR"></div>
            </div>

            <div className="other_block-right">
              <div className="kovichki"></div>

              <Rating
                name="half-rating-read"
                defaultValue={5}
                precision={0.5}
                readOnly
                style={{
                  margin: "2.4vw 0 0",
                }}
                size="small"
              />

              <p className="other_block-p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda harum sint id perspiciatis dignissimos sit
                exercitationem! Consequatur adipisci ipsum maxime.
              </p>

              <span className="email">someone@gmail.com</span>
              <div className="kovichkiR"></div>
            </div> */}
          </div>
        </div>
      </Container>
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="comment_rating-email">
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              size="small"
            />
            <span className="comment_email">{user}</span>
          </div>
          <input
            type="text"
            className="write_comment"
            placeholder="Leave a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button className="comment_post" onClick={() => comments(mycomment)}>
            POST
          </button>
        </div>
      </Container>
    </>
  );
};

export default TourDetail;
