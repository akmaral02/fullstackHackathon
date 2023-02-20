import { Container } from "@mui/system";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./footer.css";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <div className="body">
      <div className="footer">
        <Container>
          <div className="row">
            <div className="footer-col">
              <h4>fly high</h4>
              <p>We create possibilities for the connected world</p>
            </div>
            <div className="footer-col">
              <h4>explore</h4>
              <ul>
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">book</a>
                </li>
                <li>
                  <a href="#">packages</a>
                </li>
                <li>
                  <a href="#">gallery</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>visit</h4>
              <ul>
                <li>
                  <a href="#">USA, New York, Bolter 44 </a>
                </li>
                <li>
                  <a href="#">Argentina, Buenos Aires St. 21/3</a>
                </li>
                <li>
                  <a href="#">Egypt, Kair St. 55/7</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <FacebookIcon />
                </a>
                <a href="">
                  <InstagramIcon />
                </a>
                <a href="">
                  <TelegramIcon />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
