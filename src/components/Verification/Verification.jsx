import { Box, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContextProvider";
import "./Verificaton.css";

export const ver = false;
const Verification = () => {
  const { forgotPassword, forgotPasswordComplete } = useAuth();

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [visibility, setVisibility] = useState("none");
  const [first, setFirst] = useState("flex");

  const verify = () => {
    let emailData = new FormData();
    emailData.append("email", email);
    forgotPassword(emailData);
    setFirst("none");
    setVisibility("flex");
  };

  const handleComplete = () => {
    let complete = new FormData();
    complete.append("email", email);
    complete.append("code", code);
    complete.append("password", password);
    complete.append("password_confirm", passwordConfirm);
    forgotPasswordComplete(complete);
  };
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>

            <button className="verif_btn" onClick={verify}>
              VERIFY
            </button>

            {/* ? EnterEmailPage  END ------------------------------------------------------------------------*/}

            {/* ! EnterCode ------------------------------------------------------------------------*/}
          </div>
          <div className="verif_display" style={{ display: visibility }}>
            <p className="verif_p">
              We have sent a temporary verification code to chto-to@gmail.com.
              Enter the code to verify this device
            </p>
            <p className="verif_codeP">Enter Verification Code:</p>
            <div className="verif_code_Ablock">
              <TextField
                label="Code"
                variant="outlined"
                color="info"
                style={{
                  width: "30vw",
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  borderRadius: "5px",
                  marginBottom: "15px",
                }}
                value={code}
                onChange={(e) => setCode(e.target.value)}
              ></TextField>
            </div>
            {/* ! EnterCode  END ------------------------------------------------------------------------*/}

            {/* ! Enter new Password ------------------------------------------------------------------------*/}
            <p className="verif_codeP">Enter password</p>

            <TextField
              label="Password"
              variant="outlined"
              color="info"
              style={{
                width: "30vw",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "5px",
                marginBottom: "15px",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
            <TextField
              label="Confirm Password"
              variant="outlined"
              color="info"
              style={{
                width: "30vw",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "5px",
              }}
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            ></TextField>

            <button className="verif_btn" onClick={handleComplete}>
              NEXT
            </button>
          </div>
          {/* ! Enter new Password  END ------------------------------------------------------------------------*/}
        </Container>
      </div>
    </>
  );
};

export default Verification;
