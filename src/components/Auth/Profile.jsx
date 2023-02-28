import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAuth } from "../../contexts/AuthContextProvider";
// import ProfileImg from "../../img/lukasz-lada-q7z-AUlHPaw-unsplash.png";
import "./css/Profile.css";

const Profile = () => {
  const { changeOldPassword, deleteAccount } = useAuth();

  let userEmail = localStorage.getItem("username");

  const [old_password, setOldPassword] = useState("");
  const [new_password, setNewPassowrd] = useState("");
  const [new_password_confirm, setNewPasswordConfirm] = useState("");

  const [updateVis, setUpdateVis] = useState("none");
  const [changePassVis, setChangePassVis] = useState("none");
  const [deleteVis, setDeleteVis] = useState("none");

  const openDelete = () => {
    setDeleteVis("flex");
    setUpdateVis("none");
    setChangePassVis("none");
  };

  const openChangePass = () => {
    setChangePassVis("flex");
    setUpdateVis("none");
    setDeleteVis("none");
  };

  const openUpdate = () => {
    setUpdateVis("flex");
    setDeleteVis("none");
    setChangePassVis("none");
  };

  const closeDelete = () => {
    setDeleteVis("none");
  };

  // const handleUpdateEmail = () => {
  //   let changedEmail = new FormData();
  //   changedEmail.append("email", email);
  //   changedEmail.append("password", password);
  //   updateEmail(changedEmail);
  //   localStorage.setItem("username", email);
  // };

  const handleChangePassword = () => {
    let changedPassword = new FormData();
    changedPassword.append("old_password", old_password);
    changedPassword.append("new_password", new_password);
    changedPassword.append("new_password_confirm", new_password_confirm);
    changeOldPassword(changedPassword);
  };

  return (
    <div>
      {/* <Container> */}
      <Grid container className="mainCont">
        <Grid item md={12} className="accounFix">
          <Grid item md={6} height={400}>
            <Box
              width={"85%"}
              margin="auto"
              // backgroundColor="brown"
              height={"100%"}
              display="flex"
              flexDirection={"column"}
              columnGap={15}
            >
              {/* <Grid item md={12} display="flex" alignContent="center">
                <Box
                  width={"85%"}
                  margin="auto"
                  height={"50%"}
                  display="flex"
                  alignItems={"center"}
                  justifyContent="center"
                  // backgroundColor={"white"}
                  onClick={openUpdate}
                >
                  <Typography variant="h5" color={"white"}>
                    Change Email
                  </Typography>
                </Box>
              </Grid> */}
              <Grid item md={12} display="flex" alignContent="center">
                <Box
                  width={"85%"}
                  margin="auto"
                  height={"50%"}
                  display="flex"
                  alignItems={"center"}
                  justifyContent="center"
                  // backgroundColor={"green"}
                  onClick={openChangePass}
                >
                  <Typography variant="h5" color={"white"}>
                    Change Password
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={12} display="flex" alignContent="center">
                <Box
                  width={"85%"}
                  margin="auto"
                  height={"50%"}
                  // backgroundColor={"gold"}
                  display="flex"
                  alignItems={"center"}
                  justifyContent="center"
                >
                  <IconButton width={"5%"} size="small" onClick={openDelete}>
                    <DeleteIcon fontSize="large" sx={{ color: "white" }} />
                  </IconButton>
                </Box>
              </Grid>
            </Box>
          </Grid>
          <Grid item md={6} height={400}>
            {/* <Box
              width={"90%"}
              height={"100%"}
              margin="auto"
              display={updateVis}
              flexDirection="column"
              justifyContent={"space-evenly"}
              alignItems="center"
            >
              <TextField
                label="Email"
                variant="outlined"
                color="info"
                style={{
                  width: "30vw",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>

              <TextField
                label="Password"
                variant="outlined"
                required
                color="info"
                style={{
                  width: "30vw",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
              <Button
                width={"35%"}
                backgroundColor="rgba(255, 255, 255, 0.15)"
                onClick={handleUpdateEmail}
              >
                <Typography textAlign="center" variant="h6" color={"white"}>
                  Update Email
                </Typography>
              </Button>
            </Box> */}

            {/* //! change password */}

            <Box
              width={"90%"}
              height={"100%"}
              margin="auto"
              // backgroundColor="red"
              display={changePassVis}
              flexDirection="column"
              justifyContent={"space-evenly"}
              alignItems="center"
            >
              <TextField
                label="Old Password"
                variant="outlined"
                required
                //   color="info"
                style={{
                  width: "30vw",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
                value={old_password}
                onChange={(e) => setOldPassword(e.target.value)}
              ></TextField>

              <TextField
                label="New Password"
                variant="outlined"
                required
                style={{
                  width: "30vw",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  // color: "white",
                }}
                value={new_password}
                onChange={(e) => setNewPassowrd(e.target.value)}
              ></TextField>

              <TextField
                label="New Password Confirm"
                variant="outlined"
                required
                //   color="info"
                style={{
                  width: "30vw",
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
                value={new_password_confirm}
                onChange={(e) => setNewPasswordConfirm(e.target.value)}
              ></TextField>
              <Button
                width={"35%"}
                backgroundColor="rgba(255, 255, 255, 0.15)"
                onClick={handleChangePassword}
              >
                <Typography textAlign="center" variant="h6" color={"white"}>
                  Change Password
                </Typography>
              </Button>
            </Box>

            <Box
              width={"90%"}
              height={"100%"}
              margin="auto"
              // backgroundColor="red"
              display={deleteVis}
              flexDirection="column"
              justifyContent={"space-evenly"}
              alignItems="center"
            >
              <Typography textAlign={"center"} variant="h4" color="white">
                Are you sure that you want to delete yout Account dear user{" "}
                {userEmail}
              </Typography>
              <Button
                width={"35%"}
                backgroundColor="rgba(225,255,255,0.15)"
                onClick={deleteAccount}
              >
                <Typography textAlign={"center"} color={"white"}>
                  Yes I am Sure
                </Typography>
              </Button>
              <Button
                width={"35%"}
                backgroundColor="rgba(225,255,255,0.15)"
                onClick={closeDelete}
              >
                <Typography textAlign={"center"} color={"white"}>
                  NO
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* </Container> */}
    </div>
  );
};

export default Profile;
