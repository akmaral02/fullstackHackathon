import { Button, Snackbar } from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import "./css/Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import MuiAlert from "@mui/material/Alert";

//? snack
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
//?
const Auth = () => {
  const { register, login, error, success } = useAuth();

  // const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [openE, setOpenE] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setOpenE(false);
  };

  const [alert, setAlert] = useState("none");

  const [isSignUp, setSignUp] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    password_confirm: "",
  });

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
    if (register) {
      setOpen(true);
      return;
    }
    if (login) {
      setOpen(true);
      // setOpenE(true);
      return;
    }
  };

  return (
    <div className="body">
      <div className="section">
        <div className="form-box" onSubmit={handleSubmit}>
          {open !== null && (
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity={error ? "error" : "success"}
                sx={{
                  justifyContent: "center",
                  fontSize: 20,
                  // color: "inherit",
                }}
              >
                {error ? error : success}
              </Alert>
            </Snackbar>
          )}

          {/* {openE !== null && (
            <Snackbar
              open={openE}
              autoHideDuration={4000}
              onClose={handleClose}
            >
              <Alert
                onClose={handleClose}
                severity={error ? "error" : "success"}
                sx={{
                  justifyContent: "center",
                  fontSize: 20,
                  // color: "inherit",
                }}
              >
                {error ? error : success}
              </Alert>
            </Snackbar>
          )} */}

          <div className="form-value">
            <Alert
              severity="error"
              sx={{ display: alert, justifyContent: "center", fontSize: 20 }}
            >
              Passwords do not match
            </Alert>
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
                className="auth_button"
              >
                {isSignUp ? "SignUp" : "LogIn"}
              </Button>

              <Button
                endIcon={isSignUp ? <LoginIcon /> : <HowToRegIcon />}
                onClick={resetState}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
