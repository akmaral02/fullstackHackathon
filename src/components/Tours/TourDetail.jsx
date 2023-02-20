import { Rating } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./css/TourDetail.css";

const TourDetail = () => {
  return (
    <>
      <div className="detail_start">
        <button>BOOK</button>
        <Container>
          <div className="detail_setting_tour">
            <div className="detail_tourIMG">
              <div></div>
            </div>
            <div className="detail_tour_setting">
              <div className="detail_tour_setting__tourplace">
                <span>BALI WELLNESS ADVENTURE TOUR </span>
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
                      <div className="data_fly">25.03.23</div>
                      <div className="city--city">Bishkek-Bali</div>
                    </div>
                  </div>
                  <div className="arrow-right"></div>

                  <div className="tour_setting_data_end duo-flex">
                    <div className="tour_setting_data_end_airplane"></div>
                    <div>
                      <div className="data_fly">04.04.23</div>
                      <div className="city--city">Bali-Bishkek</div>
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
                      <span>15 tourist</span>
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
                <p>
                  Lacus ac neque, turpis mi, sapien euismod varius. Duis risus,
                  vulputate ut est. Amet in porttitor viverra eget mauris, hac
                  ut nam tincidunt. Tempus elementum, morbi tellus nec vel nulla
                  in sodales pulvinar.
                </p>
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
                <span>Hotel the Bali Paradise </span>
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
                  Jl. Kartika, KabupatenL
                  <br />
                  Buleleng, Bali 81512
                </span>
              </div>
              <p className="hotel_discription">
                Lacus ac neque, turpis mi, sapien euismod varius. Duis risus,
                vulputate ut est. Amet in porttitor viverra eget mauris, hac ut
                nam tincidunt. Tempus elementum, morbi tellus nec vel nulla in
                sodales pulvinar.
              </p>
            </div>

            <div className="tour_hotel_images">
              <div className="image_left"></div>
              <div className="image_center"></div>
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
                </div>
                <div className="doing_blocks">
                  <div className="doing_blocks__inside">
                    <div></div>
                  </div>
                </div>
                <div className="doing_blocks">
                  <div className="doing_blocks__inside">
                    <div></div>
                  </div>
                </div>
                <div className="doing_blocks">
                  <div className="doing_blocks__inside">
                    <div></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="doing_blocks">
                  <div className="doing_blocks__inside">
                    <div></div>
                  </div>
                </div>
                <div className="doing_blocks">
                  <div className="doing_blocks__inside">
                    <div></div>
                  </div>
                </div>
                <div className="doing_blocks">
                  <div className="doing_blocks__inside">
                    <div></div>
                  </div>
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
            <div className="other_block-left">
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
            </div>
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
            <span className="comment_email">someone@gmail.com</span>
          </div>
          <input
            type="text"
            className="write_comment"
            placeholder="Leave a comment..."
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button className="comment_post">POST</button>
        </div>
      </Container>
    </>
  );
};

export default TourDetail;
