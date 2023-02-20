import { Container } from "@mui/system";
import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./gallery.css";
import Img from "./1.avif";
import cc from "./cc.jpg";
import dd from "./dd.jpg";
import hh from "./hh.jpg";
import jj from "./jj.jpg";
import ll from "./ll.jpg";
import ss from "./ss.jpg";
import mm from "./mm.jpg";
import ff from "./ff.avif";
import { Box, Typography } from "@mui/material";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img,
    },
    {
      id: 2,
      imgSrc: cc,
    },
    {
      id: 3,
      imgSrc: dd,
    },
    {
      id: 4,
      imgSrc: hh,
    },
    {
      id: 5,
      imgSrc: jj,
    },
    {
      id: 6,
      imgSrc: ll,
    },
    {
      id: 7,
      imgSrc: ss,
    },
    {
      id: 8,
      imgSrc: mm,
    },
    {
      id: 9,
      imgSrc: ff,
    },
  ];
  return (
    <>
      <Box className="background-image">
        <Container>
          <div className="gallery">
            {data.map((item, index) => {
              return (
                <div className="pics" key={index}>
                  <img src={item.imgSrc} alt="" style={{ width: "100%" }} />
                </div>
              );
            })}
          </div>
        </Container>
      </Box>
    </>
  );
};

export default Gallery;
