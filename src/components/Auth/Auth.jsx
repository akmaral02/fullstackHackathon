import { IconButton, Input, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./css/Auth.css";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Auth = () => {
  return (
    <div className="auth_background">
      <Container>
        <div className="signIn">
          <h6>SIGN IN</h6>
          <div className="signIn_inputs">
            <Input
              type="email"
              className="signIn__email"
              label={
                <IconButton>
                  <EmailIcon
                    style={{
                      color: "white",
                    }}
                  ></EmailIcon>
                </IconButton>
              }
            />
            <Input type="password" className="signIn__password" />
            <IconButton>
              <VisibilityIcon
                style={{
                  color: "white",
                }}
              ></VisibilityIcon>
            </IconButton>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Auth;
