import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import "./Home.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import bg from "./slider1.mp4";

const Home = () => {
  return (
    <>
      {/* <Container> */}
      <Box className="home">
        <video className="video-slide" src={bg} autoPlay muted loop></video>
        <Box className="content">
          <h1>
            FLY HIGH
            <br />
            <span>TO THE WORLD!</span>
          </h1>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            temporibus iure odit, similique fugiat corrupti debitis labore cum?
            Omnis, non?
          </Typography>
          <a href="#">Book Travel</a>
        </Box>
        <Box className="media-icons">
          <IconButton
            className="media-icons"
            sx={{
              color: "white",
              ":hover": { transform: "scale(1.3)" },
              transition: "0.3s ease",
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            className="media-icons"
            sx={{
              color: "white",
              ":hover": { transform: "scale(1.3)" },
              transition: "0.3s ease",
            }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            className="media-icons"
            sx={{
              color: "white",
              ":hover": { transform: "scale(1.3)" },
              transition: "0.3s ease",
            }}
          >
            <TelegramIcon />
          </IconButton>
        </Box>
      </Box>
      {/* </Container> */}

      <div className="home_center_under">
        <Container>
          <div className="home_center_under_block">
            <div
              style={{
                width: "55%",
              }}
            >
              <span className="home_center_under__span">
                TASTE THE WORLD <div></div>
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
                  interdum convallis sapien, ac malesuada ante auctor vel. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
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
        <Box className="cont_video">
          {/* <video src={contactus} autoPlay muted loop></video> */}
        </Box>
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
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            className="home_under_inputs_name s"
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            className="home_under_inputs_name"
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="home_under_inputs_email"
        />
        <div>
          <div>
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
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
            <Button variant="outlined">Send</Button>
          </div>
          <Box className="" sx={{ pb: 5 }}></Box>
        </div>
      </Container>
    </>
  );
};

export default Home;
