import { TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./Vetification.css";

export const ver = false;
const Verification = () => {
  return (
    <>
      <div className="background">
        <Container>
          <div className="verif_display">
            {/* <p className="verif_p">
              We have sent a temporary verification code to chto-to@gmail.com.
              Enter the code to verify this device
            </p>

            <p className="verif_codeP">Enter Verification Code:</p>

            <div className="verif_code_Ablock">
              <div className="verif_code__blocks"></div>
              <div className="verif_code__blocks a"></div>
              <div className="verif_code__blocks a"></div>
              <div className="verif_code__blocks a"></div>
              <div className="verif_code__blocks a"></div>
              <div className="verif_code__blocks a"></div>
              <div className="verif_code__blocks a"></div>
              <div className="verif_code__blocks a"></div>
              <div className="verif_code__blocks a"></div>
              <div className="verif_code__blocks a"></div>
            </div>

            <button className="verif_btn">VERIFY</button> */}

            <p className="verif_p">
              Enter your email address to recover lost password
            </p>

            <p className="verif_codeP">Enter Email address:</p>

            <TextField
              label="Email"
              variant="outlined"
              color="info"
              style={{
                width: "400px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "5px",
              }}
            ></TextField>

            <button className="verif_btn">VERIFY</button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Verification;
