import {
  Alert,
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import "./css/Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";

//! modal

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
//!

const Auth = () => {
  const { register, login, error, changeOldPassword } = useAuth();

  //! modal
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // const [change, setChange] = useState({
  //   old_password: "",
  //   new_password: "",
  //   new_password_confirm: "",
  // });

  // const handleChangePassword = (e) => {
  //   setChange((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // const handleSave = () => {
  //   const changed = new FormData();
  //   changed.append("old_password", change.old_password);
  //   changed.append("new_password", change.new_password);
  //   changed.append("new_password_confirm", change.new_password_confirm);
  //   changeOldPassword(changed);
  // };
  //!

  const navigate = useNavigate();

  const [alert, setAlert] = useState("none");

  const [isSignUp, setSignUp] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    password_confirm: "",
  });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = React.useState("");
  // const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const resetState = () => {
    setSignUp(!isSignUp);
    setInputs({
      email: "",
      password: "",
      password_confirm: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email: inputs.email,
      password: inputs.password,
      password_confirm: inputs.password_confirm,
    };

    if (isSignUp && formData.password !== formData.password_confirm) {
      setAlert("flex");
      return;
    }
    isSignUp ? register(formData) : login(formData, inputs.email);
    alert(error.response.data.email[0]);
  };

  return (
    <div className="body">
      {/* //! */}
      {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box width={500} height={"auto"}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Change password
          </Typography>
          <div>
            <input
              type="password"
              required
              name="old_password"
              value={change.old_password}
              onChange={handleChangePassword}
            ></input>
            <label for="">Old Password</label>
          </div>
          <div>
            <input
              type="password"
              required
              name="new_password"
              value={change.new_password}
              onChange={handleChangePassword}
            ></input>
            <label for="">New Password</label>
          </div>
          <div>
            <input
              type="password"
              required
              name="new_password_confirm"
              value={change.new_password_confirm}
              onChange={handleChangePassword}
            ></input>
            <label for="">New Password Confirm</label>
          </div>
        </Box>
        <Button onClick={handleSave}>Save</Button>
      </Dialog> */}

      {/* //! */}
      <div className="section">
        <Alert
          severity="error"
          sx={{ display: alert, justifyContent: "center", fontSize: 20 }}
        >
          Passwords do not match
        </Alert>
        <div className="form-box" onSubmit={handleSubmit}>
          <div className="form-value">
            <form action="">
              <h2> {isSignUp ? "SIGN UP" : "LOGIN"}</h2>
              <div className="inputbox">
                <input
                  type="email"
                  required
                  name="email"
                  value={inputs.email}
                  onChange={handleChange}
                ></input>
                <i class="fa-light fa-envelope"></i>
                <label for="">Email</label>
              </div>
              <div className="inputbox">
                <input
                  type="password"
                  required
                  name="password"
                  value={inputs.password}
                  onChange={handleChange}
                ></input>
                <label for="">Password</label>
              </div>

              {isSignUp && (
                <>
                  <div className="inputbox">
                    <input
                      type="password"
                      required
                      name="password_confirm"
                      value={inputs.password_confirm}
                      onChange={handleChange}
                    ></input>
                    <label for="">Confirm Password</label>
                  </div>
                </>
              )}

              <Button
                endIcon={isSignUp ? <HowToRegIcon /> : <LoginIcon />}
                type="submit"
                sx={{ marginTop: 3, borderRadius: 3 }}
                variant="contained"
                // color="white"
              >
                {isSignUp ? "SignUp" : "LogIn"}
              </Button>

              <Button
                endIcon={isSignUp ? <LoginIcon /> : <HowToRegIcon />}
                onClick={resetState}
                // onClick={() => setSignUp(!isSignUp)}
                sx={{ marginTop: 3, borderRadius: 3 }}
              >
                Change to {isSignUp ? "Login" : "SignUp"}
              </Button>

              {!isSignUp && (
                <div className="register" onClick={handleChange}>
                  <p>
                    Fotgot your password? <Link to={"/verif"}>Click Me!</Link>
                  </p>
                </div>
              )}
              {/* <Button onClick={handleOpen}>Cange Password</Button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
