import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import "./Home.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

const Home = () => {
  return (
    <>
      <div className="home">
        <Container>
          <Box className="home_center_block">
            <button className="home_center__btn-book">BOOK</button>

            <h6>FIND YOUR NEXT STAY</h6>

            <div className="home_center_block__inBlock">
              <CalendarTodayIcon
                className="calendar"
                sx={{
                  color: "white",
                  width: "2vw",
                  height: "2vw",
                }}
              ></CalendarTodayIcon>
              <span>Check in</span>

              <span className="home_center_block__inBlock-line"></span>

              <CalendarTodayIcon
                className="calendar"
                sx={{
                  color: "white",
                  width: "2vw",
                  height: "2vw",
                }}
              ></CalendarTodayIcon>
              <span>Check out</span>

              <span className="home_center_block__inBlock-line"></span>

              <PersonAddAlt1Icon
                className="calendar"
                sx={{
                  color: "white",
                  width: "2vw",
                  height: "2vw",
                }}
              ></PersonAddAlt1Icon>
              <span>abluts</span>
            </div>
          </Box>
        </Container>
      </div>
      <div className="home_center_under">
        <Container>
          <div className="home_center_under_block">
            <div
              style={{
                width: "55%",
              }}
            >
              <span className="home_center_under__span">
                TASTE THE WORLD WITH <div></div>
              </span>
              <div className="home_center_under__discription">
                <p
                  style={{
                    width: "80%",
                  }}
                >
                  Various types of extreme, tourist, entertaining and relaxing
                  holidays, which will be selected especially for you. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Vestibulum
                  interdum convallis sapien, ac malesuada ante auctor vel.
                </p>
              </div>
            </div>
            <div className="home_center_under_blocksecond">
              <div>
                <div className="home_center__under_island first_island">
                  <div></div>
                  <p>An experienced team of guides and translators</p>
                </div>

                <div className="home_center__under_island second_island">
                  <div></div>
                  <p>Travle insurance</p>
                </div>
              </div>

              <div className="home_center__under_island last_island">
                <div></div>
                <p>Arranget routes</p>
              </div>
            </div>
          </div>
        </Container>
        <div className="home_center_line"></div>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <span className="home_center_head__span">SERVICES</span>

          <div>
            <Grid
              container
              sx={{
                // backgroundColor: "black",
                paddingLeft: 10,
                paddingRight: 10,
                marginBottom: "90px",
              }}
            >
              <Grid
                item
                lg={12}
                display="flex"
                justifyContent="center"
                columnGap={13}
                marginTop={7}
                sx={{
                  margin: "auto",
                }}
              >
                <Grid className="romb_block" item lg={3} margin="0 15px 0 0">
                  <Box className="romb">
                    <Box
                      className="romb_line"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography className="romb_text" variant="">
                        Shooting
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={3} margin="0 15px 0 0">
                  <Box className="romb">
                    <Box
                      className="romb_line"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography className="romb_text" variant="">
                        Excursion
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                className="home_services__block2"
                item
                lg={12}
                md={10}
                // sm={8}
                display="flex"
                justifyContent="space-between"
                columnGap={13}
                sx={{
                  marginTop: {
                    lg: 0,
                    md: 3,
                    sm: 6,
                    xs: 9,
                  },
                  margin: "auto",
                }}
              >
                <Grid item lg={4} margin="0 15px 0 0">
                  <Box className="romb">
                    <Box
                      className="romb_line"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography className="romb_text" variant="">
                        Residence
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={4} margin="0 15px 0 0">
                  <Box className="romb">
                    <Box
                      className="romb_line"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography className="romb_text" variant="">
                        Food
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={4} margin="0 15px 0 0">
                  <Box className="romb">
                    <Box
                      className="romb_line"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography className="romb_text" variant="">
                        Transport
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <div className="home_under_line"></div>

      <div className="home_contactus">
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="contact_us">
            <span>CONTACT US</span>
          </div>
        </Container>
      </div>
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            margin: "45px 0 25px",
          }}
        >
          <TextField
            id="filled-basic"
            label="First Name"
            variant="filled"
            className="home_under_inputs_name s"
          />
          <TextField
            id="filled-basic"
            label="Last Name"
            variant="filled"
            className="home_under_inputs_name"
          />
        </div>
        <TextField
          id="filled-basic"
          label="Email"
          variant="filled"
          className="home_under_inputs_email"
        />
        <div>
          <div>
            <TextField
              id="filled-basic"
              label="Meassage"
              variant="filled"
              multiline
              rows={5}
              className="home_under_inputs_massage"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <Button variant="contained">Contained</Button>
          </div>
        </div>
      </Container>
      <div className="footer">
        <Container>
          <div className="footer_inside">
            <div>
              <div>
                <span className="FLY_HIGH">
                  FLY HIGH <div></div>
                </span>
              </div>
              <div>
                <p className="footer_under_text fontsize1_4">
                  We create
                  <br /> possibilities for the
                  <br /> connected world
                </p>
              </div>
            </div>

            <div className="footer_inside__center">
              <span className="footer_span">Expolre</span>
              <ul className="footer_inside__ul">
                <li className="footer_inside__ul__li">
                  <a href="#" className="fontsize1_4">
                    Home
                  </a>
                </li>
                <li className="footer_inside__ul__li">
                  <a href="#" className="fontsize1_4">
                    Book
                  </a>
                </li>
                <li className="footer_inside__ul__li">
                  <a href="#" className="fontsize1_4">
                    Packages
                  </a>
                </li>
                <li className="footer_inside__ul__li">
                  <a href="#" className="fontsize1_4">
                    Services
                  </a>
                </li>
                <li className="footer_inside__ul__li">
                  <a href="#" className="fontsize1_4">
                    Gallery
                  </a>
                </li>
                <li className="footer_inside__ul__li">
                  <a href="#" className="fontsize1_4">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer_inside__end">
              <span className="footer_span">Visit</span>
              <br />
              <p className="footer_inside__end__p fontsize1_4">
                USA, New York, Bolter 44
                <br /> Argentina, Buenos Aires St. 21/3
                <br /> Egypt, Kair St. 55/7
              </p>
              <div>
                <IconButton className="home_center_iconInsta">
                  <InstagramIcon
                    sx={{
                      color: "white",
                      width: "1.7vw",
                      height: "1.7vw",
                    }}
                  ></InstagramIcon>
                </IconButton>

                <IconButton>
                  <FacebookIcon
                    sx={{
                      color: "white",
                      width: "1.7vw",
                      height: "1.7vw",
                    }}
                  ></FacebookIcon>
                </IconButton>

                <IconButton>
                  <TelegramIcon
                    sx={{
                      color: "white",
                      width: "1.7vw",
                      height: "1.7vw",
                    }}
                  ></TelegramIcon>
                </IconButton>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
