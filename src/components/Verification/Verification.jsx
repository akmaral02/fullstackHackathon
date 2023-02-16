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
            <p className="verif_p">
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

            <button className="verif_btn">VERIFY</button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Verification;
